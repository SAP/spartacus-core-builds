/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getCmsState } from './feature.selectors';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderValueSelector } from '../../../state/utils/loader/loader.selectors';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.navigation;
/** @type {?} */
export const getNavigationEntryItemState = createSelector(getCmsState, (ɵ0));
/** @type {?} */
export const getSelectedNavigationEntryItemState = (/**
 * @param {?} nodeId
 * @return {?}
 */
(nodeId) => {
    return createSelector(getNavigationEntryItemState, (/**
     * @param {?} nodes
     * @return {?}
     */
    nodes => entityStateSelector(nodes, nodeId)));
});
/** @type {?} */
export const itemsSelectorFactory = (/**
 * @param {?} nodeId
 * @return {?}
 */
(nodeId) => {
    return createSelector(getSelectedNavigationEntryItemState(nodeId), (/**
     * @param {?} itemState
     * @return {?}
     */
    itemState => loaderValueSelector(itemState)));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvc2VsZWN0b3JzL25hdmlnYXRpb24tZW50cnktaXRlbS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUlsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFPakYsQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVOztBQUx2QyxNQUFNLE9BQU8sMkJBQTJCLEdBR3BDLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOztBQUVELE1BQU0sT0FBTyxtQ0FBbUM7Ozs7QUFBRyxDQUNqRCxNQUFjLEVBQ3lDLEVBQUU7SUFDekQsT0FBTyxjQUFjLENBQ25CLDJCQUEyQjs7OztJQUMzQixLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDNUMsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sb0JBQW9COzs7O0FBQUcsQ0FDbEMsTUFBYyxFQUM0QixFQUFFO0lBQzVDLE9BQU8sY0FBYyxDQUNuQixtQ0FBbUMsQ0FBQyxNQUFNLENBQUM7Ozs7SUFDM0MsU0FBUyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFDNUMsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ21zU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IGVudGl0eVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IGxvYWRlclZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnNlbGVjdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBnZXROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgRW50aXR5TG9hZGVyU3RhdGU8Tm9kZUl0ZW0+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5uYXZpZ2F0aW9uXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGUgPSAoXG4gIG5vZGVJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8Tm9kZUl0ZW0+PiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtU3RhdGUsXG4gICAgbm9kZXMgPT4gZW50aXR5U3RhdGVTZWxlY3Rvcihub2Rlcywgbm9kZUlkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGl0ZW1zU2VsZWN0b3JGYWN0b3J5ID0gKFxuICBub2RlSWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIE5vZGVJdGVtPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZE5hdmlnYXRpb25FbnRyeUl0ZW1TdGF0ZShub2RlSWQpLFxuICAgIGl0ZW1TdGF0ZSA9PiBsb2FkZXJWYWx1ZVNlbGVjdG9yKGl0ZW1TdGF0ZSlcbiAgKTtcbn07XG4iXX0=