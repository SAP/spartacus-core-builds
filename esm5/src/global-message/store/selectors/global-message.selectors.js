import { createSelector } from '@ngrx/store';
import { getGlobalMessageState } from './feature.selector';
var ɵ0 = function (state) { return state.entities; };
export var getGlobalMessageEntities = createSelector(getGlobalMessageState, ɵ0);
export var getGlobalMessageEntitiesByType = function (type) {
    return createSelector(getGlobalMessageEntities, function (entities) { return entities && entities[type]; });
};
export var getGlobalMessageCountByType = function (type) {
    return createSelector(getGlobalMessageEntitiesByType(type), function (entities) { return entities && entities.length; });
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL3NlbGVjdG9ycy9nbG9iYWwtbWVzc2FnZS5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFRL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7U0FPekQsVUFBQyxLQUF5QixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjO0FBTC9DLE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUdqQyxjQUFjLENBQ2hCLHFCQUFxQixLQUV0QixDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sOEJBQThCLEdBQUcsVUFDNUMsSUFBdUI7SUFFdkIsT0FBTyxjQUFjLENBQ25CLHdCQUF3QixFQUN4QixVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLENBQ3pDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRyxVQUN6QyxJQUF1QjtJQUV2QixPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxDQUFDLEVBQ3BDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQTNCLENBQTJCLENBQzFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRhYmxlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VFbnRpdGllcyxcbiAgR2xvYmFsTWVzc2FnZVN0YXRlLFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxufSBmcm9tICcuLi9nbG9iYWwtbWVzc2FnZS1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRHbG9iYWxNZXNzYWdlU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsTWVzc2FnZUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlRW50aXRpZXNcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0R2xvYmFsTWVzc2FnZVN0YXRlLFxuICAoc3RhdGU6IEdsb2JhbE1lc3NhZ2VTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUgPSAoXG4gIHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aEdsb2JhbE1lc3NhZ2UsIFRyYW5zbGF0YWJsZVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXMsXG4gICAgKGVudGl0aWVzKSA9PiBlbnRpdGllcyAmJiBlbnRpdGllc1t0eXBlXVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbE1lc3NhZ2VDb3VudEJ5VHlwZSA9IChcbiAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGVcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoR2xvYmFsTWVzc2FnZSwgbnVtYmVyPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRHbG9iYWxNZXNzYWdlRW50aXRpZXNCeVR5cGUodHlwZSksXG4gICAgKGVudGl0aWVzKSA9PiBlbnRpdGllcyAmJiBlbnRpdGllcy5sZW5ndGhcbiAgKTtcbn07XG4iXX0=