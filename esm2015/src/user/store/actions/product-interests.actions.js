/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PRODUCT_INTERESTS, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, ADD_PRODUCT_INTEREST_PROCESS_ID, } from '../user-state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, LoaderResetAction, } from '../../../state/utils/loader/loader.action';
import { EntityFailAction, EntityLoadAction, EntitySuccessAction, EntityResetAction, } from '../../../state/utils/entity-loader/entity-loader.action';
/** @type {?} */
export const LOAD_PRODUCT_INTERESTS = 'Load Product Interests';
/** @type {?} */
export const LOAD_PRODUCT_INTERESTS_FAIL = 'Load Product Interests Fail';
/** @type {?} */
export const LOAD_PRODUCT_INTERESTS_SUCCESS = 'Load Product Interests Success';
/** @type {?} */
export const REMOVE_PRODUCT_INTEREST = 'Remove Product Interest';
/** @type {?} */
export const REMOVE_PRODUCT_INTEREST_SUCCESS = 'Remove Product Interest Success';
/** @type {?} */
export const REMOVE_PRODUCT_INTEREST_FAIL = 'Remove Product Interest Fail';
/** @type {?} */
export const ADD_PRODUCT_INTEREST = 'Add Product Interest';
/** @type {?} */
export const ADD_PRODUCT_INTEREST_FAIL = 'Add Product Interest Fail';
/** @type {?} */
export const ADD_PRODUCT_INTEREST_SUCCESS = 'Add Product Interest Success';
/** @type {?} */
export const ADD_PRODUCT_INTEREST_RESET = 'Add Product Interest Reset';
/** @type {?} */
export const REMOVE_PRODUCT_INTEREST_RESET = 'Remove Product Interest Reset';
/** @type {?} */
export const CLEAR_PRODUCT_INTERESTS = 'Clear Product Interests';
export class LoadProductInterests extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_INTERESTS);
        this.payload = payload;
        this.type = LOAD_PRODUCT_INTERESTS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductInterests.prototype.type;
    /** @type {?} */
    LoadProductInterests.prototype.payload;
}
export class LoadProductInterestsFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_INTERESTS, payload);
        this.payload = payload;
        this.type = LOAD_PRODUCT_INTERESTS_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadProductInterestsFail.prototype.type;
    /** @type {?} */
    LoadProductInterestsFail.prototype.payload;
}
export class LoadProductInterestsSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PRODUCT_INTERESTS);
        this.payload = payload;
        this.type = LOAD_PRODUCT_INTERESTS_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadProductInterestsSuccess.prototype.type;
    /** @type {?} */
    LoadProductInterestsSuccess.prototype.payload;
}
export class RemoveProductInterest extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_PRODUCT_INTEREST;
    }
}
if (false) {
    /** @type {?} */
    RemoveProductInterest.prototype.type;
    /** @type {?} */
    RemoveProductInterest.prototype.payload;
}
export class RemoveProductInterestSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
        this.payload = payload;
        this.type = REMOVE_PRODUCT_INTEREST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RemoveProductInterestSuccess.prototype.type;
    /** @type {?} */
    RemoveProductInterestSuccess.prototype.payload;
}
export class RemoveProductInterestFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID, payload);
        this.payload = payload;
        this.type = REMOVE_PRODUCT_INTEREST_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RemoveProductInterestFail.prototype.type;
    /** @type {?} */
    RemoveProductInterestFail.prototype.payload;
}
export class AddProductInterest extends EntityLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
        this.payload = payload;
        this.type = ADD_PRODUCT_INTEREST;
    }
}
if (false) {
    /** @type {?} */
    AddProductInterest.prototype.type;
    /** @type {?} */
    AddProductInterest.prototype.payload;
}
export class AddProductInterestSuccess extends EntitySuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
        this.payload = payload;
        this.type = ADD_PRODUCT_INTEREST_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    AddProductInterestSuccess.prototype.type;
    /** @type {?} */
    AddProductInterestSuccess.prototype.payload;
}
export class AddProductInterestFail extends EntityFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID, payload);
        this.payload = payload;
        this.type = ADD_PRODUCT_INTEREST_FAIL;
    }
}
if (false) {
    /** @type {?} */
    AddProductInterestFail.prototype.type;
    /** @type {?} */
    AddProductInterestFail.prototype.payload;
}
export class ResetAddInterestState extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, ADD_PRODUCT_INTEREST_PROCESS_ID);
        this.type = ADD_PRODUCT_INTEREST_RESET;
    }
}
if (false) {
    /** @type {?} */
    ResetAddInterestState.prototype.type;
}
export class ResetRemoveInterestState extends EntityResetAction {
    constructor() {
        super(PROCESS_FEATURE, REMOVE_PRODUCT_INTERESTS_PROCESS_ID);
        this.type = REMOVE_PRODUCT_INTEREST_RESET;
    }
}
if (false) {
    /** @type {?} */
    ResetRemoveInterestState.prototype.type;
}
export class ClearProductInterests extends LoaderResetAction {
    constructor() {
        super(PRODUCT_INTERESTS);
        this.type = CLEAR_PRODUCT_INTERESTS;
    }
}
if (false) {
    /** @type {?} */
    ClearProductInterests.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2FjdGlvbnMvcHJvZHVjdC1pbnRlcmVzdHMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixtQ0FBbUMsRUFDbkMsK0JBQStCLEdBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsaUJBQWlCLEdBQ2xCLE1BQU0sMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGlCQUFpQixHQUNsQixNQUFNLHlEQUF5RCxDQUFDOztBQUVqRSxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsd0JBQXdCOztBQUM5RCxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsNkJBQTZCOztBQUN4RSxNQUFNLE9BQU8sOEJBQThCLEdBQUcsZ0NBQWdDOztBQUU5RSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcseUJBQXlCOztBQUNoRSxNQUFNLE9BQU8sK0JBQStCLEdBQzFDLGlDQUFpQzs7QUFDbkMsTUFBTSxPQUFPLDRCQUE0QixHQUFHLDhCQUE4Qjs7QUFFMUUsTUFBTSxPQUFPLG9CQUFvQixHQUFHLHNCQUFzQjs7QUFDMUQsTUFBTSxPQUFPLHlCQUF5QixHQUFHLDJCQUEyQjs7QUFDcEUsTUFBTSxPQUFPLDRCQUE0QixHQUFHLDhCQUE4Qjs7QUFFMUUsTUFBTSxPQUFPLDBCQUEwQixHQUFHLDRCQUE0Qjs7QUFDdEUsTUFBTSxPQUFPLDZCQUE2QixHQUFHLCtCQUErQjs7QUFFNUUsTUFBTSxPQUFPLHVCQUF1QixHQUFHLHlCQUF5QjtBQUVo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LEtBQUssQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUZqRCxTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGOzs7SUFKQyxxQ0FBMkM7O0FBTTdDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7SUFFN0Q7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFGckQsU0FBSSxHQUFHLDZCQUE2QixDQUFDO0lBRzlDLENBQUM7Q0FDRjs7O0lBSkMsd0NBQThDOztBQU1oRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsaUJBQWlCO0lBRTFEO1FBQ0UsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFGbEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBR3hDLENBQUM7Q0FDRjs7O0lBSkMscUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUFJPRFVDVF9JTlRFUkVTVFMsXG4gIFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lELFxuICBBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lELFxufSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7XG4gIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCxcbiAgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgTm90aWZpY2F0aW9uVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC1pbnRlcmVzdC5tb2RlbCc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuLi8uLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbiAgTG9hZGVyUmVzZXRBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIuYWN0aW9uJztcbmltcG9ydCB7XG4gIEVudGl0eUZhaWxBY3Rpb24sXG4gIEVudGl0eUxvYWRBY3Rpb24sXG4gIEVudGl0eVN1Y2Nlc3NBY3Rpb24sXG4gIEVudGl0eVJlc2V0QWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXIuYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9JTlRFUkVTVFMgPSAnTG9hZCBQcm9kdWN0IEludGVyZXN0cyc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0lOVEVSRVNUU19GQUlMID0gJ0xvYWQgUHJvZHVjdCBJbnRlcmVzdHMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX0lOVEVSRVNUU19TVUNDRVNTID0gJ0xvYWQgUHJvZHVjdCBJbnRlcmVzdHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVCA9ICdSZW1vdmUgUHJvZHVjdCBJbnRlcmVzdCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RfU1VDQ0VTUyA9XG4gICdSZW1vdmUgUHJvZHVjdCBJbnRlcmVzdCBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVF9GQUlMID0gJ1JlbW92ZSBQcm9kdWN0IEludGVyZXN0IEZhaWwnO1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfSU5URVJFU1QgPSAnQWRkIFByb2R1Y3QgSW50ZXJlc3QnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0lOVEVSRVNUX0ZBSUwgPSAnQWRkIFByb2R1Y3QgSW50ZXJlc3QgRmFpbCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfSU5URVJFU1RfU1VDQ0VTUyA9ICdBZGQgUHJvZHVjdCBJbnRlcmVzdCBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0lOVEVSRVNUX1JFU0VUID0gJ0FkZCBQcm9kdWN0IEludGVyZXN0IFJlc2V0JztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVF9SRVNFVCA9ICdSZW1vdmUgUHJvZHVjdCBJbnRlcmVzdCBSZXNldCc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9QUk9EVUNUX0lOVEVSRVNUUyA9ICdDbGVhciBQcm9kdWN0IEludGVyZXN0cyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEludGVyZXN0cyBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX0lOVEVSRVNUUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgcGFnZVNpemU/OiBudW1iZXI7XG4gICAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAgIHNvcnQ/OiBzdHJpbmc7XG4gICAgICBwcm9kdWN0Q29kZT86IHN0cmluZztcbiAgICAgIG5vdGlmaWNhdGlvblR5cGU/OiBOb3RpZmljYXRpb25UeXBlO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPRFVDVF9JTlRFUkVTVFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdEludGVyZXN0c0ZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUFJPRFVDVF9JTlRFUkVTVFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0RVQ1RfSU5URVJFU1RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RJbnRlcmVzdHNTdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfSU5URVJFU1RTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQpIHtcbiAgICBzdXBlcihQUk9EVUNUX0lOVEVSRVNUUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVByb2R1Y3RJbnRlcmVzdCBleHRlbmRzIEVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1Q7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGl0ZW06IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb247XG4gICAgICBzaW5nbGVEZWxldGU/OiBib29sZWFuO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlUHJvZHVjdEludGVyZXN0RmFpbCBleHRlbmRzIEVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRQcm9kdWN0SW50ZXJlc3QgZXh0ZW5kcyBFbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9QUk9EVUNUX0lOVEVSRVNUO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgbm90aWZpY2F0aW9uVHlwZTogTm90aWZpY2F0aW9uVHlwZTtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1BST0RVQ1RfSU5URVJFU1RfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3MgZXh0ZW5kcyBFbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFERF9QUk9EVUNUX0lOVEVSRVNUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRQcm9kdWN0SW50ZXJlc3RGYWlsIGV4dGVuZHMgRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfUFJPRFVDVF9JTlRFUkVTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lELCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzZXRBZGRJbnRlcmVzdFN0YXRlIGV4dGVuZHMgRW50aXR5UmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1BST0RVQ1RfSU5URVJFU1RfUkVTRVQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0NFU1NfRkVBVFVSRSwgQUREX1BST0RVQ1RfSU5URVJFU1RfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0UmVtb3ZlSW50ZXJlc3RTdGF0ZSBleHRlbmRzIEVudGl0eVJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUX1JFU0VUO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJQcm9kdWN0SW50ZXJlc3RzIGV4dGVuZHMgTG9hZGVyUmVzZXRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0xFQVJfUFJPRFVDVF9JTlRFUkVTVFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBST0RVQ1RfSU5URVJFU1RTKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBQcm9kdWN0SW50ZXJlc3RzQWN0aW9uID1cbiAgfCBMb2FkUHJvZHVjdEludGVyZXN0c1xuICB8IExvYWRQcm9kdWN0SW50ZXJlc3RzRmFpbFxuICB8IExvYWRQcm9kdWN0SW50ZXJlc3RzU3VjY2Vzc1xuICB8IFJlbW92ZVByb2R1Y3RJbnRlcmVzdFxuICB8IFJlbW92ZVByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3NcbiAgfCBSZW1vdmVQcm9kdWN0SW50ZXJlc3RGYWlsXG4gIHwgQWRkUHJvZHVjdEludGVyZXN0XG4gIHwgQWRkUHJvZHVjdEludGVyZXN0RmFpbFxuICB8IEFkZFByb2R1Y3RJbnRlcmVzdFN1Y2Nlc3NcbiAgfCBSZXNldEFkZEludGVyZXN0U3RhdGVcbiAgfCBSZXNldFJlbW92ZUludGVyZXN0U3RhdGVcbiAgfCBDbGVhclByb2R1Y3RJbnRlcmVzdHM7XG4iXX0=