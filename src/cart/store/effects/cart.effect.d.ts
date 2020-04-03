import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartConnector } from '../../connectors/cart/cart.connector';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
import { StateWithMultiCart } from '../multi-cart-state';
import * as ɵngcc0 from '@angular/core';
export declare class CartEffects {
    private actions$;
    private cartConnector;
    private store;
    private contextChange$;
    loadCart$: Observable<CartActions.LoadCartFail | CartActions.LoadCartSuccess | CartActions.ClearExpiredCoupons | DeprecatedCartActions.ClearCart | CartActions.RemoveCart>;
    createCart$: Observable<DeprecatedCartActions.MergeCartSuccess | CartActions.MergeMultiCartSuccess | CartActions.CreateCartSuccess | CartActions.CreateCartFail | CartActions.SetTempCart>;
    mergeCart$: Observable<CartActions.CreateCart>;
    refresh$: Observable<CartActions.LoadCart | CartActions.CartProcessesDecrement>;
    refreshWithoutProcesses$: Observable<CartActions.LoadCart>;
    resetCartDetailsOnSiteContextChange$: Observable<DeprecatedCartActions.ResetCartDetails | CartActions.ResetMultiCartDetails>;
    addEmail$: Observable<DeprecatedCartActions.AddEmailToCartSuccess | DeprecatedCartActions.AddEmailToCartFail | CartActions.AddEmailToMultiCartFail | CartActions.AddEmailToMultiCartSuccess | CartActions.CartProcessesDecrement | CartActions.LoadCart>;
    deleteCart$: Observable<any>;
    constructor(actions$: Actions, cartConnector: CartConnector, store: Store<StateWithMultiCart>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jYXJ0L2NhcnQuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIERlcHJlY2F0ZWRDYXJ0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY2FydENvbm5lY3RvcjtcbiAgICBwcml2YXRlIHN0b3JlO1xuICAgIHByaXZhdGUgY29udGV4dENoYW5nZSQ7XG4gICAgbG9hZENhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRDYXJ0RmFpbCB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNsZWFyRXhwaXJlZENvdXBvbnMgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQ2xlYXJDYXJ0IHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydD47XG4gICAgY3JlYXRlQ2FydCQ6IE9ic2VydmFibGU8RGVwcmVjYXRlZENhcnRBY3Rpb25zLk1lcmdlQ2FydFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydFN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DcmVhdGVDYXJ0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNyZWF0ZUNhcnRGYWlsIHwgQ2FydEFjdGlvbnMuU2V0VGVtcENhcnQ+O1xuICAgIG1lcmdlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ3JlYXRlQ2FydD47XG4gICAgcmVmcmVzaCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZENhcnQgfCBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50PjtcbiAgICByZWZyZXNoV2l0aG91dFByb2Nlc3NlcyQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZENhcnQ+O1xuICAgIHJlc2V0Q2FydERldGFpbHNPblNpdGVDb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxEZXByZWNhdGVkQ2FydEFjdGlvbnMuUmVzZXRDYXJ0RGV0YWlscyB8IENhcnRBY3Rpb25zLlJlc2V0TXVsdGlDYXJ0RGV0YWlscz47XG4gICAgYWRkRW1haWwkOiBPYnNlcnZhYmxlPERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvQ2FydFN1Y2Nlc3MgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuQWRkRW1haWxUb0NhcnRGYWlsIHwgQ2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydEZhaWwgfCBDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0U3VjY2VzcyB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnQgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydD47XG4gICAgZGVsZXRlQ2FydCQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY2FydENvbm5lY3RvcjogQ2FydENvbm5lY3Rvciwgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4pO1xufVxuIl19