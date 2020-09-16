import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NOTIFICATION_PREFERENCE_NORMALIZER, NOTIFICATION_PREFERENCE_SERIALIZER, } from '../../../user/connectors/notification-preference';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
export class OccUserNotificationPreferenceAdapter {
    constructor(http, converter, occEndpoints) {
        this.http = http;
        this.converter = converter;
        this.occEndpoints = occEndpoints;
    }
    loadAll(userId) {
        return this.http
            .get(this.occEndpoints.getUrl('notificationPreference', { userId }), {
            headers,
        })
            .pipe(map((list) => list.preferences), this.converter.pipeableMany(NOTIFICATION_PREFERENCE_NORMALIZER), catchError((error) => throwError(error)));
    }
    update(userId, preferences) {
        preferences = this.converter.convert(preferences, NOTIFICATION_PREFERENCE_SERIALIZER);
        return this.http
            .patch(this.occEndpoints.getUrl('notificationPreference', { userId }), { preferences: preferences }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
}
OccUserNotificationPreferenceAdapter.decorators = [
    { type: Injectable }
];
OccUserNotificationPreferenceAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: ConverterService },
    { type: OccEndpointsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRCxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGtDQUFrQyxHQUNuQyxNQUFNLGtEQUFrRCxDQUFDO0FBRTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO0lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7Q0FDbkMsQ0FBQyxDQUFDO0FBR0gsTUFBTSxPQUFPLG9DQUFvQztJQUUvQyxZQUNZLElBQWdCLEVBQ2hCLFNBQTJCLEVBQzNCLFlBQWlDO1FBRmpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQzFDLENBQUM7SUFFSixPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFDOUQ7WUFDRSxPQUFPO1NBQ1IsQ0FDRjthQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0NBQWtDLENBQUMsRUFDL0QsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDOUMsQ0FBQztJQUNOLENBQUM7SUFFRCxNQUFNLENBQ0osTUFBYyxFQUNkLFdBQXFDO1FBRXJDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FDbEMsV0FBVyxFQUNYLGtDQUFrQyxDQUNuQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FDSixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQzlELEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUM1QixFQUFFLE9BQU8sRUFBRSxDQUNaO2FBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUF2Q0YsVUFBVTs7O1lBcEJGLFVBQVU7WUFhVixnQkFBZ0I7WUFDaEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlLFxuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlTGlzdCxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VfTk9STUFMSVpFUixcbiAgTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VfU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlJztcbmltcG9ydCB7IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufSk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXJcbiAgaW1wbGVtZW50cyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZUxpc3Q+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ25vdGlmaWNhdGlvblByZWZlcmVuY2UnLCB7IHVzZXJJZCB9KSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGxpc3QpID0+IGxpc3QucHJlZmVyZW5jZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VfTk9STUFMSVpFUiksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBwcmVmZXJlbmNlcyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIE5PVElGSUNBVElPTl9QUkVGRVJFTkNFX1NFUklBTElaRVJcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaChcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdub3RpZmljYXRpb25QcmVmZXJlbmNlJywgeyB1c2VySWQgfSksXG4gICAgICAgIHsgcHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzIH0sXG4gICAgICAgIHsgaGVhZGVycyB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=