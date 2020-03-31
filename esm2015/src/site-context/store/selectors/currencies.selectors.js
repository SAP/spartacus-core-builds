import { createSelector } from '@ngrx/store';
import { getSiteContextState } from './site-context.selector';
const currenciesEntitiesSelector = (state) => state.entities;
const ɵ0 = currenciesEntitiesSelector;
const activeCurrencySelector = (state) => state.activeCurrency;
const ɵ1 = activeCurrencySelector;
const ɵ2 = (state) => state.currencies;
export const getCurrenciesState = createSelector(getSiteContextState, ɵ2);
export const getCurrenciesEntities = createSelector(getCurrenciesState, currenciesEntitiesSelector);
export const getActiveCurrency = createSelector(getCurrenciesState, activeCurrencySelector);
const ɵ3 = (entities) => {
    return entities
        ? Object.keys(entities).map((isocode) => entities[isocode])
        : null;
};
export const getAllCurrencies = createSelector(getCurrenciesEntities, ɵ3);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3NlbGVjdG9ycy9jdXJyZW5jaWVzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQVEvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxNQUFNLDBCQUEwQixHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7QUFDOUUsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7O1dBTzlFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7QUFML0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBRzNCLGNBQWMsQ0FDaEIsbUJBQW1CLEtBRXBCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FHOUIsY0FBYyxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFFbkUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBRzFCLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1dBS3JCLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDckQsT0FBTyxRQUFRO1FBQ2IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUM7QUFQRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FHekIsY0FBYyxDQUFDLHFCQUFxQixLQUl0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ3VycmVuY2llc1N0YXRlLFxuICBDdXJyZW5jeUVudGl0aWVzLFxuICBTaXRlQ29udGV4dFN0YXRlLFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbn0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0U2l0ZUNvbnRleHRTdGF0ZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LnNlbGVjdG9yJztcblxuY29uc3QgY3VycmVuY2llc0VudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IEN1cnJlbmNpZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG5jb25zdCBhY3RpdmVDdXJyZW5jeVNlbGVjdG9yID0gKHN0YXRlOiBDdXJyZW5jaWVzU3RhdGUpID0+IHN0YXRlLmFjdGl2ZUN1cnJlbmN5O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVuY2llc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgQ3VycmVuY2llc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFNpdGVDb250ZXh0U3RhdGUsXG4gIChzdGF0ZTogU2l0ZUNvbnRleHRTdGF0ZSkgPT4gc3RhdGUuY3VycmVuY2llc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbmNpZXNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU2l0ZUNvbnRleHQsXG4gIEN1cnJlbmN5RW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDdXJyZW5jaWVzU3RhdGUsIGN1cnJlbmNpZXNFbnRpdGllc1NlbGVjdG9yKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZUN1cnJlbmN5OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhTaXRlQ29udGV4dCxcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q3VycmVuY2llc1N0YXRlLCBhY3RpdmVDdXJyZW5jeVNlbGVjdG9yKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbEN1cnJlbmNpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFNpdGVDb250ZXh0LFxuICBDdXJyZW5jeVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q3VycmVuY2llc0VudGl0aWVzLCAoZW50aXRpZXMpID0+IHtcbiAgcmV0dXJuIGVudGl0aWVzXG4gICAgPyBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKChpc29jb2RlKSA9PiBlbnRpdGllc1tpc29jb2RlXSlcbiAgICA6IG51bGw7XG59KTtcbiJdfQ==