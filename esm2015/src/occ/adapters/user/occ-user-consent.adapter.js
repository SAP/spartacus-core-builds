import { __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CONSENT_TEMPLATE_NORMALIZER } from '../../../user/connectors/consent/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
let OccUserConsentAdapter = class OccUserConsentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    loadConsents(userId) {
        const url = this.occEndpoints.getUrl('consentTemplates', { userId });
        const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)), map((consentList) => consentList.consentTemplates), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    }
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        const url = this.occEndpoints.getUrl('consents', { userId });
        const httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers })
            .pipe(catchError((error) => throwError(error)), this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER));
    }
    withdrawConsent(userId, consentCode) {
        const headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        const url = this.occEndpoints.getUrl('consentDetail', {
            userId,
            consentId: consentCode,
        });
        return this.http.delete(url, { headers });
    }
};
OccUserConsentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
OccUserConsentAdapter = __decorate([
    Injectable()
], OccUserConsentAdapter);
export { OccUserConsentAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItY29uc2VudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0UsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFDaEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUosWUFBWSxDQUFDLE1BQWM7UUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBMEIsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDOUMsSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzdDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLENBQ3pELENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVyxDQUNULE1BQWMsRUFDZCxpQkFBeUIsRUFDekIsc0JBQThCO1FBRTlCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUU7YUFDaEMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDO2FBQzNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBc0IsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FDSCxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUNyRCxDQUFDO0lBQ04sQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFjLEVBQUUsV0FBbUI7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ3BELE1BQU07WUFDTixTQUFTLEVBQUUsV0FBVztTQUN2QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGLENBQUE7O1lBakRtQixVQUFVO1lBQ0YsbUJBQW1CO1lBQ3RCLGdCQUFnQjs7QUFKNUIscUJBQXFCO0lBRGpDLFVBQVUsRUFBRTtHQUNBLHFCQUFxQixDQW1EakM7U0FuRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IENPTlNFTlRfVEVNUExBVEVfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2NvbnNlbnQvdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckNvbnNlbnRBZGFwdGVyIGltcGxlbWVudHMgVXNlckNvbnNlbnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQ29uc2VudHModXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjb25zZW50VGVtcGxhdGVzJywgeyB1c2VySWQgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Db25zZW50VGVtcGxhdGVMaXN0Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgbWFwKChjb25zZW50TGlzdCkgPT4gY29uc2VudExpc3QuY29uc2VudFRlbXBsYXRlcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDT05TRU5UX1RFTVBMQVRFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgZ2l2ZUNvbnNlbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2NvbnNlbnRzJywgeyB1c2VySWQgfSk7XG4gICAgY29uc3QgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ2NvbnNlbnRUZW1wbGF0ZUlkJywgY29uc2VudFRlbXBsYXRlSWQpXG4gICAgICAuc2V0KCdjb25zZW50VGVtcGxhdGVWZXJzaW9uJywgY29uc2VudFRlbXBsYXRlVmVyc2lvbi50b1N0cmluZygpKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQ29uc2VudFRlbXBsYXRlPih1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENPTlNFTlRfVEVNUExBVEVfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICB3aXRoZHJhd0NvbnNlbnQodXNlcklkOiBzdHJpbmcsIGNvbnNlbnRDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgfSk7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjb25zZW50RGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY29uc2VudElkOiBjb25zZW50Q29kZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=