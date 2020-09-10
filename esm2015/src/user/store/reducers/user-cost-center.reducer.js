import { UserActions } from '../actions/index';
export const initialState = [];
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_ACTIVE_COST_CENTERS_FAIL: {
            return initialState;
        }
        case UserActions.LOAD_ACTIVE_COST_CENTERS_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb3N0LWNlbnRlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWlCLEVBQUUsQ0FBQztBQUU3QyxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUF3QztJQUV4QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUM5QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELEtBQUssV0FBVyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDakQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDdkQ7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDb3N0Q2VudGVyW10gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFVzZXJBY3Rpb25zLlVzZXJDb3N0Q2VudGVyQWN0aW9uXG4pOiBDb3N0Q2VudGVyW10ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9ucy5MT0FEX0FDVElWRV9DT1NUX0NFTlRFUlNfRkFJTDoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfQUNUSVZFX0NPU1RfQ0VOVEVSU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZCA6IGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19