export const LOAD_PRODUCT_REFERENCES = '[Product] Load Product References Data';
export const LOAD_PRODUCT_REFERENCES_FAIL = '[Product] Load Product References Data Fail';
export const LOAD_PRODUCT_REFERENCES_SUCCESS = '[Product] Load Product References Data Success';
export const CLEAN_PRODUCT_REFERENCES = '[Product] Clean Product References';
export class LoadProductReferences {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES;
    }
}
export class LoadProductReferencesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_FAIL;
    }
}
export class LoadProductReferencesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCT_REFERENCES_SUCCESS;
    }
}
export class CleanProductReferences {
    constructor() {
        this.type = CLEAN_PRODUCT_REFERENCES;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3Qvc3RvcmUvYWN0aW9ucy9wcm9kdWN0LXJlZmVyZW5jZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLHdDQUF3QyxDQUFDO0FBQ2hGLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUN2Qyw2Q0FBNkMsQ0FBQztBQUNoRCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FDMUMsZ0RBQWdELENBQUM7QUFDbkQsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsb0NBQW9DLENBQUM7QUFFN0UsTUFBTSxPQUFPLHFCQUFxQjtJQUVoQyxZQUNTLE9BSU47UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUliO1FBTk0sU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBT3JDLENBQUM7Q0FDTDtBQUVELE1BQU0sT0FBTyx5QkFBeUI7SUFFcEMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsNEJBQTRCLENBQUM7SUFDSixDQUFDO0NBQzNDO0FBRUQsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxZQUNTLE9BR047UUFITSxZQUFPLEdBQVAsT0FBTyxDQUdiO1FBTE0sU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBTTdDLENBQUM7Q0FDTDtBQUVELE1BQU0sT0FBTyxzQkFBc0I7SUFBbkM7UUFDVyxTQUFJLEdBQUcsd0JBQXdCLENBQUM7SUFDM0MsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVMgPSAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZWZlcmVuY2VzIERhdGEnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVF9SRUZFUkVOQ0VTX0ZBSUwgPVxuICAnW1Byb2R1Y3RdIExvYWQgUHJvZHVjdCBSZWZlcmVuY2VzIERhdGEgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUyA9XG4gICdbUHJvZHVjdF0gTG9hZCBQcm9kdWN0IFJlZmVyZW5jZXMgRGF0YSBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBTl9QUk9EVUNUX1JFRkVSRU5DRVMgPSAnW1Byb2R1Y3RdIENsZWFuIFByb2R1Y3QgUmVmZXJlbmNlcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkUHJvZHVjdFJlZmVyZW5jZXMgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZztcbiAgICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1BST0RVQ1RfUkVGRVJFTkNFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRXJyb3JNb2RlbCkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9QUk9EVUNUX1JFRkVSRU5DRVNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgICBsaXN0OiBQcm9kdWN0UmVmZXJlbmNlW107XG4gICAgfVxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhblByb2R1Y3RSZWZlcmVuY2VzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFOX1BST0RVQ1RfUkVGRVJFTkNFUztcbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBQcm9kdWN0UmVmZXJlbmNlc0FjdGlvbiA9XG4gIHwgTG9hZFByb2R1Y3RSZWZlcmVuY2VzXG4gIHwgTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbFxuICB8IExvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3NcbiAgfCBDbGVhblByb2R1Y3RSZWZlcmVuY2VzO1xuIl19