import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreDataService } from './facade/store-data.service';
import { StoreFinderService } from './facade/store-finder.service';
import { ExternalJsFileLoader, GoogleMapRendererService, } from './service/index';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
    }
    StoreFinderCoreModule = __decorate([
        NgModule({
            imports: [StoreFinderStoreModule],
            providers: [
                provideDefaultConfig(defaultStoreFinderConfig),
                StoreFinderService,
                StoreDataService,
                GoogleMapRendererService,
                ExternalJsFileLoader,
            ],
        })
    ], StoreFinderCoreModule);
    return StoreFinderCoreModule;
}());
export { StoreFinderCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHdCQUF3QixHQUN6QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBWTNFO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixxQkFBcUI7UUFWakMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDakMsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLHdCQUF3QixDQUFDO2dCQUM5QyxrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsd0JBQXdCO2dCQUN4QixvQkFBb0I7YUFDckI7U0FDRixDQUFDO09BQ1cscUJBQXFCLENBQUc7SUFBRCw0QkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3N0b3JlLWZpbmRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsSnNGaWxlTG9hZGVyLFxuICBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UsXG59IGZyb20gJy4vc2VydmljZS9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9zdG9yZS1maW5kZXItc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1N0b3JlRmluZGVyU3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcpLFxuICAgIFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSxcbiAgICBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJDb3JlTW9kdWxlIHt9XG4iXX0=