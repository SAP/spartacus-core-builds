/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, ADDRESS_VALIDATION_NORMALIZER, } from '../../../user/connectors/address/converters';
/** @type {?} */
const USER_ENDPOINT = 'users/';
/** @type {?} */
const ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
const ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
export class OccUserAddressAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?} userId
     * @return {?}
     */
    getUserEndpoint(userId) {
        /** @type {?} */
        const endpoint = `${USER_ENDPOINT}${userId}`;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers }).pipe(catchError((error) => throwError(error)), map(addressList => addressList.addresses), this.converter.pipeableMany(ADDRESS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    add(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    update(userId, addressId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .patch(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    verify(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http.post(url, address, { headers }).pipe(catchError((error) => throwError(error)), this.converter.pipeable(ADDRESS_VALIDATION_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    delete(userId, addressId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
}
OccUserAddressAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserAddressAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserAddressAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserAddressAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserAddressAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItYWRkcmVzcy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLWFkZHJlc3MuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiw2QkFBNkIsR0FDOUIsTUFBTSw2Q0FBNkMsQ0FBQzs7TUFFL0MsYUFBYSxHQUFHLFFBQVE7O01BQ3hCLGtCQUFrQixHQUFHLFlBQVk7O01BQ2pDLCtCQUErQixHQUFHLHlCQUF5QjtBQUdqRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDaEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSSxlQUFlLENBQUMsTUFBYzs7Y0FDOUIsUUFBUSxHQUFHLEdBQUcsYUFBYSxHQUFHLE1BQU0sRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lB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LE1BQU0sQ0FBQyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxTQUFTOztjQUMvRCxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTFFRixVQUFVOzs7O1lBZkYsVUFBVTtZQUdWLG1CQUFtQjtZQUNuQixnQkFBZ0I7Ozs7Ozs7SUFjckIscUNBQTBCOzs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEFERFJFU1NfTk9STUFMSVpFUixcbiAgQUREUkVTU19TRVJJQUxJWkVSLFxuICBBRERSRVNTX1ZBTElEQVRJT05fTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvY29udmVydGVycyc7XG5cbmNvbnN0IFVTRVJfRU5EUE9JTlQgPSAndXNlcnMvJztcbmNvbnN0IEFERFJFU1NFU19FTkRQT0lOVCA9ICcvYWRkcmVzc2VzJztcbmNvbnN0IEFERFJFU1NFU19WRVJJRklDQVRJT05fRU5EUE9JTlQgPSAnL2FkZHJlc3Nlcy92ZXJpZmljYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckFkZHJlc3NBZGFwdGVyIGltcGxlbWVudHMgVXNlckFkZHJlc3NBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFVzZXJFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVU0VSX0VORFBPSU5UfSR7dXNlcklkfWA7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuXG4gIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkgKyBBRERSRVNTRVNfRU5EUE9JTlQ7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkFkZHJlc3NMaXN0Pih1cmwsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgbWFwKGFkZHJlc3NMaXN0ID0+IGFkZHJlc3NMaXN0LmFkZHJlc3NlcyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQUREUkVTU19OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBhZGQodXNlcklkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKSArIEFERFJFU1NFU19FTkRQT0lOVDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgYWRkcmVzcyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoYWRkcmVzcywgQUREUkVTU19TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgYWRkcmVzcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKSArIEFERFJFU1NFU19FTkRQT0lOVCArICcvJyArIGFkZHJlc3NJZDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgYWRkcmVzcyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoYWRkcmVzcywgQUREUkVTU19TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaCh1cmwsIGFkZHJlc3MsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHZlcmlmeSh1c2VySWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpICsgQUREUkVTU0VTX1ZFUklGSUNBVElPTl9FTkRQT0lOVDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgYWRkcmVzcyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoYWRkcmVzcywgQUREUkVTU19TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBZGRyZXNzVmFsaWRhdGlvbj4odXJsLCBhZGRyZXNzLCB7IGhlYWRlcnMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKEFERFJFU1NfVkFMSURBVElPTl9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBkZWxldGUodXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpICsgQUREUkVTU0VTX0VORFBPSU5UICsgJy8nICsgYWRkcmVzc0lkO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==