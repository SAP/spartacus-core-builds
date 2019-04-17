/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { STORE_FINDER_DATA } from '../store-finder-state';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        findStores: loaderReducer(STORE_FINDER_DATA),
        viewAllStores: loaderReducer(STORE_FINDER_DATA),
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('StoreFinderReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/** @type {?} */
export var metaReducers = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBZSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQUUzRSxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsVUFBVSxFQUFFLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QyxhQUFhLEVBQUUsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0tBQ2hELENBQUM7QUFDSixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBRXJCLElBQUksY0FBYyxDQUFnQyxxQkFBcUIsQ0FBQzs7QUFFNUUsTUFBTSxLQUFPLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4Qjs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUF1QixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCwgTWV0YVJlZHVjZXIgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVzU3RhdGUsIFNUT1JFX0ZJTkRFUl9EQVRBIH0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IGxvYWRlclJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxTdG9yZXNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGZpbmRTdG9yZXM6IGxvYWRlclJlZHVjZXIoU1RPUkVfRklOREVSX0RBVEEpLFxuICAgIHZpZXdBbGxTdG9yZXM6IGxvYWRlclJlZHVjZXIoU1RPUkVfRklOREVSX0RBVEEpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxTdG9yZXNTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxTdG9yZXNTdGF0ZT4+KCdTdG9yZUZpbmRlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW107XG4iXX0=