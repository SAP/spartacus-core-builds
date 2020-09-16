import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, take } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
export class NavigationEntryItemEffects {
    constructor(actions$, cmsComponentConnector, routingService) {
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_NAVIGATION_ITEMS), map((action) => action.payload), map((payload) => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap((data) => {
            if (data.ids.componentIds.length > 0) {
                return this.routingService.getRouterState().pipe(filter((routerState) => routerState !== undefined), map((routerState) => routerState.state.context), take(1), mergeMap((pageContext) => 
                // download all items in one request
                this.cmsComponentConnector
                    .getList(data.ids.componentIds, pageContext)
                    .pipe(map((components) => new CmsActions.LoadCmsNavigationItemsSuccess({
                    nodeId: data.nodeId,
                    components: components,
                })), catchError((error) => of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, makeErrorSerializable(error)))))));
            }
            else if (data.ids.pageIds.length > 0) {
                // TODO: future work
                // dispatch action to load cms page one by one
            }
            else if (data.ids.mediaIds.length > 0) {
                // TODO: future work
                // send request to get list of media
            }
            else {
                return of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    getIdListByItemType(itemList) {
        const pageIds = [];
        const componentIds = [];
        const mediaIds = [];
        itemList.forEach((item) => {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.push(item.id);
            }
        });
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    }
}
NavigationEntryItemEffects.decorators = [
    { type: Injectable }
];
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
__decorate([
    Effect()
], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Ntcy9zdG9yZS9lZmZlY3RzL25hdmlnYXRpb24tZW50cnktaXRlbS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE1BQU0sT0FBTywwQkFBMEI7SUFnRnJDLFlBQ1UsUUFBaUIsRUFDakIscUJBQTRDLEVBQzVDLGNBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqRnhDLHlCQUFvQixHQUdoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUM1QyxHQUFHLENBQUMsQ0FBQyxNQUF5QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2xF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QUUsQ0FBQztJQUM5RSxDQUFDOzs7WUEvRUYsVUFBVTs7O1lBUkYsT0FBTztZQUtQLHFCQUFxQjtZQUZyQixjQUFjOztBQVFyQjtJQURDLE1BQU0sRUFBRTt3RUF5RFAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkVudHJ5SXRlbUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZE5hdmlnYXRpb25JdGVtcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNTdWNjZXNzXG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENtc0FjdGlvbnMuTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNUyksXG4gICAgbWFwKChhY3Rpb246IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWRzOiB0aGlzLmdldElkTGlzdEJ5SXRlbVR5cGUocGF5bG9hZC5pdGVtcyksXG4gICAgICAgIG5vZGVJZDogcGF5bG9hZC5ub2RlSWQsXG4gICAgICB9O1xuICAgIH0pLFxuICAgIG1lcmdlTWFwKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5pZHMuY29tcG9uZW50SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICAgIGZpbHRlcigocm91dGVyU3RhdGUpID0+IHJvdXRlclN0YXRlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgIG1hcCgocm91dGVyU3RhdGUpID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWVyZ2VNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICAgICAgLy8gZG93bmxvYWQgYWxsIGl0ZW1zIGluIG9uZSByZXF1ZXN0XG4gICAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudENvbm5lY3RvclxuICAgICAgICAgICAgICAuZ2V0TGlzdChkYXRhLmlkcy5jb21wb25lbnRJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgICAoY29tcG9uZW50cykgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMucGFnZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGNtcyBwYWdlIG9uZSBieSBvbmVcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMubWVkaWFJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBzZW5kIHJlcXVlc3QgdG8gZ2V0IGxpc3Qgb2YgbWVkaWFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgJ25hdmlnYXRpb24gbm9kZXMgYXJlIGVtcHR5J1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIFdlIG9ubHkgY29uc2lkZXIgMyBpdGVtIHR5cGVzOiBjbXMgcGFnZSwgY21zIGNvbXBvbmVudCwgYW5kIG1lZGlhLlxuICBnZXRJZExpc3RCeUl0ZW1UeXBlKFxuICAgIGl0ZW1MaXN0OiBhbnlbXVxuICApOiB7IHBhZ2VJZHM6IHN0cmluZ1tdOyBjb21wb25lbnRJZHM6IHN0cmluZ1tdOyBtZWRpYUlkczogc3RyaW5nW10gfSB7XG4gICAgY29uc3QgcGFnZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjb21wb25lbnRJZHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbWVkaWFJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpdGVtTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdENNU0NvbXBvbmVudCcpIHtcbiAgICAgICAgY29tcG9uZW50SWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RQYWdlJykge1xuICAgICAgICBwYWdlSWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RNZWRpYScpIHtcbiAgICAgICAgbWVkaWFJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBwYWdlSWRzOiBwYWdlSWRzLCBjb21wb25lbnRJZHM6IGNvbXBvbmVudElkcywgbWVkaWFJZHM6IG1lZGlhSWRzIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50Q29ubmVjdG9yOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19