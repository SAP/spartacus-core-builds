import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { StorageSyncType } from '../../state/config/state-config';
import { getStorage, persistToStorage, readFromStorage, } from '../../state/reducers/storage-sync.reducer';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
let StatePersistenceService = class StatePersistenceService {
    constructor(winRef) {
        this.winRef = winRef;
    }
    /**
     * Helper to synchronize state to more persistent storage (localStorage, sessionStorage).
     * It is context aware, so you can keep different state for te same feature based on specified context.
     *
     * Eg. cart is valid only under the same base site. So you want to synchronize cart only with the same base site.
     * Usage for that case: `syncWithStorage({ key: 'cart', state$: activeCartSelector$, context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]), onRead: (state) => setCorrectStateInStore(state) })`.
     * Active cart for the `electronics` base site will be stored under `spartacus⚿electronics⚿cart` and for apparel under `spartacus⚿apparel⚿cart`.
     *
     * On each context change onRead function will be executed with state from storage provided as a parameter.
     *
     * Omitting context$ will trigger onRead only once at initialization.
     *
     * @param key Key to use in storage for the synchronized state. Should be unique for each feature.
     * @param state$ State to be saved and later restored.
     * @param context$ Context for state
     * @param storageType Storage type to be used to persist state
     * @param onRead Function to be executed on each storage read after context change
     *
     * @returns Subscriptions for reading/writing in storage on context/state change
     */
    syncWithStorage({ key, state$, context$ = of(''), storageType = StorageSyncType.LOCAL_STORAGE, onRead = () => { }, }) {
        const storage = getStorage(storageType, this.winRef);
        const subscriptions = new Subscription();
        // Do not change order of subscription! Read should happen before write on context change.
        subscriptions.add(context$
            .pipe(map((context) => {
            return readFromStorage(storage, this.generateKeyWithContext(context, key));
        }), tap((state) => onRead(state)))
            .subscribe());
        subscriptions.add(state$.pipe(withLatestFrom(context$)).subscribe(([state, context]) => {
            persistToStorage(this.generateKeyWithContext(context, key), state, storage);
        }));
        return subscriptions;
    }
    generateKeyWithContext(context, key) {
        return `spartacus⚿${[].concat(context).join('⚿')}⚿${key}`;
    }
};
StatePersistenceService.ctorParameters = () => [
    { type: WindowRef }
];
StatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StatePersistenceService_Factory() { return new StatePersistenceService(i0.ɵɵinject(i1.WindowRef)); }, token: StatePersistenceService, providedIn: "root" });
StatePersistenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], StatePersistenceService);
export { StatePersistenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9zZXJ2aWNlcy9zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFLcEQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEMsWUFBc0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQkc7SUFDSCxlQUFlLENBQUksRUFDakIsR0FBRyxFQUNILE1BQU0sRUFDTixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNqQixXQUFXLEdBQUcsZUFBZSxDQUFDLGFBQWEsRUFDM0MsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsR0FPbEI7UUFDQyxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpDLDBGQUEwRjtRQUMxRixhQUFhLENBQUMsR0FBRyxDQUNmLFFBQVE7YUFDTCxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDZCxPQUFPLGVBQWUsQ0FDcEIsT0FBTyxFQUNQLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQ3JDLENBQUM7UUFDVCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM5QjthQUNBLFNBQVMsRUFBRSxDQUNmLENBQUM7UUFFRixhQUFhLENBQUMsR0FBRyxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNuRSxnQkFBZ0IsQ0FDZCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUN6QyxLQUFLLEVBQ0wsT0FBTyxDQUNSLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVTLHNCQUFzQixDQUM5QixPQUErQixFQUMvQixHQUFXO1FBRVgsT0FBTyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzVELENBQUM7Q0FDRixDQUFBOztZQXpFK0IsU0FBUzs7O0FBRDVCLHVCQUF1QjtJQUhuQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csdUJBQXVCLENBMEVuQztTQTFFWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7XG4gIGdldFN0b3JhZ2UsXG4gIHBlcnNpc3RUb1N0b3JhZ2UsXG4gIHJlYWRGcm9tU3RvcmFnZSxcbn0gZnJvbSAnLi4vLi4vc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYpIHt9XG5cbiAgLyoqXG4gICAqIEhlbHBlciB0byBzeW5jaHJvbml6ZSBzdGF0ZSB0byBtb3JlIHBlcnNpc3RlbnQgc3RvcmFnZSAobG9jYWxTdG9yYWdlLCBzZXNzaW9uU3RvcmFnZSkuXG4gICAqIEl0IGlzIGNvbnRleHQgYXdhcmUsIHNvIHlvdSBjYW4ga2VlcCBkaWZmZXJlbnQgc3RhdGUgZm9yIHRlIHNhbWUgZmVhdHVyZSBiYXNlZCBvbiBzcGVjaWZpZWQgY29udGV4dC5cbiAgICpcbiAgICogRWcuIGNhcnQgaXMgdmFsaWQgb25seSB1bmRlciB0aGUgc2FtZSBiYXNlIHNpdGUuIFNvIHlvdSB3YW50IHRvIHN5bmNocm9uaXplIGNhcnQgb25seSB3aXRoIHRoZSBzYW1lIGJhc2Ugc2l0ZS5cbiAgICogVXNhZ2UgZm9yIHRoYXQgY2FzZTogYHN5bmNXaXRoU3RvcmFnZSh7IGtleTogJ2NhcnQnLCBzdGF0ZSQ6IGFjdGl2ZUNhcnRTZWxlY3RvciQsIGNvbnRleHQkOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zU2VydmljZS5nZXRWYWx1ZXMoW0JBU0VfU0lURV9DT05URVhUX0lEXSksIG9uUmVhZDogKHN0YXRlKSA9PiBzZXRDb3JyZWN0U3RhdGVJblN0b3JlKHN0YXRlKSB9KWAuXG4gICAqIEFjdGl2ZSBjYXJ0IGZvciB0aGUgYGVsZWN0cm9uaWNzYCBiYXNlIHNpdGUgd2lsbCBiZSBzdG9yZWQgdW5kZXIgYHNwYXJ0YWN1c+Kav2VsZWN0cm9uaWNz4pq/Y2FydGAgYW5kIGZvciBhcHBhcmVsIHVuZGVyIGBzcGFydGFjdXPimr9hcHBhcmVs4pq/Y2FydGAuXG4gICAqXG4gICAqIE9uIGVhY2ggY29udGV4dCBjaGFuZ2Ugb25SZWFkIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2l0aCBzdGF0ZSBmcm9tIHN0b3JhZ2UgcHJvdmlkZWQgYXMgYSBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIE9taXR0aW5nIGNvbnRleHQkIHdpbGwgdHJpZ2dlciBvblJlYWQgb25seSBvbmNlIGF0IGluaXRpYWxpemF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEtleSB0byB1c2UgaW4gc3RvcmFnZSBmb3IgdGhlIHN5bmNocm9uaXplZCBzdGF0ZS4gU2hvdWxkIGJlIHVuaXF1ZSBmb3IgZWFjaCBmZWF0dXJlLlxuICAgKiBAcGFyYW0gc3RhdGUkIFN0YXRlIHRvIGJlIHNhdmVkIGFuZCBsYXRlciByZXN0b3JlZC5cbiAgICogQHBhcmFtIGNvbnRleHQkIENvbnRleHQgZm9yIHN0YXRlXG4gICAqIEBwYXJhbSBzdG9yYWdlVHlwZSBTdG9yYWdlIHR5cGUgdG8gYmUgdXNlZCB0byBwZXJzaXN0IHN0YXRlXG4gICAqIEBwYXJhbSBvblJlYWQgRnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgb24gZWFjaCBzdG9yYWdlIHJlYWQgYWZ0ZXIgY29udGV4dCBjaGFuZ2VcbiAgICpcbiAgICogQHJldHVybnMgU3Vic2NyaXB0aW9ucyBmb3IgcmVhZGluZy93cml0aW5nIGluIHN0b3JhZ2Ugb24gY29udGV4dC9zdGF0ZSBjaGFuZ2VcbiAgICovXG4gIHN5bmNXaXRoU3RvcmFnZTxUPih7XG4gICAga2V5LFxuICAgIHN0YXRlJCxcbiAgICBjb250ZXh0JCA9IG9mKCcnKSxcbiAgICBzdG9yYWdlVHlwZSA9IFN0b3JhZ2VTeW5jVHlwZS5MT0NBTF9TVE9SQUdFLFxuICAgIG9uUmVhZCA9ICgpID0+IHt9LFxuICB9OiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGNvbnRleHQkPzogT2JzZXJ2YWJsZTxzdHJpbmcgfCBBcnJheTxzdHJpbmc+PjtcbiAgICBzdG9yYWdlVHlwZT86IFN0b3JhZ2VTeW5jVHlwZTtcbiAgICBvblJlYWQ/OiAoc3RhdGVGcm9tU3RvcmFnZTogVCkgPT4gdm9pZDtcbiAgfSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2Uoc3RvcmFnZVR5cGUsIHRoaXMud2luUmVmKTtcblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgICAvLyBEbyBub3QgY2hhbmdlIG9yZGVyIG9mIHN1YnNjcmlwdGlvbiEgUmVhZCBzaG91bGQgaGFwcGVuIGJlZm9yZSB3cml0ZSBvbiBjb250ZXh0IGNoYW5nZS5cbiAgICBzdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbnRleHQkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRGcm9tU3RvcmFnZShcbiAgICAgICAgICAgICAgc3RvcmFnZSxcbiAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUtleVdpdGhDb250ZXh0KGNvbnRleHQsIGtleSlcbiAgICAgICAgICAgICkgYXMgVDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0YXAoKHN0YXRlKSA9PiBvblJlYWQoc3RhdGUpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG5cbiAgICBzdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHN0YXRlJC5waXBlKHdpdGhMYXRlc3RGcm9tKGNvbnRleHQkKSkuc3Vic2NyaWJlKChbc3RhdGUsIGNvbnRleHRdKSA9PiB7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgdGhpcy5nZW5lcmF0ZUtleVdpdGhDb250ZXh0KGNvbnRleHQsIGtleSksXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgc3RvcmFnZVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVLZXlXaXRoQ29udGV4dChcbiAgICBjb250ZXh0OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICAgIGtleTogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBzcGFydGFjdXPimr8ke1tdLmNvbmNhdChjb250ZXh0KS5qb2luKCfimr8nKX3imr8ke2tleX1gO1xuICB9XG59XG4iXX0=