import { PRODUCT_DETAIL_ENTITY } from '../product-state';
import { EntityScopedLoaderActions } from '../../../state/utils/scoped-loader/entity-scoped-loader.actions';
export const LOAD_PRODUCT = '[Product] Load Product Data';
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Data Fail';
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Data Success';
export class LoadProduct extends EntityScopedLoaderActions.EntityScopedLoadAction {
    constructor(payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, payload, scope);
        this.payload = payload;
        this.type = LOAD_PRODUCT;
    }
}
export class LoadProductFail extends EntityScopedLoaderActions.EntityScopedFailAction {
    constructor(productCode, payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, productCode, scope, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_FAIL;
    }
}
export class LoadProductSuccess extends EntityScopedLoaderActions.EntityScopedSuccessAction {
    constructor(payload, scope = '') {
        super(PRODUCT_DETAIL_ENTITY, payload.code, scope);
        this.payload = payload;
        this.type = LOAD_PRODUCT_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L3N0b3JlL2FjdGlvbnMvcHJvZHVjdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFFNUcsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLDZCQUE2QixDQUFDO0FBQzFELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLGtDQUFrQyxDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLHFDQUFxQyxDQUFDO0FBVzFFLE1BQU0sT0FBTyxXQUFZLFNBQVEseUJBQXlCLENBQUMsc0JBQXNCO0lBRS9FLFlBQW1CLE9BQWUsRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUM1QyxLQUFLLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRDVCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFlBQVksQ0FBQztJQUc3QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSx5QkFBeUIsQ0FBQyxzQkFBc0I7SUFFbkYsWUFBWSxXQUFtQixFQUFTLE9BQVksRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUM5RCxLQUFLLENBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQURwQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRDNDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEseUJBQXlCLENBQUMseUJBQXlCO0lBRXpGLFlBQW1CLE9BQWdCLEVBQUUsS0FBSyxHQUFHLEVBQUU7UUFDN0MsS0FBSyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFEakMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUQxQixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9ERVRBSUxfRU5USVRZIH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJNZXRhIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvc2NvcGVkLWxvYWRlci9lbnRpdHktc2NvcGVkLWxvYWRlci5hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVCA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9GQUlMID0gJ1tQcm9kdWN0XSBMb2FkIFByb2R1Y3QgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RfU1VDQ0VTUyA9ICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IERhdGEgU3VjY2Vzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdE1ldGEgZXh0ZW5kcyBFbnRpdHlMb2FkZXJNZXRhIHtcbiAgc2NvcGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgcGF5bG9hZD86IGFueTtcbiAgcmVhZG9ubHkgbWV0YT86IFByb2R1Y3RNZXRhO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3QgZXh0ZW5kcyBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb25zLkVudGl0eVNjb3BlZExvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nLCBzY29wZSA9ICcnKSB7XG4gICAgc3VwZXIoUFJPRFVDVF9ERVRBSUxfRU5USVRZLCBwYXlsb2FkLCBzY29wZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0RmFpbCBleHRlbmRzIEVudGl0eVNjb3BlZExvYWRlckFjdGlvbnMuRW50aXR5U2NvcGVkRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHJvZHVjdENvZGU6IHN0cmluZywgcHVibGljIHBheWxvYWQ6IGFueSwgc2NvcGUgPSAnJykge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcHJvZHVjdENvZGUsIHNjb3BlLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RTdWNjZXNzIGV4dGVuZHMgRW50aXR5U2NvcGVkTG9hZGVyQWN0aW9ucy5FbnRpdHlTY29wZWRTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZHVjdCwgc2NvcGUgPSAnJykge1xuICAgIHN1cGVyKFBST0RVQ1RfREVUQUlMX0VOVElUWSwgcGF5bG9hZC5jb2RlLCBzY29wZSk7XG4gIH1cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0QWN0aW9uID0gTG9hZFByb2R1Y3QgfCBMb2FkUHJvZHVjdEZhaWwgfCBMb2FkUHJvZHVjdFN1Y2Nlc3M7XG4iXX0=