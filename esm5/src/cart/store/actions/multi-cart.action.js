import { __extends } from "tslib";
import { EntitySuccessAction } from '../../../state/utils/entity-loader/entity-loader.action';
import { EntityProcessesDecrementAction, EntityProcessesIncrementAction, } from '../../../state/utils/entity-processes-loader/entity-processes-loader.action';
import { EntityRemoveAllAction } from '../../../state/utils/entity/entity.action';
import { MULTI_CART_DATA } from '../multi-cart-state';
export var SET_TEMP_CART = '[Cart] Set Temp Cart';
export var CART_PROCESSES_INCREMENT = '[Cart] Cart Processes Increment';
export var CART_PROCESSES_DECREMENT = '[Cart] Cart Processes Decrement';
export var SET_ACTIVE_CART_ID = '[Cart] Set Active Cart Id';
export var CLEAR_CART_STATE = '[Cart] Clear Cart State';
/**
 * To keep track of cart creation process we use cart with `temp-${uuid}` id.
 * After creating cart we switch to entity with `code` or `guid`.
 * We need `temp-${uuid}` cart entities for loading/error state.
 */
var SetTempCart = /** @class */ (function (_super) {
    __extends(SetTempCart, _super);
    function SetTempCart(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload.tempCartId, payload.cart) || this;
        _this.payload = payload;
        _this.type = SET_TEMP_CART;
        return _this;
    }
    return SetTempCart;
}(EntitySuccessAction));
export { SetTempCart };
// TODO(#7241): Remove when there won't be any usage
/**
 * Increases process counter on cart entities
 * All actions that cause computations on cart should extend EntityProcessesIncrementAction instead of dispatching this action.
 * @deprecated since 2.0
 */
var CartProcessesIncrement = /** @class */ (function (_super) {
    __extends(CartProcessesIncrement, _super);
    function CartProcessesIncrement(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_INCREMENT;
        return _this;
    }
    return CartProcessesIncrement;
}(EntityProcessesIncrementAction));
export { CartProcessesIncrement };
// TODO(#7241): Remove when there won't be any usage
/**
 * Decrement process counter on cart entities
 * All actions that cause computations on cart should extend EntityProcessesDecrementAction instead of dispatching this action.
 * @deprecated since 2.0
 */
var CartProcessesDecrement = /** @class */ (function (_super) {
    __extends(CartProcessesDecrement, _super);
    function CartProcessesDecrement(payload) {
        var _this = _super.call(this, MULTI_CART_DATA, payload) || this;
        _this.payload = payload;
        _this.type = CART_PROCESSES_DECREMENT;
        return _this;
    }
    return CartProcessesDecrement;
}(EntityProcessesDecrementAction));
export { CartProcessesDecrement };
/**
 * Only sets active cart property with id of active cart. Then services take care of loading that cart.
 */
var SetActiveCartId = /** @class */ (function () {
    function SetActiveCartId(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_CART_ID;
    }
    return SetActiveCartId;
}());
export { SetActiveCartId };
/**
 * Clear whole cart store state: all entities + reset rest of the cart state.
 */
var ClearCartState = /** @class */ (function (_super) {
    __extends(ClearCartState, _super);
    function ClearCartState() {
        var _this = _super.call(this, MULTI_CART_DATA) || this;
        _this.type = CLEAR_CART_STATE;
        return _this;
    }
    return ClearCartState;
}(EntityRemoveAllAction));
export { ClearCartState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9hY3Rpb25zL211bHRpLWNhcnQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM5RixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDhCQUE4QixHQUMvQixNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsc0JBQXNCLENBQUM7QUFFcEQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFDMUUsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsaUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsMkJBQTJCLENBQUM7QUFFOUQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7QUFFMUQ7Ozs7R0FJRztBQUNIO0lBQWlDLCtCQUFtQjtJQUVsRCxxQkFBbUIsT0FBMkM7UUFBOUQsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQ3pEO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFVBQUksR0FBRyxhQUFhLENBQUM7O0lBRzlCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFMRCxDQUFpQyxtQkFBbUIsR0FLbkQ7O0FBRUQsb0RBQW9EO0FBQ3BEOzs7O0dBSUc7QUFDSDtJQUE0QywwQ0FBOEI7SUFFeEUsZ0NBQW1CLE9BQWU7UUFBbEMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsT0FBTyxDQUFDLFNBQ2hDO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsVUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUd6QyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsOEJBQThCLEdBS3pFOztBQUVELG9EQUFvRDtBQUNwRDs7OztHQUlHO0FBQ0g7SUFBNEMsMENBQThCO0lBRXhFLGdDQUFtQixPQUFlO1FBQWxDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE9BQU8sQ0FBQyxTQUNoQztRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFVBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFHekMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLDhCQUE4QixHQUt6RTs7QUFFRDs7R0FFRztBQUNIO0lBRUUseUJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNFLENBQUM7SUFDeEMsc0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDs7R0FFRztBQUNIO0lBQW9DLGtDQUFxQjtJQUV2RDtRQUFBLFlBQ0Usa0JBQU0sZUFBZSxDQUFDLFNBQ3ZCO1FBSFEsVUFBSSxHQUFHLGdCQUFnQixDQUFDOztJQUdqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBb0MscUJBQXFCLEdBS3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5U3VjY2Vzc0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHtcbiAgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uLFxuICBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBFbnRpdHlSZW1vdmVBbGxBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LmFjdGlvbic7XG5pbXBvcnQgeyBNVUxUSV9DQVJUX0RBVEEgfSBmcm9tICcuLi9tdWx0aS1jYXJ0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IFNFVF9URU1QX0NBUlQgPSAnW0NhcnRdIFNldCBUZW1wIENhcnQnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9QUk9DRVNTRVNfSU5DUkVNRU5UID0gJ1tDYXJ0XSBDYXJ0IFByb2Nlc3NlcyBJbmNyZW1lbnQnO1xuZXhwb3J0IGNvbnN0IENBUlRfUFJPQ0VTU0VTX0RFQ1JFTUVOVCA9ICdbQ2FydF0gQ2FydCBQcm9jZXNzZXMgRGVjcmVtZW50JztcblxuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfQ0FSVF9JRCA9ICdbQ2FydF0gU2V0IEFjdGl2ZSBDYXJ0IElkJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlRfU1RBVEUgPSAnW0NhcnRdIENsZWFyIENhcnQgU3RhdGUnO1xuXG4vKipcbiAqIFRvIGtlZXAgdHJhY2sgb2YgY2FydCBjcmVhdGlvbiBwcm9jZXNzIHdlIHVzZSBjYXJ0IHdpdGggYHRlbXAtJHt1dWlkfWAgaWQuXG4gKiBBZnRlciBjcmVhdGluZyBjYXJ0IHdlIHN3aXRjaCB0byBlbnRpdHkgd2l0aCBgY29kZWAgb3IgYGd1aWRgLlxuICogV2UgbmVlZCBgdGVtcC0ke3V1aWR9YCBjYXJ0IGVudGl0aWVzIGZvciBsb2FkaW5nL2Vycm9yIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgU2V0VGVtcENhcnQgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9URU1QX0NBUlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNhcnQ6IENhcnQ7IHRlbXBDYXJ0SWQ6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkLnRlbXBDYXJ0SWQsIHBheWxvYWQuY2FydCk7XG4gIH1cbn1cblxuLy8gVE9ETygjNzI0MSk6IFJlbW92ZSB3aGVuIHRoZXJlIHdvbid0IGJlIGFueSB1c2FnZVxuLyoqXG4gKiBJbmNyZWFzZXMgcHJvY2VzcyBjb3VudGVyIG9uIGNhcnQgZW50aXRpZXNcbiAqIEFsbCBhY3Rpb25zIHRoYXQgY2F1c2UgY29tcHV0YXRpb25zIG9uIGNhcnQgc2hvdWxkIGV4dGVuZCBFbnRpdHlQcm9jZXNzZXNJbmNyZW1lbnRBY3Rpb24gaW5zdGVhZCBvZiBkaXNwYXRjaGluZyB0aGlzIGFjdGlvbi5cbiAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMFxuICovXG5leHBvcnQgY2xhc3MgQ2FydFByb2Nlc3Nlc0luY3JlbWVudCBleHRlbmRzIEVudGl0eVByb2Nlc3Nlc0luY3JlbWVudEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQVJUX1BST0NFU1NFU19JTkNSRU1FTlQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihNVUxUSV9DQVJUX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbi8vIFRPRE8oIzcyNDEpOiBSZW1vdmUgd2hlbiB0aGVyZSB3b24ndCBiZSBhbnkgdXNhZ2Vcbi8qKlxuICogRGVjcmVtZW50IHByb2Nlc3MgY291bnRlciBvbiBjYXJ0IGVudGl0aWVzXG4gKiBBbGwgYWN0aW9ucyB0aGF0IGNhdXNlIGNvbXB1dGF0aW9ucyBvbiBjYXJ0IHNob3VsZCBleHRlbmQgRW50aXR5UHJvY2Vzc2VzRGVjcmVtZW50QWN0aW9uIGluc3RlYWQgb2YgZGlzcGF0Y2hpbmcgdGhpcyBhY3Rpb24uXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAqL1xuZXhwb3J0IGNsYXNzIENhcnRQcm9jZXNzZXNEZWNyZW1lbnQgZXh0ZW5kcyBFbnRpdHlQcm9jZXNzZXNEZWNyZW1lbnRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0FSVF9QUk9DRVNTRVNfREVDUkVNRU5UO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoTVVMVElfQ0FSVF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG4vKipcbiAqIE9ubHkgc2V0cyBhY3RpdmUgY2FydCBwcm9wZXJ0eSB3aXRoIGlkIG9mIGFjdGl2ZSBjYXJ0LiBUaGVuIHNlcnZpY2VzIHRha2UgY2FyZSBvZiBsb2FkaW5nIHRoYXQgY2FydC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZUNhcnRJZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBTRVRfQUNUSVZFX0NBUlRfSUQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogQ2xlYXIgd2hvbGUgY2FydCBzdG9yZSBzdGF0ZTogYWxsIGVudGl0aWVzICsgcmVzZXQgcmVzdCBvZiB0aGUgY2FydCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsZWFyQ2FydFN0YXRlIGV4dGVuZHMgRW50aXR5UmVtb3ZlQWxsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUlRfU1RBVEU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1VTFRJX0NBUlRfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgTXVsdGlDYXJ0QWN0aW9ucyA9XG4gIHwgU2V0VGVtcENhcnRcbiAgfCBDYXJ0UHJvY2Vzc2VzSW5jcmVtZW50XG4gIHwgQ2FydFByb2Nlc3Nlc0RlY3JlbWVudFxuICB8IFNldEFjdGl2ZUNhcnRJZFxuICB8IENsZWFyQ2FydFN0YXRlO1xuIl19