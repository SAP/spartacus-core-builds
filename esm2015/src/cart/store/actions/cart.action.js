import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAction } from '../../../state/utils/entity/entity.action';
import { ProcessesLoaderResetAction } from '../../../state/utils/processes-loader/processes-loader.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export const CREATE_CART = '[Cart] Create Cart';
export const CREATE_CART_FAIL = '[Cart] Create Cart Fail';
export const CREATE_CART_SUCCESS = '[Cart] Create Cart Success';
export const LOAD_CART = '[Cart] Load Cart';
export const LOAD_CART_FAIL = '[Cart] Load Cart Fail';
export const LOAD_CART_SUCCESS = '[Cart] Load Cart Success';
export const ADD_EMAIL_TO_CART = '[Cart] Add Email to Cart';
export const ADD_EMAIL_TO_CART_FAIL = '[Cart] Add Email to Cart Fail';
export const ADD_EMAIL_TO_CART_SUCCESS = '[Cart] Add Email to Cart Success';
export const MERGE_CART = '[Cart] Merge Cart';
export const MERGE_CART_SUCCESS = '[Cart] Merge Cart Success';
export const RESET_CART_DETAILS = '[Cart] Reset Cart Details';
export const REMOVE_CART = '[Cart] Remove Cart';
export const DELETE_CART = '[Cart] Delete Cart';
export const DELETE_CART_SUCCESS = '[Cart] Delete Cart Success';
export const DELETE_CART_FAIL = '[Cart] Delete Cart Fail';
export class CreateCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = CREATE_CART;
    }
}
export class CreateCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = CREATE_CART_FAIL;
    }
}
export class CreateCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CREATE_CART_SUCCESS;
    }
}
export class AddEmailToCart extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART;
    }
}
export class AddEmailToCartFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART_FAIL;
    }
}
export class AddEmailToCartSuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = ADD_EMAIL_TO_CART_SUCCESS;
    }
}
export class LoadCart extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_CART;
    }
}
export class LoadCartFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = LOAD_CART_FAIL;
    }
}
export class LoadCartSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_CART_SUCCESS;
    }
}
export class MergeCart {
    constructor(payload) {
        this.payload = payload;
        this.type = MERGE_CART;
    }
}
export class MergeCartSuccess extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.oldCartId);
        this.payload = payload;
        this.type = MERGE_CART_SUCCESS;
    }
}
/**
 * On site context change we want to keep current list of entities, but we want to clear the value and flags.
 * With ProcessesLoaderResetAction we run it on every entity of this type.
 */
export class ResetCartDetails extends ProcessesLoaderResetAction {
    constructor() {
        super(MULTI_CART_DATA);
        this.type = RESET_CART_DETAILS;
    }
}
/**
 * Used for cleaning cart in local state, when we get information that it no longer exists in the backend.
 * For removing particular cart in both places use DeleteCart actions.
 */
export class RemoveCart extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = REMOVE_CART;
    }
}
export class DeleteCart {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_CART;
    }
}
export class DeleteCartSuccess extends EntityRemoveAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = DELETE_CART_SUCCESS;
    }
}
export class DeleteCartFail {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_CART_FAIL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEdBQy9CLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDM0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztBQUNoRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUMxRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyw0QkFBNEIsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLDBCQUEwQixDQUFDO0FBRTVELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLDBCQUEwQixDQUFDO0FBQzVELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLCtCQUErQixDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLGtDQUFrQyxDQUFDO0FBRTVFLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQztBQUM5QyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQztB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QUFPLEdBQVAsT0FBTyxDQUFnRDtRQURqRSxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDNEMsQ0FBQztDQUMvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlSZW1vdmVBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL3Byb2Nlc3Nlcy1sb2FkZXIvcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgTVVMVElfQ0FSVF9EQVRBIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQ0FSVCA9ICdbQ2FydF0gQ3JlYXRlIENhcnQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX0ZBSUwgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIENyZWF0ZSBDYXJ0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUID0gJ1tDYXJ0XSBMb2FkIENhcnQnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBMb2FkIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIExvYWQgQ2FydCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEFERF9FTUFJTF9UT19DQVJUID0gJ1tDYXJ0XSBBZGQgRW1haWwgdG8gQ2FydCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlRfRkFJTCA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUyA9ICdbQ2FydF0gQWRkIEVtYWlsIHRvIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUID0gJ1tDYXJ0XSBNZXJnZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBNRVJHRV9DQVJUX1NVQ0NFU1MgPSAnW0NhcnRdIE1lcmdlIENhcnQgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJUX0RFVEFJTFMgPSAnW0NhcnRdIFJlc2V0IENhcnQgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVCA9ICdbQ2FydF0gUmVtb3ZlIENhcnQnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBUlQgPSAnW0NhcnRdIERlbGV0ZSBDYXJ0JztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9TVUNDRVNTID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FSVF9GQUlMID0gJ1tDYXJ0XSBEZWxldGUgQ2FydCBGYWlsJztcblxuaW50ZXJmYWNlIENyZWF0ZUNhcnRQYXlsb2FkIHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIC8qKiBVc2VkIGFzIGEgdW5pcXVlIGtleSBpbiBuZ3J4IGNhcnRzIHN0b3JlICh3ZSBkb24ndCBrbm93IGNhcnRJZCBhdCB0aGF0IHRpbWUpICovXG4gIHRlbXBDYXJ0SWQ6IHN0cmluZztcbiAgZXh0cmFEYXRhPzoge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gIH07XG4gIC8qKiBBbm9ueW1vdXMgY2FydCB3aGljaCBzaG91bGQgYmUgbWVyZ2VkIHRvIG5ldyBjYXJ0ICovXG4gIG9sZENhcnRJZD86IHN0cmluZztcbiAgLyoqIENhcnQgdG8gd2hpY2ggc2hvdWxkIHdlIG1lcmdlIChub3QgcGFzc2luZyB0aGlzIHdpbGwgY3JlYXRlIG5ldyBjYXJ0KSAqL1xuICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0IGV4dGVuZHMgRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENyZWF0ZUNhcnRQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBDcmVhdGVDYXJ0RmFpbFBheWxvYWQgZXh0ZW5kcyBDcmVhdGVDYXJ0UGF5bG9hZCB7XG4gIGVycm9yOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENyZWF0ZUNhcnRGYWlsUGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC50ZW1wQ2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ3JlYXRlQ2FydFN1Y2Nlc3NQYXlsb2FkIGV4dGVuZHMgQ3JlYXRlQ2FydFBheWxvYWQge1xuICBjYXJ0OiBDYXJ0O1xuICBjYXJ0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ0FSVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ3JlYXRlQ2FydFN1Y2Nlc3NQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZEVtYWlsVG9DYXJ0IGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNhcnRJZDogc3RyaW5nO1xuICAgICAgZXJyb3I6IGFueTtcbiAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkRW1haWxUb0NhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9FTUFJTF9UT19DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkQ2FydFBheWxvYWQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgY2FydElkOiBzdHJpbmc7XG4gIGV4dHJhRGF0YT86IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnQgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExvYWRDYXJ0UGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkQ2FydEZhaWxQYXlsb2FkIGV4dGVuZHMgTG9hZENhcnRQYXlsb2FkIHtcbiAgZXJyb3I6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDYXJ0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DQVJUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMb2FkQ2FydEZhaWxQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuaW50ZXJmYWNlIExvYWRDYXJ0U3VjY2Vzc1BheWxvYWQgZXh0ZW5kcyBMb2FkQ2FydFBheWxvYWQge1xuICBjYXJ0OiBDYXJ0O1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZENhcnRTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IExvYWRDYXJ0U3VjY2Vzc1BheWxvYWQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTWVyZ2VDYXJ0UGF5bG9hZCB7XG4gIGNhcnRJZDogc3RyaW5nO1xuICB1c2VySWQ6IHN0cmluZztcbiAgZXh0cmFEYXRhPzogeyBhY3RpdmU/OiBib29sZWFuIH07XG4gIC8qKlxuICAgKiBNZXJnZUNhcnQgYWN0aW9ucyB0cmlnZ2VycyBDcmVhdGVDYXJ0IHdoaWNoIHJlcXVpcmVzIHRoaXMgcGFyYW1ldGVyLCBzbyB0aGF0J3Mgd2h5IGl0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgdGVtcENhcnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IE1FUkdFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBNZXJnZUNhcnRQYXlsb2FkKSB7fVxufVxuXG5pbnRlcmZhY2UgTWVyZ2VDYXJ0U3VjY2Vzc1BheWxvYWQgZXh0ZW5kcyBNZXJnZUNhcnRQYXlsb2FkIHtcbiAgLyoqXG4gICAqIFByZXZpb3VzIGNhcnQgaWQgd2hpY2ggd2FzIG1lcmdlZCB3aXRoIG5ldy91c2VyIGNhcnQuXG4gICAqIE5lZWRlZCB0byBrbm93IHdoaWNoIG9ic29sZXRlIGVudGl0eSBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICovXG4gIG9sZENhcnRJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWVyZ2VDYXJ0U3VjY2VzcyBleHRlbmRzIEVudGl0eVJlbW92ZUFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBNRVJHRV9DQVJUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBNZXJnZUNhcnRTdWNjZXNzUGF5bG9hZCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5vbGRDYXJ0SWQpO1xuICB9XG59XG5cbi8qKlxuICogT24gc2l0ZSBjb250ZXh0IGNoYW5nZSB3ZSB3YW50IHRvIGtlZXAgY3VycmVudCBsaXN0IG9mIGVudGl0aWVzLCBidXQgd2Ugd2FudCB0byBjbGVhciB0aGUgdmFsdWUgYW5kIGZsYWdzLlxuICogV2l0aCBQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB3ZSBydW4gaXQgb24gZXZlcnkgZW50aXR5IG9mIHRoaXMgdHlwZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc2V0Q2FydERldGFpbHMgZXh0ZW5kcyBQcm9jZXNzZXNMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9DQVJUX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2VkIGZvciBjbGVhbmluZyBjYXJ0IGluIGxvY2FsIHN0YXRlLCB3aGVuIHdlIGdldCBpbmZvcm1hdGlvbiB0aGF0IGl0IG5vIGxvbmdlciBleGlzdHMgaW4gdGhlIGJhY2tlbmQuXG4gKiBGb3IgcmVtb3ZpbmcgcGFydGljdWxhciBjYXJ0IGluIGJvdGggcGxhY2VzIHVzZSBEZWxldGVDYXJ0IGFjdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZW1vdmVDYXJ0IGV4dGVuZHMgRW50aXR5UmVtb3ZlQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9DQVJUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBjYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlSZW1vdmVBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlQ2FydEZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyBlcnJvcjogYW55IH0pIHt9XG59XG5cbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPVxuICB8IENyZWF0ZUNhcnRcbiAgfCBDcmVhdGVDYXJ0RmFpbFxuICB8IENyZWF0ZUNhcnRTdWNjZXNzXG4gIHwgTG9hZENhcnRcbiAgfCBMb2FkQ2FydEZhaWxcbiAgfCBMb2FkQ2FydFN1Y2Nlc3NcbiAgfCBNZXJnZUNhcnRcbiAgfCBNZXJnZUNhcnRTdWNjZXNzXG4gIHwgUmVzZXRDYXJ0RGV0YWlsc1xuICB8IEFkZEVtYWlsVG9DYXJ0XG4gIHwgQWRkRW1haWxUb0NhcnRGYWlsXG4gIHwgQWRkRW1haWxUb0NhcnRTdWNjZXNzXG4gIHwgRGVsZXRlQ2FydFxuICB8IERlbGV0ZUNhcnRTdWNjZXNzXG4gIHwgRGVsZXRlQ2FydEZhaWxcbiAgfCBSZW1vdmVDYXJ0O1xuIl19