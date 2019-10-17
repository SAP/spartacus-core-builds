/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/loader/loader-group.selectors';
import { getAuthState } from './feature.selector';
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.csagentToken;
/** @type {?} */
export const getCustomerSupportAgentTokenState = createSelector(getAuthState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderValueSelector(state);
/** @type {?} */
export const getCustomerSupportAgentToken = createSelector(getCustomerSupportAgentTokenState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => StateLoaderSelectors.loaderLoadingSelector(state);
/** @type {?} */
export const getCustomerSupportAgentTokenLoading = createSelector(getCustomerSupportAgentTokenState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NhZ2VudC10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9zZWxlY3RvcnMvY3NhZ2VudC10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPaEQsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWTs7QUFMMUMsTUFBTSxPQUFPLGlDQUFpQyxHQUcxQyxjQUFjLENBQ2hCLFlBQVksT0FFYjs7Ozs7QUFPQyxLQUFLLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQzs7QUFMMUQsTUFBTSxPQUFPLDRCQUE0QixHQUdyQyxjQUFjLENBQ2hCLGlDQUFpQyxPQUVsQzs7Ozs7QUFPQyxLQUFLLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzs7QUFMNUQsTUFBTSxPQUFPLG1DQUFtQyxHQUc1QyxjQUFjLENBQ2hCLGlDQUFpQyxPQUVsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJTZWxlY3RvcnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEF1dGhTdGF0ZSwgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0QXV0aFN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5TdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXV0aCxcbiAgTG9hZGVyU3RhdGU8VXNlclRva2VuPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBdXRoU3RhdGUsXG4gIChzdGF0ZTogQXV0aFN0YXRlKSA9PiBzdGF0ZS5jc2FnZW50VG9rZW5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXN0b21lclN1cHBvcnRBZ2VudFRva2VuOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBVc2VyVG9rZW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlblN0YXRlLFxuICBzdGF0ZSA9PiBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5TdGF0ZSxcbiAgc3RhdGUgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==