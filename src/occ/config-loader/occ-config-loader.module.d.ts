import { ModuleWithProviders } from '@angular/core';
import { ConfigInitializer } from '../../config/config-initializer/config-initializer';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { OccConfigLoaderService } from './occ-config-loader.service';
/**
 * Initializes the Spartacus config asynchronously basing on the external config
 */
import * as ɵngcc0 from '@angular/core';
export declare function initConfig(configLoader: OccConfigLoaderService, config: SiteContextConfig): ConfigInitializer;
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
export declare class OccConfigLoaderModule {
    static forRoot(): ModuleWithProviders<OccConfigLoaderModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<OccConfigLoaderModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<OccConfigLoaderModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1jb25maWctbG9hZGVyLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXIgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb25maWdMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlJztcbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIFNwYXJ0YWN1cyBjb25maWcgYXN5bmNocm9ub3VzbHkgYmFzaW5nIG9uIHRoZSBleHRlcm5hbCBjb25maWdcbiAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gaW5pdENvbmZpZyhjb25maWdMb2FkZXI6IE9jY0NvbmZpZ0xvYWRlclNlcnZpY2UsIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcpOiBDb25maWdJbml0aWFsaXplcjtcbi8qKlxuICogUmUtcHJvdmlkZXMgdGhlIGV4dGVybmFsIGNvbmZpZyBjaHVuayBnaXZlbiBiZWZvcmUgQW5ndWxhciBib290c3RyYXBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ29uZmlnTG9hZGVyTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9jY0NvbmZpZ0xvYWRlck1vZHVsZT47XG59XG4iXX0=