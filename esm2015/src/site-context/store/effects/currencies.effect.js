import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NEVER, of } from 'rxjs';
import { bufferCount, catchError, exhaustMap, filter, map, switchMapTo, tap, } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { getActiveCurrency } from '../selectors/currencies.selectors';
export class CurrenciesEffects {
    constructor(actions$, siteConnector, winRef, state) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.state = state;
        this.loadCurrencies$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_CURRENCIES), exhaustMap(() => {
            return this.siteConnector.getCurrencies().pipe(map((currencies) => new SiteContextActions.LoadCurrenciesSuccess(currencies)), catchError((error) => of(new SiteContextActions.LoadCurrenciesFail(makeErrorSerializable(error)))));
        }));
        this.persist$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_CURRENCY), tap((action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        }), switchMapTo(NEVER));
        this.activateCurrency$ = this.state.select(getActiveCurrency).pipe(bufferCount(2, 1), 
        // avoid dispatching `change` action when we're just setting the initial value:
        filter(([previous]) => !!previous), map(([previous, current]) => new SiteContextActions.CurrencyChange({ previous, current })));
    }
}
CurrenciesEffects.decorators = [
    { type: Injectable }
];
CurrenciesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef },
    { type: Store }
];
__decorate([
    Effect()
], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
__decorate([
    Effect()
], CurrenciesEffects.prototype, "persist$", void 0);
__decorate([
    Effect()
], CurrenciesEffects.prototype, "activateCurrency$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9jdXJyZW5jaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQ0wsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLEdBQUcsRUFDSCxXQUFXLEVBQ1gsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUl0RSxNQUFNLE9BQU8saUJBQWlCO0lBaUQ1QixZQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQWlCLEVBQ2pCLEtBQWtDO1FBSGxDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQW5ENUMsb0JBQWUsR0FHWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxFQUMxQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUNELENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDYixJQUFJLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUMzRCxFQUNELFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ25CLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGtCQUFrQixDQUN2QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFHRixhQUFRLEdBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsRUFDOUMsR0FBRyxDQUFDLENBQUMsTUFBNEMsRUFBRSxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUNuQixDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQzNDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLCtFQUErRTtRQUMvRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQ2xDLEdBQUcsQ0FDRCxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FDdEIsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDL0QsQ0FDRixDQUFDO0lBT0MsQ0FBQzs7O1lBdkRMLFVBQVU7OztZQW5CRixPQUFPO1lBY1AsYUFBYTtZQURiLFNBQVM7WUFaVCxLQUFLOztBQXFCWjtJQURDLE1BQU0sRUFBRTswREFxQlA7QUFHRjtJQURDLE1BQU0sRUFBRTttREFTUDtBQUdGO0lBREMsTUFBTSxFQUFFOzREQVlQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTkVWRVIsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBidWZmZXJDb3VudCxcbiAgY2F0Y2hFcnJvcixcbiAgZXhoYXVzdE1hcCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcFRvLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGdldEFjdGl2ZUN1cnJlbmN5IH0gZnJvbSAnLi4vc2VsZWN0b3JzL2N1cnJlbmNpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZEN1cnJlbmNpZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzU3VjY2Vzc1xuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuTE9BRF9DVVJSRU5DSUVTKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0Q3VycmVuY2llcygpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoY3VycmVuY2llcykgPT5cbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzKGN1cnJlbmNpZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcGVyc2lzdCQ6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5TRVRfQUNUSVZFX0NVUlJFTkNZKSxcbiAgICB0YXAoKGFjdGlvbjogU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVuY3knLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgc3dpdGNoTWFwVG8oTkVWRVIpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFjdGl2YXRlQ3VycmVuY3kkOiBPYnNlcnZhYmxlPFxuICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DdXJyZW5jeUNoYW5nZVxuICA+ID0gdGhpcy5zdGF0ZS5zZWxlY3QoZ2V0QWN0aXZlQ3VycmVuY3kpLnBpcGUoXG4gICAgYnVmZmVyQ291bnQoMiwgMSksXG5cbiAgICAvLyBhdm9pZCBkaXNwYXRjaGluZyBgY2hhbmdlYCBhY3Rpb24gd2hlbiB3ZSdyZSBqdXN0IHNldHRpbmcgdGhlIGluaXRpYWwgdmFsdWU6XG4gICAgZmlsdGVyKChbcHJldmlvdXNdKSA9PiAhIXByZXZpb3VzKSxcbiAgICBtYXAoXG4gICAgICAoW3ByZXZpb3VzLCBjdXJyZW50XSkgPT5cbiAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5DdXJyZW5jeUNoYW5nZSh7IHByZXZpb3VzLCBjdXJyZW50IH0pXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+XG4gICkge31cbn1cbiJdfQ==