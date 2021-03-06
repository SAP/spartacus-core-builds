import { InjectionToken } from '@angular/core';
import { AuthActions } from '../../../auth/user-auth/store/actions/index';
import { entityProcessesLoaderReducer } from '../../../state/utils/entity-processes-loader/entity-processes-loader.reducer';
import { MULTI_CART_DATA } from '../multi-cart-state';
import { activeCartReducer, cartEntitiesReducer, wishListReducer, } from './multi-cart.reducer';
export function clearMultiCartState(reducer) {
    return function (state, action) {
        if (action.type === AuthActions.LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
export const multiCartMetaReducers = [clearMultiCartState];
export const multiCartReducerToken = new InjectionToken('MultiCartReducers');
export function getMultiCartReducers() {
    return {
        carts: entityProcessesLoaderReducer(MULTI_CART_DATA, cartEntitiesReducer),
        active: activeCartReducer,
        wishList: wishListReducer,
    };
}
export const multiCartReducerProvider = {
    provide: multiCartReducerToken,
    useFactory: getMultiCartReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQzVILE9BQU8sRUFBa0IsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsZUFBZSxHQUNoQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsT0FBMkI7SUFFM0IsT0FBTyxVQUFVLEtBQUssRUFBRSxNQUFNO1FBQzVCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUF1QixDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFL0UsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBRTdCLElBQUksY0FBYyxDQUFtQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRS9FLE1BQU0sVUFBVSxvQkFBb0I7SUFDbEMsT0FBTztRQUNMLEtBQUssRUFBRSw0QkFBNEIsQ0FDakMsZUFBZSxFQUNmLG1CQUFtQixDQUNwQjtRQUNELE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBYTtJQUNoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFVBQVUsRUFBRSxvQkFBb0I7Q0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvdXNlci1hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgZW50aXR5UHJvY2Vzc2VzTG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyL2VudGl0eS1wcm9jZXNzZXMtbG9hZGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGUsIE1VTFRJX0NBUlRfREFUQSB9IGZyb20gJy4uL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHtcbiAgYWN0aXZlQ2FydFJlZHVjZXIsXG4gIGNhcnRFbnRpdGllc1JlZHVjZXIsXG4gIHdpc2hMaXN0UmVkdWNlcixcbn0gZnJvbSAnLi9tdWx0aS1jYXJ0LnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNdWx0aUNhcnRTdGF0ZShcbiAgcmVkdWNlcjogQWN0aW9uUmVkdWNlcjxhbnk+XG4pOiBBY3Rpb25SZWR1Y2VyPGFueT4ge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgbXVsdGlDYXJ0TWV0YVJlZHVjZXJzOiBNZXRhUmVkdWNlcjxhbnk+W10gPSBbY2xlYXJNdWx0aUNhcnRTdGF0ZV07XG5cbmV4cG9ydCBjb25zdCBtdWx0aUNhcnRSZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8XG4gIE11bHRpQ2FydFN0YXRlXG4+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPj4oJ011bHRpQ2FydFJlZHVjZXJzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aUNhcnRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPE11bHRpQ2FydFN0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgY2FydHM6IGVudGl0eVByb2Nlc3Nlc0xvYWRlclJlZHVjZXI8Q2FydD4oXG4gICAgICBNVUxUSV9DQVJUX0RBVEEsXG4gICAgICBjYXJ0RW50aXRpZXNSZWR1Y2VyXG4gICAgKSxcbiAgICBhY3RpdmU6IGFjdGl2ZUNhcnRSZWR1Y2VyLFxuICAgIHdpc2hMaXN0OiB3aXNoTGlzdFJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aUNhcnRSZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBtdWx0aUNhcnRSZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldE11bHRpQ2FydFJlZHVjZXJzLFxufTtcbiJdfQ==