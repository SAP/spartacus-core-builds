/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobService } from '../../util/glob.service';
import * as i0 from "@angular/core";
import * as i1 from "../../util/glob.service";
export class UrlMatcherFactoryService {
    /**
     * @param {?} globService
     */
    constructor(globService) {
        this.globService = globService;
    }
    /**
     * Returns a matcher that is always fails
     * @return {?}
     */
    getFalsyUrlMatcher() {
        return (/**
         * @return {?}
         */
        function falsyUrlMatcher() {
            return null;
        });
    }
    /**
     * Returns a matcher for given list of paths
     * @param {?} paths
     * @return {?}
     */
    getMultiplePathsUrlMatcher(paths) {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        const matcher = (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        function multiplePathsUrlMatcher(segments, segmentGroup, route) {
            for (let i = 0; i < paths.length; i++) {
                /** @type {?} */
                const result = self.getPathUrlMatcher(paths[i])(segments, segmentGroup, route);
                if (result) {
                    return result;
                }
            }
            return null;
        });
        matcher.paths = paths; // property added for easier debugging of routes
        return matcher;
    }
    /**
     * Similar to Angular's defaultUrlMatcher. Differences:
     * - the `path` comes from function's argument, not from `route.path`
     * - the empty path `''` is handled here, but in Angular is handled one level higher in the match() function
     * @protected
     * @param {?=} path
     * @return {?}
     */
    getPathUrlMatcher(path = '') {
        return (/**
         * @param {?} segments
         * @param {?} segmentGroup
         * @param {?} route
         * @return {?}
         */
        (segments, segmentGroup, route) => {
            // use function's argument, not the `route.path`
            if (path === '') {
                if (route.pathMatch === 'full' &&
                    (segmentGroup.hasChildren() || segments.length > 0)) {
                    return null;
                }
                return { consumed: [], posParams: {} };
            }
            /** @type {?} */
            const parts = path.split('/');
            if (parts.length > segments.length) {
                // The actual URL is shorter than the config, no match
                return null;
            }
            if (route.pathMatch === 'full' &&
                (segmentGroup.hasChildren() || parts.length < segments.length)) {
                // The config is longer than the actual URL but we are looking for a full match, return null
                return null;
            }
            /** @type {?} */
            const posParams = {};
            // Check each config part against the actual URL
            for (let index = 0; index < parts.length; index++) {
                /** @type {?} */
                const part = parts[index];
                /** @type {?} */
                const segment = segments[index];
                /** @type {?} */
                const isParameter = part.startsWith(':');
                if (isParameter) {
                    posParams[part.substring(1)] = segment;
                }
                else if (part !== segment.path) {
                    // The actual URL part does not match the config, no match
                    return null;
                }
            }
            return { consumed: segments.slice(0, parts.length), posParams };
        });
    }
    /**
     * Returns URL matcher that accepts almost everything (like `**` route), but not paths accepted by the given matcher
     * @param {?} originalMatcher
     * @return {?}
     */
    getOppositeUrlMatcher(originalMatcher) {
        /** @type {?} */
        const matcher = (/**
         * @param {?} segments
         * @param {?} group
         * @param {?} route
         * @return {?}
         */
        function oppositeUrlMatcher(segments, group, route) {
            return originalMatcher(segments, group, route)
                ? null
                : { consumed: segments, posParams: {} };
        });
        matcher.originalMatcher = originalMatcher; // property added for easier debugging of routes
        return matcher;
    }
    /**
     * Returns URL matcher for the given list of glob-like patterns. Each pattern must start with `/` or `!/`.
     * @param {?} globPatterns
     * @return {?}
     */
    getGlobUrlMatcher(globPatterns) {
        /** @type {?} */
        const globValidator = this.globService.getValidator(globPatterns);
        /** @type {?} */
        const matcher = (/**
         * @param {?} segments
         * @return {?}
         */
        function globUrlMatcher(segments) {
            /** @type {?} */
            const fullPath = `/${segments.map((/**
             * @param {?} s
             * @return {?}
             */
            s => s.path)).join('/')}`;
            return globValidator(fullPath)
                ? { consumed: segments, posParams: {} }
                : null;
        });
        matcher.globPatterns = globPatterns; // property added for easier debugging of routes
        return matcher;
    }
}
UrlMatcherFactoryService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UrlMatcherFactoryService.ctorParameters = () => [
    { type: GlobService }
];
/** @nocollapse */ UrlMatcherFactoryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UrlMatcherFactoryService_Factory() { return new UrlMatcherFactoryService(i0.ɵɵinject(i1.GlobService)); }, token: UrlMatcherFactoryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UrlMatcherFactoryService.prototype.globService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvc2VydmljZXMvdXJsLW1hdGNoZXItZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3RELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7OztJQUtsRCxrQkFBa0I7UUFDaEI7OztRQUFPLFNBQVMsZUFBZTtZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7OztJQUtELDBCQUEwQixDQUFDLEtBQWU7O2NBQ2xDLElBQUksR0FBRyxJQUFJOztjQUVYLE9BQU87Ozs7OztRQUFHLFNBQVMsdUJBQXVCLENBQzlDLFFBQXNCLEVBQ3RCLFlBQTZCLEVBQzdCLEtBQVk7WUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7c0JBQy9CLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdDLFFBQVEsRUFDUixZQUFZLEVBQ1osS0FBSyxDQUNOO2dCQUNELElBQUksTUFBTSxFQUFFO29CQUNWLE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsZ0RBQWdEO1FBQ3ZFLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7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Q0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtnQkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUMsZ0RBQWdEO1FBQ3JGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQW5JRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBRnpCLFdBQVc7Ozs7Ozs7O0lBSU4sK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGUsXG4gIFVybE1hdGNoZXIsXG4gIFVybE1hdGNoUmVzdWx0LFxuICBVcmxTZWdtZW50LFxuICBVcmxTZWdtZW50R3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvZ2xvYi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZ2xvYlNlcnZpY2U6IEdsb2JTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbWF0Y2hlciB0aGF0IGlzIGFsd2F5cyBmYWlsc1xuICAgKi9cbiAgZ2V0RmFsc3lVcmxNYXRjaGVyKCk6IFVybE1hdGNoZXIge1xuICAgIHJldHVybiBmdW5jdGlvbiBmYWxzeVVybE1hdGNoZXIoKTogbnVsbCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXRjaGVyIGZvciBnaXZlbiBsaXN0IG9mIHBhdGhzXG4gICAqL1xuICBnZXRNdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihwYXRoczogc3RyaW5nW10pOiBVcmxNYXRjaGVyIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBtdWx0aXBsZVBhdGhzVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHNlbGYuZ2V0UGF0aFVybE1hdGNoZXIocGF0aHNbaV0pKFxuICAgICAgICAgIHNlZ21lbnRzLFxuICAgICAgICAgIHNlZ21lbnRHcm91cCxcbiAgICAgICAgICByb3V0ZVxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBtYXRjaGVyLnBhdGhzID0gcGF0aHM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gQW5ndWxhcidzIGRlZmF1bHRVcmxNYXRjaGVyLiBEaWZmZXJlbmNlczpcbiAgICogLSB0aGUgYHBhdGhgIGNvbWVzIGZyb20gZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IGZyb20gYHJvdXRlLnBhdGhgXG4gICAqIC0gdGhlIGVtcHR5IHBhdGggYCcnYCBpcyBoYW5kbGVkIGhlcmUsIGJ1dCBpbiBBbmd1bGFyIGlzIGhhbmRsZWQgb25lIGxldmVsIGhpZ2hlciBpbiB0aGUgbWF0Y2goKSBmdW5jdGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBhdGhVcmxNYXRjaGVyKHBhdGg6IHN0cmluZyA9ICcnKTogVXJsTWF0Y2hlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBzZWdtZW50R3JvdXA6IFVybFNlZ21lbnRHcm91cCxcbiAgICAgIHJvdXRlOiBSb3V0ZVxuICAgICk6IFVybE1hdGNoUmVzdWx0IHwgbnVsbCA9PiB7XG4gICAgICAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcbiAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgICAoc2VnbWVudEdyb3VwLmhhc0NoaWxkcmVuKCkgfHwgc2VnbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY29uc3VtZWQ6IFtdLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdCgnLycpOyAvLyB1c2UgZnVuY3Rpb24ncyBhcmd1bWVudCwgbm90IHRoZSBgcm91dGUucGF0aGBcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBUaGUgYWN0dWFsIFVSTCBpcyBzaG9ydGVyIHRoYW4gdGhlIGNvbmZpZywgbm8gbWF0Y2hcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcm91dGUucGF0aE1hdGNoID09PSAnZnVsbCcgJiZcbiAgICAgICAgKHNlZ21lbnRHcm91cC5oYXNDaGlsZHJlbigpIHx8IHBhcnRzLmxlbmd0aCA8IHNlZ21lbnRzLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICAvLyBUaGUgY29uZmlnIGlzIGxvbmdlciB0aGFuIHRoZSBhY3R1YWwgVVJMIGJ1dCB3ZSBhcmUgbG9va2luZyBmb3IgYSBmdWxsIG1hdGNoLCByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9zUGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IFVybFNlZ21lbnQgfSA9IHt9O1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbmZpZyBwYXJ0IGFnYWluc3QgdGhlIGFjdHVhbCBVUkxcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgaXNQYXJhbWV0ZXIgPSBwYXJ0LnN0YXJ0c1dpdGgoJzonKTtcbiAgICAgICAgaWYgKGlzUGFyYW1ldGVyKSB7XG4gICAgICAgICAgcG9zUGFyYW1zW3BhcnQuc3Vic3RyaW5nKDEpXSA9IHNlZ21lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCAhPT0gc2VnbWVudC5wYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdHVhbCBVUkwgcGFydCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlnLCBubyBtYXRjaFxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNvbnN1bWVkOiBzZWdtZW50cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGgpLCBwb3NQYXJhbXMgfTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgVVJMIG1hdGNoZXIgdGhhdCBhY2NlcHRzIGFsbW9zdCBldmVyeXRoaW5nIChsaWtlIGAqKmAgcm91dGUpLCBidXQgbm90IHBhdGhzIGFjY2VwdGVkIGJ5IHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqL1xuICBnZXRPcHBvc2l0ZVVybE1hdGNoZXIob3JpZ2luYWxNYXRjaGVyOiBVcmxNYXRjaGVyKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgbWF0Y2hlciA9IGZ1bmN0aW9uIG9wcG9zaXRlVXJsTWF0Y2hlcihcbiAgICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W10sXG4gICAgICBncm91cDogVXJsU2VnbWVudEdyb3VwLFxuICAgICAgcm91dGU6IFJvdXRlXG4gICAgKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxNYXRjaGVyKHNlZ21lbnRzLCBncm91cCwgcm91dGUpXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH07XG4gICAgfTtcbiAgICBtYXRjaGVyLm9yaWdpbmFsTWF0Y2hlciA9IG9yaWdpbmFsTWF0Y2hlcjsgLy8gcHJvcGVydHkgYWRkZWQgZm9yIGVhc2llciBkZWJ1Z2dpbmcgb2Ygcm91dGVzXG5cbiAgICByZXR1cm4gbWF0Y2hlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBtYXRjaGVyIGZvciB0aGUgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMuIEVhY2ggcGF0dGVybiBtdXN0IHN0YXJ0IHdpdGggYC9gIG9yIGAhL2AuXG4gICAqL1xuICBnZXRHbG9iVXJsTWF0Y2hlcihnbG9iUGF0dGVybnM6IHN0cmluZ1tdKTogVXJsTWF0Y2hlciB7XG4gICAgY29uc3QgZ2xvYlZhbGlkYXRvciA9IHRoaXMuZ2xvYlNlcnZpY2UuZ2V0VmFsaWRhdG9yKGdsb2JQYXR0ZXJucyk7XG5cbiAgICBjb25zdCBtYXRjaGVyID0gZnVuY3Rpb24gZ2xvYlVybE1hdGNoZXIoXG4gICAgICBzZWdtZW50czogVXJsU2VnbWVudFtdXG4gICAgKTogVXJsTWF0Y2hSZXN1bHQgfCBudWxsIHtcbiAgICAgIGNvbnN0IGZ1bGxQYXRoID0gYC8ke3NlZ21lbnRzLm1hcChzID0+IHMucGF0aCkuam9pbignLycpfWA7XG5cbiAgICAgIHJldHVybiBnbG9iVmFsaWRhdG9yKGZ1bGxQYXRoKVxuICAgICAgICA/IHsgY29uc3VtZWQ6IHNlZ21lbnRzLCBwb3NQYXJhbXM6IHt9IH1cbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgbWF0Y2hlci5nbG9iUGF0dGVybnMgPSBnbG9iUGF0dGVybnM7IC8vIHByb3BlcnR5IGFkZGVkIGZvciBlYXNpZXIgZGVidWdnaW5nIG9mIHJvdXRlc1xuICAgIHJldHVybiBtYXRjaGVyO1xuICB9XG59XG4iXX0=