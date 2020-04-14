import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../../../cart/store/actions/index';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutEffects {
    private actions$;
    private checkoutDeliveryConnector;
    private checkoutPaymentConnector;
    private checkoutConnector;
    private contextChange$;
    addDeliveryAddress$: Observable<UserActions.LoadUserAddresses | CheckoutActions.SetDeliveryAddress | CheckoutActions.AddDeliveryAddressFail>;
    setDeliveryAddress$: Observable<CheckoutActions.SetDeliveryAddressSuccess | CheckoutActions.ClearSupportedDeliveryModes | CheckoutActions.ClearCheckoutDeliveryMode | CheckoutActions.ResetLoadSupportedDeliveryModesProcess | CheckoutActions.LoadSupportedDeliveryModes | CheckoutActions.SetDeliveryAddressFail>;
    loadSupportedDeliveryModes$: Observable<CheckoutActions.LoadSupportedDeliveryModesSuccess | CheckoutActions.LoadSupportedDeliveryModesFail>;
    clearCheckoutMiscsDataOnLanguageChange$: Observable<CheckoutActions.CheckoutClearMiscsData | CheckoutActions.ResetLoadSupportedDeliveryModesProcess>;
    clearDeliveryModesOnCurrencyChange$: Observable<CheckoutActions.ClearSupportedDeliveryModes>;
    clearCheckoutDataOnLogout$: Observable<CheckoutActions.ClearCheckoutData>;
    clearCheckoutDataOnLogin$: Observable<CheckoutActions.ClearCheckoutData>;
    setDeliveryMode$: Observable<CheckoutActions.SetDeliveryModeSuccess | CheckoutActions.SetDeliveryModeFail | CartActions.LoadCart>;
    createPaymentDetails$: Observable<UserActions.LoadUserPaymentMethods | CheckoutActions.CreatePaymentDetailsSuccess | CheckoutActions.CreatePaymentDetailsFail>;
    setPaymentDetails$: Observable<CheckoutActions.SetPaymentDetailsSuccess | CheckoutActions.SetPaymentDetailsFail>;
    placeOrder$: Observable<CheckoutActions.PlaceOrderSuccess | GlobalMessageActions.AddMessage | CheckoutActions.PlaceOrderFail | CartActions.RemoveCart>;
    loadCheckoutDetails$: Observable<CheckoutActions.LoadCheckoutDetailsSuccess | CheckoutActions.LoadCheckoutDetailsFail>;
    reloadDetailsOnMergeCart$: Observable<CheckoutActions.LoadCheckoutDetails>;
    clearCheckoutDeliveryAddress$: Observable<CheckoutActions.ClearCheckoutDeliveryAddressFail | CheckoutActions.ClearCheckoutDeliveryAddressSuccess>;
    clearCheckoutDeliveryMode$: Observable<CheckoutActions.ClearCheckoutDeliveryModeFail | CheckoutActions.ClearCheckoutDeliveryModeSuccess | CartActions.LoadCart>;
    constructor(actions$: Actions, checkoutDeliveryConnector: CheckoutDeliveryConnector, checkoutPaymentConnector: CheckoutPaymentConnector, checkoutConnector: CheckoutConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CheckoutEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImNoZWNrb3V0LmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NoZWNrb3V0LWRlbGl2ZXJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dEVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yO1xuICAgIHByaXZhdGUgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yO1xuICAgIHByaXZhdGUgY2hlY2tvdXRDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDtcbiAgICBhZGREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyB8IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsPjtcbiAgICBzZXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlIHwgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWw+O1xuICAgIGxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzJDogT2JzZXJ2YWJsZTxDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbD47XG4gICAgY2xlYXJDaGVja291dE1pc2NzRGF0YU9uTGFuZ3VhZ2VDaGFuZ2UkOiBPYnNlcnZhYmxlPENoZWNrb3V0QWN0aW9ucy5DaGVja291dENsZWFyTWlzY3NEYXRhIHwgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzPjtcbiAgICBjbGVhckRlbGl2ZXJ5TW9kZXNPbkN1cnJlbmN5Q2hhbmdlJDogT2JzZXJ2YWJsZTxDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzPjtcbiAgICBjbGVhckNoZWNrb3V0RGF0YU9uTG9nb3V0JDogT2JzZXJ2YWJsZTxDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGE+O1xuICAgIGNsZWFyQ2hlY2tvdXREYXRhT25Mb2dpbiQ6IE9ic2VydmFibGU8Q2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhPjtcbiAgICBzZXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWwgfCBDYXJ0QWN0aW9ucy5Mb2FkQ2FydD47XG4gICAgY3JlYXRlUGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLkxvYWRVc2VyUGF5bWVudE1ldGhvZHMgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbD47XG4gICAgc2V0UGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsPjtcbiAgICBwbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlclN1Y2Nlc3MgfCBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlIHwgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJGYWlsIHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydD47XG4gICAgbG9hZENoZWNrb3V0RGV0YWlscyQ6IE9ic2VydmFibGU8Q2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsPjtcbiAgICByZWxvYWREZXRhaWxzT25NZXJnZUNhcnQkOiBPYnNlcnZhYmxlPENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzPjtcbiAgICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc0ZhaWwgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3M+O1xuICAgIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbCB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2VzcyB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0PjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvcjogQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvciwgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yOiBDaGVja291dFBheW1lbnRDb25uZWN0b3IsIGNoZWNrb3V0Q29ubmVjdG9yOiBDaGVja291dENvbm5lY3Rvcik7XG59XG4iXX0=