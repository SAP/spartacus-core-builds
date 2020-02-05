/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
/** @type {?} */
export const initialState = {
    component: undefined,
    pageContext: {},
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function componentExistsReducer(state = false, action) {
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT_FAIL:
            return false;
        case CmsActions.CMS_GET_COMPONENET_FROM_PAGE:
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS:
            return true;
    }
    return state;
}
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case CmsActions.LOAD_CMS_COMPONENT: {
            /** @type {?} */
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            const context = serializePageContext(action.pageContext, true);
            return Object.assign({}, state, { pageContext: Object.assign({}, state.pageContext, { [context]: pageContextReducer(state.pageContext[context], action) }) });
        }
        case CmsActions.LOAD_CMS_COMPONENT_FAIL: {
            /** @type {?} */
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            const context = serializePageContext(action.pageContext, true);
            return Object.assign({}, state, { pageContext: Object.assign({}, state.pageContext, { [context]: pageContextReducer(state.pageContext[context], action) }) });
        }
        case CmsActions.CMS_GET_COMPONENET_FROM_PAGE:
        case CmsActions.LOAD_CMS_COMPONENT_SUCCESS: {
            /** @type {?} */
            const pageContextReducer = loaderReducer(action.meta.entityType, componentExistsReducer);
            /** @type {?} */
            const context = serializePageContext(action.pageContext, true);
            return Object.assign({}, state, { component: (/** @type {?} */ (action.payload)), pageContext: Object.assign({}, state.pageContext, { [context]: pageContextReducer(state.pageContext[context], action) }) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9jb21wb25lbnRzLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRzlDLE1BQU0sT0FBTyxZQUFZLEdBQXNCO0lBQzdDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFdBQVcsRUFBRSxFQUFFO0NBQ2hCOzs7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FDN0IsS0FBSyxHQUFHLEtBQUssRUFDYixNQUF3QztJQUV4QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsdUJBQXVCO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1FBRWYsS0FBSyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDN0MsS0FBSyxVQUFVLENBQUMsMEJBQTBCO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUF3QztJQUV4QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7a0JBQzVCLGtCQUFrQixHQUFHLGFBQWEsQ0FDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3RCLHNCQUFzQixDQUN2Qjs7a0JBQ0ssT0FBTyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1lBQzlELHlCQUNLLEtBQUssSUFDUixXQUFXLG9CQUNOLEtBQUssQ0FBQyxXQUFXLElBQ3BCLENBQUMsT0FBTyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsT0FFbkU7U0FDSDtRQUNELEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUNqQyxrQkFBa0IsR0FBRyxhQUFhLENBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUN0QixzQkFBc0IsQ0FDdkI7O2tCQUNLLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUM5RCx5QkFDSyxLQUFLLElBQ1IsV0FBVyxvQkFDTixLQUFLLENBQUMsV0FBVyxJQUNwQixDQUFDLE9BQU8sQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BRW5FO1NBQ0g7UUFDRCxLQUFLLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQztRQUM3QyxLQUFLLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztrQkFDcEMsa0JBQWtCLEdBQUcsYUFBYSxDQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdEIsc0JBQXNCLENBQ3ZCOztrQkFDSyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFDOUQseUJBQ0ssS0FBSyxJQUNSLFNBQVMsRUFBRSxtQkFBQSxNQUFNLENBQUMsT0FBTyxFQUFLLEVBQzlCLFdBQVcsb0JBQ04sS0FBSyxDQUFDLFdBQVcsSUFDcEIsQ0FBQyxPQUFPLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUVuRTtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMvY21zLXV0aWxzJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNDb250ZXh0IH0gZnJvbSAnLi4vY21zLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ29tcG9uZW50c0NvbnRleHQgPSB7XG4gIGNvbXBvbmVudDogdW5kZWZpbmVkLFxuICBwYWdlQ29udGV4dDoge30sXG59O1xuXG5mdW5jdGlvbiBjb21wb25lbnRFeGlzdHNSZWR1Y2VyPFQ+KFxuICBzdGF0ZSA9IGZhbHNlLFxuICBhY3Rpb246IENtc0FjdGlvbnMuQ21zQ29tcG9uZW50QWN0aW9uPFQ+XG4pOiBib29sZWFuIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlRfRkFJTDpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgQ21zQWN0aW9ucy5DTVNfR0VUX0NPTVBPTkVORVRfRlJPTV9QQUdFOlxuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXI8VD4oXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENtc0FjdGlvbnMuQ21zQ29tcG9uZW50QWN0aW9uPFQ+XG4pOiBDb21wb25lbnRzQ29udGV4dCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UOiB7XG4gICAgICBjb25zdCBwYWdlQ29udGV4dFJlZHVjZXIgPSBsb2FkZXJSZWR1Y2VyPGJvb2xlYW4+KFxuICAgICAgICBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlLFxuICAgICAgICBjb21wb25lbnRFeGlzdHNSZWR1Y2VyXG4gICAgICApO1xuICAgICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KGFjdGlvbi5wYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGFnZUNvbnRleHQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5wYWdlQ29udGV4dCxcbiAgICAgICAgICBbY29udGV4dF06IHBhZ2VDb250ZXh0UmVkdWNlcihzdGF0ZS5wYWdlQ29udGV4dFtjb250ZXh0XSwgYWN0aW9uKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlRfRkFJTDoge1xuICAgICAgY29uc3QgcGFnZUNvbnRleHRSZWR1Y2VyID0gbG9hZGVyUmVkdWNlcjxib29sZWFuPihcbiAgICAgICAgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSxcbiAgICAgICAgY29tcG9uZW50RXhpc3RzUmVkdWNlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb24ucGFnZUNvbnRleHQsIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhZ2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIENtc0FjdGlvbnMuQ01TX0dFVF9DT01QT05FTkVUX0ZST01fUEFHRTpcbiAgICBjYXNlIENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHBhZ2VDb250ZXh0UmVkdWNlciA9IGxvYWRlclJlZHVjZXI8Ym9vbGVhbj4oXG4gICAgICAgIGFjdGlvbi5tZXRhLmVudGl0eVR5cGUsXG4gICAgICAgIGNvbXBvbmVudEV4aXN0c1JlZHVjZXJcbiAgICAgICk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9uLnBhZ2VDb250ZXh0LCB0cnVlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wb25lbnQ6IGFjdGlvbi5wYXlsb2FkIGFzIFQsXG4gICAgICAgIHBhZ2VDb250ZXh0OiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFnZUNvbnRleHQsXG4gICAgICAgICAgW2NvbnRleHRdOiBwYWdlQ29udGV4dFJlZHVjZXIoc3RhdGUucGFnZUNvbnRleHRbY29udGV4dF0sIGFjdGlvbiksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=