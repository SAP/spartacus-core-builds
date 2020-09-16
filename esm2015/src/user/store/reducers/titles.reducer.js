import { UserActions } from '../actions/index';
export const initialState = {
    entities: {},
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_TITLES_SUCCESS: {
            const titles = action.payload;
            const entities = titles.reduce((titleEntities, name) => {
                return Object.assign(Object.assign({}, titleEntities), { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign(Object.assign({}, state), { entities });
        }
        case UserActions.CLEAR_USER_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL3JlZHVjZXJzL3RpdGxlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWdCO0lBQ3ZDLFFBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQztBQUVGLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQWlFO0lBRWpFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDOUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDNUIsQ0FBQyxhQUF3QyxFQUFFLElBQVcsRUFBRSxFQUFFO2dCQUN4RCx1Q0FDSyxhQUFhLEtBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFDakI7WUFDSixDQUFDLG9CQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCLENBQUM7WUFFRix1Q0FDSyxLQUFLLEtBQ1IsUUFBUSxJQUNSO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFRpdGxlc1N0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFRpdGxlc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuVGl0bGVzQWN0aW9uIHwgVXNlckFjdGlvbnMuQ2xlYXJVc2VyTWlzY3NEYXRhXG4pOiBUaXRsZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfVElUTEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHRpdGxlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSB0aXRsZXMucmVkdWNlKFxuICAgICAgICAodGl0bGVFbnRpdGllczogeyBbY29kZTogc3RyaW5nXTogVGl0bGUgfSwgbmFtZTogVGl0bGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGl0bGVFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmNvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFVzZXJBY3Rpb25zLkNMRUFSX1VTRVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=