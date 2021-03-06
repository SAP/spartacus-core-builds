import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import { ProductActions } from '../actions/index';
export class ProductReferencesEffects {
    constructor(actions$, productReferencesConnector) {
        this.actions$ = actions$;
        this.productReferencesConnector = productReferencesConnector;
        this.loadProductReferences$ = this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT_REFERENCES), map((action) => action.payload), mergeMap((payload) => {
            return this.productReferencesConnector
                .get(payload.productCode, payload.referenceType, payload.pageSize)
                .pipe(map((data) => {
                return new ProductActions.LoadProductReferencesSuccess({
                    productCode: payload.productCode,
                    list: data,
                });
            }), catchError((_error) => of(new ProductActions.LoadProductReferencesFail({
                message: payload.productCode,
            }))));
        }));
    }
}
ProductReferencesEffects.decorators = [
    { type: Injectable }
];
ProductReferencesEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductReferencesConnector }
];
__decorate([
    Effect()
], ProductReferencesEffects.prototype, "loadProductReferences$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3Qvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LXJlZmVyZW5jZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8sd0JBQXdCO0lBNkJuQyxZQUNVLFFBQWlCLEVBQ2pCLDBCQUFzRDtRQUR0RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUE3QmhFLDJCQUFzQixHQUdsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUM5QyxHQUFHLENBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3JFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLDBCQUEwQjtpQkFDbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2lCQUNqRSxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxJQUFJLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDckQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO29CQUNoQyxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNwQixFQUFFLENBQ0EsSUFBSSxjQUFjLENBQUMseUJBQXlCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxPQUFPLENBQUMsV0FBVzthQUNmLENBQUMsQ0FDakIsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBakNMLFVBQVU7OztZQVBGLE9BQU87WUFJUCwwQkFBMEI7O0FBTWpDO0lBREMsTUFBTSxFQUFFO3dFQTBCUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUHJvZHVjdFJlZmVyZW5jZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzU3VjY2Vzc1xuICAgIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1RfUkVGRVJFTkNFUyksXG4gICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvclxuICAgICAgICAuZ2V0KHBheWxvYWQucHJvZHVjdENvZGUsIHBheWxvYWQucmVmZXJlbmNlVHlwZSwgcGF5bG9hZC5wYWdlU2l6ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgbGlzdDogZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKF9lcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzRmFpbCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5wcm9kdWN0Q29kZSxcbiAgICAgICAgICAgICAgfSBhcyBFcnJvck1vZGVsKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvcjogUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19