import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PAYMENT_DETAILS_NORMALIZER } from '../../../checkout/connectors/payment/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccUserPaymentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    loadAll(userId) {
        const url = this.occEndpoints.getUrl('paymentDetailsAll', { userId }) + '?saved=true';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)), map((methodList) => methodList.payments), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    }
    delete(userId, paymentMethodID) {
        const url = this.occEndpoints.getUrl('paymentDetail', {
            userId,
            paymentDetailId: paymentMethodID,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    setDefault(userId, paymentMethodID) {
        const url = this.occEndpoints.getUrl('paymentDetail', {
            userId,
            paymentDetailId: paymentMethodID,
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
}
OccUserPaymentAdapter.decorators = [
    { type: Injectable }
];
OccUserPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL3VzZXIvb2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFHN0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0UsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7SUFFSixPQUFPLENBQUMsTUFBYztRQUNwQixNQUFNLEdBQUcsR0FDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBQzVFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBeUIsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDN0MsSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzdDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsZUFBdUI7UUFDNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ3BELE1BQU07WUFDTixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxlQUF1QjtRQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDcEQsTUFBTTtZQUNOLGVBQWUsRUFBRSxlQUFlO1NBQ2pDLENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FDSixHQUFHO1FBQ0gsdUNBQXVDO1FBQ3ZDLEVBQUUsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFDN0QsRUFBRSxPQUFPLEVBQUUsQ0FDWjthQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBeERGLFVBQVU7OztZQVhGLFVBQVU7WUFTVixtQkFBbUI7WUFGbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyUGF5bWVudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYXltZW50RGV0YWlsc0FsbCcsIHsgdXNlcklkIH0pICsgJz9zYXZlZD10cnVlJztcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5QYXltZW50RGV0YWlsc0xpc3Q+KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgICBtYXAoKG1ldGhvZExpc3QpID0+IG1ldGhvZExpc3QucGF5bWVudHMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BheW1lbnREZXRhaWwnLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBwYXltZW50RGV0YWlsSWQ6IHBheW1lbnRNZXRob2RJRCxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgc2V0RGVmYXVsdCh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYXltZW50RGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgcGF5bWVudERldGFpbElkOiBwYXltZW50TWV0aG9kSUQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goXG4gICAgICAgIHVybCxcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIGJpbGxpbmdBZGRyZXNzIHByb3BlcnR5XG4gICAgICAgIHsgYmlsbGluZ0FkZHJlc3M6IHsgdGl0bGVDb2RlOiAnbXInIH0sIGRlZmF1bHRQYXltZW50OiB0cnVlIH0sXG4gICAgICAgIHsgaGVhZGVycyB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=