import { InjectionToken } from '@angular/core';
import { CHECKOUT_DETAILS, } from '../checkout-state';
import * as fromAddressVerification from './address-verification.reducer';
import * as fromCardTypes from './card-types.reducer';
import * as fromCheckout from './checkout.reducer';
import * as fromPaymentTypes from './payment-types.reducer';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
export function getReducers() {
    return {
        steps: loaderReducer(CHECKOUT_DETAILS, fromCheckout.reducer),
        cardTypes: fromCardTypes.reducer,
        addressVerification: fromAddressVerification.reducer,
        paymentTypes: fromPaymentTypes.reducer,
    };
}
export const reducerToken = new InjectionToken('CheckoutReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBRUwsZ0JBQWdCLEdBRWpCLE1BQU0sbUJBQW1CLENBQUM7QUFFM0IsT0FBTyxLQUFLLHVCQUF1QixNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxhQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEtBQUssZ0JBQWdCLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxLQUFLLEVBQUUsYUFBYSxDQUNsQixnQkFBZ0IsRUFDaEIsWUFBWSxDQUFDLE9BQU8sQ0FDckI7UUFDRCxTQUFTLEVBQUUsYUFBYSxDQUFDLE9BQU87UUFDaEMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUMsT0FBTztRQUNwRCxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztLQUN2QyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FFcEIsSUFBSSxjQUFjLENBQWtDLGtCQUFrQixDQUFDLENBQUM7QUFFN0UsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTdGF0ZSxcbiAgQ0hFQ0tPVVRfREVUQUlMUyxcbiAgQ2hlY2tvdXRTdGVwc1N0YXRlLFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmltcG9ydCAqIGFzIGZyb21BZGRyZXNzVmVyaWZpY2F0aW9uIGZyb20gJy4vYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQ2FyZFR5cGVzIGZyb20gJy4vY2FyZC10eXBlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21DaGVja291dCBmcm9tICcuL2NoZWNrb3V0LnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVBheW1lbnRUeXBlcyBmcm9tICcuL3BheW1lbnQtdHlwZXMucmVkdWNlcic7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8Q2hlY2tvdXRTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHN0ZXBzOiBsb2FkZXJSZWR1Y2VyPENoZWNrb3V0U3RlcHNTdGF0ZT4oXG4gICAgICBDSEVDS09VVF9ERVRBSUxTLFxuICAgICAgZnJvbUNoZWNrb3V0LnJlZHVjZXJcbiAgICApLFxuICAgIGNhcmRUeXBlczogZnJvbUNhcmRUeXBlcy5yZWR1Y2VyLFxuICAgIGFkZHJlc3NWZXJpZmljYXRpb246IGZyb21BZGRyZXNzVmVyaWZpY2F0aW9uLnJlZHVjZXIsXG4gICAgcGF5bWVudFR5cGVzOiBmcm9tUGF5bWVudFR5cGVzLnJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8XG4gIENoZWNrb3V0U3RhdGVcbj4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8Q2hlY2tvdXRTdGF0ZT4+KCdDaGVja291dFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcbiJdfQ==