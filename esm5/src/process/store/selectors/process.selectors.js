/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector } from '../../../state/utils/entity-loader/entity-loader.selectors';
import { loaderErrorSelector, loaderLoadingSelector, loaderSuccessSelector, } from '../../../state/utils/loader/loader.selectors';
import { getProcessState } from './feature.selector';
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessStateFactory(processId) {
    return createSelector(getProcessState(), (/**
     * @param {?} entityState
     * @return {?}
     */
    function (entityState) { return entityStateSelector(entityState, processId); }));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessLoadingFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    function (loaderState) { return loaderLoadingSelector(loaderState); }));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessSuccessFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    function (loaderState) { return loaderSuccessSelector(loaderState); }));
}
/**
 * @template T
 * @param {?} processId
 * @return {?}
 */
export function getProcessErrorFactory(processId) {
    return createSelector(getProcessStateFactory(processId), (/**
     * @param {?} loaderState
     * @return {?}
     */
    function (loaderState) { return loaderErrorSelector(loaderState); }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixHQUN0QixNQUFNLDhDQUE4QyxDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRXJELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsU0FBaUI7SUFFakIsT0FBTyxjQUFjLENBQ25CLGVBQWUsRUFBRTs7OztJQUNqQixVQUFBLFdBQVcsSUFBSSxPQUFBLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBM0MsQ0FBMkMsRUFDM0QsQ0FBQztBQUNKLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSx3QkFBd0IsQ0FDdEMsU0FBaUI7SUFFakIsT0FBTyxjQUFjLENBQ25CLHNCQUFzQixDQUFDLFNBQVMsQ0FBQzs7OztJQUNqQyxVQUFBLFdBQVcsSUFBSSxPQUFBLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxFQUFsQyxDQUFrQyxFQUNsRCxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxTQUFpQjtJQUVqQixPQUFPLGNBQWMsQ0FDbkIsc0JBQXNCLENBQUMsU0FBUyxDQUFDOzs7O0lBQ2pDLFVBQUEsV0FBVyxJQUFJLE9BQUEscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQWxDLENBQWtDLEVBQ2xELENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLFNBQWlCO0lBRWpCLE9BQU8sY0FBYyxDQUNuQixzQkFBc0IsQ0FBQyxTQUFTLENBQUM7Ozs7SUFDakMsVUFBQSxXQUFXLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBaEMsQ0FBZ0MsRUFDaEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGVudGl0eVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuc2VsZWN0b3JzJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBsb2FkZXJFcnJvclNlbGVjdG9yLFxuICBsb2FkZXJMb2FkaW5nU2VsZWN0b3IsXG4gIGxvYWRlclN1Y2Nlc3NTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NTdGF0ZUZhY3Rvcnk8VD4oXG4gIHByb2Nlc3NJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2Nlc3M8VD4sIExvYWRlclN0YXRlPFQ+PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9jZXNzU3RhdGUoKSxcbiAgICBlbnRpdHlTdGF0ZSA9PiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGVudGl0eVN0YXRlLCBwcm9jZXNzSWQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzTG9hZGluZ0ZhY3Rvcnk8VD4oXG4gIHByb2Nlc3NJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2Nlc3M8VD4sIGJvb2xlYW4+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkocHJvY2Vzc0lkKSxcbiAgICBsb2FkZXJTdGF0ZSA9PiBsb2FkZXJMb2FkaW5nU2VsZWN0b3IobG9hZGVyU3RhdGUpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3Rvcnk8VD4oXG4gIHByb2Nlc3NJZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2Nlc3M8VD4sIGJvb2xlYW4+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFByb2Nlc3NTdGF0ZUZhY3RvcnkocHJvY2Vzc0lkKSxcbiAgICBsb2FkZXJTdGF0ZSA9PiBsb2FkZXJTdWNjZXNzU2VsZWN0b3IobG9hZGVyU3RhdGUpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9jZXNzRXJyb3JGYWN0b3J5PFQ+KFxuICBwcm9jZXNzSWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9jZXNzPFQ+LCBib29sZWFuPiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQcm9jZXNzU3RhdGVGYWN0b3J5KHByb2Nlc3NJZCksXG4gICAgbG9hZGVyU3RhdGUgPT4gbG9hZGVyRXJyb3JTZWxlY3Rvcihsb2FkZXJTdGF0ZSlcbiAgKTtcbn1cbiJdfQ==