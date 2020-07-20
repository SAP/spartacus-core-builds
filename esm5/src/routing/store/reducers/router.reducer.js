import { __assign, __decorate } from "tslib";
import { Injectable, InjectionToken } from '@angular/core';
import * as fromNgrxRouter from '@ngrx/router-store';
import { PageType } from '../../../model/cms.model';
import { RoutingConfigService } from '../../configurable-routes/routing-config.service';
export var initialState = {
    navigationId: 0,
    state: {
        url: '',
        queryParams: {},
        params: {},
        context: {
            id: '',
        },
        cmsRequired: false,
        semanticRoute: undefined,
    },
    nextState: undefined,
};
export function getReducers() {
    return {
        router: reducer,
    };
}
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromNgrxRouter.ROUTER_NAVIGATION: {
            return __assign(__assign({}, state), { nextState: action.payload.routerState, navigationId: action.payload.event.id });
        }
        case fromNgrxRouter.ROUTER_ERROR:
        case fromNgrxRouter.ROUTER_CANCEL: {
            return __assign(__assign({}, state), { nextState: undefined });
        }
        case fromNgrxRouter.ROUTER_NAVIGATED: {
            return {
                state: action.payload.routerState,
                navigationId: action.payload.event.id,
                nextState: undefined,
            };
        }
        default: {
            return state;
        }
    }
}
export var reducerToken = new InjectionToken('RouterReducers');
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/* The serializer is there to parse the RouterStateSnapshot,
and to reduce the amount of properties to be passed to the reducer.
 */
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer(routingConfig) {
        this.routingConfig = routingConfig;
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var _a, _b;
        var state = routerState.root;
        var cmsRequired = false;
        var context;
        var semanticRoute;
        var urlString = '';
        while (state.firstChild) {
            state = state.firstChild;
            urlString +=
                '/' + state.url.map(function (urlSegment) { return urlSegment.path; }).join('/');
            // we use semantic route information embedded from any parent route
            if ((_a = state.data) === null || _a === void 0 ? void 0 : _a.cxRoute) {
                semanticRoute = (_b = state.data) === null || _b === void 0 ? void 0 : _b.cxRoute;
            }
            // we use context information embedded in Cms driven routes from any parent route
            if (state.data && state.data.cxCmsRouteContext) {
                context = state.data.cxCmsRouteContext;
            }
            // we assume, that any route that has CmsPageGuard or it's child
            // is cmsRequired
            if (!cmsRequired &&
                (context ||
                    (state.routeConfig &&
                        state.routeConfig.canActivate &&
                        state.routeConfig.canActivate.find(function (x) { return x && x.guardName === 'CmsPageGuard'; })))) {
                cmsRequired = true;
            }
        }
        // If `semanticRoute` couldn't be already recognized using `data.cxRoute` property
        // let's lookup the routing configuration to find the semantic route that has exactly the same configured path as the current URL.
        // This will work only for simple URLs without any dynamic routing parameters.
        semanticRoute = semanticRoute || this.lookupSemanticRoute(urlString);
        var params = state.params;
        // we give smartedit preview page a PageContext
        if (state.url.length > 0 && state.url[0].path === 'cx-preview') {
            context = {
                id: 'smartedit-preview',
                type: PageType.CONTENT_PAGE,
            };
        }
        else {
            if (params['productCode']) {
                context = { id: params['productCode'], type: PageType.PRODUCT_PAGE };
            }
            else if (params['categoryCode']) {
                context = { id: params['categoryCode'], type: PageType.CATEGORY_PAGE };
            }
            else if (params['brandCode']) {
                context = { id: params['brandCode'], type: PageType.CATEGORY_PAGE };
            }
            else if (state.data.pageLabel !== undefined) {
                context = { id: state.data.pageLabel, type: PageType.CONTENT_PAGE };
            }
            else if (!context) {
                if (state.url.length > 0) {
                    var pageLabel = '/' + state.url.map(function (urlSegment) { return urlSegment.path; }).join('/');
                    context = {
                        id: pageLabel,
                        type: PageType.CONTENT_PAGE,
                    };
                }
                else {
                    context = {
                        id: 'homepage',
                        type: PageType.CONTENT_PAGE,
                    };
                }
            }
        }
        return {
            url: routerState.url,
            queryParams: routerState.root.queryParams,
            params: params,
            context: context,
            cmsRequired: cmsRequired,
            semanticRoute: semanticRoute,
        };
    };
    /**
     * Returns the semantic route name for given page label.
     *
     * *NOTE*: It works only for simple static urls that are equal to the page label
     * of cms-driven content page. For example: `/my-account/address-book`.
     *
     * It doesn't work for URLs with dynamic parameters. But such case can be handled
     * by reading the defined `data.cxRoute` from the Angular Routes.
     *
     * It doesn't work for cms-driven child routes, because the guessed page label
     * is longer than the real one (i.e. `/store-finder/view-all`). Only when backend
     * returns the correct one along with cms page data (i.e. `pageLabel: '/store-finder'`),
     * then it could be used. But it's too late for this serializer.
     *
     * This means that recognizing semantic route name of cms-driven child routes
     * is NOT SUPPORTED.
     *
     * @param path path to be found in the routing config
     */
    CustomSerializer.prototype.lookupSemanticRoute = function (pageLabel) {
        // Page label is assumed to start with `/`, but Spartacus configured paths
        // don't start with slash. So we remove the leading slash:
        return this.routingConfig.getRouteName(pageLabel.substr(1));
    };
    CustomSerializer.ctorParameters = function () { return [
        { type: RoutingConfigService }
    ]; };
    CustomSerializer = __decorate([
        Injectable()
    ], CustomSerializer);
    return CustomSerializer;
}());
export { CustomSerializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxLQUFLLGNBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFTeEYsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFnQjtJQUN2QyxZQUFZLEVBQUUsQ0FBQztJQUNmLEtBQUssRUFBRTtRQUNMLEdBQUcsRUFBRSxFQUFFO1FBQ1AsV0FBVyxFQUFFLEVBQUU7UUFDZixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxFQUFFO1NBQ1A7UUFDRCxXQUFXLEVBQUUsS0FBSztRQUNsQixhQUFhLEVBQUUsU0FBUztLQUN6QjtJQUNELFNBQVMsRUFBRSxTQUFTO0NBQ3JCLENBQUM7QUFFRixNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFpQyxFQUNqQyxNQUFXO0lBRFgsc0JBQUEsRUFBQSxvQkFBaUM7SUFHakMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDckMsNkJBQ0ssS0FBSyxLQUNSLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFDckMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFD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b0JBQ0wsT0FBTyxHQUFHO3dCQUNSLEVBQUUsRUFBRSxVQUFVO3dCQUNkLElBQUksRUFBRSxRQUFRLENBQUMsWUFBWTtxQkFDNUIsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7UUFFRCxPQUFPO1lBQ0wsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHO1lBQ3BCLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekMsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1lBQ1AsV0FBVyxhQUFBO1lBQ1gsYUFBYSxlQUFBO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JHO0lBQ0ssOENBQW1CLEdBQTNCLFVBQTRCLFNBQWlCO1FBQzNDLDBFQUEwRTtRQUMxRSwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBRWtDLG9CQUFvQjs7SUFqSDVDLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0FrSDVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxIRCxJQWtIQztTQWxIWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZnJvbU5ncnhSb3V0ZXIgZnJvbSAnQG5ncngvcm91dGVyLXN0b3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvcm91dGluZy1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Ntcy1yb3V0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGUsXG4gIFN0YXRlLFxufSBmcm9tICcuLi9yb3V0aW5nLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUm91dGVyU3RhdGUgPSB7XG4gIG5hdmlnYXRpb25JZDogMCxcbiAgc3RhdGU6IHtcbiAgICB1cmw6ICcnLFxuICAgIHF1ZXJ5UGFyYW1zOiB7fSxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGNvbnRleHQ6IHtcbiAgICAgIGlkOiAnJyxcbiAgICB9LFxuICAgIGNtc1JlcXVpcmVkOiBmYWxzZSxcbiAgICBzZW1hbnRpY1JvdXRlOiB1bmRlZmluZWQsXG4gIH0sXG4gIG5leHRTdGF0ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXI6IHJlZHVjZXIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogUm91dGVyU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogYW55XG4pOiBSb3V0ZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21OZ3J4Um91dGVyLlJPVVRFUl9OQVZJR0FUSU9OOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXJTdGF0ZSxcbiAgICAgICAgbmF2aWdhdGlvbklkOiBhY3Rpb24ucGF5bG9hZC5ldmVudC5pZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfRVJST1I6XG4gICAgY2FzZSBmcm9tTmdyeFJvdXRlci5ST1VURVJfQ0FOQ0VMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmV4dFN0YXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbU5ncnhSb3V0ZXIuUk9VVEVSX05BVklHQVRFRDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6IGFjdGlvbi5wYXlsb2FkLnJvdXRlclN0YXRlLFxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IGFjdGlvbi5wYXlsb2FkLmV2ZW50LmlkLFxuICAgICAgICBuZXh0U3RhdGU6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPFxuICBTdGF0ZVxuPj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxTdGF0ZT4+KCdSb3V0ZXJSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbi8qIFRoZSBzZXJpYWxpemVyIGlzIHRoZXJlIHRvIHBhcnNlIHRoZSBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuYW5kIHRvIHJlZHVjZSB0aGUgYW1vdW50IG9mIHByb3BlcnRpZXMgdG8gYmUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tU2VyaWFsaXplclxuICBpbXBsZW1lbnRzXG4gICAgZnJvbU5ncnhSb3V0ZXIuUm91dGVyU3RhdGVTZXJpYWxpemVyPEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgc2VyaWFsaXplKHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCB7XG4gICAgbGV0IHN0YXRlOiBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90ID0gcm91dGVyU3RhdGUucm9vdCBhcyBDbXNBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAgIGxldCBjbXNSZXF1aXJlZCA9IGZhbHNlO1xuICAgIGxldCBjb250ZXh0OiBQYWdlQ29udGV4dDtcbiAgICBsZXQgc2VtYW50aWNSb3V0ZTogc3RyaW5nO1xuICAgIGxldCB1cmxTdHJpbmcgPSAnJztcblxuICAgIHdoaWxlIChzdGF0ZS5maXJzdENoaWxkKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLmZpcnN0Q2hpbGQgYXMgQ21zQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgICAgIHVybFN0cmluZyArPVxuICAgICAgICAnLycgKyBzdGF0ZS51cmwubWFwKCh1cmxTZWdtZW50KSA9PiB1cmxTZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcblxuICAgICAgLy8gd2UgdXNlIHNlbWFudGljIHJvdXRlIGluZm9ybWF0aW9uIGVtYmVkZGVkIGZyb20gYW55IHBhcmVudCByb3V0ZVxuICAgICAgaWYgKHN0YXRlLmRhdGE/LmN4Um91dGUpIHtcbiAgICAgICAgc2VtYW50aWNSb3V0ZSA9IHN0YXRlLmRhdGE/LmN4Um91dGU7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIHVzZSBjb250ZXh0IGluZm9ybWF0aW9uIGVtYmVkZGVkIGluIENtcyBkcml2ZW4gcm91dGVzIGZyb20gYW55IHBhcmVudCByb3V0ZVxuICAgICAgaWYgKHN0YXRlLmRhdGEgJiYgc3RhdGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gc3RhdGUuZGF0YS5jeENtc1JvdXRlQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXNzdW1lLCB0aGF0IGFueSByb3V0ZSB0aGF0IGhhcyBDbXNQYWdlR3VhcmQgb3IgaXQncyBjaGlsZFxuICAgICAgLy8gaXMgY21zUmVxdWlyZWRcbiAgICAgIGlmIChcbiAgICAgICAgIWNtc1JlcXVpcmVkICYmXG4gICAgICAgIChjb250ZXh0IHx8XG4gICAgICAgICAgKHN0YXRlLnJvdXRlQ29uZmlnICYmXG4gICAgICAgICAgICBzdGF0ZS5yb3V0ZUNvbmZpZy5jYW5BY3RpdmF0ZSAmJlxuICAgICAgICAgICAgc3RhdGUucm91dGVDb25maWcuY2FuQWN0aXZhdGUuZmluZChcbiAgICAgICAgICAgICAgKHgpID0+IHggJiYgeC5ndWFyZE5hbWUgPT09ICdDbXNQYWdlR3VhcmQnXG4gICAgICAgICAgICApKSlcbiAgICAgICkge1xuICAgICAgICBjbXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgYHNlbWFudGljUm91dGVgIGNvdWxkbid0IGJlIGFscmVhZHkgcmVjb2duaXplZCB1c2luZyBgZGF0YS5jeFJvdXRlYCBwcm9wZXJ0eVxuICAgIC8vIGxldCdzIGxvb2t1cCB0aGUgcm91dGluZyBjb25maWd1cmF0aW9uIHRvIGZpbmQgdGhlIHNlbWFudGljIHJvdXRlIHRoYXQgaGFzIGV4YWN0bHkgdGhlIHNhbWUgY29uZmlndXJlZCBwYXRoIGFzIHRoZSBjdXJyZW50IFVSTC5cbiAgICAvLyBUaGlzIHdpbGwgd29yayBvbmx5IGZvciBzaW1wbGUgVVJMcyB3aXRob3V0IGFueSBkeW5hbWljIHJvdXRpbmcgcGFyYW1ldGVycy5cbiAgICBzZW1hbnRpY1JvdXRlID0gc2VtYW50aWNSb3V0ZSB8fCB0aGlzLmxvb2t1cFNlbWFudGljUm91dGUodXJsU3RyaW5nKTtcblxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBzdGF0ZTtcbiAgICAvLyB3ZSBnaXZlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2UgYSBQYWdlQ29udGV4dFxuICAgIGlmIChzdGF0ZS51cmwubGVuZ3RoID4gMCAmJiBzdGF0ZS51cmxbMF0ucGF0aCA9PT0gJ2N4LXByZXZpZXcnKSB7XG4gICAgICBjb250ZXh0ID0ge1xuICAgICAgICBpZDogJ3NtYXJ0ZWRpdC1wcmV2aWV3JyxcbiAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtc1sncHJvZHVjdENvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydwcm9kdWN0Q29kZSddLCB0eXBlOiBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydjYXRlZ29yeUNvZGUnXSkge1xuICAgICAgICBjb250ZXh0ID0geyBpZDogcGFyYW1zWydjYXRlZ29yeUNvZGUnXSwgdHlwZTogUGFnZVR5cGUuQ0FURUdPUllfUEFHRSB9O1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXNbJ2JyYW5kQ29kZSddKSB7XG4gICAgICAgIGNvbnRleHQgPSB7IGlkOiBwYXJhbXNbJ2JyYW5kQ29kZSddLCB0eXBlOiBQYWdlVHlwZS5DQVRFR09SWV9QQUdFIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmRhdGEucGFnZUxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dCA9IHsgaWQ6IHN0YXRlLmRhdGEucGFnZUxhYmVsLCB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgaWYgKHN0YXRlLnVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcGFnZUxhYmVsID1cbiAgICAgICAgICAgICcvJyArIHN0YXRlLnVybC5tYXAoKHVybFNlZ21lbnQpID0+IHVybFNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBpZDogcGFnZUxhYmVsLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9tZXBhZ2UnLFxuICAgICAgICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiByb3V0ZXJTdGF0ZS51cmwsXG4gICAgICBxdWVyeVBhcmFtczogcm91dGVyU3RhdGUucm9vdC5xdWVyeVBhcmFtcyxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNvbnRleHQsXG4gICAgICBjbXNSZXF1aXJlZCxcbiAgICAgIHNlbWFudGljUm91dGUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZW1hbnRpYyByb3V0ZSBuYW1lIGZvciBnaXZlbiBwYWdlIGxhYmVsLlxuICAgKlxuICAgKiAqTk9URSo6IEl0IHdvcmtzIG9ubHkgZm9yIHNpbXBsZSBzdGF0aWMgdXJscyB0aGF0IGFyZSBlcXVhbCB0byB0aGUgcGFnZSBsYWJlbFxuICAgKiBvZiBjbXMtZHJpdmVuIGNvbnRlbnQgcGFnZS4gRm9yIGV4YW1wbGU6IGAvbXktYWNjb3VudC9hZGRyZXNzLWJvb2tgLlxuICAgKlxuICAgKiBJdCBkb2Vzbid0IHdvcmsgZm9yIFVSTHMgd2l0aCBkeW5hbWljIHBhcmFtZXRlcnMuIEJ1dCBzdWNoIGNhc2UgY2FuIGJlIGhhbmRsZWRcbiAgICogYnkgcmVhZGluZyB0aGUgZGVmaW5lZCBgZGF0YS5jeFJvdXRlYCBmcm9tIHRoZSBBbmd1bGFyIFJvdXRlcy5cbiAgICpcbiAgICogSXQgZG9lc24ndCB3b3JrIGZvciBjbXMtZHJpdmVuIGNoaWxkIHJvdXRlcywgYmVjYXVzZSB0aGUgZ3Vlc3NlZCBwYWdlIGxhYmVsXG4gICAqIGlzIGxvbmdlciB0aGFuIHRoZSByZWFsIG9uZSAoaS5lLiBgL3N0b3JlLWZpbmRlci92aWV3LWFsbGApLiBPbmx5IHdoZW4gYmFja2VuZFxuICAgKiByZXR1cm5zIHRoZSBjb3JyZWN0IG9uZSBhbG9uZyB3aXRoIGNtcyBwYWdlIGRhdGEgKGkuZS4gYHBhZ2VMYWJlbDogJy9zdG9yZS1maW5kZXInYCksXG4gICAqIHRoZW4gaXQgY291bGQgYmUgdXNlZC4gQnV0IGl0J3MgdG9vIGxhdGUgZm9yIHRoaXMgc2VyaWFsaXplci5cbiAgICpcbiAgICogVGhpcyBtZWFucyB0aGF0IHJlY29nbml6aW5nIHNlbWFudGljIHJvdXRlIG5hbWUgb2YgY21zLWRyaXZlbiBjaGlsZCByb3V0ZXNcbiAgICogaXMgTk9UIFNVUFBPUlRFRC5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggcGF0aCB0byBiZSBmb3VuZCBpbiB0aGUgcm91dGluZyBjb25maWdcbiAgICovXG4gIHByaXZhdGUgbG9va3VwU2VtYW50aWNSb3V0ZShwYWdlTGFiZWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gUGFnZSBsYWJlbCBpcyBhc3N1bWVkIHRvIHN0YXJ0IHdpdGggYC9gLCBidXQgU3BhcnRhY3VzIGNvbmZpZ3VyZWQgcGF0aHNcbiAgICAvLyBkb24ndCBzdGFydCB3aXRoIHNsYXNoLiBTbyB3ZSByZW1vdmUgdGhlIGxlYWRpbmcgc2xhc2g6XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ0NvbmZpZy5nZXRSb3V0ZU5hbWUocGFnZUxhYmVsLnN1YnN0cigxKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWdTZXJ2aWNlKSB7fVxufVxuIl19