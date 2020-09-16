import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest, defer, merge, of, using, } from 'rxjs';
import { auditTime, debounceTime, delay, distinctUntilChanged, filter, map, mapTo, shareReplay, tap, withLatestFrom, } from 'rxjs/operators';
import { deepMerge } from '../../config/utils/deep-merge';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { withdrawOn } from '../../util/withdraw-on';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../occ/services/loading-scopes.service";
import * as i3 from "@ngrx/effects";
export class ProductLoadingService {
    constructor(store, loadingScopes, actions$, platformId) {
        this.store = store;
        this.loadingScopes = loadingScopes;
        this.actions$ = actions$;
        this.platformId = platformId;
        this.products = {};
    }
    get(productCode, scopes) {
        scopes = this.loadingScopes.expand('product', scopes);
        this.initProductScopes(productCode, scopes);
        return this.products[productCode][this.getScopesIndex(scopes)];
    }
    initProductScopes(productCode, scopes) {
        if (!this.products[productCode]) {
            this.products[productCode] = {};
        }
        for (const scope of scopes) {
            if (!this.products[productCode][scope]) {
                this.products[productCode][scope] = this.getProductForScope(productCode, scope);
            }
        }
        if (scopes.length > 1) {
            this.products[productCode][this.getScopesIndex(scopes)] = combineLatest(scopes.map((scope) => this.products[productCode][scope])).pipe(auditTime(0), map((productParts) => productParts.every(Boolean)
                ? deepMerge({}, ...productParts)
                : undefined), distinctUntilChanged());
        }
    }
    getScopesIndex(scopes) {
        return scopes.join('ɵ');
    }
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    getProductForScope(productCode, scope) {
        const shouldLoad$ = this.store.pipe(select(ProductSelectors.getSelectedProductStateFactory(productCode, scope)), map((productState) => !productState.loading && !productState.success && !productState.error), distinctUntilChanged(), filter((x) => x));
        const isLoading$ = this.store.pipe(select(ProductSelectors.getSelectedProductLoadingFactory(productCode, scope)));
        const productLoadLogic$ = merge(shouldLoad$, ...this.getProductReloadTriggers(productCode, scope)).pipe(debounceTime(0), withLatestFrom(isLoading$), tap(([, isLoading]) => {
            if (!isLoading) {
                this.store.dispatch(new ProductActions.LoadProduct(productCode, scope));
            }
        }));
        const productData$ = this.store.pipe(select(ProductSelectors.getSelectedProductFactory(productCode, scope)));
        return using(() => productLoadLogic$.subscribe(), () => productData$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Returns reload triggers for product per scope
     *
     * @param productCode
     * @param scope
     */
    getProductReloadTriggers(productCode, scope) {
        const triggers = [];
        // max age trigger add
        const maxAge = this.loadingScopes.getMaxAge('product', scope);
        if (maxAge && isPlatformBrowser(this.platformId)) {
            // we want to grab load product success and load product fail for this product and scope
            const loadFinish$ = this.actions$.pipe(filter((action) => (action.type === ProductActions.LOAD_PRODUCT_SUCCESS ||
                action.type === ProductActions.LOAD_PRODUCT_FAIL) &&
                action.meta.entityId === productCode &&
                action.meta.scope === scope));
            const loadStart$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), filter((action) => action.payload === productCode && action.meta.scope === scope));
            triggers.push(this.getMaxAgeTrigger(loadStart$, loadFinish$, maxAge));
        }
        return triggers;
    }
    /**
     * Generic method that returns stream triggering reload by maxAge
     *
     * Could be refactored to separate service in future to use in other
     * max age reload implementations
     *
     * @param loadStart$ Stream that emits on load start
     * @param loadFinish$ Stream that emits on load finish
     * @param maxAge max age
     */
    getMaxAgeTrigger(loadStart$, loadFinish$, maxAge, scheduler) {
        let timestamp = 0;
        const now = () => (scheduler ? scheduler.now() : Date.now());
        const timestamp$ = loadFinish$.pipe(tap(() => (timestamp = now())));
        const shouldReload$ = defer(() => {
            const age = now() - timestamp;
            const timestampRefresh$ = timestamp$.pipe(delay(maxAge, scheduler), mapTo(true), withdrawOn(loadStart$));
            if (age > maxAge) {
                // we should emit first value immediately
                return merge(of(true), timestampRefresh$);
            }
            else if (age === 0) {
                // edge case, we should emit max age timeout after next load success
                // could happen with artificial schedulers
                return timestampRefresh$;
            }
            else {
                // we should emit first value when age will expire
                return merge(of(true).pipe(delay(maxAge - age, scheduler)), timestampRefresh$);
            }
        });
        return shouldReload$;
    }
}
ProductLoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductLoadingService_Factory() { return new ProductLoadingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.LoadingScopesService), i0.ɵɵinject(i3.Actions), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ProductLoadingService, providedIn: "root" });
ProductLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProductLoadingService.ctorParameters = () => [
    { type: Store },
    { type: LoadingScopesService },
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L3NlcnZpY2VzL3Byb2R1Y3QtbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLEtBQUssRUFDTCxLQUFLLEVBRUwsRUFBRSxFQUVGLEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFLNUQsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxZQUNZLEtBQThCLEVBQzlCLGFBQW1DLEVBQ25DLFFBQWlCLEVBQ0ksVUFB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QUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEUsTUFBTSxhQUFhLEdBQXdCLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDcEQsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO1lBRTlCLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FDdkMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNYLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDdkIsQ0FBQztZQUVGLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRTtnQkFDaEIseUNBQXlDO2dCQUN6QyxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUMzQztpQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLG9FQUFvRTtnQkFDcEUsMENBQTBDO2dCQUMxQyxPQUFPLGlCQUFpQixDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLGtEQUFrRDtnQkFDbEQsT0FBTyxLQUFLLENBQ1YsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUM3QyxpQkFBaUIsQ0FDbEIsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7O1lBeE1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBaENnQixLQUFLO1lBd0JiLG9CQUFvQjtZQXpCcEIsT0FBTzs0Q0EyQ1gsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBjb21iaW5lTGF0ZXN0LFxuICBkZWZlcixcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTY2hlZHVsZXJMaWtlLFxuICB1c2luZyxcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBhdWRpdFRpbWUsXG4gIGRlYm91bmNlVGltZSxcbiAgZGVsYXksXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWFwVG8sXG4gIHNoYXJlUmVwbGF5LFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU2NvcGVzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9sb2FkaW5nLXNjb3Blcy5zZXJ2aWNlJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMb2FkaW5nU2VydmljZSB7XG4gIHByb3RlY3RlZCBwcm9kdWN0czoge1xuICAgIFtjb2RlOiBzdHJpbmddOiB7IFtzY29wZTogc3RyaW5nXTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhQcm9kdWN0PixcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1Njb3BlczogTG9hZGluZ1Njb3Blc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBhbnlcbiAgKSB7fVxuXG4gIGdldChwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgc2NvcGVzID0gdGhpcy5sb2FkaW5nU2NvcGVzLmV4cGFuZCgncHJvZHVjdCcsIHNjb3Blcyk7XG5cbiAgICB0aGlzLmluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlLCBzY29wZXMpO1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVt0aGlzLmdldFNjb3Blc0luZGV4KHNjb3BlcyldO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9kdWN0U2NvcGVzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdKSB7XG4gICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXSA9IHt9O1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoIXRoaXMucHJvZHVjdHNbcHJvZHVjdENvZGVdW3Njb3BlXSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0gPSB0aGlzLmdldFByb2R1Y3RGb3JTY29wZShcbiAgICAgICAgICBwcm9kdWN0Q29kZSxcbiAgICAgICAgICBzY29wZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0Q29kZV1bdGhpcy5nZXRTY29wZXNJbmRleChzY29wZXMpXSA9IGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIHNjb3Blcy5tYXAoKHNjb3BlKSA9PiB0aGlzLnByb2R1Y3RzW3Byb2R1Y3RDb2RlXVtzY29wZV0pXG4gICAgICApLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgwKSxcbiAgICAgICAgbWFwKChwcm9kdWN0UGFydHMpID0+XG4gICAgICAgICAgcHJvZHVjdFBhcnRzLmV2ZXJ5KEJvb2xlYW4pXG4gICAgICAgICAgICA/IGRlZXBNZXJnZSh7fSwgLi4ucHJvZHVjdFBhcnRzKVxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2NvcGVzSW5kZXgoc2NvcGVzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNjb3Blcy5qb2luKCfJtScpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb2JzZXJ2YWJsZSBmb3IgcHJvdmlkaW5nIHNwZWNpZmllZCBwcm9kdWN0IGRhdGEgZm9yIHRoZSBzY29wZVxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEZvclNjb3BlKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgc2NvcGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3Q+IHtcbiAgICBjb25zdCBzaG91bGRMb2FkJCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChcbiAgICAgICAgUHJvZHVjdFNlbGVjdG9ycy5nZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKHByb2R1Y3RTdGF0ZSkgPT5cbiAgICAgICAgICAhcHJvZHVjdFN0YXRlLmxvYWRpbmcgJiYgIXByb2R1Y3RTdGF0ZS5zdWNjZXNzICYmICFwcm9kdWN0U3RhdGUuZXJyb3JcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKCh4KSA9PiB4KVxuICAgICk7XG5cbiAgICBjb25zdCBpc0xvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFxuICAgICAgICBQcm9kdWN0U2VsZWN0b3JzLmdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5KHByb2R1Y3RDb2RlLCBzY29wZSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZHVjdExvYWRMb2dpYyQgPSBtZXJnZShcbiAgICAgIHNob3VsZExvYWQkLFxuICAgICAgLi4udGhpcy5nZXRQcm9kdWN0UmVsb2FkVHJpZ2dlcnMocHJvZHVjdENvZGUsIHNjb3BlKVxuICAgICkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKGlzTG9hZGluZyQpLFxuICAgICAgdGFwKChbLCBpc0xvYWRpbmddKSA9PiB7XG4gICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdChwcm9kdWN0Q29kZSwgc2NvcGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZHVjdERhdGEkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0U2VsZWN0ZWRQcm9kdWN0RmFjdG9yeShwcm9kdWN0Q29kZSwgc2NvcGUpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdXNpbmcoXG4gICAgICAoKSA9PiBwcm9kdWN0TG9hZExvZ2ljJC5zdWJzY3JpYmUoKSxcbiAgICAgICgpID0+IHByb2R1Y3REYXRhJFxuICAgICkucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlbG9hZCB0cmlnZ2VycyBmb3IgcHJvZHVjdCBwZXIgc2NvcGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RDb2RlXG4gICAqIEBwYXJhbSBzY29wZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFByb2R1Y3RSZWxvYWRUcmlnZ2VycyhcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHNjb3BlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPltdIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IFtdO1xuXG4gICAgLy8gbWF4IGFnZSB0cmlnZ2VyIGFkZFxuICAgIGNvbnN0IG1heEFnZSA9IHRoaXMubG9hZGluZ1Njb3Blcy5nZXRNYXhBZ2UoJ3Byb2R1Y3QnLCBzY29wZSk7XG4gICAgaWYgKG1heEFnZSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIGdyYWIgbG9hZCBwcm9kdWN0IHN1Y2Nlc3MgYW5kIGxvYWQgcHJvZHVjdCBmYWlsIGZvciB0aGlzIHByb2R1Y3QgYW5kIHNjb3BlXG4gICAgICBjb25zdCBsb2FkRmluaXNoJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIGFjdGlvbjpcbiAgICAgICAgICAgICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3NcbiAgICAgICAgICAgICAgfCBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgICAgICAgICApID0+XG4gICAgICAgICAgICAoYWN0aW9uLnR5cGUgPT09IFByb2R1Y3RBY3Rpb25zLkxPQURfUFJPRFVDVF9TVUNDRVNTIHx8XG4gICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSBQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfRkFJTCkgJiZcbiAgICAgICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eUlkID09PSBwcm9kdWN0Q29kZSAmJlxuICAgICAgICAgICAgYWN0aW9uLm1ldGEuc2NvcGUgPT09IHNjb3BlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxvYWRTdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QpID0+XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZCA9PT0gcHJvZHVjdENvZGUgJiYgYWN0aW9uLm1ldGEuc2NvcGUgPT09IHNjb3BlXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRyaWdnZXJzLnB1c2godGhpcy5nZXRNYXhBZ2VUcmlnZ2VyKGxvYWRTdGFydCQsIGxvYWRGaW5pc2gkLCBtYXhBZ2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpZ2dlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJpYyBtZXRob2QgdGhhdCByZXR1cm5zIHN0cmVhbSB0cmlnZ2VyaW5nIHJlbG9hZCBieSBtYXhBZ2VcbiAgICpcbiAgICogQ291bGQgYmUgcmVmYWN0b3JlZCB0byBzZXBhcmF0ZSBzZXJ2aWNlIGluIGZ1dHVyZSB0byB1c2UgaW4gb3RoZXJcbiAgICogbWF4IGFnZSByZWxvYWQgaW1wbGVtZW50YXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSBsb2FkU3RhcnQkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgc3RhcnRcbiAgICogQHBhcmFtIGxvYWRGaW5pc2gkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgZmluaXNoXG4gICAqIEBwYXJhbSBtYXhBZ2UgbWF4IGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNYXhBZ2VUcmlnZ2VyKFxuICAgIGxvYWRTdGFydCQ6IE9ic2VydmFibGU8YW55PixcbiAgICBsb2FkRmluaXNoJDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIG1heEFnZTogbnVtYmVyLFxuICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2VcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IDA7XG5cbiAgICBjb25zdCBub3cgPSAoKSA9PiAoc2NoZWR1bGVyID8gc2NoZWR1bGVyLm5vdygpIDogRGF0ZS5ub3coKSk7XG5cbiAgICBjb25zdCB0aW1lc3RhbXAkID0gbG9hZEZpbmlzaCQucGlwZSh0YXAoKCkgPT4gKHRpbWVzdGFtcCA9IG5vdygpKSkpO1xuXG4gICAgY29uc3Qgc2hvdWxkUmVsb2FkJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGFnZSA9IG5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgICBjb25zdCB0aW1lc3RhbXBSZWZyZXNoJCA9IHRpbWVzdGFtcCQucGlwZShcbiAgICAgICAgZGVsYXkobWF4QWdlLCBzY2hlZHVsZXIpLFxuICAgICAgICBtYXBUbyh0cnVlKSxcbiAgICAgICAgd2l0aGRyYXdPbihsb2FkU3RhcnQkKVxuICAgICAgKTtcblxuICAgICAgaWYgKGFnZSA+IG1heEFnZSkge1xuICAgICAgICAvLyB3ZSBzaG91bGQgZW1pdCBmaXJzdCB2YWx1ZSBpbW1lZGlhdGVseVxuICAgICAgICByZXR1cm4gbWVyZ2Uob2YodHJ1ZSksIHRpbWVzdGFtcFJlZnJlc2gkKTtcbiAgICAgIH0gZWxzZSBpZiAoYWdlID09PSAwKSB7XG4gICAgICAgIC8vIGVkZ2UgY2FzZSwgd2Ugc2hvdWxkIGVtaXQgbWF4IGFnZSB0aW1lb3V0IGFmdGVyIG5leHQgbG9hZCBzdWNjZXNzXG4gICAgICAgIC8vIGNvdWxkIGhhcHBlbiB3aXRoIGFydGlmaWNpYWwgc2NoZWR1bGVyc1xuICAgICAgICByZXR1cm4gdGltZXN0YW1wUmVmcmVzaCQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB3ZSBzaG91bGQgZW1pdCBmaXJzdCB2YWx1ZSB3aGVuIGFnZSB3aWxsIGV4cGlyZVxuICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgb2YodHJ1ZSkucGlwZShkZWxheShtYXhBZ2UgLSBhZ2UsIHNjaGVkdWxlcikpLFxuICAgICAgICAgIHRpbWVzdGFtcFJlZnJlc2gkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hvdWxkUmVsb2FkJDtcbiAgfVxufVxuIl19