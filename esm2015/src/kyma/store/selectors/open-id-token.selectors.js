import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getKymaState } from './feature.selector';
const ɵ0 = (state) => state.openIdToken;
export const getOpenIdTokenState = createSelector(getKymaState, ɵ0);
export const getOpenIdTokenValue = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderValueSelector);
export const getOpenIdTokenLoading = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderLoadingSelector);
export const getOpenIdTokenSuccess = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderSuccessSelector);
export const getOpenIdTokenError = createSelector(getOpenIdTokenState, StateLoaderSelectors.loaderErrorSelector);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9zZWxlY3RvcnMvb3Blbi1pZC10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO1dBS2pCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVztBQUg3RCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FHNUIsY0FBYyxDQUFDLFlBQVksS0FBK0IsQ0FBQztBQUUvRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FHNUIsY0FBYyxDQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQUMsbUJBQW1CLENBQ3pDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FHOUIsY0FBYyxDQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQUMscUJBQXFCLENBQzNDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FHOUIsY0FBYyxDQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQUMscUJBQXFCLENBQzNDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FHNUIsY0FBYyxDQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLENBQUMsbUJBQW1CLENBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoS3ltYSB9IGZyb20gJy4uL2t5bWEtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0S3ltYVN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldE9wZW5JZFRva2VuU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aEt5bWEsXG4gIExvYWRlclN0YXRlPE9wZW5JZFRva2VuPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldEt5bWFTdGF0ZSwgKHN0YXRlKSA9PiBzdGF0ZS5vcGVuSWRUb2tlbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVuSWRUb2tlblZhbHVlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhLeW1hLFxuICBPcGVuSWRUb2tlblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcGVuSWRUb2tlblN0YXRlLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJWYWx1ZVNlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3BlbklkVG9rZW5Mb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhLeW1hLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9wZW5JZFRva2VuU3RhdGUsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckxvYWRpbmdTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9wZW5JZFRva2VuU3VjY2VzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoS3ltYSxcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcGVuSWRUb2tlblN0YXRlLFxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcGVuSWRUb2tlbkVycm9yOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhLeW1hLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9wZW5JZFRva2VuU3RhdGUsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlckVycm9yU2VsZWN0b3Jcbik7XG4iXX0=