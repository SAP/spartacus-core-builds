import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { GlobalMessageType } from '../../../global-message/models/global-message.model';
import { GlobalMessageActions } from '../../../global-message/store/actions/index';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
export class ForgotPasswordEffects {
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.requestForgotPasswordEmail$ = this.actions$.pipe(ofType(UserActions.FORGOT_PASSWORD_EMAIL_REQUEST), map((action) => {
            return action.payload;
        }), concatMap((userEmailAddress) => {
            return this.userAccountConnector
                .requestForgotPasswordEmail(userEmailAddress)
                .pipe(switchMap(() => [
                new UserActions.ForgotPasswordEmailRequestSuccess(),
                new GlobalMessageActions.AddMessage({
                    text: { key: 'forgottenPassword.passwordResetEmailSent' },
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError((error) => of(new UserActions.ForgotPasswordEmailRequestFail(normalizeHttpError(error)))));
        }));
    }
}
ForgotPasswordEffects.decorators = [
    { type: Injectable }
];
ForgotPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
__decorate([
    Effect()
], ForgotPasswordEffects.prototype, "requestForgotPasswordEmail$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9mb3Jnb3QtcGFzc3dvcmQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxxQkFBcUI7SUFpQ2hDLFlBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRG5DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFlO1FBakM3QyxnQ0FBMkIsR0FJdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsRUFDakQsR0FBRyxDQUFDLENBQUMsTUFBOEMsRUFBRSxFQUFFO1lBQ3JELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQjtpQkFDN0IsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVDLElBQUksQ0FDSCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2QsSUFBSSxXQUFXLENBQUMsaUNBQWlDLEVBQUU7Z0JBQ25ELElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDO29CQUNsQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsMENBQTBDLEVBQUU7b0JBQ3pELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxxQkFBcUI7aUJBQzlDLENBQUM7YUFDSCxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbkIsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLDhCQUE4QixDQUM1QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FDMUIsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUFyQ0wsVUFBVTs7O1lBVEYsT0FBTztZQU1QLGFBQWE7O0FBTXBCO0lBREMsTUFBTSxFQUFFOzBFQThCUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2Uvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBub3JtYWxpemVIdHRwRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL25vcm1hbGl6ZS1odHRwLWVycm9yJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBVc2VyQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3NcbiAgICB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICB8IFVzZXJBY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5GT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVCksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgY29uY2F0TWFwKCh1c2VyRW1haWxBZGRyZXNzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWNjb3VudENvbm5lY3RvclxuICAgICAgICAucmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+IFtcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Gb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIG5ldyBHbG9iYWxNZXNzYWdlQWN0aW9ucy5BZGRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdGV4dDogeyBrZXk6ICdmb3Jnb3R0ZW5QYXNzd29yZC5wYXNzd29yZFJlc2V0RW1haWxTZW50JyB9LFxuICAgICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RGYWlsKFxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUh0dHBFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=