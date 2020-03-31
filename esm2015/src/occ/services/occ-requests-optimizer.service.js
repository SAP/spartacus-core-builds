import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { extractFields } from '../utils/occ-fields';
import { OccFieldsModel, OccFieldsService, ScopedDataWithUrl, } from './occ-fields.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./occ-fields.service";
let OccRequestsOptimizerService = class OccRequestsOptimizerService {
    constructor(http, occFields) {
        this.http = http;
        this.occFields = occFields;
    }
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @param scopedDataWithUrls
     * @param dataFactory
     */
    scopedDataLoad(scopedDataWithUrls, dataFactory) {
        const result = [];
        if (!dataFactory) {
            dataFactory = (url) => this.http.get(url);
        }
        const mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
        Object.entries(mergedUrls).forEach(([url, groupedModelsSet]) => {
            const groupedModels = Object.values(groupedModelsSet);
            if (groupedModels.length === 1) {
                // only one scope for url, we can pass the data straightaway
                result.push(Object.assign(Object.assign({}, groupedModels[0].scopedData), { data$: dataFactory(url) }));
            }
            else {
                // multiple scopes per url
                // we have to split the model per each scope
                const data$ = dataFactory(url).pipe(shareReplay(1));
                groupedModels.forEach((modelData) => {
                    result.push(Object.assign(Object.assign({}, modelData.scopedData), { data$: data$.pipe(map((data) => extractFields(data, modelData.fields))) }));
                });
            }
        });
        return result;
    }
};
OccRequestsOptimizerService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccFieldsService }
];
OccRequestsOptimizerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccRequestsOptimizerService_Factory() { return new OccRequestsOptimizerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccFieldsService)); }, token: OccRequestsOptimizerService, providedIn: "root" });
OccRequestsOptimizerService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OccRequestsOptimizerService);
export { OccRequestsOptimizerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtcmVxdWVzdHMtb3B0aW1pemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUNMLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBS2xELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBQ3RDLFlBQ1ksSUFBZ0IsRUFDaEIsU0FBMkI7UUFEM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUo7Ozs7O09BS0c7SUFDSCxjQUFjLENBQ1osa0JBQXVDLEVBQ3ZDLFdBQTRDO1FBRTVDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFMUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQ2hDLENBQUMsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBS3RCLEVBQUUsRUFBRTtZQUNILE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUV0RCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM5Qiw0REFBNEQ7Z0JBQzVELE1BQU0sQ0FBQyxJQUFJLGlDQUNOLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQzlCLEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLElBQ3ZCLENBQUM7YUFDSjtpQkFBTTtnQkFDTCwwQkFBMEI7Z0JBQzFCLDRDQUE0QztnQkFDNUMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFcEQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUNsQyxNQUFNLENBQUMsSUFBSSxpQ0FDTixTQUFTLENBQUMsVUFBVSxLQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FDZixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBSSxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3hELElBQ0QsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUNGLENBQUM7UUFFRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7WUF4RG1CLFVBQVU7WUFDTCxnQkFBZ0I7OztBQUg1QiwyQkFBMkI7SUFIdkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLDJCQUEyQixDQTBEdkM7U0ExRFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NvcGVkRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL3Njb3BlZC1kYXRhJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBleHRyYWN0RmllbGRzIH0gZnJvbSAnLi4vdXRpbHMvb2NjLWZpZWxkcyc7XG5pbXBvcnQge1xuICBPY2NGaWVsZHNNb2RlbCxcbiAgT2NjRmllbGRzU2VydmljZSxcbiAgU2NvcGVkRGF0YVdpdGhVcmwsXG59IGZyb20gJy4vb2NjLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRmllbGRzOiBPY2NGaWVsZHNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogT3B0aW1pemUgb2NjIGVuZHBvaW50IGNhbGxzIG1lcmdpbmcgcmVxdWVzdHMgdG8gdGhlIHNhbWUgdXJsIGJ5IG1lcmdpbmcgZmllbGQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVkRGF0YVdpdGhVcmxzXG4gICAqIEBwYXJhbSBkYXRhRmFjdG9yeVxuICAgKi9cbiAgc2NvcGVkRGF0YUxvYWQ8VD4oXG4gICAgc2NvcGVkRGF0YVdpdGhVcmxzOiBTY29wZWREYXRhV2l0aFVybFtdLFxuICAgIGRhdGFGYWN0b3J5PzogKHVybDogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPFQ+XG4gICk6IFNjb3BlZERhdGE8VD5bXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoIWRhdGFGYWN0b3J5KSB7XG4gICAgICBkYXRhRmFjdG9yeSA9ICh1cmwpID0+IHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZFVybHMgPSB0aGlzLm9jY0ZpZWxkcy5nZXRPcHRpbWFsVXJsR3JvdXBzKHNjb3BlZERhdGFXaXRoVXJscyk7XG5cbiAgICBPYmplY3QuZW50cmllcyhtZXJnZWRVcmxzKS5mb3JFYWNoKFxuICAgICAgKFt1cmwsIGdyb3VwZWRNb2RlbHNTZXRdOiBbXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAge1xuICAgICAgICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIF0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZE1vZGVscyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBlZE1vZGVsc1NldCk7XG5cbiAgICAgICAgaWYgKGdyb3VwZWRNb2RlbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gb25seSBvbmUgc2NvcGUgZm9yIHVybCwgd2UgY2FuIHBhc3MgdGhlIGRhdGEgc3RyYWlnaHRhd2F5XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgLi4uZ3JvdXBlZE1vZGVsc1swXS5zY29wZWREYXRhLFxuICAgICAgICAgICAgZGF0YSQ6IGRhdGFGYWN0b3J5KHVybCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbXVsdGlwbGUgc2NvcGVzIHBlciB1cmxcbiAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IHRoZSBtb2RlbCBwZXIgZWFjaCBzY29wZVxuICAgICAgICAgIGNvbnN0IGRhdGEkID0gZGF0YUZhY3RvcnkodXJsKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcblxuICAgICAgICAgIGdyb3VwZWRNb2RlbHMuZm9yRWFjaCgobW9kZWxEYXRhKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgIC4uLm1vZGVsRGF0YS5zY29wZWREYXRhLFxuICAgICAgICAgICAgICBkYXRhJDogZGF0YSQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGRhdGEpID0+IGV4dHJhY3RGaWVsZHM8VD4oZGF0YSwgbW9kZWxEYXRhLmZpZWxkcykpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=