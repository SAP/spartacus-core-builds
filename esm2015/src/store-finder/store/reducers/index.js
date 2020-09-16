import { InjectionToken } from '@angular/core';
import { STORE_FINDER_DATA } from '../store-finder-state';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
export function getReducers() {
    return {
        findStores: loaderReducer(STORE_FINDER_DATA),
        viewAllStores: loaderReducer(STORE_FINDER_DATA),
    };
}
export const reducerToken = new InjectionToken('StoreFinderReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
export const metaReducers = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zdG9yZS1maW5kZXIvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFVBQVUsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUM7UUFDNUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztLQUNoRCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FFcEIsSUFBSSxjQUFjLENBQWdDLHFCQUFxQixDQUFDLENBQUM7QUFFOUUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQXVCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAsIE1ldGFSZWR1Y2VyIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3Jlc1N0YXRlLCBTVE9SRV9GSU5ERVJfREFUQSB9IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RvcmVzU3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBmaW5kU3RvcmVzOiBsb2FkZXJSZWR1Y2VyKFNUT1JFX0ZJTkRFUl9EQVRBKSxcbiAgICB2aWV3QWxsU3RvcmVzOiBsb2FkZXJSZWR1Y2VyKFNUT1JFX0ZJTkRFUl9EQVRBKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxcbiAgU3RvcmVzU3RhdGVcbj4+ID0gbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RvcmVzU3RhdGU+PignU3RvcmVGaW5kZXJSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtdO1xuIl19