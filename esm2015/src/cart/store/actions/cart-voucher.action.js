import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { ADD_VOUCHER_PROCESS_ID, MULTI_CART_DATA } from '../multi-cart-state';
export const CART_ADD_VOUCHER = '[Cart-voucher] Add Cart Vouchers';
export const CART_ADD_VOUCHER_FAIL = '[Cart-voucher] Add Cart Voucher Fail';
export const CART_ADD_VOUCHER_SUCCESS = '[Cart-voucher] Add Cart Voucher Success';
export const CART_RESET_ADD_VOUCHER = '[Cart-voucher] Reset Add Cart Voucher';
export const CART_REMOVE_VOUCHER = '[Cart-voucher] Remove Cart Voucher';
export const CART_REMOVE_VOUCHER_FAIL = '[Cart-voucher] Remove Cart Voucher Fail';
export const CART_REMOVE_VOUCHER_SUCCESS = '[Cart-voucher] Remove Cart Voucher Success';
// Adding cart voucher actions
export class CartAddVoucher extends EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER;
    }
}
export class CartAddVoucherFail extends EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID, payload.error);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER_FAIL;
    }
}
export class CartAddVoucherSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.payload = payload;
        this.type = CART_ADD_VOUCHER_SUCCESS;
    }
}
// TODO(#7241): Remove when switching to event system for vouchers
/**
 * Resets add voucher process
 *
 * @deprecated since 2.0
 */
export class CartResetAddVoucher extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
        this.type = CART_RESET_ADD_VOUCHER;
    }
}
// Deleting cart voucher
export class CartRemoveVoucher extends EntityProcessesIncrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER;
    }
}
export class CartRemoveVoucherFail extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER_FAIL;
    }
}
export class CartRemoveVoucherSuccess extends EntityProcessesDecrementAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = CART_REMOVE_VOUCHER_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvY2FydC12b3VjaGVyLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG1CQUFtQixHQUNwQixNQUFNLHlEQUF5RCxDQUFDO0FBQ2pFLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsOEJBQThCLEdBQy9CLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlFLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLGtDQUFrQyxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLHNDQUFzQyxDQUFDO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUNuQyx5Q0FBeUMsQ0FBQztBQUM1QyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUU5RSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FDbkMseUNBQXlDLENBQUM7QUFDNUMsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQ3RDLDRDQUE0QyxDQUFDO0FBRS9DLDhCQUE4QjtBQUM5QixNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUVsRCxZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUZ4QyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFLakMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjtJQUV0RCxZQUNTLE9BS047UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVB2RCxZQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBVXRDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7SUFFNUQsWUFDUyxPQUE4RDtRQUVyRSxLQUFLLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFGeEMsWUFBTyxHQUFQLE9BQU8sQ0FBdUQ7UUFGOUQsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBS3pDLENBQUM7Q0FDRjtBQUVELGtFQUFrRTtBQUNsRTs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGlCQUFpQjtJQUV4RDtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUZ4QyxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGO0FBRUQsd0JBQXdCO0FBQ3hCLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSw4QkFBOEI7SUFFbkUsWUFDUyxPQUE4RDtRQUVyRSxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUZoQyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFLcEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLDhCQUE4QjtJQUV2RSxZQUNTLE9BS047UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVBoQyxZQUFPLEdBQVAsT0FBTyxDQUtiO1FBUE0sU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBVXpDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSw4QkFBOEI7SUFFMUUsWUFDUyxPQUE4RDtRQUVyRSxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUZoQyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsMkJBQTJCLENBQUM7SUFLNUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPQ0VTU19GRUFUVVJFIH0gZnJvbSAnLi4vLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxuICBFbnRpdHlTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbixcbiAgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci9lbnRpdHktcHJvY2Vzc2VzLWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCwgTVVMVElfQ0FSVF9EQVRBIH0gZnJvbSAnLi4vbXVsdGktY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDQVJUX0FERF9WT1VDSEVSID0gJ1tDYXJ0LXZvdWNoZXJdIEFkZCBDYXJ0IFZvdWNoZXJzJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9WT1VDSEVSX0ZBSUwgPSAnW0NhcnQtdm91Y2hlcl0gQWRkIENhcnQgVm91Y2hlciBGYWlsJztcbmV4cG9ydCBjb25zdCBDQVJUX0FERF9WT1VDSEVSX1NVQ0NFU1MgPVxuICAnW0NhcnQtdm91Y2hlcl0gQWRkIENhcnQgVm91Y2hlciBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFU0VUX0FERF9WT1VDSEVSID0gJ1tDYXJ0LXZvdWNoZXJdIFJlc2V0IEFkZCBDYXJ0IFZvdWNoZXInO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfVk9VQ0hFUiA9ICdbQ2FydC12b3VjaGVyXSBSZW1vdmUgQ2FydCBWb3VjaGVyJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9WT1VDSEVSX0ZBSUwgPVxuICAnW0NhcnQtdm91Y2hlcl0gUmVtb3ZlIENhcnQgVm91Y2hlciBGYWlsJztcbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1MgPVxuICAnW0NhcnQtdm91Y2hlcl0gUmVtb3ZlIENhcnQgVm91Y2hlciBTdWNjZXNzJztcblxuLy8gQWRkaW5nIGNhcnQgdm91Y2hlciBhY3Rpb25zXG5leHBvcnQgY2xhc3MgQ2FydEFkZFZvdWNoZXIgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX1ZPVUNIRVI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdm91Y2hlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkVm91Y2hlckZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX1ZPVUNIRVJfRkFJTDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICB2b3VjaGVySWQ6IHN0cmluZztcbiAgICAgIGVycm9yOiBhbnk7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJ0QWRkVm91Y2hlclN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyB2b3VjaGVySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuLy8gVE9ETygjNzI0MSk6IFJlbW92ZSB3aGVuIHN3aXRjaGluZyB0byBldmVudCBzeXN0ZW0gZm9yIHZvdWNoZXJzXG4vKipcbiAqIFJlc2V0cyBhZGQgdm91Y2hlciBwcm9jZXNzXG4gKlxuICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXJ0UmVzZXRBZGRWb3VjaGVyIGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9SRVNFVF9BRERfVk9VQ0hFUjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBEZWxldGluZyBjYXJ0IHZvdWNoZXJcbmV4cG9ydCBjbGFzcyBDYXJ0UmVtb3ZlVm91Y2hlciBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9WT1VDSEVSO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHZvdWNoZXJJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVWb3VjaGVyRmFpbCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9WT1VDSEVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBlcnJvcjogYW55O1xuICAgICAgY2FydElkOiBzdHJpbmc7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIHZvdWNoZXJJZDogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLmNhcnRJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVWb3VjaGVyU3VjY2VzcyBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0RlY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFTU9WRV9WT1VDSEVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdm91Y2hlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIENhcnRWb3VjaGVyQWN0aW9uID1cbiAgfCBDYXJ0QWRkVm91Y2hlclxuICB8IENhcnRBZGRWb3VjaGVyRmFpbFxuICB8IENhcnRBZGRWb3VjaGVyU3VjY2Vzc1xuICB8IENhcnRSZXNldEFkZFZvdWNoZXJcbiAgfCBDYXJ0UmVtb3ZlVm91Y2hlclxuICB8IENhcnRSZW1vdmVWb3VjaGVyRmFpbFxuICB8IENhcnRSZW1vdmVWb3VjaGVyU3VjY2VzcztcbiJdfQ==