import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { CartActions } from '../actions/index';
export class MultiCartEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.setTempCart$ = this.actions$.pipe(ofType(CartActions.SET_TEMP_CART), map((action) => {
            return new CartActions.RemoveCart({ cartId: action.payload.tempCartId });
        }));
        // TODO(#7241): Remove when we drop ADD_VOUCHER process and we sort out checkout and cart dependencies
        this.processesIncrement$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER), map((action) => action.payload), map((payload) => new CartActions.CartProcessesIncrement(payload.cartId)));
    }
}
MultiCartEffects.decorators = [
    { type: Injectable }
];
MultiCartEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect()
], MultiCartEffects.prototype, "setTempCart$", void 0);
__decorate([
    Effect()
], MultiCartEffects.prototype, "processesIncrement$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L3N0b3JlL2VmZmVjdHMvbXVsdGktY2FydC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGdCQUFnQjtJQW1CM0IsWUFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQWpCckMsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFDakMsR0FBRyxDQUFDLENBQUMsTUFBK0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsc0dBQXNHO1FBRXRHLHdCQUFtQixHQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDM0QsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDekUsQ0FBQztJQUVzQyxDQUFDOzs7WUFwQjFDLFVBQVU7OztZQUxGLE9BQU87O0FBUWQ7SUFEQyxNQUFNLEVBQUU7c0RBTVA7QUFJRjtJQURDLE1BQU0sRUFBRTs2REFPUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZXRUZW1wQ2FydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLlNFVF9URU1QX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KHsgY2FydElkOiBhY3Rpb24ucGF5bG9hZC50ZW1wQ2FydElkIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gVE9ETygjNzI0MSk6IFJlbW92ZSB3aGVuIHdlIGRyb3AgQUREX1ZPVUNIRVIgcHJvY2VzcyBhbmQgd2Ugc29ydCBvdXQgY2hlY2tvdXQgYW5kIGNhcnQgZGVwZW5kZW5jaWVzXG4gIEBFZmZlY3QoKVxuICBwcm9jZXNzZXNJbmNyZW1lbnQkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNJbmNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUiksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKChwYXlsb2FkKSA9PiBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudChwYXlsb2FkLmNhcnRJZCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbn1cbiJdfQ==