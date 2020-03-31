import { INIT, UPDATE } from '@ngrx/store';
import { deepMerge } from '../../config/utils/deep-merge';
import { StorageSyncType } from '../config/state-config';
import { filterKeysByType, getStateSlice } from '../utils/get-state-slice';
export function getStorageSyncReducer(winRef, config) {
    if (!winRef.nativeWindow ||
        !config ||
        !config.state ||
        !config.state.storageSync ||
        !config.state.storageSync.keys) {
        return (reducer) => reducer;
    }
    const storageSyncConfig = config.state.storageSync;
    return (reducer) => {
        return (state, action) => {
            const newState = reducer(state, action);
            if (action.type === INIT || action.type === UPDATE) {
                const rehydratedState = rehydrate(config, winRef);
                return deepMerge({}, newState, rehydratedState);
            }
            if (action.type !== INIT) {
                // handle local storage
                const localStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.LOCAL_STORAGE);
                const localStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.LOCAL_STORAGE);
                const localStorageStateSlices = getStateSlice(localStorageKeys, localStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.localStorageKeyName, localStorageStateSlices, winRef.localStorage);
                // handle session storage
                const sessionStorageKeys = filterKeysByType(storageSyncConfig.keys, StorageSyncType.SESSION_STORAGE);
                const sessionStorageExclusionKeys = filterKeysByType(storageSyncConfig.excludeKeys, StorageSyncType.SESSION_STORAGE);
                const sessionStorageStateSlices = getStateSlice(sessionStorageKeys, sessionStorageExclusionKeys, newState);
                persistToStorage(config.state.storageSync.sessionStorageKeyName, sessionStorageStateSlices, winRef.sessionStorage);
            }
            return newState;
        };
    };
}
export function rehydrate(config, winRef) {
    const localStorageValue = readFromStorage(winRef.localStorage, config.state.storageSync.localStorageKeyName);
    const sessionStorageValue = readFromStorage(winRef.sessionStorage, config.state.storageSync.sessionStorageKeyName);
    return deepMerge(localStorageValue, sessionStorageValue);
}
export function exists(value) {
    if (value != null) {
        if (typeof value === 'object') {
            return Object.keys(value).length !== 0;
        }
        return value !== '';
    }
    return false;
}
export function getStorage(storageType, winRef) {
    let storage;
    switch (storageType) {
        case StorageSyncType.LOCAL_STORAGE: {
            storage = winRef.localStorage;
            break;
        }
        case StorageSyncType.SESSION_STORAGE: {
            storage = winRef.sessionStorage;
            break;
        }
        case StorageSyncType.NO_STORAGE: {
            storage = undefined;
            break;
        }
        default: {
            storage = winRef.sessionStorage;
        }
    }
    return storage;
}
export function persistToStorage(configKey, value, storage) {
    if (!isSsr(storage) && value) {
        storage.setItem(configKey, JSON.stringify(value));
    }
}
export function readFromStorage(storage, key) {
    if (isSsr(storage)) {
        return;
    }
    const storageValue = storage.getItem(key);
    if (!storageValue) {
        return;
    }
    return JSON.parse(storageValue);
}
export function isSsr(storage) {
    return !Boolean(storage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvcmVkdWNlcnMvc3RvcmFnZS1zeW5jLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF5QixJQUFJLEVBQWUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNFLE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsTUFBaUIsRUFDakIsTUFBb0I7SUFFcEIsSUFDRSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBQ3BCLENBQUMsTUFBTTtRQUNQLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDYixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztRQUN6QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFDOUI7UUFDQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7S0FDN0I7SUFFRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBRW5ELE9BQU8sQ0FBQyxPQUFpQyxFQUE0QixFQUFFO1FBQ3JFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFLLEVBQUU7WUFDMUIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV4QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNsRCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFB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LENBQUMsQ0FBQztZQUNQLE9BQU8sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ2pDO0tBQ0Y7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixTQUFpQixFQUNqQixLQUFVLEVBQ1YsT0FBZ0I7SUFFaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBZ0IsRUFBRSxHQUFXO0lBQzNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2xCLE9BQU87S0FDUjtJQUVELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPO0tBQ1I7SUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUMsT0FBZ0I7SUFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25SZWR1Y2VyLCBJTklULCBNZXRhUmVkdWNlciwgVVBEQVRFIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZmlsdGVyS2V5c0J5VHlwZSwgZ2V0U3RhdGVTbGljZSB9IGZyb20gJy4uL3V0aWxzL2dldC1zdGF0ZS1zbGljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlU3luY1JlZHVjZXI8VD4oXG4gIHdpblJlZjogV2luZG93UmVmLFxuICBjb25maWc/OiBTdGF0ZUNvbmZpZ1xuKTogTWV0YVJlZHVjZXI8VCwgQWN0aW9uPiB7XG4gIGlmIChcbiAgICAhd2luUmVmLm5hdGl2ZVdpbmRvdyB8fFxuICAgICFjb25maWcgfHxcbiAgICAhY29uZmlnLnN0YXRlIHx8XG4gICAgIWNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYyB8fFxuICAgICFjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMua2V5c1xuICApIHtcbiAgICByZXR1cm4gKHJlZHVjZXIpID0+IHJlZHVjZXI7XG4gIH1cblxuICBjb25zdCBzdG9yYWdlU3luY0NvbmZpZyA9IGNvbmZpZy5zdGF0ZS5zdG9yYWdlU3luYztcblxuICByZXR1cm4gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPik6IEFjdGlvblJlZHVjZXI8VCwgQWN0aW9uPiA9PiB7XG4gICAgcmV0dXJuIChzdGF0ZSwgYWN0aW9uKTogVCA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSU5JVCB8fCBhY3Rpb24udHlwZSA9PT0gVVBEQVRFKSB7XG4gICAgICAgIGNvbnN0IHJlaHlkcmF0ZWRTdGF0ZSA9IHJlaHlkcmF0ZShjb25maWcsIHdpblJlZik7XG4gICAgICAgIHJldHVybiBkZWVwTWVyZ2Uoe30sIG5ld1N0YXRlLCByZWh5ZHJhdGVkU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgIT09IElOSVQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlS2V5cyA9IGZpbHRlcktleXNCeVR5cGUoXG4gICAgICAgICAgc3RvcmFnZVN5bmNDb25maWcua2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VFeGNsdXNpb25LZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5leGNsdWRlS2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VTdGF0ZVNsaWNlcyA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgbG9jYWxTdG9yYWdlS2V5cyxcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VFeGNsdXNpb25LZXlzLFxuICAgICAgICAgIG5ld1N0YXRlXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNpc3RUb1N0b3JhZ2UoXG4gICAgICAgICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWUsXG4gICAgICAgICAgbG9jYWxTdG9yYWdlU3RhdGVTbGljZXMsXG4gICAgICAgICAgd2luUmVmLmxvY2FsU3RvcmFnZVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGhhbmRsZSBzZXNzaW9uIHN0b3JhZ2VcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VLZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5rZXlzLFxuICAgICAgICAgIFN0b3JhZ2VTeW5jVHlwZS5TRVNTSU9OX1NUT1JBR0VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VFeGNsdXNpb25LZXlzID0gZmlsdGVyS2V5c0J5VHlwZShcbiAgICAgICAgICBzdG9yYWdlU3luY0NvbmZpZy5leGNsdWRlS2V5cyxcbiAgICAgICAgICBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMgPSBnZXRTdGF0ZVNsaWNlKFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlS2V5cyxcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZUV4Y2x1c2lvbktleXMsXG4gICAgICAgICAgbmV3U3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc2lzdFRvU3RvcmFnZShcbiAgICAgICAgICBjb25maWcuc3RhdGUuc3RvcmFnZVN5bmMuc2Vzc2lvblN0b3JhZ2VLZXlOYW1lLFxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlU3RhdGVTbGljZXMsXG4gICAgICAgICAgd2luUmVmLnNlc3Npb25TdG9yYWdlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVoeWRyYXRlPFQ+KGNvbmZpZzogU3RhdGVDb25maWcsIHdpblJlZjogV2luZG93UmVmKTogVCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZVZhbHVlID0gcmVhZEZyb21TdG9yYWdlKFxuICAgIHdpblJlZi5sb2NhbFN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLmxvY2FsU3RvcmFnZUtleU5hbWVcbiAgKTtcbiAgY29uc3Qgc2Vzc2lvblN0b3JhZ2VWYWx1ZSA9IHJlYWRGcm9tU3RvcmFnZShcbiAgICB3aW5SZWYuc2Vzc2lvblN0b3JhZ2UsXG4gICAgY29uZmlnLnN0YXRlLnN0b3JhZ2VTeW5jLnNlc3Npb25TdG9yYWdlS2V5TmFtZVxuICApO1xuXG4gIHJldHVybiBkZWVwTWVyZ2UobG9jYWxTdG9yYWdlVmFsdWUsIHNlc3Npb25TdG9yYWdlVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzKHZhbHVlOiBPYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggIT09IDA7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSAhPT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZShcbiAgc3RvcmFnZVR5cGU6IFN0b3JhZ2VTeW5jVHlwZSxcbiAgd2luUmVmOiBXaW5kb3dSZWZcbik6IFN0b3JhZ2Uge1xuICBsZXQgc3RvcmFnZTogU3RvcmFnZTtcblxuICBzd2l0Y2ggKHN0b3JhZ2VUeXBlKSB7XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRToge1xuICAgICAgc3RvcmFnZSA9IHdpblJlZi5sb2NhbFN0b3JhZ2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTdG9yYWdlU3luY1R5cGUuU0VTU0lPTl9TVE9SQUdFOiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RvcmFnZVN5bmNUeXBlLk5PX1NUT1JBR0U6IHtcbiAgICAgIHN0b3JhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdG9yYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFRvU3RvcmFnZShcbiAgY29uZmlnS2V5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnksXG4gIHN0b3JhZ2U6IFN0b3JhZ2Vcbik6IHZvaWQge1xuICBpZiAoIWlzU3NyKHN0b3JhZ2UpICYmIHZhbHVlKSB7XG4gICAgc3RvcmFnZS5zZXRJdGVtKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZyb21TdG9yYWdlKHN0b3JhZ2U6IFN0b3JhZ2UsIGtleTogc3RyaW5nKTogYW55IHtcbiAgaWYgKGlzU3NyKHN0b3JhZ2UpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RvcmFnZVZhbHVlID0gc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGlmICghc3RvcmFnZVZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmFnZVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3NyKHN0b3JhZ2U6IFN0b3JhZ2UpOiBib29sZWFuIHtcbiAgcmV0dXJuICFCb29sZWFuKHN0b3JhZ2UpO1xufVxuIl19