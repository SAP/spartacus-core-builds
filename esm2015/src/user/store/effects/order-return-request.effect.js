import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserOrderConnector } from '../../connectors/order/user-order.connector';
import { UserActions } from '../actions/index';
export class OrderReturnRequestEffect {
    constructor(actions$, orderConnector) {
        this.actions$ = actions$;
        this.orderConnector = orderConnector;
        this.createReturnRequest$ = this.actions$.pipe(ofType(UserActions.CREATE_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .return(payload.userId, payload.returnRequestInput)
                .pipe(map((returnRequest) => new UserActions.CreateOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new UserActions.CreateOrderReturnRequestFail(makeErrorSerializable(error)))));
        }));
        this.loadReturnRequest$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .getReturnRequestDetail(payload.userId, payload.returnRequestCode)
                .pipe(map((returnRequest) => new UserActions.LoadOrderReturnRequestSuccess(returnRequest)), catchError((error) => of(new UserActions.LoadOrderReturnRequestFail(makeErrorSerializable(error)))));
        }));
        this.cancelReturnRequest$ = this.actions$.pipe(ofType(UserActions.CANCEL_ORDER_RETURN_REQUEST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .cancelReturnRequest(payload.userId, payload.returnRequestCode, payload.returnRequestModification)
                .pipe(map(() => new UserActions.CancelOrderReturnRequestSuccess()), catchError((error) => of(new UserActions.CancelOrderReturnRequestFail(makeErrorSerializable(error)))));
        }));
        this.loadReturnRequestList$ = this.actions$.pipe(ofType(UserActions.LOAD_ORDER_RETURN_REQUEST_LIST), map((action) => action.payload), switchMap((payload) => {
            return this.orderConnector
                .getReturnRequestList(payload.userId, payload.pageSize, payload.currentPage, payload.sort)
                .pipe(map((returnRequestList) => new UserActions.LoadOrderReturnRequestListSuccess(returnRequestList)), catchError((error) => of(new UserActions.LoadOrderReturnRequestListFail(makeErrorSerializable(error)))));
        }));
    }
}
OrderReturnRequestEffect.decorators = [
    { type: Injectable }
];
OrderReturnRequestEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserOrderConnector }
];
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "createReturnRequest$", void 0);
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "loadReturnRequest$", void 0);
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "cancelReturnRequest$", void 0);
__decorate([
    Effect()
], OrderReturnRequestEffect.prototype, "loadReturnRequestList$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9zdG9yZS9lZmZlY3RzL29yZGVyLXJldHVybi1yZXF1ZXN0LmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLHdCQUF3QjtJQTZHbkMsWUFDVSxRQUFpQixFQUNqQixjQUFrQztRQURsQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQTdHNUMseUJBQW9CLEdBRWhCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLEVBQy9DLEdBQUcsQ0FBQyxDQUFDLE1BQTRDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDckUsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYztpQkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGtCQUFr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LENBQ0YsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBakhMLFVBQVU7OztZQVJGLE9BQU87WUFLUCxrQkFBa0I7O0FBTXpCO0lBREMsTUFBTSxFQUFFO3NFQXVCUDtBQUdGO0lBREMsTUFBTSxFQUFFO29FQXVCUDtBQUdGO0lBREMsTUFBTSxFQUFFO3NFQXdCUDtBQUdGO0lBREMsTUFBTSxFQUFFO3dFQThCUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0TGlzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyT3JkZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL29yZGVyL3VzZXItb3JkZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlclJldHVyblJlcXVlc3RFZmZlY3Qge1xuICBARWZmZWN0KClcbiAgY3JlYXRlUmV0dXJuUmVxdWVzdCQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuT3JkZXJSZXR1cm5SZXF1ZXN0QWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkNSRUFURV9PUkRFUl9SRVRVUk5fUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLnJldHVybihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5yZXR1cm5SZXF1ZXN0SW5wdXQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIChyZXR1cm5SZXF1ZXN0OiBSZXR1cm5SZXF1ZXN0KSA9PlxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuQ3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2VzcyhyZXR1cm5SZXF1ZXN0KVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRSZXR1cm5SZXF1ZXN0JDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5PcmRlclJldHVyblJlcXVlc3RBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9PUkRFUl9SRVRVUk5fUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5nZXRSZXR1cm5SZXF1ZXN0RGV0YWlsKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnJldHVyblJlcXVlc3RDb2RlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAocmV0dXJuUmVxdWVzdDogUmV0dXJuUmVxdWVzdCkgPT5cbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRPcmRlclJldHVyblJlcXVlc3RTdWNjZXNzKHJldHVyblJlcXVlc3QpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNhbmNlbFJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLk9yZGVyUmV0dXJuUmVxdWVzdEFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5DQU5DRUxfT1JERVJfUkVUVVJOX1JFUVVFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclJldHVyblJlcXVlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyQ29ubmVjdG9yXG4gICAgICAgIC5jYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucmV0dXJuUmVxdWVzdENvZGUsXG4gICAgICAgICAgcGF5bG9hZC5yZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCgpID0+IG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclJldHVyblJlcXVlc3RTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5DYW5jZWxPcmRlclJldHVyblJlcXVlc3RGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkUmV0dXJuUmVxdWVzdExpc3QkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLk9yZGVyUmV0dXJuUmVxdWVzdEFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX09SREVSX1JFVFVSTl9SRVFVRVNUX0xJU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJDb25uZWN0b3JcbiAgICAgICAgLmdldFJldHVyblJlcXVlc3RMaXN0KFxuICAgICAgICAgIHBheWxvYWQudXNlcklkLFxuICAgICAgICAgIHBheWxvYWQucGFnZVNpemUsXG4gICAgICAgICAgcGF5bG9hZC5jdXJyZW50UGFnZSxcbiAgICAgICAgICBwYXlsb2FkLnNvcnRcbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAocmV0dXJuUmVxdWVzdExpc3Q6IFJldHVyblJlcXVlc3RMaXN0KSA9PlxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE9yZGVyUmV0dXJuUmVxdWVzdExpc3RTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHJldHVyblJlcXVlc3RMaXN0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdEZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9yZGVyQ29ubmVjdG9yOiBVc2VyT3JkZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19