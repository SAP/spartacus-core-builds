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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy91c2VyLWNvc3QtY2VudGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBaUIsRUFBRSxDQUFDO0FBRTdDLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXdDO0lBRXhDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsS0FBSyxXQUFXLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUNqRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztTQUN2RDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29zdENlbnRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZy11bml0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvc3RDZW50ZXJbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuVXNlckNvc3RDZW50ZXJBY3Rpb25cbik6IENvc3RDZW50ZXJbXSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfQUNUSVZFX0NPU1RfQ0VOVEVSU19GQUlMOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9BQ1RJVkVfQ09TVF9DRU5URVJTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkIDogaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=