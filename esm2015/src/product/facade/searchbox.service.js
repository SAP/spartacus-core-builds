import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import { ProductActions } from '../store/actions/index';
import { ProductSelectors } from '../store/selectors/index';
import { ProductSearchService } from './product-search.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class SearchboxService extends ProductSearchService {
    /**
     * dispatch the search for the search box
     */
    search(query, searchConfig) {
        this.store.dispatch(new ProductActions.SearchProducts({
            queryText: query,
            searchConfig: searchConfig,
        }, true));
    }
    getResults() {
        return this.store.pipe(select(ProductSelectors.getAuxSearchResults));
    }
    /**
     * clears the products and suggestions
     */
    clearResults() {
        this.store.dispatch(new ProductActions.ClearProductSearchResult({
            clearSearchboxResults: true,
        }));
    }
    getSuggestionResults() {
        return this.store.pipe(select(ProductSelectors.getProductSuggestions));
    }
    searchSuggestions(query, searchConfig) {
        this.store.dispatch(new ProductActions.GetProductSuggestions({
            term: query,
            searchConfig: searchConfig,
        }));
    }
}
SearchboxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SearchboxService_Factory() { return new SearchboxService(i0.ɵɵinject(i1.Store)); }, token: SearchboxService, providedIn: "root" });
SearchboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L2ZhY2FkZS9zZWFyY2hib3guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLaEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG9CQUFvQjtJQUN4RDs7T0FFRztJQUNILE1BQU0sQ0FBQyxLQUFhLEVBQUUsWUFBMkI7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FDL0I7WUFDRSxTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsWUFBWTtTQUMzQixFQUNELElBQUksQ0FDTCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLHdCQUF3QixDQUFDO1lBQzFDLHFCQUFxQixFQUFFLElBQUk7U0FDNUIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLFlBQTJCO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztZQUN2QyxJQUFJLEVBQUUsS0FBSztZQUNYLFlBQVksRUFBRSxZQUFZO1NBQzNCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQTdDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSwgU3VnZ2VzdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaGJveFNlcnZpY2UgZXh0ZW5kcyBQcm9kdWN0U2VhcmNoU2VydmljZSB7XG4gIC8qKlxuICAgKiBkaXNwYXRjaCB0aGUgc2VhcmNoIGZvciB0aGUgc2VhcmNoIGJveFxuICAgKi9cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHMoXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyeVRleHQ6IHF1ZXJ5LFxuICAgICAgICAgIHNlYXJjaENvbmZpZzogc2VhcmNoQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFJlc3VsdHMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0QXV4U2VhcmNoUmVzdWx0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsZWFycyB0aGUgcHJvZHVjdHMgYW5kIHN1Z2dlc3Rpb25zXG4gICAqL1xuICBjbGVhclJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5DbGVhclByb2R1Y3RTZWFyY2hSZXN1bHQoe1xuICAgICAgICBjbGVhclNlYXJjaGJveFJlc3VsdHM6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTdWdnZXN0aW9uUmVzdWx0cygpOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFByb2R1Y3RTZWxlY3RvcnMuZ2V0UHJvZHVjdFN1Z2dlc3Rpb25zKSk7XG4gIH1cblxuICBzZWFyY2hTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9ucyh7XG4gICAgICAgIHRlcm06IHF1ZXJ5LFxuICAgICAgICBzZWFyY2hDb25maWc6IHNlYXJjaENvbmZpZyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19