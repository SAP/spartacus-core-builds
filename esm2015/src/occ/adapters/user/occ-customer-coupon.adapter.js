import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER } from '../../../user/connectors/customer-coupon/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { OCC_USER_ID_ANONYMOUS } from '../../utils/occ-constants';
export class OccCustomerCouponAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    getCustomerCoupons(userId, pageSize, currentPage, sort) {
        // Currently OCC only supports calls for customer coupons in case of logged users
        if (userId === OCC_USER_ID_ANONYMOUS) {
            return of({});
        }
        const url = this.occEndpoints.getUrl('customerCoupons', { userId });
        let params = new HttpParams().set('sort', sort ? sort : 'startDate:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        const headers = this.newHttpHeader();
        return this.http
            .get(url, { headers, params })
            .pipe(this.converter.pipeable(CUSTOMER_COUPON_SEARCH_RESULT_NORMALIZER));
    }
    turnOffNotification(userId, couponCode) {
        const url = this.occEndpoints.getUrl('couponNotification', {
            userId,
            couponCode,
        });
        const headers = this.newHttpHeader();
        return this.http.delete(url, { headers });
    }
    turnOnNotification(userId, couponCode) {
        const url = this.occEndpoints.getUrl('couponNotification', {
            userId,
            couponCode,
        });
        const headers = this.newHttpHeader();
        return this.http.post(url, { headers });
    }
    claimCustomerCoupon(userId, couponCode) {
        const url = this.occEndpoints.getUrl('claimCoupon', {
            userId,
            couponCode,
        });
        const headers = this.newHttpHeader();
        return this.http.post(url, { headers });
    }
    newHttpHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }
}
OccCustomerCouponAdapter.decorators = [
    { type: Injectable }
];
OccCustomerCouponAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL3VzZXIvb2NjLWN1c3RvbWVyLWNvdXBvbi5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU10QyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUUvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKLGtCQUFrQixDQUNoQixNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsSUFBWTtRQUVaLGlGQUFpRjtRQUNqRixJQUFJLE1BQU0sS0FBSyxxQkFBcUIsRUFBRTtZQUNwQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFekUsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFpQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsTUFBYyxFQUFFLFVBQWtCO1FBQ3BELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pELE1BQU07WUFDTixVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsa0JBQWtCLENBQ2hCLE1BQWMsRUFDZCxVQUFrQjtRQUVsQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUN6RCxNQUFNO1lBQ04sVUFBVTtTQUNYLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELG1CQUFtQixDQUNqQixNQUFjLEVBQ2QsVUFBa0I7UUFFbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ2xELE1BQU07WUFDTixVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksV0FBVyxDQUFDO1lBQ3JCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0VGLFVBQVU7OztZQWZGLFVBQVU7WUFZVixtQkFBbUI7WUFGbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJDb3Vwb24yQ3VzdG9tZXIsXG4gIEN1c3RvbWVyQ291cG9uTm90aWZpY2F0aW9uLFxuICBDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY3VzdG9tZXItY291cG9uLm1vZGVsJztcbmltcG9ydCB7IENVU1RPTUVSX0NPVVBPTl9TRUFSQ0hfUkVTVUxUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY3VzdG9tZXItY291cG9uL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb25BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2N1c3RvbWVyLWNvdXBvbi9jdXN0b21lci1jb3Vwb24uYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0N1c3RvbWVyQ291cG9uQWRhcHRlciBpbXBsZW1lbnRzIEN1c3RvbWVyQ291cG9uQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgZ2V0Q3VzdG9tZXJDb3Vwb25zKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgICBzb3J0OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvblNlYXJjaFJlc3VsdD4ge1xuICAgIC8vIEN1cnJlbnRseSBPQ0Mgb25seSBzdXBwb3J0cyBjYWxscyBmb3IgY3VzdG9tZXIgY291cG9ucyBpbiBjYXNlIG9mIGxvZ2dlZCB1c2Vyc1xuICAgIGlmICh1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgcmV0dXJuIG9mKHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2N1c3RvbWVyQ291cG9ucycsIHsgdXNlcklkIH0pO1xuXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdzb3J0Jywgc29ydCA/IHNvcnQgOiAnc3RhcnREYXRlOmFzYycpO1xuXG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQ+KHVybCwgeyBoZWFkZXJzLCBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENVU1RPTUVSX0NPVVBPTl9TRUFSQ0hfUkVTVUxUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHR1cm5PZmZOb3RpZmljYXRpb24odXNlcklkOiBzdHJpbmcsIGNvdXBvbkNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvdXBvbk5vdGlmaWNhdGlvbicsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvdXBvbkNvZGUsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cblxuICB0dXJuT25Ob3RpZmljYXRpb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY291cG9uQ29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q3VzdG9tZXJDb3Vwb25Ob3RpZmljYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvdXBvbk5vdGlmaWNhdGlvbicsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvdXBvbkNvZGUsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMubmV3SHR0cEhlYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgY2xhaW1DdXN0b21lckNvdXBvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb3Vwb25Db2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDdXN0b21lckNvdXBvbjJDdXN0b21lcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY2xhaW1Db3Vwb24nLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBjb3Vwb25Db2RlLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLm5ld0h0dHBIZWFkZXIoKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbmV3SHR0cEhlYWRlcigpIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==