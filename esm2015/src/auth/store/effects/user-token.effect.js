import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { OCC_USER_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserAuthenticationTokenService } from '../../services/user-authentication/user-authentication-token.service';
import { AuthActions } from '../actions/index';
let UserTokenEffects = class UserTokenEffects {
    constructor(actions$, userTokenService) {
        this.actions$ = actions$;
        this.userTokenService = userTokenService;
        this.loadUserToken$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN), map((action) => action.payload), mergeMap(({ userId, password }) => this.userTokenService.loadToken(userId, password).pipe(map((token) => {
            const date = new Date();
            date.setSeconds(date.getSeconds() + token.expires_in);
            token.expiration_time = date.toJSON();
            token.userId = OCC_USER_ID_CURRENT;
            return new AuthActions.LoadUserTokenSuccess(token);
        }), catchError((error) => of(new AuthActions.LoadUserTokenFail(makeErrorSerializable(error)))))));
        this.login$ = this.actions$.pipe(ofType(AuthActions.LOAD_USER_TOKEN_SUCCESS), map(() => new AuthActions.Login()));
        this.refreshUserToken$ = this.actions$.pipe(ofType(AuthActions.REFRESH_USER_TOKEN), map((action) => action.payload), exhaustMap(({ refreshToken }) => {
            return this.userTokenService.refreshToken(refreshToken).pipe(map((token) => {
                const date = new Date();
                date.setSeconds(date.getSeconds() + token.expires_in);
                token.expiration_time = date.toJSON();
                return new AuthActions.RefreshUserTokenSuccess(token);
            }, catchError((error) => of(new AuthActions.RefreshUserTokenFail(makeErrorSerializable(error))))));
        }));
        this.revokeUserToken$ = this.actions$.pipe(ofType(AuthActions.REVOKE_USER_TOKEN), map((action) => {
            return action.payload;
        }), mergeMap((userToken) => {
            return this.userTokenService.revoke(userToken).pipe(map(() => new AuthActions.RevokeUserTokenSuccess(userToken)), catchError((error) => of(new AuthActions.RevokeUserTokenFail(error))));
        }));
    }
};
UserTokenEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAuthenticationTokenService }
];
__decorate([
    Effect()
], UserTokenEffects.prototype, "loadUserToken$", void 0);
__decorate([
    Effect()
], UserTokenEffects.prototype, "login$", void 0);
__decorate([
    Effect()
], UserTokenEffects.prototype, "refreshUserToken$", void 0);
__decorate([
    Effect()
], UserTokenEffects.prototype, "revokeUserToken$", void 0);
UserTokenEffects = __decorate([
    Injectable()
], UserTokenEffects);
export { UserTokenEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9lZmZlY3RzL3VzZXItdG9rZW4uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFvRTNCLFlBQ1UsUUFBaUIsRUFDakIsZ0JBQWdEO1FBRGhELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFnQztRQXBFMUQsbUJBQWMsR0FBNEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDMUQsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsZ0JBQWdC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Q0FBQztDQUNMLENBQUE7O1lBSHFCLE9BQU87WUFDQyw4QkFBOEI7O0FBcEUxRDtJQURDLE1BQU0sRUFBRTt3REFrQlA7QUFHRjtJQURDLE1BQU0sRUFBRTtnREFJUDtBQUdGO0lBREMsTUFBTSxFQUFFOzJEQXVCUDtBQUdGO0lBREMsTUFBTSxFQUFFOzBEQWNQO0FBbEVTLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7R0FDQSxnQkFBZ0IsQ0F3RTVCO1NBeEVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItYXV0aGVudGljYXRpb24vdXNlci1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyVG9rZW5FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLlVzZXJUb2tlbkFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLkxPQURfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgoeyB1c2VySWQsIHBhc3N3b3JkIH0pID0+XG4gICAgICB0aGlzLnVzZXJUb2tlblNlcnZpY2UubG9hZFRva2VuKHVzZXJJZCwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIG1hcCgodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIHRva2VuLmV4cGlyZXNfaW4pO1xuICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgdG9rZW4udXNlcklkID0gT0NDX1VTRVJfSURfQ1VSUkVOVDtcbiAgICAgICAgICByZXR1cm4gbmV3IEF1dGhBY3Rpb25zLkxvYWRVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKG5ldyBBdXRoQWN0aW9ucy5Mb2FkVXNlclRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9naW4kOiBPYnNlcnZhYmxlPEF1dGhBY3Rpb25zLkxvZ2luPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9BRF9VU0VSX1RPS0VOX1NVQ0NFU1MpLFxuICAgIG1hcCgoKSA9PiBuZXcgQXV0aEFjdGlvbnMuTG9naW4oKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVmcmVzaFVzZXJUb2tlbiQ6IE9ic2VydmFibGU8XG4gICAgQXV0aEFjdGlvbnMuVXNlclRva2VuQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLlJFRlJFU0hfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW4pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBleGhhdXN0TWFwKCh7IHJlZnJlc2hUb2tlbiB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVG9rZW5TZXJ2aWNlLnJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAodG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyB0b2tlbi5leHBpcmVzX2luKTtcbiAgICAgICAgICAgIHRva2VuLmV4cGlyYXRpb25fdGltZSA9IGRhdGUudG9KU09OKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1dGhBY3Rpb25zLlJlZnJlc2hVc2VyVG9rZW5TdWNjZXNzKHRva2VuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBdXRoQWN0aW9ucy5SZWZyZXNoVXNlclRva2VuRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXZva2VVc2VyVG9rZW4kOiBPYnNlcnZhYmxlPFxuICAgIEF1dGhBY3Rpb25zLlVzZXJUb2tlbkFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5SRVZPS0VfVVNFUl9UT0tFTiksXG4gICAgbWFwKChhY3Rpb246IEF1dGhBY3Rpb25zLlJldm9rZVVzZXJUb2tlbikgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIG1lcmdlTWFwKCh1c2VyVG9rZW46IFVzZXJUb2tlbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlclRva2VuU2VydmljZS5yZXZva2UodXNlclRva2VuKS5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gbmV3IEF1dGhBY3Rpb25zLlJldm9rZVVzZXJUb2tlblN1Y2Nlc3ModXNlclRva2VuKSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiBvZihuZXcgQXV0aEFjdGlvbnMuUmV2b2tlVXNlclRva2VuRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyVG9rZW5TZXJ2aWNlOiBVc2VyQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgKSB7fVxufVxuIl19