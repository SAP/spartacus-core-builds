import { Optional, PLATFORM_ID, InjectionToken } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { META_REDUCERS } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { getStorageSyncReducer } from './storage-sync.reducer';
import { getTransferStateReducer } from './transfer-state.reducer';
import { Config } from '../../config/config-tokens';
export { getStateSlice } from '../utils/get-state-slice';
export { getStorageSyncReducer } from './storage-sync.reducer';
export * from './transfer-state.reducer';
export const TRANSFER_STATE_META_REDUCER = new InjectionToken('TransferStateMetaReducer');
export const STORAGE_SYNC_META_REDUCER = new InjectionToken('StorageSyncMetaReducer');
const ɵ0 = getTransferStateReducer, ɵ1 = getStorageSyncReducer;
export const stateMetaReducers = [
    {
        provide: TRANSFER_STATE_META_REDUCER,
        useFactory: ɵ0,
        deps: [
            PLATFORM_ID,
            [new Optional(), TransferState],
            [new Optional(), Config],
        ],
    },
    {
        provide: STORAGE_SYNC_META_REDUCER,
        useFactory: ɵ1,
        deps: [WindowRef, [new Optional(), Config]],
    },
    {
        provide: META_REDUCERS,
        useExisting: TRANSFER_STATE_META_REDUCER,
        multi: true,
    },
    {
        provide: META_REDUCERS,
        useExisting: STORAGE_SYNC_META_REDUCER,
        multi: true,
    },
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zdGF0ZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBWSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsY0FBYywwQkFBMEIsQ0FBQztBQUV6QyxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLGNBQWMsQ0FDM0QsMEJBQTBCLENBQzNCLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLGNBQWMsQ0FDekQsd0JBQXdCLENBQ3pCLENBQUM7V0FLYyx1QkFBdUIsT0FTdkIscUJBQXFCO0FBWnJDLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFlO0lBQzNDO1FBQ0UsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxVQUFVLElBQXlCO1FBQ25DLElBQUksRUFBRTtZQUNKLFdBQVc7WUFDWCxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFDO1lBQy9CLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUM7U0FDekI7S0FDRjtJQUNEO1FBQ0UsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxVQUFVLElBQXVCO1FBQ2pDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDNUM7SUFDRDtRQUNFLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGFBQWE7UUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBQTEFURk9STV9JRCwgUHJvdmlkZXIsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNRVRBX1JFRFVDRVJTIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlciB9IGZyb20gJy4vdHJhbnNmZXItc3RhdGUucmVkdWNlcic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLXRva2Vucyc7XG5cbmV4cG9ydCB7IGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuZXhwb3J0IHsgZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyIH0gZnJvbSAnLi9zdG9yYWdlLXN5bmMucmVkdWNlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zZmVyLXN0YXRlLnJlZHVjZXInO1xuXG5leHBvcnQgY29uc3QgVFJBTlNGRVJfU1RBVEVfTUVUQV9SRURVQ0VSID0gbmV3IEluamVjdGlvblRva2VuKFxuICAnVHJhbnNmZXJTdGF0ZU1ldGFSZWR1Y2VyJ1xuKTtcbmV4cG9ydCBjb25zdCBTVE9SQUdFX1NZTkNfTUVUQV9SRURVQ0VSID0gbmV3IEluamVjdGlvblRva2VuKFxuICAnU3RvcmFnZVN5bmNNZXRhUmVkdWNlcidcbik7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZU1ldGFSZWR1Y2VyczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFRSQU5TRkVSX1NUQVRFX01FVEFfUkVEVUNFUixcbiAgICB1c2VGYWN0b3J5OiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcixcbiAgICBkZXBzOiBbXG4gICAgICBQTEFURk9STV9JRCxcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgVHJhbnNmZXJTdGF0ZV0sXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ10sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFNUT1JBR0VfU1lOQ19NRVRBX1JFRFVDRVIsXG4gICAgdXNlRmFjdG9yeTogZ2V0U3RvcmFnZVN5bmNSZWR1Y2VyLFxuICAgIGRlcHM6IFtXaW5kb3dSZWYsIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnXV0sXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBNRVRBX1JFRFVDRVJTLFxuICAgIHVzZUV4aXN0aW5nOiBUUkFOU0ZFUl9TVEFURV9NRVRBX1JFRFVDRVIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBNRVRBX1JFRFVDRVJTLFxuICAgIHVzZUV4aXN0aW5nOiBTVE9SQUdFX1NZTkNfTUVUQV9SRURVQ0VSLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==