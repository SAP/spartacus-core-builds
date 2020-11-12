import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { CMS_COMPONENT_NORMALIZER } from '../../../cms/connectors/component/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../services/occ-endpoints.service";
import * as i3 from "../../../util/converter.service";
export class OccCmsComponentAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    load(id, pageContext) {
        return this.http
            .get(this.getComponentEndPoint(id, pageContext), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_COMPONENT_NORMALIZER));
    }
    findComponentsByIds(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        const requestParams = Object.assign(Object.assign({}, this.getContextParams(pageContext)), this.getPaginationParams(currentPage, pageSize, sort));
        requestParams['componentIds'] = ids.toString();
        return this.http
            .get(this.getComponentsEndpoint(requestParams, fields), {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    findComponentsByIdsLegacy(ids, pageContext, fields = 'DEFAULT', currentPage = 0, pageSize = ids.length, sort) {
        const idList = { idList: ids };
        const requestParams = Object.assign(Object.assign({}, this.getContextParams(pageContext)), this.getPaginationParams(currentPage, pageSize, sort));
        return this.http
            .post(this.getComponentsEndpoint(requestParams, fields), idList, {
            headers: this.headers,
        })
            .pipe(pluck('component'), this.converter.pipeableMany(CMS_COMPONENT_NORMALIZER));
    }
    getComponentEndPoint(id, pageContext) {
        return this.occEndpoints.getUrl('component', { id }, this.getContextParams(pageContext));
    }
    getComponentsEndpoint(requestParams, fields) {
        return this.occEndpoints.getUrl('components', {}, Object.assign({ fields }, requestParams));
    }
    getPaginationParams(currentPage, pageSize, sort) {
        const requestParams = {};
        if (currentPage !== undefined) {
            requestParams['currentPage'] = currentPage.toString();
        }
        if (pageSize !== undefined) {
            requestParams['pageSize'] = pageSize.toString();
        }
        if (sort !== undefined) {
            requestParams['sort'] = sort;
        }
        return requestParams;
    }
    getContextParams(pageContext) {
        let requestParams = {};
        switch (pageContext.type) {
            case PageType.PRODUCT_PAGE: {
                requestParams = { productCode: pageContext.id };
                break;
            }
            case PageType.CATEGORY_PAGE: {
                requestParams = { categoryCode: pageContext.id };
                break;
            }
            case PageType.CATALOG_PAGE: {
                requestParams = { catalogCode: pageContext.id };
                break;
            }
        }
        return requestParams;
    }
}
OccCmsComponentAdapter.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCmsComponentAdapter_Factory() { return new OccCmsComponentAdapter(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccEndpointsService), i0.ɵɵinject(i3.ConverterService)); }, token: OccCmsComponentAdapter, providedIn: "root" });
OccCmsComponentAdapter.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccCmsComponentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jbXMvb2NjLWNtcy1jb21wb25lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBZ0IsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBSzNFLE1BQU0sT0FBTyxzQkFBc0I7SUFHakMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQztJQUVKLElBQUksQ0FDRixFQUFVLEVBQ1YsV0FBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO2FB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RVMsZ0JBQWdCLENBQ3hCLFdBQXdCO1FBRXhCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixRQUFRLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLGFBQWEsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELE1BQU07YUFDUDtZQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixhQUFhLEdBQUcsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqRCxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsYUFBYSxHQUFHLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEQsTUFBTTthQUNQO1NBQ0Y7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7O1lBdklGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBZFEsVUFBVTtZQVVWLG1CQUFtQjtZQUZuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50LCBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjQ21zQ29tcG9uZW50QWRhcHRlciBpbXBsZW1lbnRzIENtc0NvbXBvbmVudEFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxUPih0aGlzLmdldENvbXBvbmVudEVuZFBvaW50KGlkLCBwYWdlQ29udGV4dCksIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlPGFueSwgVD4oQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBmaW5kQ29tcG9uZW50c0J5SWRzKFxuICAgIGlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcyA9ICdERUZBVUxUJyxcbiAgICBjdXJyZW50UGFnZSA9IDAsXG4gICAgcGFnZVNpemUgPSBpZHMubGVuZ3RoLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICAuLi50aGlzLmdldENvbnRleHRQYXJhbXMocGFnZUNvbnRleHQpLFxuICAgICAgLi4udGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgc29ydCksXG4gICAgfTtcblxuICAgIHJlcXVlc3RQYXJhbXNbJ2NvbXBvbmVudElkcyddID0gaWRzLnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Db21wb25lbnRMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzRW5kcG9pbnQocmVxdWVzdFBhcmFtcywgZmllbGRzKSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHBsdWNrKCdjb21wb25lbnQnKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENNU19DT01QT05FTlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBmaW5kQ29tcG9uZW50c0J5SWRzTGVnYWN5KFxuICAgIGlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcyA9ICdERUZBVUxUJyxcbiAgICBjdXJyZW50UGFnZSA9IDAsXG4gICAgcGFnZVNpemUgPSBpZHMubGVuZ3RoLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIGNvbnN0IGlkTGlzdDogT2NjLkNvbXBvbmVudElETGlzdCA9IHsgaWRMaXN0OiBpZHMgfTtcblxuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICAuLi50aGlzLmdldENvbnRleHRQYXJhbXMocGFnZUNvbnRleHQpLFxuICAgICAgLi4udGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgc29ydCksXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5Db21wb25lbnRMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnRzRW5kcG9pbnQocmVxdWVzdFBhcmFtcywgZmllbGRzKSxcbiAgICAgICAgaWRMaXN0LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NvbXBvbmVudCcpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ01TX0NPTVBPTkVOVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnRFbmRQb2ludChpZDogc3RyaW5nLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAnY29tcG9uZW50JyxcbiAgICAgIHsgaWQgfSxcbiAgICAgIHRoaXMuZ2V0Q29udGV4dFBhcmFtcyhwYWdlQ29udGV4dClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNFbmRwb2ludChyZXF1ZXN0UGFyYW1zOiBhbnksIGZpZWxkczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKFxuICAgICAgJ2NvbXBvbmVudHMnLFxuICAgICAge30sXG4gICAgICB7IGZpZWxkcywgLi4ucmVxdWVzdFBhcmFtcyB9XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYWdpbmF0aW9uUGFyYW1zKFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHt9O1xuICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zWydjdXJyZW50UGFnZSddID0gY3VycmVudFBhZ2UudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHBhZ2VTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3RQYXJhbXNbJ3BhZ2VTaXplJ10gPSBwYWdlU2l6ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0UGFyYW1zWydzb3J0J10gPSBzb3J0O1xuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0UGFyYW1zO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbnRleHRQYXJhbXMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXF1ZXN0UGFyYW1zID0ge307XG4gICAgc3dpdGNoIChwYWdlQ29udGV4dC50eXBlKSB7XG4gICAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgICByZXF1ZXN0UGFyYW1zID0geyBwcm9kdWN0Q29kZTogcGFnZUNvbnRleHQuaWQgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHsgY2F0ZWdvcnlDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICAgIHJlcXVlc3RQYXJhbXMgPSB7IGNhdGFsb2dDb2RlOiBwYWdlQ29udGV4dC5pZCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWVzdFBhcmFtcztcbiAgfVxufVxuIl19