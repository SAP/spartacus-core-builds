import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
/**
 * Extract cart identifier for current user. Anonymous calls use `guid` and for logged users `code` is used.
 */
export function getCartIdByUserId(cart, userId) {
    if (userId === OCC_USER_ID_ANONYMOUS) {
        return cart.guid;
    }
    return cart.code;
}
/**
 * Check if cart is selective (save for later) based on id.
 */
export function isSelectiveCart(cartId = '') {
    return cartId.startsWith('selectivecart');
}
/**
 * Check if the returned error is of type notFound.
 *
 * We additionally check if the cart is not a selective cart.
 * For selective cart this error can happen only when extension is disabled.
 * It should never happen, because in that case, selective cart should also be disabled in our configuration.
 * However if that happens we want to handle these errors silently.
 */
export function isCartNotFoundError(error) {
    return (error.reason === 'notFound' &&
        error.subjectType === 'cart' &&
        !isSelectiveCart(error.subject));
}
/**
 * Compute wishlist cart name for customer.
 */
export function getWishlistName(customerId) {
    return `wishlist${customerId}`;
}
/**
 * What is a temporary cart?
 * - frontend only cart entity!
 * - can be identified in store by `temp-` prefix with some unique id (multiple carts can be created at the same time eg. active cart, wishlist)
 *
 * Why we need temporary carts?
 * - to have information about cart creation process (meta flags: loading, error - for showing loader, error message)
 * - to know if there is currently a cart creation process in progress (eg. so, we don't create more than one active cart at the same time)
 * - cart identifiers are created in the backend, so those are only known after cart is created
 *
 * Temporary cart life cycle
 * - create cart method invoked
 * - new `temp-${uuid}` cart is created with `loading=true` state
 * - backend returns created cart
 * - normal cart entity is saved under correct id (eg. for logged user under cart `code` key)
 * - temporary cart value is set to backend response (anyone observing this cart can read code/guid from it and switch selector to normal cart)
 * - in next tick temporary cart is removed
 */
export function isTempCartId(cartId) {
    return cartId.startsWith('temp-');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVUsRUFBRSxNQUFjO0lBQzFELElBQUksTUFBTSxLQUFLLHFCQUFxQixFQUFFO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFO0lBQ3pDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFpQjtJQUNuRCxPQUFPLENBQ0wsS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVO1FBQzNCLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTTtRQUM1QixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQ2hDLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLFVBQWtCO0lBQ2hELE9BQU8sV0FBVyxVQUFVLEVBQUUsQ0FBQztBQUNqQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFjO0lBQ3pDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuLyoqXG4gKiBFeHRyYWN0IGNhcnQgaWRlbnRpZmllciBmb3IgY3VycmVudCB1c2VyLiBBbm9ueW1vdXMgY2FsbHMgdXNlIGBndWlkYCBhbmQgZm9yIGxvZ2dlZCB1c2VycyBgY29kZWAgaXMgdXNlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRJZEJ5VXNlcklkKGNhcnQ6IENhcnQsIHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgcmV0dXJuIGNhcnQuZ3VpZDtcbiAgfVxuICByZXR1cm4gY2FydC5jb2RlO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGNhcnQgaXMgc2VsZWN0aXZlIChzYXZlIGZvciBsYXRlcikgYmFzZWQgb24gaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlbGVjdGl2ZUNhcnQoY2FydElkID0gJycpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNhcnRJZC5zdGFydHNXaXRoKCdzZWxlY3RpdmVjYXJ0Jyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHJldHVybmVkIGVycm9yIGlzIG9mIHR5cGUgbm90Rm91bmQuXG4gKlxuICogV2UgYWRkaXRpb25hbGx5IGNoZWNrIGlmIHRoZSBjYXJ0IGlzIG5vdCBhIHNlbGVjdGl2ZSBjYXJ0LlxuICogRm9yIHNlbGVjdGl2ZSBjYXJ0IHRoaXMgZXJyb3IgY2FuIGhhcHBlbiBvbmx5IHdoZW4gZXh0ZW5zaW9uIGlzIGRpc2FibGVkLlxuICogSXQgc2hvdWxkIG5ldmVyIGhhcHBlbiwgYmVjYXVzZSBpbiB0aGF0IGNhc2UsIHNlbGVjdGl2ZSBjYXJ0IHNob3VsZCBhbHNvIGJlIGRpc2FibGVkIGluIG91ciBjb25maWd1cmF0aW9uLlxuICogSG93ZXZlciBpZiB0aGF0IGhhcHBlbnMgd2Ugd2FudCB0byBoYW5kbGUgdGhlc2UgZXJyb3JzIHNpbGVudGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDYXJ0Tm90Rm91bmRFcnJvcihlcnJvcjogRXJyb3JNb2RlbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGVycm9yLnJlYXNvbiA9PT0gJ25vdEZvdW5kJyAmJlxuICAgIGVycm9yLnN1YmplY3RUeXBlID09PSAnY2FydCcgJiZcbiAgICAhaXNTZWxlY3RpdmVDYXJ0KGVycm9yLnN1YmplY3QpXG4gICk7XG59XG5cbi8qKlxuICogQ29tcHV0ZSB3aXNobGlzdCBjYXJ0IG5hbWUgZm9yIGN1c3RvbWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lzaGxpc3ROYW1lKGN1c3RvbWVySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgd2lzaGxpc3Qke2N1c3RvbWVySWR9YDtcbn1cblxuLyoqXG4gKiBXaGF0IGlzIGEgdGVtcG9yYXJ5IGNhcnQ/XG4gKiAtIGZyb250ZW5kIG9ubHkgY2FydCBlbnRpdHkhXG4gKiAtIGNhbiBiZSBpZGVudGlmaWVkIGluIHN0b3JlIGJ5IGB0ZW1wLWAgcHJlZml4IHdpdGggc29tZSB1bmlxdWUgaWQgKG11bHRpcGxlIGNhcnRzIGNhbiBiZSBjcmVhdGVkIGF0IHRoZSBzYW1lIHRpbWUgZWcuIGFjdGl2ZSBjYXJ0LCB3aXNobGlzdClcbiAqXG4gKiBXaHkgd2UgbmVlZCB0ZW1wb3JhcnkgY2FydHM/XG4gKiAtIHRvIGhhdmUgaW5mb3JtYXRpb24gYWJvdXQgY2FydCBjcmVhdGlvbiBwcm9jZXNzIChtZXRhIGZsYWdzOiBsb2FkaW5nLCBlcnJvciAtIGZvciBzaG93aW5nIGxvYWRlciwgZXJyb3IgbWVzc2FnZSlcbiAqIC0gdG8ga25vdyBpZiB0aGVyZSBpcyBjdXJyZW50bHkgYSBjYXJ0IGNyZWF0aW9uIHByb2Nlc3MgaW4gcHJvZ3Jlc3MgKGVnLiBzbywgd2UgZG9uJ3QgY3JlYXRlIG1vcmUgdGhhbiBvbmUgYWN0aXZlIGNhcnQgYXQgdGhlIHNhbWUgdGltZSlcbiAqIC0gY2FydCBpZGVudGlmaWVycyBhcmUgY3JlYXRlZCBpbiB0aGUgYmFja2VuZCwgc28gdGhvc2UgYXJlIG9ubHkga25vd24gYWZ0ZXIgY2FydCBpcyBjcmVhdGVkXG4gKlxuICogVGVtcG9yYXJ5IGNhcnQgbGlmZSBjeWNsZVxuICogLSBjcmVhdGUgY2FydCBtZXRob2QgaW52b2tlZFxuICogLSBuZXcgYHRlbXAtJHt1dWlkfWAgY2FydCBpcyBjcmVhdGVkIHdpdGggYGxvYWRpbmc9dHJ1ZWAgc3RhdGVcbiAqIC0gYmFja2VuZCByZXR1cm5zIGNyZWF0ZWQgY2FydFxuICogLSBub3JtYWwgY2FydCBlbnRpdHkgaXMgc2F2ZWQgdW5kZXIgY29ycmVjdCBpZCAoZWcuIGZvciBsb2dnZWQgdXNlciB1bmRlciBjYXJ0IGBjb2RlYCBrZXkpXG4gKiAtIHRlbXBvcmFyeSBjYXJ0IHZhbHVlIGlzIHNldCB0byBiYWNrZW5kIHJlc3BvbnNlIChhbnlvbmUgb2JzZXJ2aW5nIHRoaXMgY2FydCBjYW4gcmVhZCBjb2RlL2d1aWQgZnJvbSBpdCBhbmQgc3dpdGNoIHNlbGVjdG9yIHRvIG5vcm1hbCBjYXJ0KVxuICogLSBpbiBuZXh0IHRpY2sgdGVtcG9yYXJ5IGNhcnQgaXMgcmVtb3ZlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUZW1wQ2FydElkKGNhcnRJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBjYXJ0SWQuc3RhcnRzV2l0aCgndGVtcC0nKTtcbn1cbiJdfQ==