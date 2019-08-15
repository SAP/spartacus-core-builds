/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { defaultOccStoreFinderConfig } from './default-occ-store-finder-config';
import { OccStoreFinderAdapter } from './occ-store-finder.adapter';
export class StoreFinderOccModule {
}
StoreFinderOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [ConfigModule.withConfig(defaultOccStoreFinderConfig)],
                providers: [{ provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNbkUsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQy9ELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2FBQzlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2Mtc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjU3RvcmVGaW5kZXJDb25maWcpXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTdG9yZUZpbmRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyT2NjTW9kdWxlIHt9XG4iXX0=