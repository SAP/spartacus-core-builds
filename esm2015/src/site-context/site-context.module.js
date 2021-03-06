import { NgModule } from '@angular/core';
import { provideConfigValidator } from '../config/config-validator/config-validator';
import { StateModule } from '../state/index';
import { baseSiteConfigValidator } from './config/base-site-config-validator';
import { defaultSiteContextConfigFactory } from './config/default-site-context-config';
import { contextServiceMapProvider } from './providers/context-service-map';
import { contextServiceProviders } from './providers/context-service-providers';
import { siteContextParamsProviders } from './providers/site-context-params-providers';
import { SiteContextStoreModule } from './store/site-context-store.module';
import { provideDefaultConfigFactory } from '../config/config-providers';
// @dynamic
export class SiteContextModule {
    static forRoot() {
        return {
            ngModule: SiteContextModule,
            providers: [
                provideDefaultConfigFactory(defaultSiteContextConfigFactory),
                contextServiceMapProvider,
                ...contextServiceProviders,
                ...siteContextParamsProviders,
                provideConfigValidator(baseSiteConfigValidator),
            ],
        };
    }
}
SiteContextModule.decorators = [
    { type: NgModule, args: [{
                imports: [StateModule, SiteContextStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV6RSxXQUFXO0FBSVgsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCwyQkFBMkIsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUQseUJBQXlCO2dCQUN6QixHQUFHLHVCQUF1QjtnQkFDMUIsR0FBRywwQkFBMEI7Z0JBQzdCLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgU3RhdGVNb2R1bGUgfSBmcm9tICcuLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBiYXNlU2l0ZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL2Jhc2Utc2l0ZS1jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHsgY29udGV4dFNlcnZpY2VQcm92aWRlcnMgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtcHJvdmlkZXJzJztcbmltcG9ydCB7IHNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvc2l0ZS1jb250ZXh0LXBhcmFtcy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU3RhdGVNb2R1bGUsIFNpdGVDb250ZXh0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2l0ZUNvbnRleHRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNpdGVDb250ZXh0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KSxcbiAgICAgICAgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlcixcbiAgICAgICAgLi4uY29udGV4dFNlcnZpY2VQcm92aWRlcnMsXG4gICAgICAgIC4uLnNpdGVDb250ZXh0UGFyYW1zUHJvdmlkZXJzLFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKGJhc2VTaXRlQ29uZmlnVmFsaWRhdG9yKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19