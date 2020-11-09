import { Observable, Subscription } from 'rxjs';
/**
 * This implementation is OCC specific.
 * Different backend might have completely different need regarding user id.
 * It might not need user id at all and work based on access_token.
 * To implement custom solution provide your own implementation and customize services that use UserIdService
 */
import * as ɵngcc0 from '@angular/core';
export declare class UserIdService {
    private _userId;
    /**
     * Sets current user id.
     *
     * @param userId
     */
    setUserId(userId: string): void;
    /**
     * This function provides the userId the OCC calls should use, depending
     * on whether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'. In the case of an
     * asm customer emulation session, the userId will be the customerId.
     */
    getUserId(): Observable<string>;
    /**
     * Calls provided callback with current user id.
     *
     * @param cb callback function to invoke
     */
    invokeWithUserId(cb: (userId: string) => any): Subscription;
    /**
     * Sets user id to the default value for logged out user.
     */
    clearUserId(): void;
    /**
     * Checks if the userId is of emulated user type.
     */
    isEmulated(): Observable<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserIdService, never>;
}

//# sourceMappingURL=user-id.service.d.ts.map