import { createFeatureSelector, createSelector, } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { CHECKOUT_FEATURE, } from '../checkout-state';
var getDeliveryAddressSelector = function (state) { return state.address; };
var ɵ0 = getDeliveryAddressSelector;
var getDeliveryModeSelector = function (state) {
    return state.deliveryMode;
};
var ɵ1 = getDeliveryModeSelector;
var getPaymentDetailsSelector = function (state) {
    return state.paymentDetails;
};
var ɵ2 = getPaymentDetailsSelector;
var getOrderDetailsSelector = function (state) {
    return state.orderDetails;
};
var ɵ3 = getOrderDetailsSelector;
export var getCheckoutState = createFeatureSelector(CHECKOUT_FEATURE);
var ɵ4 = function (checkoutState) { return checkoutState.steps; };
export var getCheckoutStepsState = createSelector(getCheckoutState, ɵ4);
var ɵ5 = function (state) {
    return StateUtils.loaderValueSelector(state);
};
export var getCheckoutSteps = createSelector(getCheckoutStepsState, ɵ5);
export var getDeliveryAddress = createSelector(getCheckoutSteps, getDeliveryAddressSelector);
export var getDeliveryMode = createSelector(getCheckoutSteps, getDeliveryModeSelector);
var ɵ6 = function (deliveryMode) {
    return (deliveryMode &&
        Object.keys(deliveryMode.supported).map(function (code) { return deliveryMode.supported[code]; }));
};
export var getSupportedDeliveryModes = createSelector(getDeliveryMode, ɵ6);
var ɵ7 = function (deliveryMode) {
    return deliveryMode && deliveryMode.selected;
};
export var getSelectedDeliveryModeCode = createSelector(getDeliveryMode, ɵ7);
var ɵ8 = function (deliveryMode) {
    if (deliveryMode.selected !== '') {
        if (Object.keys(deliveryMode.supported).length === 0) {
            return null;
        }
        return deliveryMode.supported[deliveryMode.selected];
    }
};
export var getSelectedDeliveryMode = createSelector(getDeliveryMode, ɵ8);
export var getPaymentDetails = createSelector(getCheckoutSteps, getPaymentDetailsSelector);
export var getCheckoutOrderDetails = createSelector(getCheckoutSteps, getOrderDetailsSelector);
var ɵ9 = function (state) {
    return StateUtils.loaderSuccessSelector(state) &&
        !StateUtils.loaderLoadingSelector(state);
};
export var getCheckoutDetailsLoaded = createSelector(getCheckoutStepsState, ɵ9);
var ɵ10 = function (state) { return state.poNumber.po; };
export var getPoNumer = createSelector(getCheckoutSteps, ɵ10);
var ɵ11 = function (state) { return state.poNumber.costCenter; };
export var getCostCenter = createSelector(getCheckoutSteps, ɵ11);
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3NlbGVjdG9ycy9jaGVja291dC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixjQUFjLEdBRWYsTUFBTSxhQUFhLENBQUM7QUFJckIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFHTCxnQkFBZ0IsR0FFakIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixJQUFNLDBCQUEwQixHQUFHLFVBQUMsS0FBeUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFDOztBQUNoRixJQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBeUI7SUFDeEQsT0FBQSxLQUFLLENBQUMsWUFBWTtBQUFsQixDQUFrQixDQUFDOztBQUNyQixJQUFNLHlCQUF5QixHQUFHLFVBQUMsS0FBeUI7SUFDMUQsT0FBQSxLQUFLLENBQUMsY0FBYztBQUFwQixDQUFvQixDQUFDOztBQUN2QixJQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBeUI7SUFDeEQsT0FBQSxLQUFLLENBQUMsWUFBWTtBQUFsQixDQUFrQixDQUFDOztBQUVyQixNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FHekIscUJBQXFCLENBQWdCLGdCQUFnQixDQUFDLENBQUM7U0FPekQsVUFBQyxhQUE0QixJQUFLLE9BQUEsYUFBYSxDQUFDLEtBQUssRUFBbkIsQ0FBbUI7QUFMdkQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsZ0JBQWdCLEtBRWpCLENBQUM7U0FLd0MsVUFBQyxLQUFLO0lBQzlDLE9BQUEsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUFyQyxDQUFxQztBQUp2QyxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FHekIsY0FBYyxDQUFDLHFCQUFxQixLQUV2QyxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBRzNCLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBRWpFLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FNeEIsY0FBYyxDQUFDLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDLENBQUM7U0FLMUIsVUFBQyxZQUFZO0lBQy9DLE9BQU8sQ0FDTCxZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUNyQyxVQUFDLElBQUksSUFBSyxPQUFBLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQ3ZDLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFWRCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FHbEMsY0FBYyxDQUFDLGVBQWUsS0FPaEMsQ0FBQztTQUtpQyxVQUFDLFlBQVk7SUFDL0MsT0FBTyxZQUFZLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQztBQUMvQyxDQUFDO0FBTEQsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBR3BDLGNBQWMsQ0FBQyxlQUFlLEtBRWhDLENBQUM7U0FLaUMsVUFBQyxZQUFZO0lBQy9DLElBQUksWUFBWSxDQUFDLFFBQVEsS0FBSyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3REO0FBQ0gsQ0FBQztBQVZELE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUdoQyxjQUFjLENBQUMsZUFBZSxLQU9oQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBRzFCLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0FBRWhFLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUdoQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztTQU81RCxVQUFDLEtBQUs7SUFDSixPQUFBLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0FBRHhDLENBQ3dDO0FBUDVDLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUdqQyxjQUFjLENBQ2hCLHFCQUFxQixLQUl0QixDQUFDO1VBT0EsVUFBQyxLQUF5QixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQWpCLENBQWlCO0FBTGxELE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FHbkIsY0FBYyxDQUNoQixnQkFBZ0IsTUFFakIsQ0FBQztVQU9BLFVBQUMsS0FBeUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUF6QixDQUF5QjtBQUwxRCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBR3RCLGNBQWMsQ0FDaEIsZ0JBQWdCLE1BRWpCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBNZW1vaXplZFNlbGVjdG9yLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTdGF0ZSxcbiAgQ2hlY2tvdXRTdGVwc1N0YXRlLFxuICBDSEVDS09VVF9GRUFUVVJFLFxuICBTdGF0ZVdpdGhDaGVja291dCxcbn0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuXG5jb25zdCBnZXREZWxpdmVyeUFkZHJlc3NTZWxlY3RvciA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PiBzdGF0ZS5hZGRyZXNzO1xuY29uc3QgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3IgPSAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT5cbiAgc3RhdGUuZGVsaXZlcnlNb2RlO1xuY29uc3QgZ2V0UGF5bWVudERldGFpbHNTZWxlY3RvciA9IChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PlxuICBzdGF0ZS5wYXltZW50RGV0YWlscztcbmNvbnN0IGdldE9yZGVyRGV0YWlsc1NlbGVjdG9yID0gKHN0YXRlOiBDaGVja291dFN0ZXBzU3RhdGUpID0+XG4gIHN0YXRlLm9yZGVyRGV0YWlscztcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrb3V0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDaGVja291dFN0YXRlXG4+ID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPENoZWNrb3V0U3RhdGU+KENIRUNLT1VUX0ZFQVRVUkUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXRTdGVwc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgTG9hZGVyU3RhdGU8Q2hlY2tvdXRTdGVwc1N0YXRlPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0YXRlLFxuICAoY2hlY2tvdXRTdGF0ZTogQ2hlY2tvdXRTdGF0ZSkgPT4gY2hlY2tvdXRTdGF0ZS5zdGVwc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldENoZWNrb3V0U3RlcHM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBDaGVja291dFN0ZXBzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDaGVja291dFN0ZXBzU3RhdGUsIChzdGF0ZSkgPT5cbiAgU3RhdGVVdGlscy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldERlbGl2ZXJ5QWRkcmVzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIEFkZHJlc3Ncbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDaGVja291dFN0ZXBzLCBnZXREZWxpdmVyeUFkZHJlc3NTZWxlY3Rvcik7XG5cbmV4cG9ydCBjb25zdCBnZXREZWxpdmVyeU1vZGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICB7XG4gICAgc3VwcG9ydGVkOiB7IFtjb2RlOiBzdHJpbmddOiBEZWxpdmVyeU1vZGUgfTtcbiAgICBzZWxlY3RlZDogc3RyaW5nO1xuICB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q2hlY2tvdXRTdGVwcywgZ2V0RGVsaXZlcnlNb2RlU2VsZWN0b3IpO1xuXG5leHBvcnQgY29uc3QgZ2V0U3VwcG9ydGVkRGVsaXZlcnlNb2RlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIERlbGl2ZXJ5TW9kZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0RGVsaXZlcnlNb2RlLCAoZGVsaXZlcnlNb2RlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgZGVsaXZlcnlNb2RlICYmXG4gICAgT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlLnN1cHBvcnRlZCkubWFwKFxuICAgICAgKGNvZGUpID0+IGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRbY29kZV1cbiAgICApXG4gICk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkRGVsaXZlcnlNb2RlQ29kZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldERlbGl2ZXJ5TW9kZSwgKGRlbGl2ZXJ5TW9kZSkgPT4ge1xuICByZXR1cm4gZGVsaXZlcnlNb2RlICYmIGRlbGl2ZXJ5TW9kZS5zZWxlY3RlZDtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWREZWxpdmVyeU1vZGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENoZWNrb3V0LFxuICBEZWxpdmVyeU1vZGVcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXREZWxpdmVyeU1vZGUsIChkZWxpdmVyeU1vZGUpID0+IHtcbiAgaWYgKGRlbGl2ZXJ5TW9kZS5zZWxlY3RlZCAhPT0gJycpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGVsaXZlcnlNb2RlLnN1cHBvcnRlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGl2ZXJ5TW9kZS5zdXBwb3J0ZWRbZGVsaXZlcnlNb2RlLnNlbGVjdGVkXTtcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYXltZW50RGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIFBheW1lbnREZXRhaWxzXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q2hlY2tvdXRTdGVwcywgZ2V0UGF5bWVudERldGFpbHNTZWxlY3Rvcik7XG5cbmV4cG9ydCBjb25zdCBnZXRDaGVja291dE9yZGVyRGV0YWlsczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIE9yZGVyXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q2hlY2tvdXRTdGVwcywgZ2V0T3JkZXJEZXRhaWxzU2VsZWN0b3IpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzU3RhdGUsXG4gIChzdGF0ZSkgPT5cbiAgICBTdGF0ZVV0aWxzLmxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSkgJiZcbiAgICAhU3RhdGVVdGlscy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9OdW1lcjogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ2hlY2tvdXQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDaGVja291dFN0ZXBzLFxuICAoc3RhdGU6IENoZWNrb3V0U3RlcHNTdGF0ZSkgPT4gc3RhdGUucG9OdW1iZXIucG9cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDb3N0Q2VudGVyOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDaGVja291dCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENoZWNrb3V0U3RlcHMsXG4gIChzdGF0ZTogQ2hlY2tvdXRTdGVwc1N0YXRlKSA9PiBzdGF0ZS5wb051bWJlci5jb3N0Q2VudGVyXG4pO1xuIl19