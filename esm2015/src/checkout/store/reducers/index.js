import { InjectionToken } from '@angular/core';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { CHECKOUT_DETAILS, } from '../checkout-state';
import * as fromAddressVerification from './address-verification.reducer';
import * as fromCardTypes from './card-types.reducer';
import * as fromCheckout from './checkout.reducer';
import * as fromOrderTypes from './order-types.reducer';
import * as fromPaymentTypes from './payment-types.reducer';
export function getReducers() {
    return {
        steps: loaderReducer(CHECKOUT_DETAILS, fromCheckout.reducer),
        cardTypes: fromCardTypes.reducer,
        addressVerification: fromAddressVerification.reducer,
        paymentTypes: fromPaymentTypes.reducer,
        orderType: fromOrderTypes.reducer,
    };
}
export const reducerToken = new InjectionToken('CheckoutReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jaGVja291dC9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBR0wsZ0JBQWdCLEdBQ2pCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxLQUFLLHVCQUF1QixNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxhQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxLQUFLLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEtBQUssY0FBYyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsS0FBSyxFQUFFLGFBQWEsQ0FDbEIsZ0JBQWdCLEVBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQ3JCO1FBQ0QsU0FBUyxFQUFFLGFBQWEsQ0FBQyxPQUFPO1FBQ2hDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLE9BQU87UUFDcEQsWUFBWSxFQUFFLGdCQUFnQixDQUFDLE9BQU87UUFDdEMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxPQUFPO0tBQ2xDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUVwQixJQUFJLGNBQWMsQ0FBa0Msa0JBQWtCLENBQUMsQ0FBQztBQUU3RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTdGF0ZSxcbiAgQ2hlY2tvdXRTdGVwc1N0YXRlLFxuICBDSEVDS09VVF9ERVRBSUxTLFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWRkcmVzc1ZlcmlmaWNhdGlvbiBmcm9tICcuL2FkZHJlc3MtdmVyaWZpY2F0aW9uLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbUNhcmRUeXBlcyBmcm9tICcuL2NhcmQtdHlwZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQ2hlY2tvdXQgZnJvbSAnLi9jaGVja291dC5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21PcmRlclR5cGVzIGZyb20gJy4vb3JkZXItdHlwZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUGF5bWVudFR5cGVzIGZyb20gJy4vcGF5bWVudC10eXBlcy5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8Q2hlY2tvdXRTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHN0ZXBzOiBsb2FkZXJSZWR1Y2VyPENoZWNrb3V0U3RlcHNTdGF0ZT4oXG4gICAgICBDSEVDS09VVF9ERVRBSUxTLFxuICAgICAgZnJvbUNoZWNrb3V0LnJlZHVjZXJcbiAgICApLFxuICAgIGNhcmRUeXBlczogZnJvbUNhcmRUeXBlcy5yZWR1Y2VyLFxuICAgIGFkZHJlc3NWZXJpZmljYXRpb246IGZyb21BZGRyZXNzVmVyaWZpY2F0aW9uLnJlZHVjZXIsXG4gICAgcGF5bWVudFR5cGVzOiBmcm9tUGF5bWVudFR5cGVzLnJlZHVjZXIsXG4gICAgb3JkZXJUeXBlOiBmcm9tT3JkZXJUeXBlcy5yZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFxuICBDaGVja291dFN0YXRlXG4+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENoZWNrb3V0U3RhdGU+PignQ2hlY2tvdXRSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG4iXX0=