import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Config } from '../../config/config.module';
import * as i0 from "@angular/core";
import * as i1 from "../../config/config.module";
let I18nConfig = class I18nConfig {
};
I18nConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function I18nConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: I18nConfig, providedIn: "root" });
I18nConfig = __decorate([
    Injectable({
        providedIn: 'root',
        useExisting: Config,
    })
], I18nConfig);
export { I18nConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9jb25maWcvaTE4bi1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNcEQsSUFBc0IsVUFBVSxHQUFoQyxNQUFzQixVQUFVO0NBMkMvQixDQUFBOztBQTNDcUIsVUFBVTtJQUovQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtRQUNsQixXQUFXLEVBQUUsTUFBTTtLQUNwQixDQUFDO0dBQ29CLFVBQVUsQ0EyQy9CO1NBM0NxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25SZXNvdXJjZXMgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1yZXNvdXJjZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSTE4bkNvbmZpZyB7XG4gIGkxOG4/OiB7XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGVyZSBhcmUgbWlzc2luZyB0cmFuc2xhdGlvbiByZXNvdXJjZXMgZm9yIHRoZSBhY3RpdmUgbGFuZ3VhZ2UsIHRoZSBmYWxsYmFjayBsYW5ndWFnZSB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgZmFsbGJhY2tMYW5nPzogc3RyaW5nIHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmF0aW9uIGZvciBsYXp5IGxvYWRpbmcgb2YgdHJhbnNsYXRpb24gZmlsZXMuXG4gICAgICogRm9yIGVhZ2VyIGxvYWRpbmcgb2YgdHJhbnNsYXRpb25zIHBsZWFzZSB1c2UgY29uZmlnIG9wdGlvbiBgaTE4bi5yZXNvdXJjZXNgXG4gICAgICovXG5cbiAgICBiYWNrZW5kPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgcGF0aCB0byBKU09OIHRyYW5zbGF0aW9ucy4gSXQgc2hvdWxkIGNvbnRhaW4gcGxhY2Vob2xkZXJzOlxuICAgICAgICogLSBge3tsbmd9fWAgZm9yIGxhbmd1YWdlXG4gICAgICAgKiAtIGB7e25zfX1gIGZvciB0aGUgbmFtZSBvZiBjaHVuay5cbiAgICAgICAqXG4gICAgICAgKiBFeGFtcGxlOlxuICAgICAgICogYGFzc2V0cy9pMThuLWFzc2V0cy97e2xuZ319L3t7bnN9fS5qc29uYFxuICAgICAgICovXG5cbiAgICAgIGxvYWRQYXRoPzogc3RyaW5nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdHJhbnNsYXRpb24gcmVzb3VyY2VzIHRoYXQgYXJlIGVhZ2VybHkgYnVuZGxlZCB3aXRoIEpTIGFwcC5cbiAgICAgKiBGb3IgbGF6eSBsb2FkaW5nIG9mIHRyYW5zbGF0aW9ucyBwbGVhc2UgdXNlIGNvbmZpZyBvcHRpb24gYGkxOG4uYmFja2VuZGAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICByZXNvdXJjZXM/OiBUcmFuc2xhdGlvblJlc291cmNlcztcblxuICAgIC8qKlxuICAgICAqIExvZ3MgaTE4biBldmVudHMgKGxpa2UgbG9hZGluZyB0cmFuc2xhdGlvbiByZXNvdXJjZXMpIHRvIHRoZSBjb25zb2xlLiBEb24ndCB1c2UgaW4gcHJvZHVjdGlvbiFcbiAgICAgKi9cbiAgICBkZWJ1Zz86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBNYXBwaW5nIHRoYXQgYXNzaWducyBrZXlzJyBuYW1lc3BhY2VzIHRvIHNwZWNpZmljIGNodW5rcy4gVGhlIG1haW4gcHVycG9zZSBvZiBjaHVua3MgaXMgdG8gbGF6eSBsb2FkIHRoZW0uXG4gICAgICovXG4gICAgY2h1bmtzPzoge1xuICAgICAgW2NodW5rOiBzdHJpbmddOiBzdHJpbmdbXTtcbiAgICB9O1xuICB9O1xufVxuIl19