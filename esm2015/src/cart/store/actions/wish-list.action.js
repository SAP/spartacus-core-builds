import { EntityFailAction, EntityLoadAction, EntitySuccessAction, } from '../../../state/utils/entity-loader/entity-loader.action';
import { getCartIdByUserId } from '../../utils/utils';
import { MULTI_CART_DATA } from '../multi-cart-state';
export const CREATE_WISH_LIST = '[Wish List] Create Wish List';
export const CREATE_WISH_LIST_FAIL = '[Wish List] Create Wish List Fail';
export const CREATE_WISH_LIST_SUCCESS = '[Wish List] Create Wish List Success';
export const LOAD_WISH_LIST = '[Wish List] Load Wish List';
export const LOAD_WISH_LIST_SUCCESS = '[Wish List] Load Wish List Success';
export const LOAD_WISH_LIST_FAIL = '[Wish List] Load Wish List Fail';
export const RESET_WISH_LIST_DETAILS = '[Wish List] Reset Wish List';
export class CreateWishList {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_WISH_LIST;
    }
}
export class CreateWishListSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, getCartIdByUserId(payload.cart, payload.userId));
        this.payload = payload;
        this.type = CREATE_WISH_LIST_SUCCESS;
    }
}
export class CreateWishListFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = CREATE_WISH_LIST_FAIL;
    }
}
export class LoadWishList extends EntityLoadAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.tempCartId);
        this.payload = payload;
        this.type = LOAD_WISH_LIST;
    }
}
export class LoadWishListSuccess extends EntitySuccessAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId);
        this.payload = payload;
        this.type = LOAD_WISH_LIST_SUCCESS;
    }
}
export class LoadWishListFail extends EntityFailAction {
    constructor(payload) {
        super(MULTI_CART_DATA, payload.cartId, payload.error);
        this.payload = payload;
        this.type = LOAD_WISH_LIST_FAIL;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L3N0b3JlL2FjdGlvbnMvd2lzaC1saXN0LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsOEJBQThCLENBQUM7QUFDL0QsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsbUNBQW1DLENBQUM7QUFDekUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsc0NBQXNDLENBQUM7QUFFL0UsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLDRCQUE0QixDQUFDO0FBQzNELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLG9DQUFvQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLGlDQUFpQyxDQUFDO0FBRXJFLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLDZCQUE2QixDQUFDO0FBRXJFLE1BQU0sT0FBTyxjQUFjO0lBRXpCLFlBQ1MsT0FJTjtRQUpNLFlBQU8sR0FBUCxPQUFPLENBSWI7UUFOTSxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFPOUIsQ0FBQztDQUNMO0FBRUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjtJQUU1RCxZQUFtQixPQUF1QztRQUN4RCxLQUFLLENBQUMsZUFBZSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFEdkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0M7UUFEakQsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBR3pDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFFdEQsWUFBbUIsT0FBd0M7UUFDekQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUFpQztRQURsRCxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFHdEMsQ0FBQztDQUNGO0FBZUQsTUFBTSxPQUFPLFlBQWEsU0FBUSxnQkFBZ0I7SUFFaEQsWUFBbUIsT0FBNEI7UUFDN0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFEdEMsU0FBSSxHQUFHLGNBQWMsQ0FBQztJQUcvQixDQUFDO0NBQ0Y7QUFzQkQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjtJQUUxRCxZQUFtQixPQUFtQztRQUNwRCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUR0QixZQUFPLEdBQVAsT0FBTyxDQUE0QjtRQUQ3QyxTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFHdkMsQ0FBQztDQUNGO0FBaUJELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFFcEQsWUFBbUIsT0FBZ0M7UUFDakQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUQxQyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFHcEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHtcbiAgRW50aXR5RmFpbEFjdGlvbixcbiAgRW50aXR5TG9hZEFjdGlvbixcbiAgRW50aXR5U3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBnZXRDYXJ0SWRCeVVzZXJJZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1dJU0hfTElTVCA9ICdbV2lzaCBMaXN0XSBDcmVhdGUgV2lzaCBMaXN0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUX0ZBSUwgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfV0lTSF9MSVNUX1NVQ0NFU1MgPSAnW1dpc2ggTGlzdF0gQ3JlYXRlIFdpc2ggTGlzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUID0gJ1tXaXNoIExpc3RdIExvYWQgV2lzaCBMaXN0JztcbmV4cG9ydCBjb25zdCBMT0FEX1dJU0hfTElTVF9TVUNDRVNTID0gJ1tXaXNoIExpc3RdIExvYWQgV2lzaCBMaXN0IFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IExPQURfV0lTSF9MSVNUX0ZBSUwgPSAnW1dpc2ggTGlzdF0gTG9hZCBXaXNoIExpc3QgRmFpbCc7XG5cbmV4cG9ydCBjb25zdCBSRVNFVF9XSVNIX0xJU1RfREVUQUlMUyA9ICdbV2lzaCBMaXN0XSBSZXNldCBXaXNoIExpc3QnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2lzaExpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX1dJU0hfTElTVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydDogQ2FydDsgdXNlcklkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSwgZ2V0Q2FydElkQnlVc2VySWQocGF5bG9hZC5jYXJ0LCBwYXlsb2FkLnVzZXJJZCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVXaXNoTGlzdEZhaWwgZXh0ZW5kcyBFbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9XSVNIX0xJU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY2FydElkOiBzdHJpbmc7IGVycm9yPzogYW55IH0pIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTG9hZFdpc2hMaXN0UGF5bG9hZCB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogVXNlZCB0byBjb21wdXRlIHdpc2hsaXN0IGNhcnQgbmFtZSBhbmQgZmluZCBpdCBpbiBsaXN0IG9mIGFsbCBjYXJ0cy5cbiAgICovXG4gIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFdoZW4gd2UgdHJ5IGxvYWQgd2lzaGxpc3QgZm9yIHRoZSBmaXJzdCB0aW1lIHdlIGRvbid0IGtub3cgY2FydCBpZC5cbiAgICogSW5zdGVhZCB3ZSBjcmVhdGUgdGVtcG9yYXJ5IGNhcnQgd2l0aCBpZCBlcXVhbCB0byB3aXNobGlzdCBuYW1lIHRvIGtlZXAgdHJhY2sgb2YgbG9hZGluZy9lcnJvciBzdGF0ZS5cbiAgICovXG4gIHRlbXBDYXJ0SWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIExvYWRXaXNoTGlzdCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9XSVNIX0xJU1Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMb2FkV2lzaExpc3RQYXlsb2FkKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQpO1xuICB9XG59XG5cbmludGVyZmFjZSBMb2FkV2lzaExpc3RTdWNjZXNzUGF5bG9hZCB7XG4gIGNhcnQ6IENhcnQ7XG4gIHVzZXJJZDogc3RyaW5nO1xuICAvKipcbiAgICogV2hlbiBMb2FkV2lzaExpc3RTdWNjZXNzIGFjdGlvbiB3YXMgZGlzcGF0Y2hlZCBhcyBhbiBjb21wbGV0aW9uIHRvIExvYWRXaXNoTGlzdCBhY3Rpb25cbiAgICogd2UgZ2V0IHRlbXBvcmFyeSBjYXJ0SWQgdGhhdCB3YXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGxvYWRpbmcgc3RhdGUuXG4gICAqIEluIGNhc2Ugb2YgbG9hZGluZyB3aXNoIGxpc3Qgd2l0aCBrbm93biBjYXJ0SWQgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGVtcHR5LlxuICAgKi9cbiAgdGVtcENhcnRJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFVzZWQgdG8gY29tcHV0ZSB3aXNobGlzdCBjYXJ0IG5hbWUgYW5kIGZpbmQgaXQgaW4gbGlzdCBvZiBhbGwgY2FydHMuXG4gICAqIEluIGNhc2Ugb2YgbG9hZGluZyB3aXNoIGxpc3Qgd2l0aCBrbm93biBjYXJ0SWQgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGVtcHR5LlxuICAgKi9cbiAgY3VzdG9tZXJJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFdpc2ggbGlzdCBjYXJ0IGlkLiBFeHRyYWN0ZWQgZnJvbSBjYXJ0IGNvbnRlbnQgKGNvZGUgcHJvcGVydHkpLlxuICAgKi9cbiAgY2FydElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzaExpc3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogTG9hZFdpc2hMaXN0U3VjY2Vzc1BheWxvYWQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTG9hZFdpc2hMaXN0RmFpbFBheWxvYWQge1xuICB1c2VySWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFVzZWQgdG8gY29tcHV0ZSB3aXNobGlzdCBjYXJ0IG5hbWUgYW5kIGZpbmQgaXQgaW4gbGlzdCBvZiBhbGwgY2FydHMuXG4gICAqIEluIGNhc2Ugb2YgbG9hZGluZyB3aXNoIGxpc3Qgd2l0aCBrbm93biBjYXJ0SWQgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGVtcHR5LlxuICAgKi9cbiAgY3VzdG9tZXJJZD86IHN0cmluZztcbiAgLyoqXG4gICAqIENhcnQgaWQgdXNlZCBhcyBhIHN0b3JlIGVudGl0eSBrZXkuIFRoaXMgY291bGQgcG9pbnQgZWl0aGVyIHRvIHNvbWVcbiAgICogdGVtcG9yYXJ5IGNhcnQgdXNlZCB0byB0cmFjayBsb2FkaW5nL2Vycm9yIHN0YXRlIG9yIHRvIG5vcm1hbCB3aXNoIGxpc3QgZW50aXR5LlxuICAgKi9cbiAgY2FydElkOiBzdHJpbmc7XG4gIGVycm9yOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkV2lzaExpc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1dJU0hfTElTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogTG9hZFdpc2hMaXN0RmFpbFBheWxvYWQpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXaXNoTGlzdEFjdGlvbnMgPVxuICB8IENyZWF0ZVdpc2hMaXN0XG4gIHwgQ3JlYXRlV2lzaExpc3RTdWNjZXNzXG4gIHwgQ3JlYXRlV2lzaExpc3RGYWlsXG4gIHwgTG9hZFdpc2hMaXN0XG4gIHwgTG9hZFdpc2hMaXN0U3VjY2Vzc1xuICB8IExvYWRXaXNoTGlzdEZhaWw7XG4iXX0=