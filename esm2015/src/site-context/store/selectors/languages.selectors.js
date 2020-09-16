import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
const activeLanguageSelector = (state) => state.activeLanguage;
const ɵ0 = activeLanguageSelector;
const languagesEntitiesSelector = (state) => state.entities;
const ɵ1 = languagesEntitiesSelector;
const ɵ2 = (state) => state.languages;
export const getLanguagesState = createSelector(getSiteContextState, ɵ2);
export const getLanguagesEntities = createSelector(getLanguagesState, languagesEntitiesSelector);
export const getActiveLanguage = createSelector(getLanguagesState, activeLanguageSelector);
const ɵ3 = (entities) => {
    return entities
        ? Object.keys(entities).map((isocode) => entities[isocode])
        : null;
};
export const getAllLanguages = createSelector(getLanguagesEntities, ɵ3);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3NpdGUtY29udGV4dC9zdG9yZS9zZWxlY3RvcnMvbGFuZ3VhZ2VzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxNQUFNLHNCQUFzQixHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7QUFDL0UsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7O1dBTzFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVM7QUFMOUMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIsbUJBQW1CLEtBRXBCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FHN0IsY0FBYyxDQUFDLGlCQUFpQixFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFFakUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBRzFCLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1dBS3JCLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDcEQsT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUM7QUFQRCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBR3hCLGNBQWMsQ0FBQyxvQkFBb0IsS0FJckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIExhbmd1YWdlc0VudGl0aWVzLFxuICBMYW5ndWFnZXNTdGF0ZSxcbiAgU2l0ZUNvbnRleHRTdGF0ZSxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG59IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGdldFNpdGVDb250ZXh0U3RhdGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5zZWxlY3Rvcic7XG5cbmNvbnN0IGFjdGl2ZUxhbmd1YWdlU2VsZWN0b3IgPSAoc3RhdGU6IExhbmd1YWdlc1N0YXRlKSA9PiBzdGF0ZS5hY3RpdmVMYW5ndWFnZTtcbmNvbnN0IGxhbmd1YWdlc0VudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IExhbmd1YWdlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcztcblxuZXhwb3J0IGNvbnN0IGdldExhbmd1YWdlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgTGFuZ3VhZ2VzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0U2l0ZUNvbnRleHRTdGF0ZSxcbiAgKHN0YXRlOiBTaXRlQ29udGV4dFN0YXRlKSA9PiBzdGF0ZS5sYW5ndWFnZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRMYW5ndWFnZXNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIExhbmd1YWdlc0VudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGFuZ3VhZ2VzU3RhdGUsIGxhbmd1YWdlc0VudGl0aWVzU2VsZWN0b3IpO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlTGFuZ3VhZ2U6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBzdHJpbmdcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRMYW5ndWFnZXNTdGF0ZSwgYWN0aXZlTGFuZ3VhZ2VTZWxlY3Rvcik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxMYW5ndWFnZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBMYW5ndWFnZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGFuZ3VhZ2VzRW50aXRpZXMsIChlbnRpdGllcykgPT4ge1xuICByZXR1cm4gZW50aXRpZXNcbiAgICA/IE9iamVjdC5rZXlzKGVudGl0aWVzKS5tYXAoKGlzb2NvZGUpID0+IGVudGl0aWVzW2lzb2NvZGVdKVxuICAgIDogbnVsbDtcbn0pO1xuIl19