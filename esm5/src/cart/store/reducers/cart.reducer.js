/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CartActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    content: {},
    entries: {},
    refresh: false,
    cartMergeComplete: false,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CartActions.MERGE_CART: {
            return tslib_1.__assign({}, state, { cartMergeComplete: false });
        }
        case CartActions.MERGE_CART_SUCCESS: {
            return tslib_1.__assign({}, state, { cartMergeComplete: true, refresh: true });
        }
        case CartActions.LOAD_CART_SUCCESS:
        case CartActions.CREATE_CART_SUCCESS: {
            /** @type {?} */
            var content = tslib_1.__assign({}, action.payload);
            /** @type {?} */
            var entries = {};
            if (content.entries) {
                entries = content.entries.reduce((/**
                 * @param {?} entryMap
                 * @param {?} entry
                 * @return {?}
                 */
                function (entryMap, entry) {
                    var _a;
                    return tslib_1.__assign({}, entryMap, (_a = {}, _a[entry.product.code] = state.entries && state.entries[entry.product.code]
                        ? tslib_1.__assign({}, state.entries[entry.product.code], entry) : entry, _a));
                }), tslib_1.__assign({}, entries));
                delete content['entries'];
            }
            return tslib_1.__assign({}, state, { content: content,
                entries: entries, refresh: false });
        }
        case CartActions.CART_REMOVE_ENTRY_SUCCESS:
        case CartActions.CART_UPDATE_ENTRY_SUCCESS:
        case CartActions.CART_ADD_ENTRY_SUCCESS:
        case CartActions.ADD_EMAIL_TO_CART_SUCCESS: {
            return tslib_1.__assign({}, state, { refresh: true });
        }
        case CartActions.RESET_CART_DETAILS: {
            return {
                content: {
                    guid: state.content.guid,
                    code: state.content.code,
                    user: state.content.user,
                },
                entries: {},
                refresh: false,
                cartMergeComplete: false,
            };
        }
        case CartActions.CLEAR_CART: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvc3RvcmUvcmVkdWNlcnMvY2FydC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLEtBQU8sWUFBWSxHQUFjO0lBQ3JDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsS0FBSztJQUNkLGlCQUFpQixFQUFFLEtBQUs7Q0FDekI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTREO0lBRDVELHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQiw0QkFDSyxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxJQUN4QjtTQUNIO1FBRUQsS0FBSyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNuQyw0QkFDSyxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsSUFBSSxFQUN2QixPQUFPLEVBQUUsSUFBSSxJQUNiO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNuQyxLQUFLLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztnQkFDOUIsT0FBTyx3QkFBUSxNQUFNLENBQUMsT0FBTyxDQUFFOztnQkFDakMsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7OztnQkFDOUIsVUFBQyxRQUFpQyxFQUFFLEtBQWlCOztvQkFDbkQsNEJBQ0ssUUFBUSxlQU9WLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUNqQixLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQ2hELENBQUMsc0JBQ00sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUNqQyxLQUFLLEVBRVosQ0FBQyxDQUFDLEtBQUssT0FDWDtnQkFDSixDQUFDLHdCQUVJLE9BQU8sRUFFYixDQUFDO2dCQUNGLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sU0FBQTtnQkFDUCxPQUFPLFNBQUEsRUFDUCxPQUFPLEVBQUUsS0FBSyxJQUNkO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUMzQyxLQUFLLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztRQUN4QyxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzFDLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxJQUNiO1NBQ0g7UUFFRCxLQUFLLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ25DLE9BQU87Z0JBQ0wsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7b0JBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2dCQUNkLGlCQUFpQixFQUFFLEtBQUs7YUFDekIsQ0FBQztTQUNIO1FBRUQsS0FBSyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0IsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFN0YXRlIH0gZnJvbSAnLi4vY2FydC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhcnRTdGF0ZSA9IHtcbiAgY29udGVudDoge30sXG4gIGVudHJpZXM6IHt9LFxuICByZWZyZXNoOiBmYWxzZSxcbiAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBY3Rpb24gfCBDYXJ0QWN0aW9ucy5DYXJ0RW50cnlBY3Rpb25cbik6IENhcnRTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25zLk1FUkdFX0NBUlQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0TWVyZ2VDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IHRydWUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuTE9BRF9DQVJUX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DUkVBVEVfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjb250ZW50ID0geyAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgbGV0IGVudHJpZXMgPSB7fTtcbiAgICAgIGlmIChjb250ZW50LmVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcyA9IGNvbnRlbnQuZW50cmllcy5yZWR1Y2UoXG4gICAgICAgICAgKGVudHJ5TWFwOiB7IFtjb2RlOiBzdHJpbmddOiBhbnkgfSwgZW50cnk6IE9yZGVyRW50cnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmVudHJ5TWFwLFxuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICBJZiB3ZSByZWZyZXNoIHRoZSBwYWdlIGZyb20gY2FydCBkZXRhaWxzIHBhZ2UsIDIgbG9hZCBjYXJ0XG4gICAgICAgICAgICAgIEFjdGlvbnMgZ2V0cyBkaXNwYXRjaGVkLiBPbmUgaXMgbm9uLWRldGFpbCwgYW5kIHRoZSBzZWNvbmQgaXMgZGV0YWlsZWQuXG4gICAgICAgICAgICAgIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBkZXRhaWxlZCBvbmNlIGdldCByZXNvbHZlZCBmaXJzdCwgd2UgbWVyZ2UgdGhlIGV4aXN0aW5nXG4gICAgICAgICAgICAgIGRhdGEgd2l0aCB0aGUgbmV3IGRhdGEgZnJvbSB0aGUgcmVzcG9uc2UgKHRvIG5vdCBkZWxldGUgZXhpc3RpbmcgZGV0YWlsZWQgZGF0YSkuXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIFtlbnRyeS5wcm9kdWN0LmNvZGVdOlxuICAgICAgICAgICAgICAgIHN0YXRlLmVudHJpZXMgJiYgc3RhdGUuZW50cmllc1tlbnRyeS5wcm9kdWN0LmNvZGVdXG4gICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5lbnRyaWVzW2VudHJ5LnByb2R1Y3QuY29kZV0sXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZW50cnksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uZW50cmllcyxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGRlbGV0ZSBjb250ZW50WydlbnRyaWVzJ107XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgZW50cmllcyxcbiAgICAgICAgcmVmcmVzaDogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQ0FSVF9SRU1PVkVfRU5UUllfU1VDQ0VTUzpcbiAgICBjYXNlIENhcnRBY3Rpb25zLkNBUlRfVVBEQVRFX0VOVFJZX1NVQ0NFU1M6XG4gICAgY2FzZSBDYXJ0QWN0aW9ucy5DQVJUX0FERF9FTlRSWV9TVUNDRVNTOlxuICAgIGNhc2UgQ2FydEFjdGlvbnMuQUREX0VNQUlMX1RPX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ2FydEFjdGlvbnMuUkVTRVRfQ0FSVF9ERVRBSUxTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgZ3VpZDogc3RhdGUuY29udGVudC5ndWlkLFxuICAgICAgICAgIGNvZGU6IHN0YXRlLmNvbnRlbnQuY29kZSxcbiAgICAgICAgICB1c2VyOiBzdGF0ZS5jb250ZW50LnVzZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGVudHJpZXM6IHt9LFxuICAgICAgICByZWZyZXNoOiBmYWxzZSxcbiAgICAgICAgY2FydE1lcmdlQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENhcnRBY3Rpb25zLkNMRUFSX0NBUlQ6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19