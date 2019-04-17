import { ConfigurableRoutesService } from '../configurable-routes.service';
import { RouteRecognizerService } from './route-recognizer.service';
import { UrlParsingService } from './url-parsing.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { TranslateUrlOptions } from './translate-url-options';
export declare class UrlTranslationService {
    private configurableRoutesService;
    private routeRecognizer;
    private urlParser;
    private config;
    readonly ROOT_URL: string[];
    constructor(configurableRoutesService: ConfigurableRoutesService, routeRecognizer: RouteRecognizerService, urlParser: UrlParsingService, config: ServerConfig);
    translate(options: TranslateUrlOptions): string | string[];
    private validateOptions;
    private validateOptionsUrl;
    private validateOptionsRoute;
    private generateUrl;
    /**
     * Converts all elements to objects
     */
    private standarizeNestedRoutes;
    private splitRoutesNamesAndParams;
    private provideParamsValues;
    private provideParamsValuesForSingleRoute;
    private findPathsWithFillableParams;
    private findPartialPathWithFillableParams;
    private getParams;
    private getMappedParamName;
    private warn;
}
