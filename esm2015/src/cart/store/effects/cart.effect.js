import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, groupBy, map, mergeMap, switchMap, withLatestFrom, } from 'rxjs/operators';
import { CheckoutActions } from '../../../checkout/store/actions';
import { OCC_CART_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CartConnector } from '../../connectors/cart/cart.connector';
import { getCartIdByUserId, isCartNotFoundError } from '../../utils/utils';
import { CartActions } from '../actions/index';
import { getCartHasPendingProcessesSelectorFactory } from '../selectors/multi-cart.selector';
let CartEffects = class CartEffects {
    constructor(actions$, cartConnector, store) {
        this.actions$ = actions$;
        this.cartConnector = cartConnector;
        this.store = store;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadCart$ = this.actions$.pipe(ofType(CartActions.LOAD_CART), map((action) => action.payload), groupBy((payload) => payload.cartId), mergeMap((group$) => group$.pipe(switchMap((payload) => {
            return of(payload).pipe(withLatestFrom(this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
        }), filter(([_, hasPendingProcesses]) => !hasPendingProcesses), map(([payload]) => payload), switchMap((payload) => {
            return this.cartConnector.load(payload.userId, payload.cartId).pipe(mergeMap((cart) => {
                let actions = [];
                if (cart) {
                    actions.push(new CartActions.LoadCartSuccess(Object.assign(Object.assign({}, payload), { cart, cartId: getCartIdByUserId(cart, payload.userId) })));
                    if (payload.cartId === OCC_CART_ID_CURRENT) {
                        // Removing cart from entity object under `current` key as it is no longer needed.
                        // Current cart is loaded under it's code entity.
                        actions.push(new CartActions.RemoveCart({ cartId: OCC_CART_ID_CURRENT }));
                    }
                }
                else {
                    actions = [
                        new CartActions.LoadCartFail(Object.assign(Object.assign({}, payload), { error: {} })),
                    ];
                }
                return actions;
            }), catchError((error) => {
                var _a;
                if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.errors) {
                    const couponExpiredErrors = error.error.errors.filter((err) => err.reason === 'invalid');
                    if (couponExpiredErrors.length > 0) {
                        // Reload in case of expired coupon.
                        return of(new CartActions.LoadCart(Object.assign({}, payload)));
                    }
                    const cartNotFoundErrors = error.error.errors.filter((err) => isCartNotFoundError(err) ||
                        err.reason === 'UnknownResourceError');
                    if (cartNotFoundErrors.length > 0) {
                        // Remove cart as it doesn't exist on backend (selective cart always exists).
                        return of(new CartActions.RemoveCart({ cartId: payload.cartId }));
                    }
                }
                return of(new CartActions.LoadCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })));
            }));
        }))), withdrawOn(this.contextChange$));
        this.createCart$ = this.actions$.pipe(ofType(CartActions.CREATE_CART), map((action) => action.payload), mergeMap((payload) => {
            return this.cartConnector
                .create(payload.userId, payload.oldCartId, payload.toMergeCartGuid)
                .pipe(switchMap((cart) => {
                const conditionalActions = [];
                if (payload.oldCartId) {
                    conditionalActions.push(new CartActions.MergeCartSuccess({
                        extraData: payload.extraData,
                        userId: payload.userId,
                        tempCartId: payload.tempCartId,
                        cartId: getCartIdByUserId(cart, payload.userId),
                        oldCartId: payload.oldCartId,
                    }));
                }
                return [
                    new CartActions.CreateCartSuccess(Object.assign(Object.assign({}, payload), { cart, cartId: getCartIdByUserId(cart, payload.userId) })),
                    new CartActions.SetTempCart({
                        cart,
                        tempCartId: payload.tempCartId,
                    }),
                    ...conditionalActions,
                ];
            }), catchError((error) => of(new CartActions.CreateCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })))));
        }), withdrawOn(this.contextChange$));
        this.mergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART), map((action) => action.payload), mergeMap((payload) => {
            return this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap((currentCart) => {
                return [
                    new CartActions.CreateCart({
                        userId: payload.userId,
                        oldCartId: payload.cartId,
                        toMergeCartGuid: currentCart ? currentCart.guid : undefined,
                        extraData: payload.extraData,
                        tempCartId: payload.tempCartId,
                    }),
                ];
            }));
        }), withdrawOn(this.contextChange$));
        // TODO(#7241): Remove when AddVoucherSuccess actions will extend processes actions
        this.refresh$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER_SUCCESS), map((action) => action.payload), concatMap((payload) => from([
            new CartActions.CartProcessesDecrement(payload.cartId),
            new CartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            }),
        ])));
        // TODO: Switch to automatic cart reload on processes count reaching 0 for cart entity
        this.refreshWithoutProcesses$ = this.actions$.pipe(ofType(CartActions.CART_ADD_ENTRY_SUCCESS, CartActions.CART_REMOVE_ENTRY_SUCCESS, CartActions.CART_UPDATE_ENTRY_SUCCESS, CartActions.CART_REMOVE_VOUCHER_SUCCESS, CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS), map((action) => action.payload), map((payload) => new CartActions.LoadCart({
            userId: payload.userId,
            cartId: payload.cartId,
        })));
        this.resetCartDetailsOnSiteContextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), mergeMap(() => {
            return [new CartActions.ResetCartDetails()];
        }));
        this.addEmail$ = this.actions$.pipe(ofType(CartActions.ADD_EMAIL_TO_CART), map((action) => action.payload), mergeMap((payload) => this.cartConnector
            .addEmail(payload.userId, payload.cartId, payload.email)
            .pipe(mergeMap(() => {
            return [
                new CartActions.AddEmailToCartSuccess(Object.assign({}, payload)),
                new CartActions.LoadCart({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ];
        }), catchError((error) => from([
            new CartActions.AddEmailToCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
            new CartActions.LoadCart({
                userId: payload.userId,
                cartId: payload.cartId,
            }),
        ])))), withdrawOn(this.contextChange$));
        this.deleteCart$ = this.actions$.pipe(ofType(CartActions.DELETE_CART), map((action) => action.payload), mergeMap((payload) => this.cartConnector.delete(payload.userId, payload.cartId).pipe(map(() => {
            return new CartActions.DeleteCartSuccess(Object.assign({}, payload));
        }), catchError((error) => from([
            new CartActions.DeleteCartFail(Object.assign(Object.assign({}, payload), { error: makeErrorSerializable(error) })),
            // Error might happen in higher backend layer and cart could still be removed.
            // When load fail with NotFound error then RemoveCart action will kick in and clear that cart in our state.
            new CartActions.LoadCart(Object.assign({}, payload)),
        ])))));
    }
};
CartEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartConnector },
    { type: Store }
];
__decorate([
    Effect()
], CartEffects.prototype, "loadCart$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "createCart$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "mergeCart$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "refresh$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "refreshWithoutProcesses$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "resetCartDetailsOnSiteContextChange$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "addEmail$", void 0);
__decorate([
    Effect()
], CartEffects.prototype, "deleteCart$", void 0);
CartEffects = __decorate([
    Injectable()
], CartEffects);
export { CartEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL2NhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUc3RixJQUFhLFdBQVcsR0FBeEIsTUFB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TSxPQUFPLEVBQUcsQ0FBQztRQUMzRCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixJQUFJLENBQUM7WUFDSCxJQUFJLFdBQVcsQ0FBQyxjQUFjLGlDQUN6QixPQUFPLEtBQ1YsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUNuQztZQUNGLDhFQUE4RTtZQUM5RSwyR0FBMkc7WUFDM0csSUFBSSxXQUFXLENBQUMsUUFBUSxtQkFDbkIsT0FBTyxFQUNWO1NBQ0gsQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUNGLENBQUM7SUFNQyxDQUFDO0NBQ0wsQ0FBQTs7WUFKcUIsT0FBTztZQUNGLGFBQWE7WUFDckIsS0FBSzs7QUExU3RCO0lBREMsTUFBTSxFQUFFOzhDQXdGUDtBQUdGO0lBREMsTUFBTSxFQUFFO2dEQWtEUDtBQUdGO0lBREMsTUFBTSxFQUFFOytDQW9CUDtBQUlGO0lBREMsTUFBTSxFQUFFOzZDQWVQO0FBSUY7SUFEQyxNQUFNLEVBQUU7NkRBNEJQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7eUVBV1A7QUFHRjtJQURDLE1BQU0sRUFBRTs4Q0FzQ1A7QUFHRjtJQURDLE1BQU0sRUFBRTtnREE0QlA7QUE5U1MsV0FBVztJQUR2QixVQUFVLEVBQUU7R0FDQSxXQUFXLENBcVR2QjtTQXJUWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgY29uY2F0TWFwLFxuICBmaWx0ZXIsXG4gIGdyb3VwQnksXG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT0NDX0NBUlRfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCB7IGdldENhcnRJZEJ5VXNlcklkLCBpc0NhcnROb3RGb3VuZEVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q2FydEhhc1BlbmRpbmdQcm9jZXNzZXNTZWxlY3RvckZhY3RvcnkgfSBmcm9tICcuLi9zZWxlY3RvcnMvbXVsdGktY2FydC5zZWxlY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0RWZmZWN0cyB7XG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0VcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXJ0JDogT2JzZXJ2YWJsZTxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkxPQURfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkxvYWRDYXJ0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeSgocGF5bG9hZCkgPT4gcGF5bG9hZC5jYXJ0SWQpLFxuICAgIG1lcmdlTWFwKChncm91cCQpID0+XG4gICAgICBncm91cCQucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKHBheWxvYWQpLnBpcGUoXG4gICAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgICAgICAgIGdldENhcnRIYXNQZW5kaW5nUHJvY2Vzc2VzU2VsZWN0b3JGYWN0b3J5KHBheWxvYWQuY2FydElkKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKFtfLCBoYXNQZW5kaW5nUHJvY2Vzc2VzXSkgPT4gIWhhc1BlbmRpbmdQcm9jZXNzZXMpLFxuICAgICAgICBtYXAoKFtwYXlsb2FkXSkgPT4gcGF5bG9hZCksXG4gICAgICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3IubG9hZChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgICAgICBtZXJnZU1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICBpZiAoY2FydCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmNhcnRJZCA9PT0gT0NDX0NBUlRfSURfQ1VSUkVOVCkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgY2FydCBmcm9tIGVudGl0eSBvYmplY3QgdW5kZXIgYGN1cnJlbnRgIGtleSBhcyBpdCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudCBjYXJ0IGlzIGxvYWRlZCB1bmRlciBpdCdzIGNvZGUgZW50aXR5LlxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydCh7IGNhcnRJZDogT0NDX0NBUlRfSURfQ1VSUkVOVCB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjoge30sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyb3I/LmVycm9yPy5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3Vwb25FeHBpcmVkRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChlcnIpID0+IGVyci5yZWFzb24gPT09ICdpbnZhbGlkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbkV4cGlyZWRFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVsb2FkIGluIGNhc2Ugb2YgZXhwaXJlZCBjb3Vwb24uXG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YobmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHsgLi4ucGF5bG9hZCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydE5vdEZvdW5kRXJyb3JzID0gZXJyb3IuZXJyb3IuZXJyb3JzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChlcnIpID0+XG4gICAgICAgICAgICAgICAgICAgIGlzQ2FydE5vdEZvdW5kRXJyb3IoZXJyKSB8fFxuICAgICAgICAgICAgICAgICAgICBlcnIucmVhc29uID09PSAnVW5rbm93blJlc291cmNlRXJyb3InXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FydE5vdEZvdW5kRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjYXJ0IGFzIGl0IGRvZXNuJ3QgZXhpc3Qgb24gYmFja2VuZCAoc2VsZWN0aXZlIGNhcnQgYWx3YXlzIGV4aXN0cykuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KHsgY2FydElkOiBwYXlsb2FkLmNhcnRJZCB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydEZhaWwoe1xuICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVCksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuY3JlYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLm9sZENhcnRJZCwgcGF5bG9hZC50b01lcmdlQ2FydEd1aWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoY2FydDogQ2FydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uYWxBY3Rpb25zID0gW107XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5vbGRDYXJ0SWQpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICB0ZW1wQ2FydElkOiBwYXlsb2FkLnRlbXBDYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IGdldENhcnRJZEJ5VXNlcklkKGNhcnQsIHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgICAgIG9sZENhcnRJZDogcGF5bG9hZC5vbGRDYXJ0SWQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIGNhcnRJZDogZ2V0Q2FydElkQnlVc2VySWQoY2FydCwgcGF5bG9hZC51c2VySWQpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlNldFRlbXBDYXJ0KHtcbiAgICAgICAgICAgICAgICBjYXJ0LFxuICAgICAgICAgICAgICAgIHRlbXBDYXJ0SWQ6IHBheWxvYWQudGVtcENhcnRJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIC4uLmNvbmRpdGlvbmFsQWN0aW9ucyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlQ2FydD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLk1FUkdFX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5NZXJnZUNhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydENvbm5lY3Rvci5sb2FkKHBheWxvYWQudXNlcklkLCBPQ0NfQ0FSVF9JRF9DVVJSRU5UKS5waXBlKFxuICAgICAgICBtZXJnZU1hcCgoY3VycmVudENhcnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnQoe1xuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICBvbGRDYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB0b01lcmdlQ2FydEd1aWQ6IGN1cnJlbnRDYXJ0ID8gY3VycmVudENhcnQuZ3VpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgZXh0cmFEYXRhOiBwYXlsb2FkLmV4dHJhRGF0YSxcbiAgICAgICAgICAgICAgdGVtcENhcnRJZDogcGF5bG9hZC50ZW1wQ2FydElkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIC8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiBBZGRWb3VjaGVyU3VjY2VzcyBhY3Rpb25zIHdpbGwgZXh0ZW5kIHByb2Nlc3NlcyBhY3Rpb25zXG4gIEBFZmZlY3QoKVxuICByZWZyZXNoJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5Mb2FkQ2FydCB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXJTdWNjZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKChwYXlsb2FkKSA9PlxuICAgICAgZnJvbShbXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICApXG4gICk7XG5cbiAgLy8gVE9ETzogU3dpdGNoIHRvIGF1dG9tYXRpYyBjYXJ0IHJlbG9hZCBvbiBwcm9jZXNzZXMgY291bnQgcmVhY2hpbmcgMCBmb3IgY2FydCBlbnRpdHlcbiAgQEVmZmVjdCgpXG4gIHJlZnJlc2hXaXRob3V0UHJvY2Vzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfQUREX0VOVFJZX1NVQ0NFU1MsXG4gICAgICBDYXJ0QWN0aW9ucy5DQVJUX1JFTU9WRV9FTlRSWV9TVUNDRVNTLFxuICAgICAgQ2FydEFjdGlvbnMuQ0FSVF9VUERBVEVfRU5UUllfU1VDQ0VTUyxcbiAgICAgIENhcnRBY3Rpb25zLkNBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTUyxcbiAgICAgIENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1NcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChcbiAgICAgICAgYWN0aW9uOlxuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydEFkZEVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFVwZGF0ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZUVudHJ5U3VjY2Vzc1xuICAgICAgICAgIHwgQ2FydEFjdGlvbnMuQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzXG4gICAgICAgICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICAgICkgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1hcChcbiAgICAgIChwYXlsb2FkKSA9PlxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgfSlcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICBDYXJ0QWN0aW9ucy5SZXNldENhcnREZXRhaWxzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0VcbiAgICApLFxuICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBbbmV3IENhcnRBY3Rpb25zLlJlc2V0Q2FydERldGFpbHMoKV07XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRW1haWwkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gICAgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkFERF9FTUFJTF9UT19DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnQpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT5cbiAgICAgIHRoaXMuY2FydENvbm5lY3RvclxuICAgICAgICAuYWRkRW1haWwocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVtYWlsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsKHtcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgfCBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0U3VjY2Vzc1xuICAgIHwgQ2FydEFjdGlvbnMuRGVsZXRlQ2FydEZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLkRFTEVURV9DQVJUKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuRGVsZXRlQ2FydCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy5jYXJ0Q29ubmVjdG9yLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0U3VjY2Vzcyh7IC4uLnBheWxvYWQgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5EZWxldGVDYXJ0RmFpbCh7XG4gICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBFcnJvciBtaWdodCBoYXBwZW4gaW4gaGlnaGVyIGJhY2tlbmQgbGF5ZXIgYW5kIGNhcnQgY291bGQgc3RpbGwgYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgIC8vIFdoZW4gbG9hZCBmYWlsIHdpdGggTm90Rm91bmQgZXJyb3IgdGhlbiBSZW1vdmVDYXJ0IGFjdGlvbiB3aWxsIGtpY2sgaW4gYW5kIGNsZWFyIHRoYXQgY2FydCBpbiBvdXIgc3RhdGUuXG4gICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3RvcixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+XG4gICkge31cbn1cbiJdfQ==