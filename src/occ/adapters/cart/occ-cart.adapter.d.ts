import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { Cart } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccCartAdapter implements CartAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    protected featureConfigService?: FeatureConfigService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService, featureConfigService?: FeatureConfigService);
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    protected getCartEndpoint(userId: string): string;
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    private legacyLoadAll;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    private legacyLoad;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    private legacyCreate;
}
