import { AnonymousConsentsActions } from '../actions/index';
export const initialState = false;
export function reducer(state = initialState, action) {
    switch (action.type) {
        case AnonymousConsentsActions.TOGGLE_ANONYMOUS_CONSENTS_BANNER_DISMISSED: {
            return action.dismissed;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWJhbm5lci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYW5vbnltb3VzLWNvbnNlbnRzL3N0b3JlL3JlZHVjZXJzL2Fub255bW91cy1jb25zZW50cy1iYW5uZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU1RCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBRWxDLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXdFO0lBRXhFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHdCQUF3QixDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLlRvZ2dsZUFub255bW91c0NvbnNlbnRzQmFubmVyRGlzc21pc3NlZFxuKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFub255bW91c0NvbnNlbnRzQWN0aW9ucy5UT0dHTEVfQU5PTllNT1VTX0NPTlNFTlRTX0JBTk5FUl9ESVNNSVNTRUQ6IHtcbiAgICAgIHJldHVybiBhY3Rpb24uZGlzbWlzc2VkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==