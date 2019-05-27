/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { LOGOUT } from '../../../auth/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { USER_ADDRESSES, USER_CONSENTS, USER_ORDERS, USER_PAYMENT_METHODS, } from '../user-state';
import * as fromBillingCountriesReducer from './billing-countries.reducer';
import * as fromDeliveryCountries from './delivery-countries.reducer';
import * as fromOrderDetailsReducer from './order-details.reducer';
import * as fromPaymentReducer from './payment-methods.reducer';
import * as fromRegionsReducer from './regions.reducer';
import * as fromResetPasswordReducer from './reset-password.reducer';
import * as fromTitlesReducer from './titles.reducer';
import * as fromAddressesReducer from './user-addresses.reducer';
import * as fromUserConsentsReducer from './user-consents.reducer';
import * as fromUserDetailsReducer from './user-details.reducer';
import * as fromUserOrdersReducer from './user-orders.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        account: combineReducers({
            details: fromUserDetailsReducer.reducer,
        }),
        addresses: loaderReducer(USER_ADDRESSES, fromAddressesReducer.reducer),
        billingCountries: fromBillingCountriesReducer.reducer,
        consents: loaderReducer(USER_CONSENTS, fromUserConsentsReducer.reducer),
        payments: loaderReducer(USER_PAYMENT_METHODS, fromPaymentReducer.reducer),
        orders: loaderReducer(USER_ORDERS, fromUserOrdersReducer.reducer),
        order: fromOrderDetailsReducer.reducer,
        countries: fromDeliveryCountries.reducer,
        titles: fromTitlesReducer.reducer,
        regions: fromRegionsReducer.reducer,
        resetPassword: fromResetPasswordReducer.reducer,
    };
}
/** @type {?} */
export const reducerToken = new InjectionToken('UserReducers');
/** @type {?} */
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearUserState(reducer) {
    return function (state, action) {
        if (action.type === LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
/** @type {?} */
export const metaReducers = [clearUserState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBR0wsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxvQkFBb0IsR0FFckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLDJCQUEyQixNQUFNLDZCQUE2QixDQUFDO0FBQzNFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEtBQUssdUJBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxLQUFLLGtCQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxrQkFBa0IsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEtBQUssd0JBQXdCLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxLQUFLLGlCQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxvQkFBb0IsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEtBQUssdUJBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFDbkUsT0FBTyxLQUFLLHNCQUFzQixNQUFNLHdCQUF3QixDQUFDO0FBQ2pFLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcvRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUN2QixPQUFPLEVBQUUsc0JBQXNCLENBQUMsT0FBTztTQUN4QyxDQUFDO1FBQ0YsU0FBUyxFQUFFLGFBQWEsQ0FDdEIsY0FBYyxFQUNkLG9CQUFvQixDQUFDLE9BQU8sQ0FDN0I7UUFDRCxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxPQUFPO1FBQ3JELFFBQVEsRUFBRSxhQUFhLENBQ3JCLGFBQWEsRUFDYix1QkFBdUIsQ0FBQyxPQUFPLENBQ2hDO1FBQ0QsUUFBUSxFQUFFLGFBQWEsQ0FDckIsb0JBQW9CLEVBQ3BCLGtCQUFrQixDQUFDLE9BQU8sQ0FDM0I7UUFDRCxNQUFNLEVBQUUsYUFBYSxDQUNuQixXQUFXLEVBQ1gscUJBQXFCLENBQUMsT0FBTyxDQUM5QjtRQUNELEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO1FBQ3RDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxPQUFPO1FBQ3hDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO1FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1FBQ25DLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxPQUFPO0tBQ2hELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUE4QixjQUFjLENBQUM7O0FBRW5FLE1BQU0sT0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsT0FBMkI7SUFFM0IsT0FBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsS0FBSyxHQUFHLFNBQVMsQ0FBQztTQUNuQjtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sT0FBTyxZQUFZLEdBQXVCLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBMT0dPVVQgfSBmcm9tICcuLi8uLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5pbXBvcnQge1xuICBVU0VSX0FERFJFU1NFUyxcbiAgVVNFUl9DT05TRU5UUyxcbiAgVVNFUl9PUkRFUlMsXG4gIFVTRVJfUEFZTUVOVF9NRVRIT0RTLFxuICBVc2VyU3RhdGUsXG59IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUJpbGxpbmdDb3VudHJpZXNSZWR1Y2VyIGZyb20gJy4vYmlsbGluZy1jb3VudHJpZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tRGVsaXZlcnlDb3VudHJpZXMgZnJvbSAnLi9kZWxpdmVyeS1jb3VudHJpZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tT3JkZXJEZXRhaWxzUmVkdWNlciBmcm9tICcuL29yZGVyLWRldGFpbHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUGF5bWVudFJlZHVjZXIgZnJvbSAnLi9wYXltZW50LW1ldGhvZHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUmVnaW9uc1JlZHVjZXIgZnJvbSAnLi9yZWdpb25zLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVJlc2V0UGFzc3dvcmRSZWR1Y2VyIGZyb20gJy4vcmVzZXQtcGFzc3dvcmQucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVGl0bGVzUmVkdWNlciBmcm9tICcuL3RpdGxlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21BZGRyZXNzZXNSZWR1Y2VyIGZyb20gJy4vdXNlci1hZGRyZXNzZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckNvbnNlbnRzUmVkdWNlciBmcm9tICcuL3VzZXItY29uc2VudHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckRldGFpbHNSZWR1Y2VyIGZyb20gJy4vdXNlci1kZXRhaWxzLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJPcmRlcnNSZWR1Y2VyIGZyb20gJy4vdXNlci1vcmRlcnMucmVkdWNlcic7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8VXNlclN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgYWNjb3VudDogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIGRldGFpbHM6IGZyb21Vc2VyRGV0YWlsc1JlZHVjZXIucmVkdWNlcixcbiAgICB9KSxcbiAgICBhZGRyZXNzZXM6IGxvYWRlclJlZHVjZXI8QWRkcmVzc1tdPihcbiAgICAgIFVTRVJfQUREUkVTU0VTLFxuICAgICAgZnJvbUFkZHJlc3Nlc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgYmlsbGluZ0NvdW50cmllczogZnJvbUJpbGxpbmdDb3VudHJpZXNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgY29uc2VudHM6IGxvYWRlclJlZHVjZXI8Q29uc2VudFRlbXBsYXRlW10+KFxuICAgICAgVVNFUl9DT05TRU5UUyxcbiAgICAgIGZyb21Vc2VyQ29uc2VudHNSZWR1Y2VyLnJlZHVjZXJcbiAgICApLFxuICAgIHBheW1lbnRzOiBsb2FkZXJSZWR1Y2VyPFBheW1lbnREZXRhaWxzW10+KFxuICAgICAgVVNFUl9QQVlNRU5UX01FVEhPRFMsXG4gICAgICBmcm9tUGF5bWVudFJlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgb3JkZXJzOiBsb2FkZXJSZWR1Y2VyPE9yZGVySGlzdG9yeUxpc3Q+KFxuICAgICAgVVNFUl9PUkRFUlMsXG4gICAgICBmcm9tVXNlck9yZGVyc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgb3JkZXI6IGZyb21PcmRlckRldGFpbHNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgY291bnRyaWVzOiBmcm9tRGVsaXZlcnlDb3VudHJpZXMucmVkdWNlcixcbiAgICB0aXRsZXM6IGZyb21UaXRsZXNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgcmVnaW9uczogZnJvbVJlZ2lvbnNSZWR1Y2VyLnJlZHVjZXIsXG4gICAgcmVzZXRQYXNzd29yZDogZnJvbVJlc2V0UGFzc3dvcmRSZWR1Y2VyLnJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPFVzZXJTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxVc2VyU3RhdGU+PignVXNlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVXNlclN0YXRlKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT5cbik6IEFjdGlvblJlZHVjZXI8YW55PiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBMT0dPVVQpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJVc2VyU3RhdGVdO1xuIl19