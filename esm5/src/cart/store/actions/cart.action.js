import { __extends } from "tslib";
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { ProcessesLoaderResetAction } from '../../../state/utils/processes-loader/processes-loader.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export var CREATE_CART = '[Cart] Create Cart';
export var CREATE_CART_FAIL = '[Cart] Create Cart Fail';
export var CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
export var LOAD_CART = '[Cart] Load Cart';
export var LOAD_CART_FAIL = '[Cart] Load Cart Fail';
export var LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
export var ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
export var ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
export var ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
export var MERGE_CART = '[Cart] Merge Cart';
export var MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
export var RESET_CART_DETAILS = '[Cart] Reset Cart Details';
export var REMOVE_CART = '[Cart] Remove Cart';
export var DELETE_CART = '[Cart] Delete Cart';
export var DELETE_CART_SUCCESS = '[Cart] Delete Cart Success';
export var DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
var CreateCart = /** @class */ (function (_super) {
    __extends(CreateCart, _super);
    function CreateCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = CREATE_CART;
        return _this;
    }
    return CreateCart;
}(EntityLoadAction));
export { CreateCart };
var CreateCartFail = /** @class */ (function (_super) {
    __extends(CreateCartFail, _super);
    function CreateCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_FAIL;
        return _this;
    }
    return CreateCartFail;
}(EntityFailAction));
export { CreateCartFail };
var CreateCartSuccess = /** @class */ (function (_super) {
    __extends(CreateCartSuccess, _super);
    function CreateCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = CREATE_CART_SUCCESS;
        return _this;
    }
    return CreateCartSuccess;
}(EntitySuccessAction));
export { CreateCartSuccess };
var AddEmailToCart = /** @class */ (function (_super) {
    __extends(AddEmailToCart, _super);
    function AddEmailToCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART;
        return _this;
    }
    return AddEmailToCart;
}(EntityProcessesIncrementAction));
export { AddEmailToCart };
var AddEmailToCartFail = /** @class */ (function (_super) {
    __extends(AddEmailToCartFail, _super);
    function AddEmailToCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_FAIL;
        return _this;
    }
    return AddEmailToCartFail;
}(EntityProcessesDecrementAction));
export { AddEmailToCartFail };
var AddEmailToCartSuccess = /** @class */ (function (_super) {
    __extends(AddEmailToCartSuccess, _super);
    function AddEmailToCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = ADD_EMAIL_TO_CART_SUCCESS;
        return _this;
    }
    return AddEmailToCartSuccess;
}(EntityProcessesDecrementAction));
export { AddEmailToCartSuccess };
var LoadCart = /** @class */ (function (_super) {
    __extends(LoadCart, _super);
    function LoadCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = LOAD_CART;
        return _this;
    }
    return LoadCart;
}(EntityLoadAction));
export { LoadCart };
var LoadCartFail = /** @class */ (function (_super) {
    __extends(LoadCartFail, _super);
    function LoadCartFail(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId, payload.error) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_FAIL;
        return _this;
    }
    return LoadCartFail;
}(EntityFailAction));
export { LoadCartFail };
var LoadCartSuccess = /** @class */ (function (_super) {
    __extends(LoadCartSuccess, _super);
    function LoadCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = LOAD_CART_SUCCESS;
        return _this;
    }
    return LoadCartSuccess;
}(EntitySuccessAction));
export { LoadCartSuccess };
var MergeCart = /** @class */ (function () {
    function MergeCart(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
    return MergeCart;
}());
export { MergeCart };
var MergeCartSuccess = /** @class */ (function (_super) {
    __extends(MergeCartSuccess, _super);
    function MergeCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.oldCartId) || this;
        _this.payload = payload;
        _this.type = MERGE_CART_SUCCESS;
        return _this;
    }
    return MergeCartSuccess;
}(EntityRemoveAction));
export { MergeCartSuccess };
/**
 * On site context change we want to keep current list of entities, but we want to clear the value and flags.
 * With ProcessesLoaderResetAction we run it on every entity of this type.
 */
var ResetCartDetails = /** @class */ (function (_super) {
    __extends(ResetCartDetails, _super);
    function ResetCartDetails() {
        var _this = _super.call(this, MULTI_CART_DATA) || this;
        _this.type = RESET_CART_DETAILS;
        return _this;
    }
    return ResetCartDetails;
}(ProcessesLoaderResetAction));
export { ResetCartDetails };
/**
 * Used for cleaning cart in local state, when we get information that it no longer exists in the backend.
 * For removing particular cart in both places use DeleteCart actions.
 */
var RemoveCart = /** @class */ (function (_super) {
    __extends(RemoveCart, _super);
    function RemoveCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = REMOVE_CART;
        return _this;
    }
    return RemoveCart;
}(EntityRemoveAction));
export { RemoveCart };
var DeleteCart = /** @class */ (function () {
    function DeleteCart(payload) {
        this.payload = payload;
        this.type = DELETE_CART;
    }
    return DeleteCart;
}());
export { DeleteCart };
var DeleteCartSuccess = /** @class */ (function (_super) {
    __extends(DeleteCartSuccess, _super);
    function DeleteCartSuccess(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.cartId) || this;
        _this.payload = payload;
        _this.type = DELETE_CART_SUCCESS;
        return _this;
    }
    return DeleteCartSuccess;
}(EntityRemoveAction));
export { DeleteCartSuccess };
var DeleteCartFail = /** @class */ (function () {
    function DeleteCartFail(payload) {
        this.payload = payload;
        this.type = DELETE_CART_FAIL;
    }
    return DeleteCartFail;
}());
export { DeleteCartFail };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixHQUMvQixNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUM7QUFDaEQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFDMUQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsNEJBQTRCLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQzVDLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztBQUN0RCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUU1RCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRywrQkFBK0IsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxrQ0FBa0MsQ0FBQztBQUU1RSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUM7QUFDOUMsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsMkJBQTJCLENBQUM7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aUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBZ0Msa0JBQWtCLEdBS2pEOztBQUVEO0lBRUUsb0JBQW1CLE9BQTJDO1FBQTNDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxXQUFXLENBQUM7SUFDcUMsQ0FBQztJQUNwRSxpQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQXVDLHFDQUFrQjtJQUV2RCwyQkFBbUIsT0FBMkM7UUFBOUQsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUN2QztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxVQUFJLEdBQUcsbUJBQW1CLENBQUM7O0lBR3BDLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFMRCxDQUF1QyxrQkFBa0IsR0FLeEQ7O0FBRUQ7SUFFRSx3QkFBbUIsT0FBdUQ7UUFBdkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0Q7UUFEakUsU0FBSSxHQUFHLGdCQUFnQixDQUFDO0lBQzRDLENBQUM7SUFDaEYscUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlSZW1vdmVBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9EQVRBIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX0ZBSUwgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUID0gJ1tDYXJ0XSBMb2FkIENhcnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBMb2FkIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIExvYWQgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19DQVJUID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlRfRkFJTCA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUID0gJ1tDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJUX0RFVEFJTFMgPSAnW0NhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVCA9ICdbQ2FydF0gUmVtb3ZlIENhcnQnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBUlQgPSAnW0NhcnRdIERlbGV0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBGYWlsJztcblxuaW50ZXJmYWNlIENyZWF0ZUNhcnRQYXlsb2FkIHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIC8qKiBVc2VkIGFzIGEgdW5pcXVlIGtleSBpbiBuZ3J4IGNhcnRzIHN0b3JlICh3ZSBkb24ndCBrbm93IGNhcnRJZCBhdCB0aGF0IHRpbWUpICovXG4gIHRlbXBDYXJ0SWQ6IHN0cmluZztcbiAgZXh0cmFEYXRhPzoge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gIH07XG4gIC8qKiBBbm9ueW1vdXMgY2FydCB3aGljaCBzaG91bGQgYmUgbWVyZ2VkIHRvIG5ldyBjYXJ0ICovXG4gIG9sZENhcnRJZD86IHN0cmluZztcbiAgLyoqIENhcnQgdG8gd2hpY2ggc2hvdWxkIHdlIG1lcmdlIChub3QgcGFzc2luZyB0aGlzIHdpbGwgY3JlYXRlIG5ldyBjYXJ0KSAqL1xuICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENyZWF0ZUNhcnRQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBDcmVhdGVDYXJ0RmFpbFBheWxvYWQgZXh0ZW5kcyBDcmVhdGVDYXJ0UGF5bG9hZCB7XG4gIGVycm9yOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENyZWF0ZUNhcnRGYWlsUGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC50ZW1wQ2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ3JlYXRlQ2FydFN1Y2Nlc3NQYXlsb2FkIGV4dGVuZHMgQ3JlYXRlQ2FydFBheWxvYWQge1xuICBjYXJ0OiBDYXJ0O1xuICBjYXJ0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3JlYXRlQ2FydFN1Y2Nlc3NQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgZXJyb3I6IGFueTtcbiAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkQ2FydFBheWxvYWQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgY2FydElkOiBzdHJpbmc7XG4gIGV4dHJhRGF0YT86IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExvYWRDYXJ0UGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkQ2FydEZhaWxQYXlsb2FkIGV4dGVuZHMgTG9hZENhcnRQYXlsb2FkIHtcbiAgZXJyb3I6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMb2FkQ2FydEZhaWxQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuaW50ZXJmYWNlIExvYWRDYXJ0U3VjY2Vzc1BheWxvYWQgZXh0ZW5kcyBMb2FkQ2FydFBheWxvYWQge1xuICBjYXJ0OiBDYXJ0O1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExvYWRDYXJ0U3VjY2Vzc1BheWxvYWQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTWVyZ2VDYXJ0UGF5bG9hZCB7XG4gIGNhcnRJZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgZXh0cmFEYXRhPzogeyBhY3RpdmU/OiBib29sZWFuIH07XG4gIC8qKlxuICAgKiBNZXJnZUNhcnQgYWN0aW9ucyB0cmlnZ2VycyBDcmVhdGVDYXJ0IHdoaWNoIHJlcXVpcmVzIHRoaXMgcGFyYW1ldGVyLCBzbyB0aGF0J3Mgd2h5IGl0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgdGVtcENhcnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBNZXJnZUNhcnRQYXlsb2FkKSB7fVxufVxuXG5pbnRlcmZhY2UgTWVyZ2VDYXJ0U3VjY2Vzc1BheWxvYWQgZXh0ZW5kcyBNZXJnZUNhcnRQYXlsb2FkIHtcbiAgLyoqXG4gICAqIFByZXZpb3VzIGNhcnQgaWQgd2hpY2ggd2FzIG1lcmdlZCB3aXRoIG5ldy91c2VyIGNhcnQuXG4gICAqIE5lZWRlZCB0byBrbm93IHdoaWNoIG9ic29sZXRlIGVudGl0eSBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICovXG4gIG9sZENhcnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBNZXJnZUNhcnRTdWNjZXNzUGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5vbGRDYXJ0SWQpO1xuICB9XG59XG5cbi8qKlxuICogT24gc2l0ZSBjb250ZXh0IGNoYW5nZSB3ZSB3YW50IHRvIGtlZXAgY3VycmVudCBsaXN0IG9mIGVudGl0aWVzLCBidXQgd2Ugd2FudCB0byBjbGVhciB0aGUgdmFsdWUgYW5kIGZsYWdzLlxuICogV2l0aCBQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB3ZSBydW4gaXQgb24gZXZlcnkgZW50aXR5IG9mIHRoaXMgdHlwZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc2V0Q2FydERldGFpbHMgZXh0ZW5kcyBQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9DQVJUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2VkIGZvciBjbGVhbmluZyBjYXJ0IGluIGxvY2FsIHN0YXRlLCB3aGVuIHdlIGdldCBpbmZvcm1hdGlvbiB0aGF0IGl0IG5vIGxvbmdlciBleGlzdHMgaW4gdGhlIGJhY2tlbmQuXG4gKiBGb3IgcmVtb3ZpbmcgcGFydGljdWxhciBjYXJ0IGluIGJvdGggcGxhY2VzIHVzZSBEZWxldGVDYXJ0IGFjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYXJ0IGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2FydEZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlcnJvcjogYW55IH0pIHt9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPVxuICB8IENyZWF0ZUNhcnRcbiAgfCBDcmVhdGVDYXJ0RmFpbFxuICB8IENyZWF0ZUNhcnRTdWNjZXNzXG4gIHwgTG9hZENhcnRcbiAgfCBMb2FkQ2FydEZhaWxcbiAgfCBMb2FkQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZUNhcnRcbiAgfCBNZXJnZUNhcnRTdWNjZXNzXG4gIHwgUmVzZXRDYXJ0RGV0YWlsc1xuICB8IEFkZEVtYWlsVG9DYXJ0XG4gIHwgQWRkRW1haWxUb0NhcnRGYWlsXG4gIHwgQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gIHwgRGVsZXRlQ2FydFxuICB8IERlbGV0ZUNhcnRTdWNjZXNzXG4gIHwgRGVsZXRlQ2FydEZhaWxcbiAgfCBSZW1vdmVDYXJ0O1xuIl19