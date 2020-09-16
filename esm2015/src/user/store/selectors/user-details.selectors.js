import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
const ɵ0 = (state) => state.account;
export const getDetailsState = createSelector(getUserState, ɵ0);
const ɵ1 = (state) => state.details;
export const getDetails = createSelector(getDetailsState, ɵ1);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3VzZXItZGV0YWlscy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFHL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO1dBS2pCLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87QUFIcEUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUd4QixjQUFjLENBQUMsWUFBWSxLQUFzQyxDQUFDO1dBSXBFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87QUFGNUMsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUEwQyxjQUFjLENBQzdFLGVBQWUsS0FFaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciwgVXNlckRldGFpbHNTdGF0ZSwgVXNlclN0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0RGV0YWlsc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBVc2VyRGV0YWlsc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0VXNlclN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuYWNjb3VudCk7XG5cbmV4cG9ydCBjb25zdCBnZXREZXRhaWxzOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFVzZXIsIFVzZXI+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldERldGFpbHNTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyRGV0YWlsc1N0YXRlKSA9PiBzdGF0ZS5kZXRhaWxzXG4pO1xuIl19