import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { AuthActions } from '../../../auth/store/actions/index';
import { PageType } from '../../../model/cms.model';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { entityLoaderReducer } from '../../../state/utils/entity-loader/entity-loader.reducer';
import { entityReducer } from '../../../state/utils/entity/entity.reducer';
import { COMPONENT_ENTITY, NAVIGATION_DETAIL_ENTITY, } from '../cms-state';
import * as fromComponentsReducer from './components.reducer';
import * as fromNavigation from './navigation-entry-item.reducer';
import * as fromPageReducer from './page-data.reducer';
import * as fromPageIndexReducer from './page-index.reducer';
export function getReducers() {
    return {
        page: combineReducers({
            pageData: fromPageReducer.reducer,
            index: combineReducers({
                content: entityLoaderReducer(PageType.CONTENT_PAGE, fromPageIndexReducer.reducer(PageType.CONTENT_PAGE)),
                product: entityLoaderReducer(PageType.PRODUCT_PAGE, fromPageIndexReducer.reducer(PageType.PRODUCT_PAGE)),
                category: entityLoaderReducer(PageType.CATEGORY_PAGE, fromPageIndexReducer.reducer(PageType.CATEGORY_PAGE)),
                catalog: entityLoaderReducer(PageType.CATALOG_PAGE, fromPageIndexReducer.reducer(PageType.CATALOG_PAGE)),
            }),
        }),
        components: entityReducer(COMPONENT_ENTITY, fromComponentsReducer.reducer),
        navigation: entityLoaderReducer(NAVIGATION_DETAIL_ENTITY, fromNavigation.reducer),
    };
}
export const reducerToken = new InjectionToken('CmsReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
export function clearCmsState(reducer) {
    return function (state, action) {
        if (action.type === SiteContextActions.LANGUAGE_CHANGE ||
            action.type === AuthActions.LOGOUT ||
            action.type === AuthActions.LOGIN) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
export const metaReducers = [clearCmsState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUlMLGVBQWUsR0FFaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUVMLGdCQUFnQixFQUNoQix3QkFBd0IsR0FFekIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sS0FBSyxjQUFjLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxLQUFLLGVBQWUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLElBQUksRUFBRSxlQUFlLENBQUM7WUFDcEIsUUFBUSxFQUFFLGVBQWUsQ0FBQyxPQUFPO1lBQ2pDLEtBQUssRUFBRSxlQUFlLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxtQkFBbUIsQ0FDMUIsUUFBUSxDQUFDLFlBQVksRUFDckIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FDcEQ7Z0JBQ0QsT0FBTyxFQUFFLG1CQUFtQixDQUMxQixRQUFRLENBQUMsWUFBWSxFQUNyQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUNwRDtnQkFDRCxRQUFRLEVBQUUsbUJBQW1CLENBQzNCLFFBQVEsQ0FBQyxhQUFhLEVBQ3RCLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQ3JEO2dCQUNELE9BQU8sRUFBRSxtQkFBbUIsQ0FDMUIsUUFBUSxDQUFDLFlBQVksRUFDckIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FDcEQ7YUFDRixDQUFDO1NBQ0gsQ0FBQztRQUNGLFVBQVUsRUFBRSxhQUFhLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUMsT0FBTyxDQUFDO1FBQzFFLFVBQVUsRUFBRSxtQkFBbUIsQ0FDN0Isd0JBQXdCLEVBQ3hCLGNBQWMsQ0FBQyxPQUFPLENBQ3ZCO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBRXBCLElBQUksY0FBYyxDQUE2QixhQUFhLENBQUMsQ0FBQztBQUVuRSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sVUFBVSxhQUFhLENBQzNCLE9BQTRDO0lBRTVDLE9BQU8sVUFBVSxLQUFLLEVBQUUsTUFBTTtRQUM1QixJQUNFLE1BQU0sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsZUFBZTtZQUNsRCxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLEtBQUssRUFDakM7WUFDQSxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWdDLENBQUMsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUmVkdWNlcixcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgY29tYmluZVJlZHVjZXJzLFxuICBNZXRhUmVkdWNlcixcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgZW50aXR5TG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IGVudGl0eVJlZHVjZXIgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHkvZW50aXR5LnJlZHVjZXInO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ21zU3RhdGUsXG4gIENPTVBPTkVOVF9FTlRJVFksXG4gIE5BVklHQVRJT05fREVUQUlMX0VOVElUWSxcbiAgU3RhdGVXaXRoQ21zLFxufSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUNvbXBvbmVudHNSZWR1Y2VyIGZyb20gJy4vY29tcG9uZW50cy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21OYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbi1lbnRyeS1pdGVtLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVBhZ2VSZWR1Y2VyIGZyb20gJy4vcGFnZS1kYXRhLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbVBhZ2VJbmRleFJlZHVjZXIgZnJvbSAnLi9wYWdlLWluZGV4LnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxDbXNTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIHBhZ2U6IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICBwYWdlRGF0YTogZnJvbVBhZ2VSZWR1Y2VyLnJlZHVjZXIsXG4gICAgICBpbmRleDogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgY29udGVudDogZW50aXR5TG9hZGVyUmVkdWNlcjxzdHJpbmc+KFxuICAgICAgICAgIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgICAgICBmcm9tUGFnZUluZGV4UmVkdWNlci5yZWR1Y2VyKFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSlcbiAgICAgICAgKSxcbiAgICAgICAgcHJvZHVjdDogZW50aXR5TG9hZGVyUmVkdWNlcjxzdHJpbmc+KFxuICAgICAgICAgIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSxcbiAgICAgICAgICBmcm9tUGFnZUluZGV4UmVkdWNlci5yZWR1Y2VyKFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSlcbiAgICAgICAgKSxcbiAgICAgICAgY2F0ZWdvcnk6IGVudGl0eUxvYWRlclJlZHVjZXI8c3RyaW5nPihcbiAgICAgICAgICBQYWdlVHlwZS5DQVRFR09SWV9QQUdFLFxuICAgICAgICAgIGZyb21QYWdlSW5kZXhSZWR1Y2VyLnJlZHVjZXIoUGFnZVR5cGUuQ0FURUdPUllfUEFHRSlcbiAgICAgICAgKSxcbiAgICAgICAgY2F0YWxvZzogZW50aXR5TG9hZGVyUmVkdWNlcjxzdHJpbmc+KFxuICAgICAgICAgIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRSxcbiAgICAgICAgICBmcm9tUGFnZUluZGV4UmVkdWNlci5yZWR1Y2VyKFBhZ2VUeXBlLkNBVEFMT0dfUEFHRSlcbiAgICAgICAgKSxcbiAgICAgIH0pLFxuICAgIH0pLFxuICAgIGNvbXBvbmVudHM6IGVudGl0eVJlZHVjZXIoQ09NUE9ORU5UX0VOVElUWSwgZnJvbUNvbXBvbmVudHNSZWR1Y2VyLnJlZHVjZXIpLFxuICAgIG5hdmlnYXRpb246IGVudGl0eUxvYWRlclJlZHVjZXI8Tm9kZUl0ZW0+KFxuICAgICAgTkFWSUdBVElPTl9ERVRBSUxfRU5USVRZLFxuICAgICAgZnJvbU5hdmlnYXRpb24ucmVkdWNlclxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8XG4gIENtc1N0YXRlXG4+PiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENtc1N0YXRlPj4oJ0Ntc1JlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ21zU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8U3RhdGVXaXRoQ21zLCBBY3Rpb24+XG4pOiBBY3Rpb25SZWR1Y2VyPFN0YXRlV2l0aENtcywgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChcbiAgICAgIGFjdGlvbi50eXBlID09PSBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFIHx8XG4gICAgICBhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HT1VUIHx8XG4gICAgICBhY3Rpb24udHlwZSA9PT0gQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8U3RhdGVXaXRoQ21zPltdID0gW2NsZWFyQ21zU3RhdGVdO1xuIl19