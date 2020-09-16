import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccCmsPageAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    load(pageContext, fields) {
        // load page by Id
        if (pageContext.type === undefined) {
            return this.http
                .get(this.occEndpoints.getUrl('page', {
                id: pageContext.id,
            }, { fields: fields ? fields : 'DEFAULT' }), {
                headers: this.headers,
            })
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
        }
        // load page by PageContext
        const httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    }
    getPagesEndpoint(params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', {}, Object.assign({ fields }, params));
    }
    getPagesRequestParams(pageContext) {
        let httpParams = {};
        // smartedit preview page is loaded by previewToken which added by interceptor
        if (pageContext.id !== 'smartedit-preview') {
            httpParams = { pageType: pageContext.type };
            if (pageContext.type === PageType.CONTENT_PAGE) {
                httpParams['pageLabelOrId'] = pageContext.id;
            }
            else {
                httpParams['code'] = pageContext.id;
            }
        }
        return httpParams;
    }
}
OccCmsPageAdapter.decorators = [
    { type: Injectable }
];
OccCmsPageAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY21zL29jYy1jbXMtcGFnZS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0UsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUNVLElBQWdCLEVBQ2hCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTDdCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQU0zRSxDQUFDO0lBRUosSUFBSSxDQUNGLFdBQXdCLEVBQ3hCLE1BQWU7UUFFZixrQkFBa0I7UUFDbEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDdEIsTUFBTSxFQUNOO2dCQUNFLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTthQUNuQixFQUNELEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FDeEMsRUFDRDtnQkFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FDRjtpQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsMkJBQTJCO1FBQzNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyxnQkFBZ0IsQ0FDdEIsTUFFQyxFQUNELE1BQWU7UUFFZixNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLGtCQUFJLE1BQU0sSUFBSyxNQUFNLEVBQUcsQ0FBQztJQUN0RSxDQUFDO0lBRU8scUJBQXFCLENBQzNCLFdBQXdCO1FBRXhCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVwQiw4RUFBOEU7UUFDOUUsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLG1CQUFtQixFQUFFO1lBQzFDLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFNUMsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZLEVBQUU7Z0JBQzlDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ3JDO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7WUFuRUYsVUFBVTs7O1lBWEYsVUFBVTtZQVNWLG1CQUFtQjtZQURuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENNU19QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jbXMvY29ubmVjdG9ycy9wYWdlL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlQWRhcHRlciBpbXBsZW1lbnRzIENtc1BhZ2VBZGFwdGVyIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgLy8gbG9hZCBwYWdlIGJ5IElkXG4gICAgaWYgKHBhZ2VDb250ZXh0LnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KFxuICAgICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICAgICAgICdwYWdlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IHBhZ2VDb250ZXh0LmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgZmllbGRzOiBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCcgfVxuICAgICAgICAgICksXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkVSKSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZCBwYWdlIGJ5IFBhZ2VDb250ZXh0XG4gICAgY29uc3QgaHR0cFBhcmFtcyA9IHRoaXMuZ2V0UGFnZXNSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0UGFnZXNFbmRwb2ludChodHRwUGFyYW1zLCBmaWVsZHMpLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzRW5kcG9pbnQoXG4gICAgcGFyYW1zOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBmaWVsZHMgPSBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGFnZXMnLCB7fSwgeyBmaWVsZHMsIC4uLnBhcmFtcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZXNSZXF1ZXN0UGFyYW1zKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IHt9O1xuXG4gICAgLy8gc21hcnRlZGl0IHByZXZpZXcgcGFnZSBpcyBsb2FkZWQgYnkgcHJldmlld1Rva2VuIHdoaWNoIGFkZGVkIGJ5IGludGVyY2VwdG9yXG4gICAgaWYgKHBhZ2VDb250ZXh0LmlkICE9PSAnc21hcnRlZGl0LXByZXZpZXcnKSB7XG4gICAgICBodHRwUGFyYW1zID0geyBwYWdlVHlwZTogcGFnZUNvbnRleHQudHlwZSB9O1xuXG4gICAgICBpZiAocGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFKSB7XG4gICAgICAgIGh0dHBQYXJhbXNbJ3BhZ2VMYWJlbE9ySWQnXSA9IHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHR0cFBhcmFtc1snY29kZSddID0gcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodHRwUGFyYW1zO1xuICB9XG59XG4iXX0=