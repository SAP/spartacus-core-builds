/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { ConverterService } from '../../../util/converter.service';
import { TITLE_NORMALIZER, USER_REGISTER_FORM_SERIALIZER, } from '../../../user/connectors/account/converters';
import { USER_NORMALIZER } from '../../../user/connectors/details/converters';
/** @type {?} */
var USER_ENDPOINT = 'users/';
/** @type {?} */
var FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
var RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
var UPDATE_EMAIL_ENDPOINT = '/login';
/** @type {?} */
var UPDATE_PASSWORD_ENDPOINT = '/password';
/** @type {?} */
var CONSENTS_TEMPLATES_ENDPOINT = '/consenttemplates';
/** @type {?} */
var CONSENTS_ENDPOINT = '/consents';
/** @type {?} */
var TITLES_ENDPOINT = 'titles';
var OccUserAccountAdapter = /** @class */ (function () {
    function OccUserAccountAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.getUserEndpoint = /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = userId ? "" + USER_ENDPOINT + userId : USER_ENDPOINT;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    OccUserAccountAdapter.prototype.register = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var url = this.getUserEndpoint();
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        user = this.converter.convert(user, USER_REGISTER_FORM_SERIALIZER);
        return this.http.post(url, user, { headers: headers }).pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(USER_NORMALIZER));
    };
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    OccUserAccountAdapter.prototype.requestForgotPasswordEmail = /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    function (userEmailAddress) {
        /** @type {?} */
        var url = this.occEndpoints.getEndpoint(FORGOT_PASSWORD_ENDPOINT);
        /** @type {?} */
        var httpParams = new HttpParams().set('userId', userEmailAddress);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    OccUserAccountAdapter.prototype.resetPassword = /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    function (token, newPassword) {
        /** @type {?} */
        var url = this.occEndpoints.getEndpoint(RESET_PASSWORD_ENDPOINT);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, { token: token, newPassword: newPassword }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.updateEmail = /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    function (userId, currentPassword, newUserId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + UPDATE_EMAIL_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    OccUserAccountAdapter.prototype.updatePassword = /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    function (userId, oldPassword, newPassword) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + UPDATE_PASSWORD_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.remove = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        return this.http
            .delete(url)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @return {?}
     */
    OccUserAccountAdapter.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(TITLES_ENDPOINT))
            .pipe(catchError(function (error) { return throwError(error.json()); }), map(function (titleList) { return titleList.titles; }), this.converter.pipeableMany(TITLE_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAccountAdapter.prototype.loadConsents = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_TEMPLATES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    OccUserAccountAdapter.prototype.giveConsent = /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    OccUserAccountAdapter.prototype.withdrawConsent = /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    function (userId, consentCode) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT + '/' + consentCode;
        return this.http.delete(url, { headers: headers });
    };
    OccUserAccountAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserAccountAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserAccountAdapter;
}());
export { OccUserAccountAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserAccountAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserAccountAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserAccountAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItYWNjb3VudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLWFjY291bnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLDZCQUE2QixHQUM5QixNQUFNLDZDQUE2QyxDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7SUFJeEUsYUFBYSxHQUFHLFFBQVE7O0lBQ3hCLHdCQUF3QixHQUFHLDBCQUEwQjs7SUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztJQUMxQyxxQkFBcUIsR0FBRyxRQUFROztJQUNoQyx3QkFBd0IsR0FBRyxXQUFXOztJQUN0QywyQkFBMkIsR0FBRyxtQkFBbUI7O0lBQ2pELGlCQUFpQixHQUFHLFdBQVc7O0lBQy9CLGVBQWUsR0FBRyxRQUFRO0FBRWhDO0lBRUUsK0JBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFB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Ozs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7XG4gIENvbnNlbnRUZW1wbGF0ZSxcbiAgQ29uc2VudFRlbXBsYXRlTGlzdCxcbn0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9hZGRpdGlvbmFsLW9jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgVElUTEVfTk9STUFMSVpFUixcbiAgVVNFUl9SRUdJU1RFUl9GT1JNX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hY2NvdW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFjY291bnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FjY291bnQvdXNlci1hY2NvdW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgVVNFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2RldGFpbHMvY29udmVydGVycyc7XG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvbW9kZWwvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzJztcblxuY29uc3QgVVNFUl9FTkRQT0lOVCA9ICd1c2Vycy8nO1xuY29uc3QgRk9SR09UX1BBU1NXT1JEX0VORFBPSU5UID0gJy9mb3Jnb3R0ZW5wYXNzd29yZHRva2Vucyc7XG5jb25zdCBSRVNFVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvcmVzZXRwYXNzd29yZCc7XG5jb25zdCBVUERBVEVfRU1BSUxfRU5EUE9JTlQgPSAnL2xvZ2luJztcbmNvbnN0IFVQREFURV9QQVNTV09SRF9FTkRQT0lOVCA9ICcvcGFzc3dvcmQnO1xuY29uc3QgQ09OU0VOVFNfVEVNUExBVEVTX0VORFBPSU5UID0gJy9jb25zZW50dGVtcGxhdGVzJztcbmNvbnN0IENPTlNFTlRTX0VORFBPSU5UID0gJy9jb25zZW50cyc7XG5jb25zdCBUSVRMRVNfRU5EUE9JTlQgPSAndGl0bGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJBY2NvdW50QWRhcHRlciBpbXBsZW1lbnRzIFVzZXJBY2NvdW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRVc2VyRW5kcG9pbnQodXNlcklkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IHVzZXJJZCA/IGAke1VTRVJfRU5EUE9JTlR9JHt1c2VySWR9YCA6IFVTRVJfRU5EUE9JTlQ7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuICByZWdpc3Rlcih1c2VyOiBVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHVzZXIgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHVzZXIsIFVTRVJfUkVHSVNURVJfRk9STV9TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih1cmwsIHVzZXIsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoVVNFUl9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRk9SR09UX1BBU1NXT1JEX0VORFBPSU5UKTtcbiAgICBjb25zdCBodHRwUGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoXG4gICAgICAndXNlcklkJyxcbiAgICAgIHVzZXJFbWFpbEFkZHJlc3NcbiAgICApO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChSRVNFVF9QQVNTV09SRF9FTkRQT0lOVCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgeyB0b2tlbiwgbmV3UGFzc3dvcmQgfSwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkgKyBVUERBVEVfRU1BSUxfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgY3VycmVudFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3TG9naW4nLCBuZXdVc2VySWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkgKyBVUERBVEVfUEFTU1dPUkRfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ29sZCcsIG9sZFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3JywgbmV3UGFzc3dvcmQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICByZW1vdmUodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlPFVzZXI+KHVybClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBsb2FkVGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlRpdGxlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoVElUTEVTX0VORFBPSU5UKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAodGl0bGVMaXN0ID0+IHRpdGxlTGlzdC50aXRsZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoVElUTEVfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkQ29uc2VudHModXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZUxpc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgQ09OU0VOVFNfVEVNUExBVEVTX0VORFBPSU5UO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDb25zZW50VGVtcGxhdGVMaXN0Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGdpdmVDb25zZW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIENPTlNFTlRTX0VORFBPSU5UO1xuICAgIGNvbnN0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdjb25zZW50VGVtcGxhdGVJZCcsIGNvbnNlbnRUZW1wbGF0ZUlkKVxuICAgICAgLnNldCgnY29uc2VudFRlbXBsYXRlVmVyc2lvbicsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24udG9TdHJpbmcoKSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q29uc2VudFRlbXBsYXRlPih1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgd2l0aGRyYXdDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgQ09OU0VOVFNfRU5EUE9JTlQgKyAnLycgKyBjb25zZW50Q29kZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxufVxuIl19