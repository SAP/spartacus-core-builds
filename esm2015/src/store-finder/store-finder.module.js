import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
let StoreFinderCoreModule = class StoreFinderCoreModule {
};
StoreFinderCoreModule = __decorate([
    NgModule({
        imports: [StoreFinderStoreModule],
        providers: [provideDefaultConfig(defaultStoreFinderConfig)],
    })
], StoreFinderCoreModule);
export { StoreFinderCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU0zRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUFHLENBQUE7QUFBeEIscUJBQXFCO0lBSmpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDNUQsQ0FBQztHQUNXLHFCQUFxQixDQUFHO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9zdG9yZS1maW5kZXItc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1N0b3JlRmluZGVyU3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJDb3JlTW9kdWxlIHt9XG4iXX0=