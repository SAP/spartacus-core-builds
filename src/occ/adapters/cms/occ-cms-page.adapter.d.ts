import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsPageAdapter } from '../../../cms/connectors/page/cms-page.adapter';
import { CmsStructureModel } from '../../../cms/model/page.model';
import { PageContext } from '../../../routing';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCmsPageAdapter implements CmsPageAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(pageContext: PageContext, fields?: string): Observable<CmsStructureModel>;
    protected getPagesEndpoint(params: {
        [key: string]: string;
    }, fields?: string): string;
    protected getPagesRequestParams(pageContext: PageContext): {
        [key: string]: any;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCmsPageAdapter, never>;
}

//# sourceMappingURL=occ-cms-page.adapter.d.ts.map