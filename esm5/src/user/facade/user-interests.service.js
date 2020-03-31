import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { REMOVE_PRODUCT_INTERESTS_PROCESS_ID, ADD_PRODUCT_INTEREST_PROCESS_ID, } from '../store/user-state';
import { tap, map } from 'rxjs/operators';
import { getProcessLoadingFactory, getProcessSuccessFactory, getProcessErrorFactory, } from '../../process/store/selectors/process.selectors';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserInterestsService = /** @class */ (function () {
    function UserInterestsService(store) {
        this.store = store;
    }
    /**
     * Retrieves an product interest list
     * @param pageSize page size
     * @param currentPage current page
     * @param sort sort
     */
    UserInterestsService.prototype.loadProductInterests = function (pageSize, currentPage, sort, productCode, notificationType) {
        this.store.dispatch(new UserActions.LoadProductInterests({
            userId: OCC_USER_ID_CURRENT,
            pageSize: pageSize,
            currentPage: currentPage,
            sort: sort,
            productCode: productCode,
            notificationType: notificationType,
        }));
    };
    /**
     * Returns product interests
     */
    UserInterestsService.prototype.getProductInterests = function () {
        return this.store.pipe(select(UsersSelectors.getInterests));
    };
    /**
     * Returns product interests
     * @param pageSize the page size
     */
    UserInterestsService.prototype.getAndLoadProductInterests = function (pageSize) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getInterestsState), tap(function (interestListState) {
            var attemptedLoad = interestListState.loading ||
                interestListState.success ||
                interestListState.error;
            if (!attemptedLoad) {
                _this.loadProductInterests(pageSize);
            }
        }), map(function (interestListState) { return interestListState.value; }));
    };
    /**
     * Returns a loading flag for product interests
     */
    UserInterestsService.prototype.getProdutInterestsLoading = function () {
        return this.store.pipe(select(UsersSelectors.getInterestsLoading));
    };
    /**
     * Removes a ProductInterestRelation
     * @param item product interest relation item
     * @param singleDelete flag to delete only one interest
     */
    UserInterestsService.prototype.removeProdutInterest = function (item, singleDelete) {
        this.store.dispatch(new UserActions.RemoveProductInterest({
            userId: OCC_USER_ID_CURRENT,
            item: item,
            singleDelete: singleDelete,
        }));
    };
    /**
     * Returns a loading flag for removing product interests.
     */
    UserInterestsService.prototype.getRemoveProdutInterestLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    };
    /**
     * Returns a success flag for removing a product interests.
     */
    UserInterestsService.prototype.getRemoveProdutInterestSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(REMOVE_PRODUCT_INTERESTS_PROCESS_ID)));
    };
    /**
     * Add a new product interest.
     *
     * @param productCode the product code
     * @param notificationType the notification type
     */
    UserInterestsService.prototype.addProductInterest = function (productCode, notificationType) {
        this.store.dispatch(new UserActions.AddProductInterest({
            userId: OCC_USER_ID_CURRENT,
            productCode: productCode,
            notificationType: notificationType,
        }));
    };
    /**
     * Returns a success flag for adding a product interest.
     */
    UserInterestsService.prototype.getAddProductInterestSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    };
    /**
     * Returns a error flag for adding a product interest.
     */
    UserInterestsService.prototype.getAddProductInterestError = function () {
        return this.store.pipe(select(getProcessErrorFactory(ADD_PRODUCT_INTEREST_PROCESS_ID)));
    };
    /**
     * Reset product interest adding state.
     */
    UserInterestsService.prototype.resetAddInterestState = function () {
        this.store.dispatch(new UserActions.ResetAddInterestState());
    };
    /**
     * Reset product interest removing state.
     */
    UserInterestsService.prototype.resetRemoveInterestState = function () {
        this.store.dispatch(new UserActions.ResetRemoveInterestState());
    };
    /**
     * Clears product interests
     */
    UserInterestsService.prototype.clearProductInterests = function () {
        this.store.dispatch(new UserActions.ClearProductInterests());
    };
    UserInterestsService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    UserInterestsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserInterestsService_Factory() { return new UserInterestsService(i0.ɵɵinject(i1.Store)); }, token: UserInterestsService, providedIn: "root" });
    UserInterestsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserInterestsService);
    return UserInterestsService;
}());
export { UserInterestsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmVzdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2ZhY2FkZS91c2VyLWludGVyZXN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUVMLG1DQUFtQyxFQUNuQywrQkFBK0IsR0FDaEMsTUFBTSxxQkFBcUIsQ0FBQztBQU03QixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHNCQUFzQixHQUN2QixNQUFNLGlEQUFpRCxDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFLcEU7SUFDRSw4QkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOzs7OztPQUtHO0lBQ0gsbURBQW9CLEdBQXBCLFVBQ0UsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYSxFQUNiLFdBQW9CLEVBQ3BCLGdCQUFtQztRQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsb0JBQW9CLENBQUM7WUFDbkMsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxXQUFXO1lBQ3hC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QUNILHVEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBM0o0QixLQUFLOzs7SUFEdkIsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0E2SmhDOytCQXhMRDtDQXdMQyxBQTdKRCxJQTZKQztTQTdKWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoVXNlcixcbiAgUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1RTX1BST0NFU1NfSUQsXG4gIEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBOb3RpZmljYXRpb25UeXBlLFxufSBmcm9tICcuLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VySW50ZXJlc3RzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYW4gcHJvZHVjdCBpbnRlcmVzdCBsaXN0XG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBsb2FkUHJvZHVjdEludGVyZXN0cyhcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlPzogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU/OiBOb3RpZmljYXRpb25UeXBlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHMoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgICBwcm9kdWN0Q29kZTogcHJvZHVjdENvZGUsXG4gICAgICAgIG5vdGlmaWNhdGlvblR5cGU6IG5vdGlmaWNhdGlvblR5cGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwcm9kdWN0IGludGVyZXN0c1xuICAgKi9cbiAgZ2V0UHJvZHVjdEludGVyZXN0cygpOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEludGVyZXN0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICogQHBhcmFtIHBhZ2VTaXplIHRoZSBwYWdlIHNpemVcbiAgICovXG4gIGdldEFuZExvYWRQcm9kdWN0SW50ZXJlc3RzKFxuICAgIHBhZ2VTaXplPzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRJbnRlcmVzdHNTdGF0ZSksXG4gICAgICB0YXAoKGludGVyZXN0TGlzdFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIGludGVyZXN0TGlzdFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICBpbnRlcmVzdExpc3RTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgaW50ZXJlc3RMaXN0U3RhdGUuZXJyb3I7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCkge1xuICAgICAgICAgIHRoaXMubG9hZFByb2R1Y3RJbnRlcmVzdHMocGFnZVNpemUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoaW50ZXJlc3RMaXN0U3RhdGUpID0+IGludGVyZXN0TGlzdFN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgcHJvZHVjdCBpbnRlcmVzdHNcbiAgICovXG4gIGdldFByb2R1dEludGVyZXN0c0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0SW50ZXJlc3RzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBQcm9kdWN0SW50ZXJlc3RSZWxhdGlvblxuICAgKiBAcGFyYW0gaXRlbSBwcm9kdWN0IGludGVyZXN0IHJlbGF0aW9uIGl0ZW1cbiAgICogQHBhcmFtIHNpbmdsZURlbGV0ZSBmbGFnIHRvIGRlbGV0ZSBvbmx5IG9uZSBpbnRlcmVzdFxuICAgKi9cbiAgcmVtb3ZlUHJvZHV0SW50ZXJlc3QoXG4gICAgaXRlbTogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbixcbiAgICBzaW5nbGVEZWxldGU/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0KHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBzaW5nbGVEZWxldGU6IHNpbmdsZURlbGV0ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciByZW1vdmluZyBwcm9kdWN0IGludGVyZXN0cy5cbiAgICovXG4gIGdldFJlbW92ZVByb2R1dEludGVyZXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShSRU1PVkVfUFJPRFVDVF9JTlRFUkVTVFNfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3VjY2VzcyBmbGFnIGZvciByZW1vdmluZyBhIHByb2R1Y3QgaW50ZXJlc3RzLlxuICAgKi9cbiAgZ2V0UmVtb3ZlUHJvZHV0SW50ZXJlc3RTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KFJFTU9WRV9QUk9EVUNUX0lOVEVSRVNUU19QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwcm9kdWN0IGludGVyZXN0LlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdENvZGUgdGhlIHByb2R1Y3QgY29kZVxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uVHlwZSB0aGUgbm90aWZpY2F0aW9uIHR5cGVcbiAgICovXG4gIGFkZFByb2R1Y3RJbnRlcmVzdChcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGVcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRQcm9kdWN0SW50ZXJlc3Qoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIHByb2R1Y3RDb2RlOiBwcm9kdWN0Q29kZSxcbiAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogbm90aWZpY2F0aW9uVHlwZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3VjY2VzcyBmbGFnIGZvciBhZGRpbmcgYSBwcm9kdWN0IGludGVyZXN0LlxuICAgKi9cbiAgZ2V0QWRkUHJvZHVjdEludGVyZXN0U3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGdldFByb2Nlc3NTdWNjZXNzRmFjdG9yeShBRERfUFJPRFVDVF9JTlRFUkVTVF9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBlcnJvciBmbGFnIGZvciBhZGRpbmcgYSBwcm9kdWN0IGludGVyZXN0LlxuICAgKi9cbiAgZ2V0QWRkUHJvZHVjdEludGVyZXN0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KEFERF9QUk9EVUNUX0lOVEVSRVNUX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgcHJvZHVjdCBpbnRlcmVzdCBhZGRpbmcgc3RhdGUuXG4gICAqL1xuICByZXNldEFkZEludGVyZXN0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRBZGRJbnRlcmVzdFN0YXRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHByb2R1Y3QgaW50ZXJlc3QgcmVtb3Zpbmcgc3RhdGUuXG4gICAqL1xuICByZXNldFJlbW92ZUludGVyZXN0U3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXRSZW1vdmVJbnRlcmVzdFN0YXRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBwcm9kdWN0IGludGVyZXN0c1xuICAgKi9cbiAgY2xlYXJQcm9kdWN0SW50ZXJlc3RzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyUHJvZHVjdEludGVyZXN0cygpKTtcbiAgfVxufVxuIl19