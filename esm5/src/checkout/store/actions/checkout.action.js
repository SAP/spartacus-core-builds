import { __extends } from "tslib";
import { MULTI_CART_DATA } from '../../../cart/store/multi-cart-state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { StateUtils } from '../../../state/utils/index';
import { CHECKOUT_DETAILS, SET_DELIVERY_ADDRESS_PROCESS_ID, SET_DELIVERY_MODE_PROCESS_ID, SET_PAYMENT_DETAILS_PROCESS_ID, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID, SET_COST_CENTER_PROCESS_ID, } from '../checkout-state';
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS = '[Checkout] Clear Checkout Delivery Address';
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Clear Checkout Delivery Address Success';
export var CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL = '[Checkout] Clear Checkout Delivery Address Fail';
export var CLEAR_CHECKOUT_DELIVERY_MODE = '[Checkout] Clear Checkout Delivery Mode';
export var CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS = '[Checkout] Clear Checkout Delivery Mode Success';
export var CLEAR_CHECKOUT_DELIVERY_MODE_FAIL = '[Checkout] Clear Checkout Delivery Mode Fail';
export var ADD_DELIVERY_ADDRESS = '[Checkout] Add Delivery Address';
export var ADD_DELIVERY_ADDRESS_FAIL = '[Checkout] Add Delivery Address Fail';
export var ADD_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Add Delivery Address Success';
export var SET_DELIVERY_ADDRESS = '[Checkout] Set Delivery Address';
export var SET_DELIVERY_ADDRESS_FAIL = '[Checkout] Set Delivery Address Fail';
export var SET_DELIVERY_ADDRESS_SUCCESS = '[Checkout] Set Delivery Address Success';
export var RESET_SET_DELIVERY_ADDRESS_PROCESS = '[Checkout] Reset Set Delivery Address Process';
export var LOAD_SUPPORTED_DELIVERY_MODES = '[Checkout] Load Supported Delivery Modes';
export var LOAD_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Load Supported Delivery Modes Fail';
export var LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Load Supported Delivery Modes Success';
export var CLEAR_SUPPORTED_DELIVERY_MODES = '[Checkout] Clear Supported Delivery Modes';
export var SET_DELIVERY_MODE = '[Checkout] Set Delivery Mode';
export var SET_DELIVERY_MODE_FAIL = '[Checkout] Set Delivery Mode Fail';
export var SET_DELIVERY_MODE_SUCCESS = '[Checkout] Set Delivery Mode Success';
export var RESET_SET_DELIVERY_MODE_PROCESS = '[Checkout] Reset Set Delivery Mode Process';
export var SET_SUPPORTED_DELIVERY_MODES = '[Checkout] Set Supported Delivery Modes';
export var SET_SUPPORTED_DELIVERY_MODES_FAIL = '[Checkout] Set Supported Delivery Modes Fail';
export var SET_SUPPORTED_DELIVERY_MODES_SUCCESS = '[Checkout] Set Supported Delivery Modes Success';
export var RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS = '[Checkout] Reset Set Supported Delivery Modes Process';
export var CREATE_PAYMENT_DETAILS = '[Checkout] Create Payment Details';
export var CREATE_PAYMENT_DETAILS_FAIL = '[Checkout] Create Payment Details Fail';
export var CREATE_PAYMENT_DETAILS_SUCCESS = '[Checkout] Create Payment Details Success';
export var SET_PAYMENT_DETAILS = '[Checkout] Set Payment Details';
export var SET_PAYMENT_DETAILS_FAIL = '[Checkout] Set Payment Details Fail';
export var SET_PAYMENT_DETAILS_SUCCESS = '[Checkout] Set Payment Details Success';
export var RESET_SET_PAYMENT_DETAILS_PROCESS = '[Checkout] Reset Set Payment Details Process';
export var PLACE_ORDER = '[Checkout] Place Order';
export var PLACE_ORDER_FAIL = '[Checkout] Place Order Fail';
export var PLACE_ORDER_SUCCESS = '[Checkout] Place Order Success';
export var CLEAR_CHECKOUT_STEP = '[Checkout] Clear One Checkout Step';
export var CLEAR_CHECKOUT_DATA = '[Checkout] Clear Checkout Data';
export var LOAD_CHECKOUT_DETAILS = '[Checkout] Load Checkout Details';
export var LOAD_CHECKOUT_DETAILS_FAIL = '[Checkout] Load Checkout Details Fail';
export var LOAD_CHECKOUT_DETAILS_SUCCESS = '[Checkout] Load Checkout Details Success';
export var CHECKOUT_CLEAR_MISCS_DATA = '[Checkout] Clear Miscs Data';
export var PAYMENT_PROCESS_SUCCESS = '[Checkout] Payment Process Success';
export var SET_COST_CENTER = '[Checkout] Set Cost Center';
export var SET_COST_CENTER_FAIL = '[Checkout] Set Cost Center Fail';
export var SET_COST_CENTER_SUCCESS = '[Checkout] Set Cost Center Success';
export var RESET_SET_COST_CENTER_PROCESS = '[Checkout] Reset Set Cost Center Process';
var AddDeliveryAddress = /** @class */ (function () {
    function AddDeliveryAddress(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS;
    }
    return AddDeliveryAddress;
}());
export { AddDeliveryAddress };
var AddDeliveryAddressFail = /** @class */ (function () {
    function AddDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_FAIL;
    }
    return AddDeliveryAddressFail;
}());
export { AddDeliveryAddressFail };
var AddDeliveryAddressSuccess = /** @class */ (function () {
    function AddDeliveryAddressSuccess(payload) {
        this.payload = payload;
        this.type = ADD_DELIVERY_ADDRESS_SUCCESS;
    }
    return AddDeliveryAddressSuccess;
}());
export { AddDeliveryAddressSuccess };
var SetDeliveryAddress = /** @class */ (function (_super) {
    __extends(SetDeliveryAddress, _super);
    function SetDeliveryAddress(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS;
        return _this;
    }
    return SetDeliveryAddress;
}(StateUtils.EntityLoadAction));
export { SetDeliveryAddress };
var SetDeliveryAddressFail = /** @class */ (function (_super) {
    __extends(SetDeliveryAddressFail, _super);
    function SetDeliveryAddressFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS_FAIL;
        return _this;
    }
    return SetDeliveryAddressFail;
}(StateUtils.EntityFailAction));
export { SetDeliveryAddressFail };
var SetDeliveryAddressSuccess = /** @class */ (function (_super) {
    __extends(SetDeliveryAddressSuccess, _super);
    function SetDeliveryAddressSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_ADDRESS_SUCCESS;
        return _this;
    }
    return SetDeliveryAddressSuccess;
}(StateUtils.EntitySuccessAction));
export { SetDeliveryAddressSuccess };
var ResetSetDeliveryAddressProcess = /** @class */ (function (_super) {
    __extends(ResetSetDeliveryAddressProcess, _super);
    function ResetSetDeliveryAddressProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_ADDRESS_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_ADDRESS_PROCESS;
        return _this;
    }
    return ResetSetDeliveryAddressProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetDeliveryAddressProcess };
var LoadSupportedDeliveryModes = /** @class */ (function (_super) {
    __extends(LoadSupportedDeliveryModes, _super);
    function LoadSupportedDeliveryModes(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES;
        return _this;
    }
    return LoadSupportedDeliveryModes;
}(StateUtils.EntityLoadAction));
export { LoadSupportedDeliveryModes };
var LoadSupportedDeliveryModesFail = /** @class */ (function (_super) {
    __extends(LoadSupportedDeliveryModesFail, _super);
    function LoadSupportedDeliveryModesFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES_FAIL;
        return _this;
    }
    return LoadSupportedDeliveryModesFail;
}(StateUtils.EntityFailAction));
export { LoadSupportedDeliveryModesFail };
var LoadSupportedDeliveryModesSuccess = /** @class */ (function (_super) {
    __extends(LoadSupportedDeliveryModesSuccess, _super);
    function LoadSupportedDeliveryModesSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS;
        return _this;
    }
    return LoadSupportedDeliveryModesSuccess;
}(StateUtils.EntitySuccessAction));
export { LoadSupportedDeliveryModesSuccess };
var ResetLoadSupportedDeliveryModesProcess = /** @class */ (function (_super) {
    __extends(ResetLoadSupportedDeliveryModesProcess, _super);
    function ResetLoadSupportedDeliveryModesProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS;
        return _this;
    }
    return ResetLoadSupportedDeliveryModesProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetLoadSupportedDeliveryModesProcess };
var SetDeliveryMode = /** @class */ (function (_super) {
    __extends(SetDeliveryMode, _super);
    function SetDeliveryMode(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE;
        return _this;
    }
    return SetDeliveryMode;
}(StateUtils.EntityLoadAction));
export { SetDeliveryMode };
var SetDeliveryModeFail = /** @class */ (function (_super) {
    __extends(SetDeliveryModeFail, _super);
    function SetDeliveryModeFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE_FAIL;
        return _this;
    }
    return SetDeliveryModeFail;
}(StateUtils.EntityFailAction));
export { SetDeliveryModeFail };
var SetDeliveryModeSuccess = /** @class */ (function (_super) {
    __extends(SetDeliveryModeSuccess, _super);
    function SetDeliveryModeSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_DELIVERY_MODE_SUCCESS;
        return _this;
    }
    return SetDeliveryModeSuccess;
}(StateUtils.EntitySuccessAction));
export { SetDeliveryModeSuccess };
var ResetSetDeliveryModeProcess = /** @class */ (function (_super) {
    __extends(ResetSetDeliveryModeProcess, _super);
    function ResetSetDeliveryModeProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_DELIVERY_MODE_PROCESS_ID) || this;
        _this.type = RESET_SET_DELIVERY_MODE_PROCESS;
        return _this;
    }
    return ResetSetDeliveryModeProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetDeliveryModeProcess };
var CreatePaymentDetails = /** @class */ (function (_super) {
    __extends(CreatePaymentDetails, _super);
    function CreatePaymentDetails(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CREATE_PAYMENT_DETAILS;
        return _this;
    }
    return CreatePaymentDetails;
}(StateUtils.EntityLoadAction));
export { CreatePaymentDetails };
var CreatePaymentDetailsFail = /** @class */ (function (_super) {
    __extends(CreatePaymentDetailsFail, _super);
    function CreatePaymentDetailsFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = CREATE_PAYMENT_DETAILS_FAIL;
        return _this;
    }
    return CreatePaymentDetailsFail;
}(StateUtils.EntityFailAction));
export { CreatePaymentDetailsFail };
var CreatePaymentDetailsSuccess = /** @class */ (function () {
    function CreatePaymentDetailsSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_PAYMENT_DETAILS_SUCCESS;
    }
    return CreatePaymentDetailsSuccess;
}());
export { CreatePaymentDetailsSuccess };
var PaymentProcessSuccess = /** @class */ (function (_super) {
    __extends(PaymentProcessSuccess, _super);
    function PaymentProcessSuccess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.type = PAYMENT_PROCESS_SUCCESS;
        return _this;
    }
    return PaymentProcessSuccess;
}(StateUtils.EntitySuccessAction));
export { PaymentProcessSuccess };
var SetPaymentDetails = /** @class */ (function (_super) {
    __extends(SetPaymentDetails, _super);
    function SetPaymentDetails(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS;
        return _this;
    }
    return SetPaymentDetails;
}(StateUtils.EntityLoadAction));
export { SetPaymentDetails };
var SetPaymentDetailsFail = /** @class */ (function (_super) {
    __extends(SetPaymentDetailsFail, _super);
    function SetPaymentDetailsFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS_FAIL;
        return _this;
    }
    return SetPaymentDetailsFail;
}(StateUtils.EntityFailAction));
export { SetPaymentDetailsFail };
var SetPaymentDetailsSuccess = /** @class */ (function (_super) {
    __extends(SetPaymentDetailsSuccess, _super);
    function SetPaymentDetailsSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_PAYMENT_DETAILS_SUCCESS;
        return _this;
    }
    return SetPaymentDetailsSuccess;
}(StateUtils.EntitySuccessAction));
export { SetPaymentDetailsSuccess };
var ResetSetPaymentDetailsProcess = /** @class */ (function (_super) {
    __extends(ResetSetPaymentDetailsProcess, _super);
    function ResetSetPaymentDetailsProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_PAYMENT_DETAILS_PROCESS_ID) || this;
        _this.type = RESET_SET_PAYMENT_DETAILS_PROCESS;
        return _this;
    }
    return ResetSetPaymentDetailsProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetPaymentDetailsProcess };
var PlaceOrder = /** @class */ (function () {
    function PlaceOrder(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER;
    }
    return PlaceOrder;
}());
export { PlaceOrder };
var PlaceOrderFail = /** @class */ (function () {
    function PlaceOrderFail(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_FAIL;
    }
    return PlaceOrderFail;
}());
export { PlaceOrderFail };
var PlaceOrderSuccess = /** @class */ (function () {
    function PlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = PLACE_ORDER_SUCCESS;
    }
    return PlaceOrderSuccess;
}());
export { PlaceOrderSuccess };
var ClearSupportedDeliveryModes = /** @class */ (function () {
    function ClearSupportedDeliveryModes() {
        this.type = CLEAR_SUPPORTED_DELIVERY_MODES;
    }
    return ClearSupportedDeliveryModes;
}());
export { ClearSupportedDeliveryModes };
var ClearCheckoutStep = /** @class */ (function () {
    function ClearCheckoutStep(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_STEP;
    }
    return ClearCheckoutStep;
}());
export { ClearCheckoutStep };
var ClearCheckoutData = /** @class */ (function () {
    function ClearCheckoutData() {
        this.type = CLEAR_CHECKOUT_DATA;
    }
    return ClearCheckoutData;
}());
export { ClearCheckoutData };
var LoadCheckoutDetails = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetails, _super);
    function LoadCheckoutDetails(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS;
        return _this;
    }
    return LoadCheckoutDetails;
}(StateUtils.LoaderLoadAction));
export { LoadCheckoutDetails };
var LoadCheckoutDetailsFail = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetailsFail, _super);
    function LoadCheckoutDetailsFail(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS, payload) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_FAIL;
        return _this;
    }
    return LoadCheckoutDetailsFail;
}(StateUtils.LoaderFailAction));
export { LoadCheckoutDetailsFail };
var LoadCheckoutDetailsSuccess = /** @class */ (function (_super) {
    __extends(LoadCheckoutDetailsSuccess, _super);
    function LoadCheckoutDetailsSuccess(payload) {
        var _this = _super.call(this, CHECKOUT_DETAILS) || this;
        _this.payload = payload;
        _this.type = LOAD_CHECKOUT_DETAILS_SUCCESS;
        return _this;
    }
    return LoadCheckoutDetailsSuccess;
}(StateUtils.LoaderSuccessAction));
export { LoadCheckoutDetailsSuccess };
var CheckoutClearMiscsData = /** @class */ (function () {
    function CheckoutClearMiscsData() {
        this.type = CHECKOUT_CLEAR_MISCS_DATA;
    }
    return CheckoutClearMiscsData;
}());
export { CheckoutClearMiscsData };
var ClearCheckoutDeliveryAddress = /** @class */ (function () {
    function ClearCheckoutDeliveryAddress(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS;
    }
    return ClearCheckoutDeliveryAddress;
}());
export { ClearCheckoutDeliveryAddress };
var ClearCheckoutDeliveryAddressSuccess = /** @class */ (function () {
    function ClearCheckoutDeliveryAddressSuccess() {
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS;
    }
    return ClearCheckoutDeliveryAddressSuccess;
}());
export { ClearCheckoutDeliveryAddressSuccess };
var ClearCheckoutDeliveryAddressFail = /** @class */ (function () {
    function ClearCheckoutDeliveryAddressFail(payload) {
        this.payload = payload;
        this.type = CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL;
    }
    return ClearCheckoutDeliveryAddressFail;
}());
export { ClearCheckoutDeliveryAddressFail };
var ClearCheckoutDeliveryMode = /** @class */ (function (_super) {
    __extends(ClearCheckoutDeliveryMode, _super);
    function ClearCheckoutDeliveryMode(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CLEAR_CHECKOUT_DELIVERY_MODE;
        return _this;
    }
    return ClearCheckoutDeliveryMode;
}(EntityProcessesIncrementAction));
export { ClearCheckoutDeliveryMode };
var ClearCheckoutDeliveryModeSuccess = /** @class */ (function (_super) {
    __extends(ClearCheckoutDeliveryModeSuccess, _super);
    function ClearCheckoutDeliveryModeSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS;
        return _this;
    }
    return ClearCheckoutDeliveryModeSuccess;
}(EntityProcessesDecrementAction));
export { ClearCheckoutDeliveryModeSuccess };
var ClearCheckoutDeliveryModeFail = /** @class */ (function (_super) {
    __extends(ClearCheckoutDeliveryModeFail, _super);
    function ClearCheckoutDeliveryModeFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CLEAR_CHECKOUT_DELIVERY_MODE_FAIL;
        return _this;
    }
    return ClearCheckoutDeliveryModeFail;
}(EntityProcessesDecrementAction));
export { ClearCheckoutDeliveryModeFail };
var SetCostCenter = /** @class */ (function (_super) {
    __extends(SetCostCenter, _super);
    function SetCostCenter(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_COST_CENTER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_COST_CENTER;
        return _this;
    }
    return SetCostCenter;
}(StateUtils.EntityLoadAction));
export { SetCostCenter };
var SetCostCenterFail = /** @class */ (function (_super) {
    __extends(SetCostCenterFail, _super);
    function SetCostCenterFail(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_COST_CENTER_PROCESS_ID, payload) || this;
        _this.payload = payload;
        _this.type = SET_COST_CENTER_FAIL;
        return _this;
    }
    return SetCostCenterFail;
}(StateUtils.EntityFailAction));
export { SetCostCenterFail };
var SetCostCenterSuccess = /** @class */ (function (_super) {
    __extends(SetCostCenterSuccess, _super);
    function SetCostCenterSuccess(payload) {
        var _this = _super.call(this, PROCESS_FEATURE, SET_COST_CENTER_PROCESS_ID) || this;
        _this.payload = payload;
        _this.type = SET_COST_CENTER_SUCCESS;
        return _this;
    }
    return SetCostCenterSuccess;
}(StateUtils.EntitySuccessAction));
export { SetCostCenterSuccess };
var ResetSetCostCenterProcess = /** @class */ (function (_super) {
    __extends(ResetSetCostCenterProcess, _super);
    function ResetSetCostCenterProcess() {
        var _this = _super.call(this, PROCESS_FEATURE, SET_COST_CENTER_PROCESS_ID) || this;
        _this.type = RESET_SET_COST_CENTER_PROCESS;
        return _this;
    }
    return ResetSetCostCenterProcess;
}(StateUtils.EntityLoaderResetAction));
export { ResetSetCostCenterProcess };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2FjdGlvbnMvY2hlY2tvdXQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEdBQy9CLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1Qiw4QkFBOEIsRUFDOUIsc0NBQXNDLEVBQ3RDLDBCQUEwQixHQUMzQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUMxQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLENBQUMsSUFBTSx1Q0FBdUMsR0FDbEQsb0RBQW9ELENBQUM7QUFDdkQsTUFBTSxDQUFDLElBQU0sb0NBQW9DLEdBQy9DLGlEQUFpRCxDQUFDO0FBRXBELE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUN2Qyx5Q0FBeUMsQ0FBQztBQUM1QyxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FDL0MsaURBQWlELENBQUM7QUFDcEQsTUFBTSxDQUFDLElBQU0saUNBQWlDLEdBQzVDLDhDQUE4QyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLGlDQUFpQyxDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxJQUFNLHlCQUF5QixHQUFHLHNDQUFzQyxDQUFDO0FBQ2hGLE1BQU0sQ0FBQyxJQUFNLDRCQUE0QixHQUN2Qyx5Q0FBeUMsQ0FBQztBQUU1QyxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxpQ0FBaUMsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxzQ0FBc0MsQ0FBQztBQUNoRixNQUFNLENBQUMsSUFBTSw0QkFBNEIsR0FDdkMseUNBQXlDLENBQUM7QUFDNUMsTUFBTSxDQUFDLElBQU0sa0NBQWtDLEdBQzdDLCtDQUErQyxDQUFDO0FBRWxELE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUN4QywwQ0FBMEMsQ0FBQztBQUM3QyxNQUFNLENBQUMsSUFBTSxrQ0FBa0MsR0FDN0MsK0NBQStDLENBQUM7QUFDbEQsTUFBTSxDQUFDLElBQU0scUNBQXFDLEdBQ2hELGtEQUFrRCxDQUFDO0FBQ3JELE1BQU0sQ0FBQyxJQUFNLDhCQUE4QixHQUN6QywyQ0FBMkMsQ0FBQztBQUU5QyxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRyw4QkFBOEIsQ0FBQztBQUNoRSxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxtQ0FBbUMsQ0FBQztBQUMxRSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxzQ0FBc0MsQ0FBQztBQUNoRixNQUFNLENBQUMsSUFBTSwrQkFBK0IsR0FDMUMsNENBQTRDLENBQUM7QUFFL0MsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQ3ZDLHlDQUF5QyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxJQUFNLGlDQUFpQyxHQUM1Qyw4Q0FBOEMsQ0FBQztBQUNqRCxNQUFNLENBQUMsSUFBTSxvQ0FBb0MsR0FDL0MsaURBQWlELENBQUM7QUFDcEQsTUFBTSxDQUFDLElBQU0sMENBQTBDLEdBQ3JELHVEQUF1RCxDQUFDO0FBRTFELE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLG1DQUFtQyxDQUFDO0FBQzFFLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUN0Qyx3Q0FBd0MsQ0FBQztBQUMzQyxNQUFNLENBQUMsSUFBTSw4QkFBOEIsR0FDekMsMkNBQTJDLENBQUM7QUFFOUMsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFDcEUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcscUNBQXFDLENBQUM7QUFDOUUsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQ3RDLHdDQUF3QyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLGlDQUFpQyxHQUM1Qyw4Q0FBOEMsQ0FBQztBQUVqRCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsd0JBQXdCLENBQUM7QUFDcEQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUM7QUFDOUQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFFcEUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsb0NBQW9DLENBQUM7QUFDeEUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFFcEUsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsa0NBQWtDLENBQUM7QUFDeEUsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQ3JDLHVDQUF1QyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxJQUFNLDZCQUE2QixHQUN4QywwQ0FBMEMsQ0FBQztBQUU3QyxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyw2QkFBNkIsQ0FBQztBQUN2RSxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUU1RSxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsNEJBQTRCLENBQUM7QUFDNUQsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsaUNBQWlDLENBQUM7QUFDdEUsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsb0NBQW9DLENBQUM7QUFDNUUsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQ3hDLDBDQUEwQyxDQUFDO0FBRTdDO0lBRUUsNEJBQ1MsT0FBNkQ7UUFBN0QsWUFBTyxHQUFQLE9BQU8sQ0FBc0Q7UUFGN0QsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR2xDLENBQUM7SUFDTix5QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUVEO0lBRUUsZ0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztJQUNSLENBQUM7SUFDckMsNkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUVFLG1DQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRDFCLFNBQUksR0FBRyw0QkFBNEIsQ0FBQztJQUNQLENBQUM7SUFDekMsZ0NBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUF3QyxzQ0FBMkI7SUFFakUsNEJBQ1MsT0FBNkQ7UUFEdEUsWUFHRSxrQkFBTSxlQUFlLEVBQUUsK0JBQStCLENBQUMsU0FDeEQ7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUFzRDtRQUY3RCxVQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBS3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFQRCxDQUF3QyxVQUFVLENBQUMsZ0JBQWdCLEdBT2xFOztBQUVEO0lBQTRDLDBDQUEyQjtJQUVyRSxnQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSwrQkFBK0IsRUFBRSxPQUFPLENBQUMsU0FDakU7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixVQUFJLEdBQUcseUJBQXlCLENBQUM7O0lBRzFDLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxVQUFVLENBQUMsZ0JBQWdCLEdBS3RFOztBQUVEO0lBQStDLDZDQUE4QjtJQUUzRSxtQ0FBbUIsT0FBZ0I7UUFBbkMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsK0JBQStCLENBQUMsU0FDeEQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixVQUFJLEdBQUcsNEJBQTRCLENBQUM7O0lBRzdDLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFMRCxDQUErQyxVQUFVLENBQUMsbUJBQW1CLEdBSzVFOztBQUVEO0lBQW9ELGtEQUFrQztJQUVwRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLCtCQUErQixDQUFDLFNBQ3hEO1FBSFEsVUFBSSxHQUFHLGtDQUFrQyxDQUFDOztJQUduRCxDQUFDO0lBQ0gscUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBb0QsVUFBVSxDQUFDLHVCQUF1QixHQUtyRjs7QUFFRDtJQUFnRCw4Q0FBMkI7SUFFekUsb0NBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNDQUFzQyxDQUFDLFNBQy9EO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFVBQUksR0FBRyw2QkFBNkIsQ0FBQzs7SUFHOUMsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQUxELENBQWdELFVBQVUsQ0FBQyxnQkFBZ0IsR0FLMUU7O0FBRUQ7SUFBb0Qsa0RBQTJCO0lBRTdFLHdDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNDQUFzQyxDQUFDLFNBQy9EO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLGtDQUFrQyxDQUFDOztJQUduRCxDQUFDO0lBQ0gscUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBb0QsVUFBVSxDQUFDLGdCQUFnQixHQUs5RTs7QUFFRDtJQUF1RCxxREFBOEI7SUFFbkYsMkNBQW1CLE9BQXVCO1FBQTFDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLHNDQUFzQyxDQUFDLFNBQy9EO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWdCO1FBRGpDLFVBQUksR0FBRyxxQ0FBcUMsQ0FBQzs7SUFHdEQsQ0FBQztJQUNILHdDQUFDO0FBQUQsQ0FBQyxBQUxELENBQXVELFVBQVUsQ0FBQyxtQkFBbUIsR0FLcEY7O0FBRUQ7SUFBNEQsMERBQWtDO0lBRTVGO1FBQUEsWUFDRSxrQkFBTSxlQUFlLEVBQUUsc0NBQXNDLENBQUMsU0FDL0Q7UUFIUSxVQUFJLEdBQUcsMENBQTBDLENBQUM7O0lBRzNELENBQUM7SUFDSCw2Q0FBQztBQUFELENBQUMsQUFMRCxDQUE0RCxVQUFVLENBQUMsdUJBQXVCLEdBSzdGOztBQUVEO0lBQXFDLG1DQUEyQjtJQUU5RCx5QkFDUyxPQUFtRTtRQUQ1RSxZQUdFLGtCQUFNLGVBQWUsRUFBRSw0QkFBNEIsQ0FBQyxTQUNyRDtRQUhRLGFBQU8sR0FBUCxPQUFPLENBQTREO1FBRm5FLFVBQUksR0FBRyxpQkFBaUIsQ0FBQzs7SUFLbEMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FPL0Q7O0FBRUQ7SUFBeUMsdUNBQTJCO0lBRWxFLDZCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxTQUM5RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyxzQkFBc0IsQ0FBQzs7SUFHdkMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLbkU7O0FBRUQ7SUFBNEMsMENBQThCO0lBRXhFLGdDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDRCQUE0QixDQUFDLFNBQ3JEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUcxQyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsVUFBVSxDQUFDLG1CQUFtQixHQUt6RTs7QUFFRDtJQUFpRCwrQ0FBa0M7SUFFakY7UUFBQSxZQUNFLGtCQUFNLGVBQWUsRUFBRSw0QkFBNEIsQ0FBQyxTQUNyRDtRQUhRLFVBQUksR0FBRywrQkFBK0IsQ0FBQzs7SUFHaEQsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlELFVBQVUsQ0FBQyx1QkFBdUIsR0FLbEY7O0FBRUQ7SUFBMEMsd0NBQTJCO0lBRW5FLDhCQUNTLE9BSU47UUFMSCxZQU9FLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxTQUN2RDtRQVBRLGFBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxVQUFJLEdBQUcsc0JBQXNCLENBQUM7O0lBU3ZDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFYRCxDQUEwQyxVQUFVLENBQUMsZ0JBQWdCLEdBV3BFOztBQUVEO0lBQThDLDRDQUEyQjtJQUV2RSxrQ0FBbUIsT0FBWTtRQUEvQixZQUNFLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxTQUN2RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRywyQkFBMkIsQ0FBQzs7SUFHNUMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLeEU7O0FBRUQ7SUFFRSxxQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFEakMsU0FBSSxHQUFHLDhCQUE4QixDQUFDO0lBQ0YsQ0FBQztJQUNoRCxrQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQTJDLHlDQUE4QjtJQUV2RTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixDQUFDLFNBQ3ZEO1FBSFEsVUFBSSxHQUFHLHVCQUF1QixDQUFDOztJQUd4QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBMkMsVUFBVSxDQUFDLG1CQUFtQixHQUt4RTs7QUFFRDtJQUF1QyxxQ0FBMkI7SUFFaEUsMkJBQ1MsT0FJTjtRQUxILFlBT0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixDQUFDLFNBQ3ZEO1FBUFEsYUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFVBQUksR0FBRyxtQkFBbUIsQ0FBQzs7SUFTcEMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXVDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FXakU7O0FBRUQ7SUFBMkMseUNBQTJCO0lBRXBFLCtCQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxTQUNoRTtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTJDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLckU7O0FBRUQ7SUFBOEMsNENBQThCO0lBRTFFLGtDQUFtQixPQUF1QjtRQUExQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSw4QkFBOEIsQ0FBQyxTQUN2RDtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQURqQyxVQUFJLEdBQUcsMkJBQTJCLENBQUM7O0lBRzVDLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFMRCxDQUE4QyxVQUFVLENBQUMsbUJBQW1CLEdBSzNFOztBQUVEO0lBQW1ELGlEQUFrQztJQUVuRjtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDhCQUE4QixDQUFDLFNBQ3ZEO1FBSFEsVUFBSSxHQUFHLGlDQUFpQyxDQUFDOztJQUdsRCxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBbUQsVUFBVSxDQUFDLHVCQUF1QixHQUtwRjs7QUFFRDtJQUVFLG9CQUFtQixPQUEyQztRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3FDLENBQUM7SUFDcEUsaUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUVFLHdCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDQyxDQUFDO0lBQ3JDLHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFFRSwyQkFBbUIsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87UUFEeEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0EsQ0FBQztJQUN2Qyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQUE7UUFDVyxTQUFJLEdBQUcsOEJBQThCLENBQUM7SUFDakQsQ0FBQztJQUFELGtDQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQ7SUFFRSwyQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0MsQ0FBQztJQUN4Qyx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQUE7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDdEMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQ7SUFBeUMsdUNBQTJCO0lBRWxFLDZCQUFtQixPQUEyQztRQUE5RCxZQUNFLGtCQUFNLGdCQUFnQixDQUFDLFNBQ3hCO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFHdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FLbkU7O0FBRUQ7SUFBNkMsMkNBQTJCO0lBRXRFLGlDQUFtQixPQUFZO1FBQS9CLFlBQ0Usa0JBQU0sZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLFNBQ2pDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUczQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNkMsVUFBVSxDQUFDLGdCQUFnQixHQUt2RTs7QUFFRDtJQUFnRCw4Q0FBOEI7SUFFNUUsb0NBQW1CLE9BQXdCO1FBQTNDLFlBQ0Usa0JBQU0sZ0JBQWdCLENBQUMsU0FDeEI7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFEbEMsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0QsVUFBVSxDQUFDLG1CQUFtQixHQUs3RTs7QUFFRDtJQUFBO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDO0lBQzVDLENBQUM7SUFBRCw2QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVEO0lBRUUsc0NBQW1CLE9BQTJDO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRywrQkFBK0IsQ0FBQztJQUNpQixDQUFDO0lBQ3BFLG1DQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFFRTtRQURTLFNBQUksR0FBRyx1Q0FBdUMsQ0FBQztJQUN6QyxDQUFDO0lBQ2xCLDBDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFFRSwwQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9DQUFvQyxDQUFDO0lBQ25CLENBQUM7SUFDckMsdUNBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUErQyw2Q0FBOEI7SUFFM0UsbUNBQW1CLE9BQTJDO1FBQTlELFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FDdkM7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFEckQsVUFBSSxHQUFHLDRCQUE0QixDQUFDOztJQUc3QyxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBK0MsOEJBQThCLEdBSzVFOztBQUVEO0lBQXNELG9EQUE4QjtJQUVsRiwwQ0FBbUIsT0FBMkM7UUFBOUQsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUN2QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcsb0NBQW9DLENBQUM7O0lBR3JELENBQUM7SUFDSCx1Q0FBQztBQUFELENBQUMsQUFMRCxDQUFzRCw4QkFBOEIsR0FLbkY7O0FBRUQ7SUFBbUQsaURBQThCO0lBRS9FLHVDQUFtQixPQUF1RDtRQUExRSxZQUNFLGtCQUFNLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQ3ZDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWdEO1FBRGpFLFVBQUksR0FBRyxpQ0FBaUMsQ0FBQzs7SUFHbEQsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQUxELENBQW1ELDhCQUE4QixHQUtoRjs7QUFFRDtJQUFtQyxpQ0FBMkI7SUFFNUQsdUJBQ1MsT0FBaUU7UUFEMUUsWUFHRSxrQkFBTSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsU0FDbkQ7UUFIUSxhQUFPLEdBQVAsT0FBTyxDQUEwRDtRQUZqRSxVQUFJLEdBQUcsZUFBZSxDQUFDOztJQUtoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBbUMsVUFBVSxDQUFDLGdCQUFnQixHQU83RDs7QUFFRDtJQUF1QyxxQ0FBMkI7SUFFaEUsMkJBQW1CLE9BQVk7UUFBL0IsWUFDRSxrQkFBTSxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLFNBQzVEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsVUFBSSxHQUFHLG9CQUFvQixDQUFDOztJQUdyQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBdUMsVUFBVSxDQUFDLGdCQUFnQixHQUtqRTs7QUFFRDtJQUEwQyx3Q0FBOEI7SUFFdEUsOEJBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsU0FDbkQ7UUFGa0IsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixVQUFJLEdBQUcsdUJBQXVCLENBQUM7O0lBR3hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFMRCxDQUEwQyxVQUFVLENBQUMsbUJBQW1CLEdBS3ZFOztBQUVEO0lBQStDLDZDQUFrQztJQUUvRTtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLDBCQUEwQixDQUFDLFNBQ25EO1FBSFEsVUFBSSxHQUFHLDZCQUE2QixDQUFDOztJQUc5QyxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBK0MsVUFBVSxDQUFDLHVCQUF1QixHQUtoRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uLy4uLy4uL2NhcnQvc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlLCBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IFBST0NFU1NfRkVBVFVSRSB9IGZyb20gJy4uLy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQge1xuICBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24sXG4gIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIvZW50aXR5LXByb2Nlc3Nlcy1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ0hFQ0tPVVRfREVUQUlMUyxcbiAgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCxcbiAgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lELFxuICBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCxcbiAgU0VUX0NPU1RfQ0VOVEVSX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1MgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBBZGRyZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBBZGRyZXNzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERlbGl2ZXJ5IEFkZHJlc3MgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgTW9kZSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gQ2xlYXIgQ2hlY2tvdXQgRGVsaXZlcnkgTW9kZSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFX0ZBSUwgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBDaGVja291dCBEZWxpdmVyeSBNb2RlIEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1MgPSAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyc7XG5leHBvcnQgY29uc3QgQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTCA9ICdbQ2hlY2tvdXRdIEFkZCBEZWxpdmVyeSBBZGRyZXNzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IEFERF9ERUxJVkVSWV9BRERSRVNTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBBZGQgRGVsaXZlcnkgQWRkcmVzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTID0gJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgQWRkcmVzcyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IERlbGl2ZXJ5IEFkZHJlc3MgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBEZWxpdmVyeSBBZGRyZXNzIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBMb2FkIFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVMgPVxuICAnW0NoZWNrb3V0XSBDbGVhciBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMnO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREUgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSc7XG5leHBvcnQgY29uc3QgU0VUX0RFTElWRVJZX01PREVfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBEZWxpdmVyeSBNb2RlIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUxJVkVSWV9NT0RFX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBTZXQgRGVsaXZlcnkgTW9kZSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTID1cbiAgJ1tDaGVja291dF0gUmVzZXQgU2V0IERlbGl2ZXJ5IE1vZGUgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTID1cbiAgJ1tDaGVja291dF0gU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2Rlcyc7XG5leHBvcnQgY29uc3QgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFU19GQUlMID1cbiAgJ1tDaGVja291dF0gU2V0IFN1cHBvcnRlZCBEZWxpdmVyeSBNb2RlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBTZXQgU3VwcG9ydGVkIERlbGl2ZXJ5IE1vZGVzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX1NVUFBPUlRFRF9TRVRfREVMSVZFUllfTU9ERVNfUFJPQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIFJlc2V0IFNldCBTdXBwb3J0ZWQgRGVsaXZlcnkgTW9kZXMgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTID0gJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBWU1FTlRfREVUQUlMU19GQUlMID1cbiAgJ1tDaGVja291dF0gQ3JlYXRlIFBheW1lbnQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1MgPVxuICAnW0NoZWNrb3V0XSBDcmVhdGUgUGF5bWVudCBEZXRhaWxzIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMUyA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMnO1xuZXhwb3J0IGNvbnN0IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTCA9ICdbQ2hlY2tvdXRdIFNldCBQYXltZW50IERldGFpbHMgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX1BBWU1FTlRfREVUQUlMU19TVUNDRVNTID1cbiAgJ1tDaGVja291dF0gU2V0IFBheW1lbnQgRGV0YWlscyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRVNFVF9TRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgUGF5bWVudCBEZXRhaWxzIFByb2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVIgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlcic7XG5leHBvcnQgY29uc3QgUExBQ0VfT1JERVJfRkFJTCA9ICdbQ2hlY2tvdXRdIFBsYWNlIE9yZGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFBMQUNFX09SREVSX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBQbGFjZSBPcmRlciBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NIRUNLT1VUX1NURVAgPSAnW0NoZWNrb3V0XSBDbGVhciBPbmUgQ2hlY2tvdXQgU3RlcCc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ0hFQ0tPVVRfREFUQSA9ICdbQ2hlY2tvdXRdIENsZWFyIENoZWNrb3V0IERhdGEnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DSEVDS09VVF9ERVRBSUxTID0gJ1tDaGVja291dF0gTG9hZCBDaGVja291dCBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTCA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUyA9XG4gICdbQ2hlY2tvdXRdIExvYWQgQ2hlY2tvdXQgRGV0YWlscyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEEgPSAnW0NoZWNrb3V0XSBDbGVhciBNaXNjcyBEYXRhJztcbmV4cG9ydCBjb25zdCBQQVlNRU5UX1BST0NFU1NfU1VDQ0VTUyA9ICdbQ2hlY2tvdXRdIFBheW1lbnQgUHJvY2VzcyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IFNFVF9DT1NUX0NFTlRFUiA9ICdbQ2hlY2tvdXRdIFNldCBDb3N0IENlbnRlcic7XG5leHBvcnQgY29uc3QgU0VUX0NPU1RfQ0VOVEVSX0ZBSUwgPSAnW0NoZWNrb3V0XSBTZXQgQ29zdCBDZW50ZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0NPU1RfQ0VOVEVSX1NVQ0NFU1MgPSAnW0NoZWNrb3V0XSBTZXQgQ29zdCBDZW50ZXIgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTRVRfU0VUX0NPU1RfQ0VOVEVSX1BST0NFU1MgPVxuICAnW0NoZWNrb3V0XSBSZXNldCBTZXQgQ29zdCBDZW50ZXIgUHJvY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBBZGREZWxpdmVyeUFkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFkZERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeUFkZHJlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgYWRkcmVzczogQWRkcmVzcyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX0FERFJFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZHJlc3MpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFU0VUX1NFVF9ERUxJVkVSWV9BRERSRVNTX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX0FERFJFU1NfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfU1VQUE9SVEVEX0RFTElWRVJZX01PREVTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERlbGl2ZXJ5TW9kZVtdKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfU1VQUE9SVEVEX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TVVBQT1JURURfU0VUX0RFTElWRVJZX01PREVTX1BST0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWxpdmVyeU1vZGUgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgc2VsZWN0ZWRNb2RlSWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZUZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREVfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFTElWRVJZX01PREVfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0U2V0RGVsaXZlcnlNb2RlUHJvY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX0RFTElWRVJZX01PREVfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfREVMSVZFUllfTU9ERV9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGF5bWVudERldGFpbHMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1BBWU1FTlRfREVUQUlMUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfUEFZTUVOVF9ERVRBSUxTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXltZW50RGV0YWlscykge31cbn1cblxuZXhwb3J0IGNsYXNzIFBheW1lbnRQcm9jZXNzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBQQVlNRU5UX1BST0NFU1NfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRQYXltZW50RGV0YWlscyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfUEFZTUVOVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0UGF5bWVudERldGFpbHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9QQVlNRU5UX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBheW1lbnREZXRhaWxzKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfUEFZTUVOVF9ERVRBSUxTX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldFBheW1lbnREZXRhaWxzUHJvY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVTRVRfU0VUX1BBWU1FTlRfREVUQUlMU19QUk9DRVNTO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFNFVF9QQVlNRU5UX0RFVEFJTFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlckZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUExBQ0VfT1JERVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFBMQUNFX09SREVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcmRlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9TVVBQT1JURURfREVMSVZFUllfTU9ERVM7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0U3RlcCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9TVEVQO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogbnVtYmVyKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREFUQTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDaGVja291dERldGFpbHMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DSEVDS09VVF9ERVRBSUxTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NIRUNLT1VUX0RFVEFJTFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoZWNrb3V0RGV0YWlscykge1xuICAgIHN1cGVyKENIRUNLT1VUX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVja291dENsZWFyTWlzY3NEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEE7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX0FERFJFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfQUREUkVTU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NIRUNLT1VUX0RFTElWRVJZX01PREVfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWwgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0hFQ0tPVVRfREVMSVZFUllfTU9ERV9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRDb3N0Q2VudGVyIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9DT1NUX0NFTlRFUjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBjb3N0Q2VudGVySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0NPU1RfQ0VOVEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRDb3N0Q2VudGVyRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQ09TVF9DRU5URVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0NPU1RfQ0VOVEVSX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRDb3N0Q2VudGVyU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQ09TVF9DRU5URVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgU0VUX0NPU1RfQ0VOVEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNldFNldENvc3RDZW50ZXJQcm9jZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9TRVRfQ09TVF9DRU5URVJfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBTRVRfQ09TVF9DRU5URVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2hlY2tvdXRBY3Rpb24gPVxuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc1xuICB8IEFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgfCBBZGREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzXG4gIHwgU2V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICB8IFNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBSZXNldFNldERlbGl2ZXJ5QWRkcmVzc1Byb2Nlc3NcbiAgfCBMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICB8IExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2Vzc1xuICB8IFNldERlbGl2ZXJ5TW9kZVxuICB8IFNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgfCBTZXREZWxpdmVyeU1vZGVTdWNjZXNzXG4gIHwgUmVzZXRTZXREZWxpdmVyeU1vZGVQcm9jZXNzXG4gIHwgQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gIHwgQ3JlYXRlUGF5bWVudERldGFpbHNcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc0ZhaWxcbiAgfCBDcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgfCBTZXRQYXltZW50RGV0YWlsc1xuICB8IFNldFBheW1lbnREZXRhaWxzRmFpbFxuICB8IFNldFBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICB8IFJlc2V0U2V0UGF5bWVudERldGFpbHNQcm9jZXNzXG4gIHwgUGxhY2VPcmRlclxuICB8IFBsYWNlT3JkZXJGYWlsXG4gIHwgUGxhY2VPcmRlclN1Y2Nlc3NcbiAgfCBDbGVhckNoZWNrb3V0U3RlcFxuICB8IENsZWFyQ2hlY2tvdXREYXRhXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1xuICB8IENsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlXG4gIHwgQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWxcbiAgfCBDbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICB8IExvYWRDaGVja291dERldGFpbHNcbiAgfCBMb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICB8IExvYWRDaGVja291dERldGFpbHNTdWNjZXNzXG4gIHwgQ2hlY2tvdXRDbGVhck1pc2NzRGF0YVxuICB8IFNldENvc3RDZW50ZXJcbiAgfCBTZXRDb3N0Q2VudGVyRmFpbFxuICB8IFNldENvc3RDZW50ZXJTdWNjZXNzXG4gIHwgUmVzZXRTZXRDb3N0Q2VudGVyUHJvY2VzcztcbiJdfQ==