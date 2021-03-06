import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { EntityFailAction, EntityLoadAction, EntityLoaderResetAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
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
export class CartResetAddVoucher extends EntityLoaderResetAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NhcnQvc3RvcmUvYWN0aW9ucy9jYXJ0LXZvdWNoZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQix1QkFBdUIsRUFDdkIsbUJBQW1CLEdBQ3BCLE1BQU0seURBQXlELENBQUM7QUFDakUsT0FBTyxFQUNMLDhCQUE4QixFQUM5Qiw4QkFBOEIsR0FDL0IsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsa0NBQWtDLENBQUM7QUFDbkUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsc0NBQXNDLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQ25DLHlDQUF5QyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLHVDQUF1QyxDQUFDO0FBRTlFLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLG9DQUFvQyxDQUFDO0FBQ3hFLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUNuQyx5Q0FBeUMsQ0FBQztBQUM1QyxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FDdEMsNENBQTRDLENBQUM7QUFFL0MsOEJBQThCO0FBQzlCLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCO0lBRWxELFlBQ1MsT0FBOEQ7UUFFckUsS0FBSyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRnhDLFlBQU8sR0FBUCxPQUFPLENBQXVEO1FBRjlELFNBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQUtqQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCO0lBRXRELFlBQ1MsT0FLTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUHZELFlBQU8sR0FBUCxPQUFPLENBS2I7UUFQTSxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFVdEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjtJQUU1RCxZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUZ4QyxZQUFPLEdBQVAsT0FBTyxDQUF1RDtRQUY5RCxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFLekMsQ0FBQztDQUNGO0FBRUQsa0VBQWtFO0FBQ2xFOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsdUJBQXVCO0lBRTlEO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRnhDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7QUFFRCx3QkFBd0I7QUFDeEIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLDhCQUE4QjtJQUVuRSxZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQXVEO1FBRjlELFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUtwQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsOEJBQThCO0lBRXZFLFlBQ1MsT0FLTjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBUGhDLFlBQU8sR0FBUCxPQUFPLENBS2I7UUFQTSxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFVekMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLDhCQUE4QjtJQUUxRSxZQUNTLE9BQThEO1FBRXJFLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQXVEO1FBRjlELFNBQUksR0FBRywyQkFBMkIsQ0FBQztJQUs1QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5TG9hZGVyUmVzZXRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBBRERfVk9VQ0hFUl9QUk9DRVNTX0lELCBNVUxUSV9DQVJUX0RBVEEgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IENBUlRfQUREX1ZPVUNIRVIgPSAnW0NhcnQtdm91Y2hlcl0gQWRkIENhcnQgVm91Y2hlcnMnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX1ZPVUNIRVJfRkFJTCA9ICdbQ2FydC12b3VjaGVyXSBBZGQgQ2FydCBWb3VjaGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENBUlRfQUREX1ZPVUNIRVJfU1VDQ0VTUyA9XG4gICdbQ2FydC12b3VjaGVyXSBBZGQgQ2FydCBWb3VjaGVyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IENBUlRfUkVTRVRfQUREX1ZPVUNIRVIgPSAnW0NhcnQtdm91Y2hlcl0gUmVzZXQgQWRkIENhcnQgVm91Y2hlcic7XG5cbmV4cG9ydCBjb25zdCBDQVJUX1JFTU9WRV9WT1VDSEVSID0gJ1tDYXJ0LXZvdWNoZXJdIFJlbW92ZSBDYXJ0IFZvdWNoZXInO1xuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX1ZPVUNIRVJfRkFJTCA9XG4gICdbQ2FydC12b3VjaGVyXSBSZW1vdmUgQ2FydCBWb3VjaGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTUyA9XG4gICdbQ2FydC12b3VjaGVyXSBSZW1vdmUgQ2FydCBWb3VjaGVyIFN1Y2Nlc3MnO1xuXG4vLyBBZGRpbmcgY2FydCB2b3VjaGVyIGFjdGlvbnNcbmV4cG9ydCBjbGFzcyBDYXJ0QWRkVm91Y2hlciBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfVk9VQ0hFUjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyB2b3VjaGVySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRWb3VjaGVyRmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfVk9VQ0hFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHZvdWNoZXJJZDogc3RyaW5nO1xuICAgICAgZXJyb3I6IGFueTtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcnRBZGRWb3VjaGVyU3VjY2VzcyBleHRlbmRzIEVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9BRERfVk9VQ0hFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgY2FydElkOiBzdHJpbmc7IHZvdWNoZXJJZDogc3RyaW5nIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG4vLyBUT0RPKCM3MjQxKTogUmVtb3ZlIHdoZW4gc3dpdGNoaW5nIHRvIGV2ZW50IHN5c3RlbSBmb3Igdm91Y2hlcnNcbi8qKlxuICogUmVzZXRzIGFkZCB2b3VjaGVyIHByb2Nlc3NcbiAqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAqL1xuZXhwb3J0IGNsYXNzIENhcnRSZXNldEFkZFZvdWNoZXIgZXh0ZW5kcyBFbnRpdHlMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1JFU0VUX0FERF9WT1VDSEVSO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9WT1VDSEVSX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbi8vIERlbGV0aW5nIGNhcnQgdm91Y2hlclxuZXhwb3J0IGNsYXNzIENhcnRSZW1vdmVWb3VjaGVyIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzSW5jcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX1ZPVUNIRVI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBjYXJ0SWQ6IHN0cmluZzsgdm91Y2hlcklkOiBzdHJpbmcgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZVZvdWNoZXJGYWlsIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX1ZPVUNIRVJfRkFJTDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIGVycm9yOiBhbnk7XG4gICAgICBjYXJ0SWQ6IHN0cmluZztcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgdm91Y2hlcklkOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzIGV4dGVuZHMgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBUlRfUkVNT1ZFX1ZPVUNIRVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNhcnRJZDogc3RyaW5nOyB2b3VjaGVySWQ6IHN0cmluZyB9XG4gICkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgcGF5bG9hZC5jYXJ0SWQpO1xuICB9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgQ2FydFZvdWNoZXJBY3Rpb24gPVxuICB8IENhcnRBZGRWb3VjaGVyXG4gIHwgQ2FydEFkZFZvdWNoZXJGYWlsXG4gIHwgQ2FydEFkZFZvdWNoZXJTdWNjZXNzXG4gIHwgQ2FydFJlc2V0QWRkVm91Y2hlclxuICB8IENhcnRSZW1vdmVWb3VjaGVyXG4gIHwgQ2FydFJlbW92ZVZvdWNoZXJGYWlsXG4gIHwgQ2FydFJlbW92ZVZvdWNoZXJTdWNjZXNzO1xuIl19