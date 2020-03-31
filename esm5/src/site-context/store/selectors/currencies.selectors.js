import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
var currenciesEntitiesSelector = function (state) { return state.entities; };
var ɵ0 = currenciesEntitiesSelector;
var activeCurrencySelector = function (state) { return state.activeCurrency; };
var ɵ1 = activeCurrencySelector;
var ɵ2 = function (state) { return state.currencies; };
export var getCurrenciesState = createSelector(getSiteContextState, ɵ2);
export var getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
export var getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
var ɵ3 = function (entities) {
    return entities
        ? Object.keys(entities).map(function (isocode) { return entities[isocode]; })
        : null;
};
export var getAllCurrencies = createSelector(getCurrenciesEntities, ɵ3);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3NlbGVjdG9ycy9jdXJyZW5jaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxJQUFNLDBCQUEwQixHQUFHLFVBQUMsS0FBc0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDOztBQUM5RSxJQUFNLHNCQUFzQixHQUFHLFVBQUMsS0FBc0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQXBCLENBQW9CLENBQUM7O1NBTzlFLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCO0FBTC9DLE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLG1CQUFtQixLQUVwQixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBRW5FLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUcxQixjQUFjLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztTQUtyQixVQUFDLFFBQVE7SUFDakQsT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFqQixDQUFpQixDQUFDO1FBQzNELENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDO0FBUEQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FBQyxxQkFBcUIsS0FJdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIEN1cnJlbmNpZXNTdGF0ZSxcbiAgQ3VycmVuY3lFbnRpdGllcyxcbiAgU2l0ZUNvbnRleHRTdGF0ZSxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG59IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGdldFNpdGVDb250ZXh0U3RhdGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5zZWxlY3Rvcic7XG5cbmNvbnN0IGN1cnJlbmNpZXNFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBDdXJyZW5jaWVzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzO1xuY29uc3QgYWN0aXZlQ3VycmVuY3lTZWxlY3RvciA9IChzdGF0ZTogQ3VycmVuY2llc1N0YXRlKSA9PiBzdGF0ZS5hY3RpdmVDdXJyZW5jeTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbmNpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEN1cnJlbmNpZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRTaXRlQ29udGV4dFN0YXRlLFxuICAoc3RhdGU6IFNpdGVDb250ZXh0U3RhdGUpID0+IHN0YXRlLmN1cnJlbmNpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW5jaWVzRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBDdXJyZW5jeUVudGl0aWVzXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q3VycmVuY2llc1N0YXRlLCBjdXJyZW5jaWVzRW50aXRpZXNTZWxlY3Rvcik7XG5cbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVDdXJyZW5jeTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIHN0cmluZ1xuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldEN1cnJlbmNpZXNTdGF0ZSwgYWN0aXZlQ3VycmVuY3lTZWxlY3Rvcik7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDdXJyZW5jaWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgQ3VycmVuY3lbXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldEN1cnJlbmNpZXNFbnRpdGllcywgKGVudGl0aWVzKSA9PiB7XG4gIHJldHVybiBlbnRpdGllc1xuICAgID8gT2JqZWN0LmtleXMoZW50aXRpZXMpLm1hcCgoaXNvY29kZSkgPT4gZW50aXRpZXNbaXNvY29kZV0pXG4gICAgOiBudWxsO1xufSk7XG4iXX0=