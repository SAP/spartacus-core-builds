import { Action } from '@ngrx/store';
import { Address } from '../../../model/address.model';
import { PaymentDetails } from '../../../model/cart.model';
import { DeliveryMode, Order } from '../../../model/order.model';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { StateUtils } from '../../../state/utils/index';
import { CheckoutDetails } from '../../models/checkout.model';
export declare const CLEAR_CHECKOUT_DELIVERY_ADDRESS = "[Checkout] Clear Checkout Delivery Address";
export declare const CLEAR_CHECKOUT_DELIVERY_ADDRESS_SUCCESS = "[Checkout] Clear Checkout Delivery Address Success";
export declare const CLEAR_CHECKOUT_DELIVERY_ADDRESS_FAIL = "[Checkout] Clear Checkout Delivery Address Fail";
export declare const CLEAR_CHECKOUT_DELIVERY_MODE = "[Checkout] Clear Checkout Delivery Mode";
export declare const CLEAR_CHECKOUT_DELIVERY_MODE_SUCCESS = "[Checkout] Clear Checkout Delivery Mode Success";
export declare const CLEAR_CHECKOUT_DELIVERY_MODE_FAIL = "[Checkout] Clear Checkout Delivery Mode Fail";
export declare const ADD_DELIVERY_ADDRESS = "[Checkout] Add Delivery Address";
export declare const ADD_DELIVERY_ADDRESS_FAIL = "[Checkout] Add Delivery Address Fail";
export declare const ADD_DELIVERY_ADDRESS_SUCCESS = "[Checkout] Add Delivery Address Success";
export declare const SET_DELIVERY_ADDRESS = "[Checkout] Set Delivery Address";
export declare const SET_DELIVERY_ADDRESS_FAIL = "[Checkout] Set Delivery Address Fail";
export declare const SET_DELIVERY_ADDRESS_SUCCESS = "[Checkout] Set Delivery Address Success";
export declare const RESET_SET_DELIVERY_ADDRESS_PROCESS = "[Checkout] Reset Set Delivery Address Process";
export declare const LOAD_SUPPORTED_DELIVERY_MODES = "[Checkout] Load Supported Delivery Modes";
export declare const LOAD_SUPPORTED_DELIVERY_MODES_FAIL = "[Checkout] Load Supported Delivery Modes Fail";
export declare const LOAD_SUPPORTED_DELIVERY_MODES_SUCCESS = "[Checkout] Load Supported Delivery Modes Success";
export declare const CLEAR_SUPPORTED_DELIVERY_MODES = "[Checkout] Clear Supported Delivery Modes";
export declare const SET_DELIVERY_MODE = "[Checkout] Set Delivery Mode";
export declare const SET_DELIVERY_MODE_FAIL = "[Checkout] Set Delivery Mode Fail";
export declare const SET_DELIVERY_MODE_SUCCESS = "[Checkout] Set Delivery Mode Success";
export declare const RESET_SET_DELIVERY_MODE_PROCESS = "[Checkout] Reset Set Delivery Mode Process";
export declare const SET_SUPPORTED_DELIVERY_MODES = "[Checkout] Set Supported Delivery Modes";
export declare const SET_SUPPORTED_DELIVERY_MODES_FAIL = "[Checkout] Set Supported Delivery Modes Fail";
export declare const SET_SUPPORTED_DELIVERY_MODES_SUCCESS = "[Checkout] Set Supported Delivery Modes Success";
export declare const RESET_SUPPORTED_SET_DELIVERY_MODES_PROCESS = "[Checkout] Reset Set Supported Delivery Modes Process";
export declare const CREATE_PAYMENT_DETAILS = "[Checkout] Create Payment Details";
export declare const CREATE_PAYMENT_DETAILS_FAIL = "[Checkout] Create Payment Details Fail";
export declare const CREATE_PAYMENT_DETAILS_SUCCESS = "[Checkout] Create Payment Details Success";
export declare const SET_PAYMENT_DETAILS = "[Checkout] Set Payment Details";
export declare const SET_PAYMENT_DETAILS_FAIL = "[Checkout] Set Payment Details Fail";
export declare const SET_PAYMENT_DETAILS_SUCCESS = "[Checkout] Set Payment Details Success";
export declare const RESET_SET_PAYMENT_DETAILS_PROCESS = "[Checkout] Reset Set Payment Details Process";
export declare const PLACE_ORDER = "[Checkout] Place Order";
export declare const PLACE_ORDER_FAIL = "[Checkout] Place Order Fail";
export declare const PLACE_ORDER_SUCCESS = "[Checkout] Place Order Success";
export declare const CLEAR_PLACE_ORDER = "[Checkout] Clear Place Order";
export declare const CLEAR_CHECKOUT_STEP = "[Checkout] Clear One Checkout Step";
export declare const CLEAR_CHECKOUT_DATA = "[Checkout] Clear Checkout Data";
export declare const LOAD_CHECKOUT_DETAILS = "[Checkout] Load Checkout Details";
export declare const LOAD_CHECKOUT_DETAILS_FAIL = "[Checkout] Load Checkout Details Fail";
export declare const LOAD_CHECKOUT_DETAILS_SUCCESS = "[Checkout] Load Checkout Details Success";
export declare const CHECKOUT_CLEAR_MISCS_DATA = "[Checkout] Clear Miscs Data";
export declare const PAYMENT_PROCESS_SUCCESS = "[Checkout] Payment Process Success";
export declare const SET_COST_CENTER = "[Checkout] Set Cost Center";
export declare const SET_COST_CENTER_FAIL = "[Checkout] Set Cost Center Fail";
export declare const SET_COST_CENTER_SUCCESS = "[Checkout] Set Cost Center Success";
export declare const RESET_SET_COST_CENTER_PROCESS = "[Checkout] Reset Set Cost Center Process";
export declare class AddDeliveryAddress implements Action {
    payload: {
        userId: string;
        cartId: string;
        address: Address;
    };
    readonly type = "[Checkout] Add Delivery Address";
    constructor(payload: {
        userId: string;
        cartId: string;
        address: Address;
    });
}
export declare class AddDeliveryAddressFail implements Action {
    payload: any;
    readonly type = "[Checkout] Add Delivery Address Fail";
    constructor(payload: any);
}
export declare class AddDeliveryAddressSuccess implements Action {
    payload: Address;
    readonly type = "[Checkout] Add Delivery Address Success";
    constructor(payload: Address);
}
export declare class SetDeliveryAddress extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        address: Address;
    };
    readonly type = "[Checkout] Set Delivery Address";
    constructor(payload: {
        userId: string;
        cartId: string;
        address: Address;
    });
}
export declare class SetDeliveryAddressFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Set Delivery Address Fail";
    constructor(payload: any);
}
export declare class SetDeliveryAddressSuccess extends StateUtils.EntitySuccessAction {
    payload: Address;
    readonly type = "[Checkout] Set Delivery Address Success";
    constructor(payload: Address);
}
export declare class ResetSetDeliveryAddressProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Reset Set Delivery Address Process";
    constructor();
}
export declare class LoadSupportedDeliveryModes extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Load Supported Delivery Modes";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class LoadSupportedDeliveryModesFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Load Supported Delivery Modes Fail";
    constructor(payload: any);
}
export declare class LoadSupportedDeliveryModesSuccess extends StateUtils.EntitySuccessAction {
    payload: DeliveryMode[];
    readonly type = "[Checkout] Load Supported Delivery Modes Success";
    constructor(payload: DeliveryMode[]);
}
export declare class ResetLoadSupportedDeliveryModesProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Reset Set Supported Delivery Modes Process";
    constructor();
}
export declare class SetDeliveryMode extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        selectedModeId: string;
    };
    readonly type = "[Checkout] Set Delivery Mode";
    constructor(payload: {
        userId: string;
        cartId: string;
        selectedModeId: string;
    });
}
export declare class SetDeliveryModeFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Set Delivery Mode Fail";
    constructor(payload: any);
}
export declare class SetDeliveryModeSuccess extends StateUtils.EntitySuccessAction {
    payload: string;
    readonly type = "[Checkout] Set Delivery Mode Success";
    constructor(payload: string);
}
export declare class ResetSetDeliveryModeProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Reset Set Delivery Mode Process";
    constructor();
}
export declare class CreatePaymentDetails extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    };
    readonly type = "[Checkout] Create Payment Details";
    constructor(payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    });
}
export declare class CreatePaymentDetailsFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Create Payment Details Fail";
    constructor(payload: any);
}
export declare class CreatePaymentDetailsSuccess implements Action {
    payload: PaymentDetails;
    readonly type = "[Checkout] Create Payment Details Success";
    constructor(payload: PaymentDetails);
}
export declare class PaymentProcessSuccess extends StateUtils.EntitySuccessAction {
    readonly type = "[Checkout] Payment Process Success";
    constructor();
}
export declare class SetPaymentDetails extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    };
    readonly type = "[Checkout] Set Payment Details";
    constructor(payload: {
        userId: string;
        cartId: string;
        paymentDetails: PaymentDetails;
    });
}
export declare class SetPaymentDetailsFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Set Payment Details Fail";
    constructor(payload: any);
}
export declare class SetPaymentDetailsSuccess extends StateUtils.EntitySuccessAction {
    payload: PaymentDetails;
    readonly type = "[Checkout] Set Payment Details Success";
    constructor(payload: PaymentDetails);
}
export declare class ResetSetPaymentDetailsProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Reset Set Payment Details Process";
    constructor();
}
export declare class PlaceOrder extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        termsChecked: boolean;
    };
    readonly type = "[Checkout] Place Order";
    constructor(payload: {
        userId: string;
        cartId: string;
        termsChecked: boolean;
    });
}
export declare class PlaceOrderFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Place Order Fail";
    constructor(payload: any);
}
export declare class PlaceOrderSuccess extends StateUtils.EntitySuccessAction {
    payload: Order;
    readonly type = "[Checkout] Place Order Success";
    constructor(payload: Order);
}
export declare class ClearPlaceOrder extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Clear Place Order";
    constructor();
}
export declare class ClearSupportedDeliveryModes implements Action {
    readonly type = "[Checkout] Clear Supported Delivery Modes";
}
export declare class ClearCheckoutStep implements Action {
    payload: number;
    readonly type = "[Checkout] Clear One Checkout Step";
    constructor(payload: number);
}
export declare class ClearCheckoutData implements Action {
    readonly type = "[Checkout] Clear Checkout Data";
}
export declare class LoadCheckoutDetails extends StateUtils.LoaderLoadAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Load Checkout Details";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class LoadCheckoutDetailsFail extends StateUtils.LoaderFailAction {
    payload: any;
    readonly type = "[Checkout] Load Checkout Details Fail";
    constructor(payload: any);
}
export declare class LoadCheckoutDetailsSuccess extends StateUtils.LoaderSuccessAction {
    payload: CheckoutDetails;
    readonly type = "[Checkout] Load Checkout Details Success";
    constructor(payload: CheckoutDetails);
}
export declare class CheckoutClearMiscsData implements Action {
    readonly type = "[Checkout] Clear Miscs Data";
}
export declare class ClearCheckoutDeliveryAddress implements Action {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Clear Checkout Delivery Address";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class ClearCheckoutDeliveryAddressSuccess implements Action {
    readonly type = "[Checkout] Clear Checkout Delivery Address Success";
    constructor();
}
export declare class ClearCheckoutDeliveryAddressFail implements Action {
    payload: any;
    readonly type = "[Checkout] Clear Checkout Delivery Address Fail";
    constructor(payload: any);
}
export declare class ClearCheckoutDeliveryMode extends EntityProcessesIncrementAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Clear Checkout Delivery Mode";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class ClearCheckoutDeliveryModeSuccess extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
    };
    readonly type = "[Checkout] Clear Checkout Delivery Mode Success";
    constructor(payload: {
        userId: string;
        cartId: string;
    });
}
export declare class ClearCheckoutDeliveryModeFail extends EntityProcessesDecrementAction {
    payload: {
        userId: string;
        cartId: string;
        error: any;
    };
    readonly type = "[Checkout] Clear Checkout Delivery Mode Fail";
    constructor(payload: {
        userId: string;
        cartId: string;
        error: any;
    });
}
export declare class SetCostCenter extends StateUtils.EntityLoadAction {
    payload: {
        userId: string;
        cartId: string;
        costCenterId: string;
    };
    readonly type = "[Checkout] Set Cost Center";
    constructor(payload: {
        userId: string;
        cartId: string;
        costCenterId: string;
    });
}
export declare class SetCostCenterFail extends StateUtils.EntityFailAction {
    payload: any;
    readonly type = "[Checkout] Set Cost Center Fail";
    constructor(payload: any);
}
export declare class SetCostCenterSuccess extends StateUtils.EntitySuccessAction {
    payload: string;
    readonly type = "[Checkout] Set Cost Center Success";
    constructor(payload: string);
}
export declare class ResetSetCostCenterProcess extends StateUtils.EntityLoaderResetAction {
    readonly type = "[Checkout] Reset Set Cost Center Process";
    constructor();
}
export declare type CheckoutAction = AddDeliveryAddress | AddDeliveryAddressFail | AddDeliveryAddressSuccess | SetDeliveryAddress | SetDeliveryAddressFail | SetDeliveryAddressSuccess | ResetSetDeliveryAddressProcess | LoadSupportedDeliveryModes | LoadSupportedDeliveryModesFail | LoadSupportedDeliveryModesSuccess | SetDeliveryMode | SetDeliveryModeFail | SetDeliveryModeSuccess | ResetSetDeliveryModeProcess | ClearSupportedDeliveryModes | CreatePaymentDetails | CreatePaymentDetailsFail | CreatePaymentDetailsSuccess | SetPaymentDetails | SetPaymentDetailsFail | SetPaymentDetailsSuccess | ResetSetPaymentDetailsProcess | PlaceOrder | PlaceOrderFail | PlaceOrderSuccess | ClearCheckoutStep | ClearCheckoutData | ClearCheckoutDeliveryAddress | ClearCheckoutDeliveryAddressFail | ClearCheckoutDeliveryAddressSuccess | ClearCheckoutDeliveryMode | ClearCheckoutDeliveryModeFail | ClearCheckoutDeliveryModeSuccess | LoadCheckoutDetails | LoadCheckoutDetailsFail | LoadCheckoutDetailsSuccess | CheckoutClearMiscsData | SetCostCenter | SetCostCenterFail | SetCostCenterSuccess | ResetSetCostCenterProcess;
