import { __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_NORMALIZER } from '../../../checkout/connectors/checkout/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { OCC_USER_ID_ANONYMOUS } from '../../utils/occ-constants';
// To be changed to a more optimised params after ticket: C3PO-1076
var FULL_PARAMS = 'fields=FULL';
var CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
var CARTS_ENDPOINT = '/carts/';
var OccCheckoutAdapter = /** @class */ (function () {
    function OccCheckoutAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    OccCheckoutAdapter.prototype.getEndpoint = function (userId, subEndpoint) {
        var orderEndpoint = 'users/' + userId + subEndpoint;
        return this.occEndpoints.getEndpoint(orderEndpoint);
    };
    OccCheckoutAdapter.prototype.placeOrder = function (userId, cartId) {
        var params = new HttpParams({
            fromString: 'cartId=' + cartId + '&' + FULL_PARAMS,
        });
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http
            .post(this.occEndpoints.getUrl('placeOrder', { userId: userId }), {}, { headers: headers, params: params })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    };
    OccCheckoutAdapter.prototype.loadCheckoutDetails = function (userId, cartId) {
        var url = this.getEndpoint(userId, CARTS_ENDPOINT) + cartId;
        var params = new HttpParams({
            fromString: "fields=" + CHECKOUT_PARAMS,
        });
        return this.http.get(url, { params: params });
    };
    OccCheckoutAdapter.prototype.clearCheckoutDeliveryAddress = function (userId, cartId) {
        var url = "" + this.getEndpoint(userId, CARTS_ENDPOINT) + cartId + "/addresses/delivery";
        return this.http.delete(url);
    };
    OccCheckoutAdapter.prototype.clearCheckoutDeliveryMode = function (userId, cartId) {
        var url = "" + this.getEndpoint(userId, CARTS_ENDPOINT) + cartId + "/deliverymode";
        return this.http.delete(url);
    };
    OccCheckoutAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccCheckoutAdapter = __decorate([
        Injectable()
    ], OccCheckoutAdapter);
    return OccCheckoutAdapter;
}());
export { OccCheckoutAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEdBQ2pCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsbUVBQW1FO0FBQ25FLElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUNsQyxJQUFNLGVBQWUsR0FBRyxzREFBc0QsQ0FBQztBQUMvRSxJQUFNLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFHakM7SUFDRSw0QkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRU0sd0NBQVcsR0FBckIsVUFBc0IsTUFBYyxFQUFFLFdBQW1CO1FBQ3ZELElBQU0sYUFBYSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLHVDQUFVLEdBQWpCLFVBQWtCLE1BQWMsRUFBRSxNQUFjO1FBQzlDLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxXQUFXO1NBQ25ELENBQUMsQ0FBQztRQUVILElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzVCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7WUFDcEMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLEVBQ2xELEVBQUUsRUFDRixFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQ3BCO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQ0UsTUFBYyxFQUNkLE1BQWM7UUFFZCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDOUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLFlBQVUsZUFBaUI7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx5REFBNEIsR0FBNUIsVUFDRSxNQUFjLEVBQ2QsTUFBYztRQUVkLElBQU0sR0FBRyxHQUFHLEtBQUcsSUFBSSxDQUFDLFdBQVcsQ0FDN0IsTUFBTSxFQUNOLGNBQWMsQ0FDZixHQUFHLE1BQU0sd0JBQXFCLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0RBQXlCLEdBQXpCLFVBQTBCLE1BQWMsRUFBRSxNQUFjO1FBQ3RELElBQU0sR0FBRyxHQUFHLEtBQUcsSUFBSSxDQUFDLFdBQVcsQ0FDN0IsTUFBTSxFQUNOLGNBQWMsQ0FDZixHQUFHLE1BQU0sa0JBQWUsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTNEaUIsVUFBVTtnQkFDRixtQkFBbUI7Z0JBQ3RCLGdCQUFnQjs7SUFKNUIsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQixDQThEOUI7SUFBRCx5QkFBQztDQUFBLEFBOURELElBOERDO1NBOURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5hZGFwdGVyJztcbmltcG9ydCB7IE9SREVSX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2NoZWNrb3V0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG4vLyBUbyBiZSBjaGFuZ2VkIHRvIGEgbW9yZSBvcHRpbWlzZWQgcGFyYW1zIGFmdGVyIHRpY2tldDogQzNQTy0xMDc2XG5jb25zdCBGVUxMX1BBUkFNUyA9ICdmaWVsZHM9RlVMTCc7XG5jb25zdCBDSEVDS09VVF9QQVJBTVMgPSAnZGVsaXZlcnlBZGRyZXNzKEZVTEwpLGRlbGl2ZXJ5TW9kZSxwYXltZW50SW5mbyhGVUxMKSc7XG5jb25zdCBDQVJUU19FTkRQT0lOVCA9ICcvY2FydHMvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NoZWNrb3V0QWRhcHRlciBpbXBsZW1lbnRzIENoZWNrb3V0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldEVuZHBvaW50KHVzZXJJZDogc3RyaW5nLCBzdWJFbmRwb2ludDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBvcmRlckVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyBzdWJFbmRwb2ludDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQob3JkZXJFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgcGxhY2VPcmRlcih1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogJ2NhcnRJZD0nICsgY2FydElkICsgJyYnICsgRlVMTF9QQVJBTVMsXG4gICAgfSk7XG5cbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgaWYgKHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuT3JkZXI+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BsYWNlT3JkZXInLCB7IHVzZXJJZCB9KSxcbiAgICAgICAge30sXG4gICAgICAgIHsgaGVhZGVycywgcGFyYW1zIH1cbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEVuZHBvaW50KHVzZXJJZCwgQ0FSVFNfRU5EUE9JTlQpICsgY2FydElkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtDSEVDS09VVF9QQVJBTVN9YCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDaGVja291dERldGFpbHM+KHVybCwgeyBwYXJhbXMgfSk7XG4gIH1cblxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRFbmRwb2ludChcbiAgICAgIHVzZXJJZCxcbiAgICAgIENBUlRTX0VORFBPSU5UXG4gICAgKX0ke2NhcnRJZH0vYWRkcmVzc2VzL2RlbGl2ZXJ5YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KHVybCk7XG4gIH1cblxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRFbmRwb2ludChcbiAgICAgIHVzZXJJZCxcbiAgICAgIENBUlRTX0VORFBPSU5UXG4gICAgKX0ke2NhcnRJZH0vZGVsaXZlcnltb2RlYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KHVybCk7XG4gIH1cbn1cbiJdfQ==