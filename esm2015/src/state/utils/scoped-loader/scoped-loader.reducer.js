import { loaderReducer } from '../loader/loader.reducer';
export const initialScopedLoaderState = {};
/**
 * Higher order reducer designed to add scope support for loader reducer
 *
 * @param entityType
 * @param reducer
 */
export function scopedLoaderReducer(entityType, reducer) {
    const loader = loaderReducer(entityType, reducer);
    return (state = initialScopedLoaderState, action) => {
        var _a;
        if (action && action.meta && action.meta.entityType === entityType) {
            return Object.assign(Object.assign({}, state), { [(_a = action.meta.scope) !== null && _a !== void 0 ? _a : '']: loader(state[action.meta.scope], action) });
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVkLWxvYWRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc3RhdGUvdXRpbHMvc2NvcGVkLWxvYWRlci9zY29wZWQtbG9hZGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBS3pELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUEyQixFQUFFLENBQUM7QUFFbkU7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLFVBQWtCLEVBQ2xCLE9BQXlDO0lBS3pDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBSSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFckQsT0FBTyxDQUNMLFFBQThCLHdCQUF3QixFQUN0RCxNQUFnQyxFQUNWLEVBQUU7O1FBQ3hCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ2xFLHVDQUNLLEtBQUssS0FDUixPQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxtQ0FBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQ25FO1NBQ0g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IEVudGl0eVNjb3BlZExvYWRlckFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LmFjdGlvbic7XG5pbXBvcnQgeyBTY29wZWRMb2FkZXJTdGF0ZSB9IGZyb20gJy4vc2NvcGVkLWxvYWRlci5zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU2NvcGVkTG9hZGVyU3RhdGU6IFNjb3BlZExvYWRlclN0YXRlPGFueT4gPSB7fTtcblxuLyoqXG4gKiBIaWdoZXIgb3JkZXIgcmVkdWNlciBkZXNpZ25lZCB0byBhZGQgc2NvcGUgc3VwcG9ydCBmb3IgbG9hZGVyIHJlZHVjZXJcbiAqXG4gKiBAcGFyYW0gZW50aXR5VHlwZVxuICogQHBhcmFtIHJlZHVjZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjb3BlZExvYWRlclJlZHVjZXI8VD4oXG4gIGVudGl0eVR5cGU6IHN0cmluZyxcbiAgcmVkdWNlcj86IChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IFRcbik6IChcbiAgc3RhdGU6IFNjb3BlZExvYWRlclN0YXRlPFQ+LFxuICBhY3Rpb246IEVudGl0eVNjb3BlZExvYWRlckFjdGlvblxuKSA9PiBTY29wZWRMb2FkZXJTdGF0ZTxUPiB7XG4gIGNvbnN0IGxvYWRlciA9IGxvYWRlclJlZHVjZXI8VD4oZW50aXR5VHlwZSwgcmVkdWNlcik7XG5cbiAgcmV0dXJuIChcbiAgICBzdGF0ZTogU2NvcGVkTG9hZGVyU3RhdGU8VD4gPSBpbml0aWFsU2NvcGVkTG9hZGVyU3RhdGUsXG4gICAgYWN0aW9uOiBFbnRpdHlTY29wZWRMb2FkZXJBY3Rpb25cbiAgKTogU2NvcGVkTG9hZGVyU3RhdGU8VD4gPT4ge1xuICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ubWV0YS5zY29wZSA/PyAnJ106IGxvYWRlcihzdGF0ZVthY3Rpb24ubWV0YS5zY29wZV0sIGFjdGlvbiksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=