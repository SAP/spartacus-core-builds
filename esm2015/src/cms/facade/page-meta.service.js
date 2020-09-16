import { Inject, Injectable, Optional } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { resolveApplicable } from '../../util/applicable';
import { PageMetaResolver } from '../page/page-meta.resolver';
import { CmsService } from './cms.service';
import * as i0 from "@angular/core";
import * as i1 from "../page/page-meta.resolver";
import * as i2 from "./cms.service";
export class PageMetaService {
    constructor(resolvers, cms) {
        this.resolvers = resolvers;
        this.cms = cms;
        /**
         * The list of resolver interfaces will be evaluated for the pageResolvers.
         *
         * TOOD: optimize browser vs SSR resolvers; image, robots and description
         *       aren't needed during browsing.
         * TODO: we can make the list of resolver types configurable
         */
        this.resolverMethods = {
            title: 'resolveTitle',
            heading: 'resolveHeading',
            description: 'resolveDescription',
            breadcrumbs: 'resolveBreadcrumbs',
            image: 'resolveImage',
            robots: 'resolveRobots',
        };
        this.resolvers = this.resolvers || [];
    }
    getMeta() {
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((page) => {
            const metaResolver = this.getMetaResolver(page);
            if (metaResolver) {
                return this.resolve(metaResolver);
            }
            else {
                // we do not have a page resolver
                return of(null);
            }
        }));
    }
    /**
     * If a `PageResolver` has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    resolve(metaResolver) {
        const resolveMethods = Object.keys(this.resolverMethods)
            .filter((key) => metaResolver[this.resolverMethods[key]])
            .map((key) => metaResolver[this.resolverMethods[key]]().pipe(map((data) => ({
            [key]: data,
        }))));
        return combineLatest(resolveMethods).pipe(debounceTime(0), // avoid partial data emissions when all methods resolve at the same time
        map((data) => Object.assign({}, ...data)));
    }
    /**
     * Return the resolver with the best match, based on a score
     * generated by the resolver.
     *
     * Resolvers match by default on `PageType` and `page.template`.
     */
    getMetaResolver(page) {
        return resolveApplicable(this.resolvers, [page], [page]);
    }
}
PageMetaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageMetaService_Factory() { return new PageMetaService(i0.ɵɵinject(i1.PageMetaResolver, 8), i0.ɵɵinject(i2.CmsService)); }, token: PageMetaService, providedIn: "root" });
PageMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PageMetaService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [PageMetaResolver,] }] },
    { type: CmsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvZmFjYWRlL3BhZ2UtbWV0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUdZLFNBQTZCLEVBQzdCLEdBQWU7UUFEZixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUM3QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBSTNCOzs7Ozs7V0FNRztRQUNPLG9CQUFlLEdBQThCO1lBQ3JELEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxlQUFlO1NBQ3hCLENBQUM7UUFoQkEsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBaUJELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsU0FBUyxDQUFDLENBQUMsSUFBVSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVoRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNMLGlDQUFpQztnQkFDakMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxPQUFPLENBQUMsWUFBOEI7UUFDOUMsTUFBTSxjQUFjLEdBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQ3hELElBQUksQ0FBQyxlQUFlLENBQ3JCO2FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3hELEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ1gsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDLENBQ0osQ0FDRixDQUFDO1FBRUosT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUN2QyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUseUVBQXlFO1FBQzFGLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sZUFBZSxDQUFDLElBQVU7UUFDbEMsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7d0NBR0ksUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7WUFSbkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyByZXNvbHZlQXBwbGljYWJsZSB9IGZyb20gJy4uLy4uL3V0aWwvYXBwbGljYWJsZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQYWdlTWV0YVJlc29sdmVyKVxuICAgIHByb3RlY3RlZCByZXNvbHZlcnM6IFBhZ2VNZXRhUmVzb2x2ZXJbXSxcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzb2x2ZXJzID0gdGhpcy5yZXNvbHZlcnMgfHwgW107XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHJlc29sdmVyIGludGVyZmFjZXMgd2lsbCBiZSBldmFsdWF0ZWQgZm9yIHRoZSBwYWdlUmVzb2x2ZXJzLlxuICAgKlxuICAgKiBUT09EOiBvcHRpbWl6ZSBicm93c2VyIHZzIFNTUiByZXNvbHZlcnM7IGltYWdlLCByb2JvdHMgYW5kIGRlc2NyaXB0aW9uXG4gICAqICAgICAgIGFyZW4ndCBuZWVkZWQgZHVyaW5nIGJyb3dzaW5nLlxuICAgKiBUT0RPOiB3ZSBjYW4gbWFrZSB0aGUgbGlzdCBvZiByZXNvbHZlciB0eXBlcyBjb25maWd1cmFibGVcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlck1ldGhvZHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgdGl0bGU6ICdyZXNvbHZlVGl0bGUnLFxuICAgIGhlYWRpbmc6ICdyZXNvbHZlSGVhZGluZycsXG4gICAgZGVzY3JpcHRpb246ICdyZXNvbHZlRGVzY3JpcHRpb24nLFxuICAgIGJyZWFkY3J1bWJzOiAncmVzb2x2ZUJyZWFkY3J1bWJzJyxcbiAgICBpbWFnZTogJ3Jlc29sdmVJbWFnZScsXG4gICAgcm9ib3RzOiAncmVzb2x2ZVJvYm90cycsXG4gIH07XG5cbiAgZ2V0TWV0YSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zLmdldEN1cnJlbnRQYWdlKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHN3aXRjaE1hcCgocGFnZTogUGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhUmVzb2x2ZXIgPSB0aGlzLmdldE1ldGFSZXNvbHZlcihwYWdlKTtcblxuICAgICAgICBpZiAobWV0YVJlc29sdmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShtZXRhUmVzb2x2ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGRvIG5vdCBoYXZlIGEgcGFnZSByZXNvbHZlclxuICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgYFBhZ2VSZXNvbHZlcmAgaGFzIGltcGxlbWVudGVkIGEgcmVzb2x2ZXIgaW50ZXJmYWNlLCB0aGUgcmVzb2x2ZWQgZGF0YVxuICAgKiBpcyBtZXJnZWQgaW50byB0aGUgYFBhZ2VNZXRhYCBvYmplY3QuXG4gICAqIEBwYXJhbSBtZXRhUmVzb2x2ZXJcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlKG1ldGFSZXNvbHZlcjogUGFnZU1ldGFSZXNvbHZlcik6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICBjb25zdCByZXNvbHZlTWV0aG9kczogT2JzZXJ2YWJsZTxQYWdlTWV0YT5bXSA9IE9iamVjdC5rZXlzKFxuICAgICAgdGhpcy5yZXNvbHZlck1ldGhvZHNcbiAgICApXG4gICAgICAuZmlsdGVyKChrZXkpID0+IG1ldGFSZXNvbHZlclt0aGlzLnJlc29sdmVyTWV0aG9kc1trZXldXSlcbiAgICAgIC5tYXAoKGtleSkgPT5cbiAgICAgICAgbWV0YVJlc29sdmVyW3RoaXMucmVzb2x2ZXJNZXRob2RzW2tleV1dKCkucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGEpID0+ICh7XG4gICAgICAgICAgICBba2V5XTogZGF0YSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHJlc29sdmVNZXRob2RzKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDApLCAvLyBhdm9pZCBwYXJ0aWFsIGRhdGEgZW1pc3Npb25zIHdoZW4gYWxsIG1ldGhvZHMgcmVzb2x2ZSBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICBtYXAoKGRhdGEpID0+IE9iamVjdC5hc3NpZ24oe30sIC4uLmRhdGEpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSByZXNvbHZlciB3aXRoIHRoZSBiZXN0IG1hdGNoLCBiYXNlZCBvbiBhIHNjb3JlXG4gICAqIGdlbmVyYXRlZCBieSB0aGUgcmVzb2x2ZXIuXG4gICAqXG4gICAqIFJlc29sdmVycyBtYXRjaCBieSBkZWZhdWx0IG9uIGBQYWdlVHlwZWAgYW5kIGBwYWdlLnRlbXBsYXRlYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRNZXRhUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VNZXRhUmVzb2x2ZXIge1xuICAgIHJldHVybiByZXNvbHZlQXBwbGljYWJsZSh0aGlzLnJlc29sdmVycywgW3BhZ2VdLCBbcGFnZV0pO1xuICB9XG59XG4iXX0=