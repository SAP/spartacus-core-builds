import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { makeStateKey, } from '@angular/platform-browser';
import { INIT } from '@ngrx/store';
import { AUTH_FEATURE } from '../../auth/store/auth-state';
import { deepMerge } from '../../config/utils/deep-merge';
import { StateTransferType } from '../config/state-config';
import { filterKeysByType, getStateSlice } from '../utils/get-state-slice';
export var CX_KEY = makeStateKey('cx-state');
export function getTransferStateReducer(platformId, transferState, config) {
    if (transferState &&
        config &&
        config.state &&
        config.state.ssrTransfer &&
        config.state.ssrTransfer.keys) {
        if (isPlatformBrowser(platformId)) {
            return getBrowserTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
        else if (isPlatformServer(platformId)) {
            return getServerTransferStateReducer(transferState, config.state.ssrTransfer.keys);
        }
    }
    return function (reducer) { return reducer; };
}
export function getServerTransferStateReducer(transferState, keys) {
    var transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
    return function (reducer) {
        return function (state, action) {
            var newState = reducer(state, action);
            if (newState) {
                var stateSlice = getStateSlice(transferStateKeys, [], newState);
                transferState.set(CX_KEY, stateSlice);
            }
            return newState;
        };
    };
}
export function getBrowserTransferStateReducer(transferState, keys) {
    var transferStateKeys = filterKeysByType(keys, StateTransferType.TRANSFER_STATE);
    return function (reducer) {
        return function (state, action) {
            if (action.type === INIT) {
                if (!state) {
                    state = reducer(state, action);
                }
                // we should not utilize transfer state if user is logged in
                var authState = state[AUTH_FEATURE];
                var isLoggedIn = authState && authState.userToken && authState.userToken.token;
                if (!isLoggedIn && transferState.hasKey(CX_KEY)) {
                    var cxKey = transferState.get(CX_KEY, {});
                    var transferredStateSlice = getStateSlice(transferStateKeys, [], cxKey);
                    state = deepMerge({}, state, transferredStateSlice);
                }
                return state;
            }
            return reducer(state, action);
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc3RhdGUucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdGF0ZS9yZWR1Y2Vycy90cmFuc2Zlci1zdGF0ZS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFDTCxZQUFZLEdBR2IsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sNkJBQTZCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFELE9BQU8sRUFBZSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRSxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQXFCLFlBQVksQ0FBUyxVQUFVLENBQUMsQ0FBQztBQUV6RSxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFVBQVUsRUFDVixhQUE2QixFQUM3QixNQUFvQjtJQUVwQixJQUNFLGFBQWE7UUFDYixNQUFNO1FBQ04sTUFBTSxDQUFDLEtBQUs7UUFDWixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUM3QjtRQUNBLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakMsT0FBTyw4QkFBOEIsQ0FDbkMsYUFBYSxFQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDOUIsQ0FBQztTQUNIO2FBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxPQUFPLDZCQUE2QixDQUNsQyxhQUFhLEVBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUM5QixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLEVBQVAsQ0FBTyxDQUFDO0FBQzlCLENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQzNDLGFBQTRCLEVBQzVCLElBQTBDO0lBRTFDLElBQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQ3hDLElBQUksRUFDSixpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFFRixPQUFPLFVBQVUsT0FBTztRQUN0QixPQUFPLFVBQVUsS0FBSyxFQUFFLE1BQVc7WUFDakMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QyxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRSxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN2QztZQUVELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsOEJBQThCLENBQzVDLGFBQTRCLEVBQzVCLElBQTBDO0lBRTFDLElBQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQ3hDLElBQUksRUFDSixpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFFRixPQUFPLFVBQVUsT0FBTztRQUN0QixPQUFPLFVBQVUsS0FBSyxFQUFFLE1BQVc7WUFDakMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDVixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDaEM7Z0JBRUQsNERBQTREO2dCQUM1RCxJQUFNLFNBQVMsR0FBSSxLQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6RCxJQUFNLFVBQVUsR0FDZCxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFFaEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUMvQyxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsSUFBTSxxQkFBcUIsR0FBRyxhQUFhLENBQ3pDLGlCQUFpQixFQUNqQixFQUFFLEVBQ0YsS0FBSyxDQUNOLENBQUM7b0JBRUYsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSU5JVCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFVVEhfRkVBVFVSRSwgU3RhdGVXaXRoQXV0aCB9IGZyb20gJy4uLy4uL2F1dGgvc3RvcmUvYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZywgU3RhdGVUcmFuc2ZlclR5cGUgfSBmcm9tICcuLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGZpbHRlcktleXNCeVR5cGUsIGdldFN0YXRlU2xpY2UgfSBmcm9tICcuLi91dGlscy9nZXQtc3RhdGUtc2xpY2UnO1xuXG5leHBvcnQgY29uc3QgQ1hfS0VZOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PHN0cmluZz4oJ2N4LXN0YXRlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgcGxhdGZvcm1JZCxcbiAgdHJhbnNmZXJTdGF0ZT86IFRyYW5zZmVyU3RhdGUsXG4gIGNvbmZpZz86IFN0YXRlQ29uZmlnXG4pIHtcbiAgaWYgKFxuICAgIHRyYW5zZmVyU3RhdGUgJiZcbiAgICBjb25maWcgJiZcbiAgICBjb25maWcuc3RhdGUgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIgJiZcbiAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICApIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybiBnZXRCcm93c2VyVHJhbnNmZXJTdGF0ZVJlZHVjZXIoXG4gICAgICAgIHRyYW5zZmVyU3RhdGUsXG4gICAgICAgIGNvbmZpZy5zdGF0ZS5zc3JUcmFuc2Zlci5rZXlzXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuIGdldFNlcnZlclRyYW5zZmVyU3RhdGVSZWR1Y2VyKFxuICAgICAgICB0cmFuc2ZlclN0YXRlLFxuICAgICAgICBjb25maWcuc3RhdGUuc3NyVHJhbnNmZXIua2V5c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKHJlZHVjZXIpID0+IHJlZHVjZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgY29uc3QgdHJhbnNmZXJTdGF0ZUtleXMgPSBmaWx0ZXJLZXlzQnlUeXBlKFxuICAgIGtleXMsXG4gICAgU3RhdGVUcmFuc2ZlclR5cGUuVFJBTlNGRVJfU1RBVEVcbiAgKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlU2xpY2UgPSBnZXRTdGF0ZVNsaWNlKHRyYW5zZmVyU3RhdGVLZXlzLCBbXSwgbmV3U3RhdGUpO1xuICAgICAgICB0cmFuc2ZlclN0YXRlLnNldChDWF9LRVksIHN0YXRlU2xpY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJUcmFuc2ZlclN0YXRlUmVkdWNlcihcbiAgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcbiAga2V5czogeyBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZSB9XG4pIHtcbiAgY29uc3QgdHJhbnNmZXJTdGF0ZUtleXMgPSBmaWx0ZXJLZXlzQnlUeXBlKFxuICAgIGtleXMsXG4gICAgU3RhdGVUcmFuc2ZlclR5cGUuVFJBTlNGRVJfU1RBVEVcbiAgKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb246IGFueSkge1xuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUKSB7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHV0aWxpemUgdHJhbnNmZXIgc3RhdGUgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgICAgY29uc3QgYXV0aFN0YXRlID0gKHN0YXRlIGFzIFN0YXRlV2l0aEF1dGgpW0FVVEhfRkVBVFVSRV07XG4gICAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPVxuICAgICAgICAgIGF1dGhTdGF0ZSAmJiBhdXRoU3RhdGUudXNlclRva2VuICYmIGF1dGhTdGF0ZS51c2VyVG9rZW4udG9rZW47XG5cbiAgICAgICAgaWYgKCFpc0xvZ2dlZEluICYmIHRyYW5zZmVyU3RhdGUuaGFzS2V5KENYX0tFWSkpIHtcbiAgICAgICAgICBjb25zdCBjeEtleSA9IHRyYW5zZmVyU3RhdGUuZ2V0KENYX0tFWSwge30pO1xuICAgICAgICAgIGNvbnN0IHRyYW5zZmVycmVkU3RhdGVTbGljZSA9IGdldFN0YXRlU2xpY2UoXG4gICAgICAgICAgICB0cmFuc2ZlclN0YXRlS2V5cyxcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgY3hLZXlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgc3RhdGUgPSBkZWVwTWVyZ2Uoe30sIHN0YXRlLCB0cmFuc2ZlcnJlZFN0YXRlU2xpY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH07XG4gIH07XG59XG4iXX0=