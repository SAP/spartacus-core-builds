/**
 * @license
 * The MIT License
 * Copyright (c) 2010-2019 Google LLC. http://angular.io/license
 *
 * See:
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/service-worker/config/src/glob.ts
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/aio/tests/deployment/shared/helpers.ts#L17
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/service-worker/config/src/generator.ts#L86
 */
const QUESTION_MARK = '[^/]';
const WILD_SINGLE = '[^/]*';
const WILD_OPEN = '(?:.+\\/)?';
const TO_ESCAPE_BASE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
const TO_ESCAPE_WILDCARD_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: QUESTION_MARK },
];
const TO_ESCAPE_LITERAL_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: '\\?' },
];
/**
 * Converts the glob-like pattern into regex string.
 *
 * Patterns use a limited glob format:
 * `**` matches 0 or more path segments
 * `*` matches 0 or more characters excluding `/`
 * `?` matches exactly one character excluding `/` (but when @param literalQuestionMark is true, `?` is treated as normal character)
 * The `!` prefix marks the pattern as being negative, meaning that only URLs that don't match the pattern will be included
 *
 * @param glob glob-like pattern
 * @param literalQuestionMark when true, it tells that `?` is treated as a normal character
 */
export function globToRegex(glob, literalQuestionMark = false) {
    const toEscape = literalQuestionMark
        ? TO_ESCAPE_LITERAL_QM
        : TO_ESCAPE_WILDCARD_QM;
    const segments = glob.split('/').reverse();
    let regex = '';
    while (segments.length > 0) {
        const segment = segments.pop();
        if (segment === '**') {
            if (segments.length > 0) {
                regex += WILD_OPEN;
            }
            else {
                regex += '.*';
            }
        }
        else {
            const processed = toEscape.reduce((seg, escape) => seg.replace(escape.replace, escape.with), segment);
            regex += processed;
            if (segments.length > 0) {
                regex += '\\/';
            }
        }
    }
    return regex;
}
/**
 * For given list of glob-like patterns, returns a matcher function.
 *
 * The matcher returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
 */
export function getGlobMatcher(patterns) {
    const processedPatterns = processGlobPatterns(patterns).map(({ positive, regex }) => ({
        positive,
        regex: new RegExp(regex),
    }));
    const includePatterns = processedPatterns.filter((spec) => spec.positive);
    const excludePatterns = processedPatterns.filter((spec) => !spec.positive);
    return (url) => includePatterns.some((pattern) => pattern.regex.test(url)) &&
        !excludePatterns.some((pattern) => pattern.regex.test(url));
}
/**
 * Converts list of glob-like patterns into list of RegExps with information whether the glob pattern is positive or negative
 */
export function processGlobPatterns(urls) {
    return urls.map((url) => {
        const positive = !url.startsWith('!');
        url = positive ? url : url.substr(1);
        return { positive, regex: `^${globToRegex(url)}$` };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2dsb2ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBRUgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzdCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUM1QixNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUM7QUFDL0IsTUFBTSxjQUFjLEdBQUc7SUFDckIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Q0FDdEMsQ0FBQztBQUNGLE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsR0FBRyxjQUFjO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0NBQ3hDLENBQUM7QUFDRixNQUFNLG9CQUFvQixHQUFHO0lBQzNCLEdBQUcsY0FBYztJQUNqQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUNoQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxtQkFBbUIsR0FBRyxLQUFLO0lBQ25FLE1BQU0sUUFBUSxHQUFHLG1CQUFtQjtRQUNsQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3RCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksU0FBUyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLEtBQUssSUFBSSxJQUFJLENBQUM7YUFDZjtTQUNGO2FBQU07WUFDTCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUMvQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQ3pELE9BQU8sQ0FDUixDQUFDO1lBQ0YsS0FBSyxJQUFJLFNBQVMsQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksS0FBSyxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWtCO0lBQy9DLE1BQU0saUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLFFBQVE7UUFDUixLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUUsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUzRSxPQUFPLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsSUFBYztJQUVkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIFRoZSBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTkgR29vZ2xlIExMQy4gaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICpcbiAqIFNlZTpcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzZmNWY0ODFmZGFlMDNmMWQ4ZGIzNjI4NGI2NGM3YjgyZDk1MTlkODUvcGFja2FnZXMvc2VydmljZS13b3JrZXIvY29uZmlnL3NyYy9nbG9iLnRzXG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L2Fpby90ZXN0cy9kZXBsb3ltZW50L3NoYXJlZC9oZWxwZXJzLnRzI0wxN1xuICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNmY1ZjQ4MWZkYWUwM2YxZDhkYjM2Mjg0YjY0YzdiODJkOTUxOWQ4NS9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2dlbmVyYXRvci50cyNMODZcbiAqL1xuXG5jb25zdCBRVUVTVElPTl9NQVJLID0gJ1teL10nO1xuY29uc3QgV0lMRF9TSU5HTEUgPSAnW14vXSonO1xuY29uc3QgV0lMRF9PUEVOID0gJyg/Oi4rXFxcXC8pPyc7XG5jb25zdCBUT19FU0NBUEVfQkFTRSA9IFtcbiAgeyByZXBsYWNlOiAvXFwuL2csIHdpdGg6ICdcXFxcLicgfSxcbiAgeyByZXBsYWNlOiAvXFwrL2csIHdpdGg6ICdcXFxcKycgfSxcbiAgeyByZXBsYWNlOiAvXFwqL2csIHdpdGg6IFdJTERfU0lOR0xFIH0sXG5dO1xuY29uc3QgVE9fRVNDQVBFX1dJTERDQVJEX1FNID0gW1xuICAuLi5UT19FU0NBUEVfQkFTRSxcbiAgeyByZXBsYWNlOiAvXFw/L2csIHdpdGg6IFFVRVNUSU9OX01BUksgfSxcbl07XG5jb25zdCBUT19FU0NBUEVfTElURVJBTF9RTSA9IFtcbiAgLi4uVE9fRVNDQVBFX0JBU0UsXG4gIHsgcmVwbGFjZTogL1xcPy9nLCB3aXRoOiAnXFxcXD8nIH0sXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBnbG9iLWxpa2UgcGF0dGVybiBpbnRvIHJlZ2V4IHN0cmluZy5cbiAqXG4gKiBQYXR0ZXJucyB1c2UgYSBsaW1pdGVkIGdsb2IgZm9ybWF0OlxuICogYCoqYCBtYXRjaGVzIDAgb3IgbW9yZSBwYXRoIHNlZ21lbnRzXG4gKiBgKmAgbWF0Y2hlcyAwIG9yIG1vcmUgY2hhcmFjdGVycyBleGNsdWRpbmcgYC9gXG4gKiBgP2AgbWF0Y2hlcyBleGFjdGx5IG9uZSBjaGFyYWN0ZXIgZXhjbHVkaW5nIGAvYCAoYnV0IHdoZW4gQHBhcmFtIGxpdGVyYWxRdWVzdGlvbk1hcmsgaXMgdHJ1ZSwgYD9gIGlzIHRyZWF0ZWQgYXMgbm9ybWFsIGNoYXJhY3RlcilcbiAqIFRoZSBgIWAgcHJlZml4IG1hcmtzIHRoZSBwYXR0ZXJuIGFzIGJlaW5nIG5lZ2F0aXZlLCBtZWFuaW5nIHRoYXQgb25seSBVUkxzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHBhdHRlcm4gd2lsbCBiZSBpbmNsdWRlZFxuICpcbiAqIEBwYXJhbSBnbG9iIGdsb2ItbGlrZSBwYXR0ZXJuXG4gKiBAcGFyYW0gbGl0ZXJhbFF1ZXN0aW9uTWFyayB3aGVuIHRydWUsIGl0IHRlbGxzIHRoYXQgYD9gIGlzIHRyZWF0ZWQgYXMgYSBub3JtYWwgY2hhcmFjdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnbG9iVG9SZWdleChnbG9iOiBzdHJpbmcsIGxpdGVyYWxRdWVzdGlvbk1hcmsgPSBmYWxzZSk6IHN0cmluZyB7XG4gIGNvbnN0IHRvRXNjYXBlID0gbGl0ZXJhbFF1ZXN0aW9uTWFya1xuICAgID8gVE9fRVNDQVBFX0xJVEVSQUxfUU1cbiAgICA6IFRPX0VTQ0FQRV9XSUxEQ0FSRF9RTTtcbiAgY29uc3Qgc2VnbWVudHMgPSBnbG9iLnNwbGl0KCcvJykucmV2ZXJzZSgpO1xuICBsZXQgcmVnZXggPSAnJztcbiAgd2hpbGUgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHMucG9wKCk7XG4gICAgaWYgKHNlZ21lbnQgPT09ICcqKicpIHtcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZ2V4ICs9IFdJTERfT1BFTjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZ2V4ICs9ICcuKic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IHRvRXNjYXBlLnJlZHVjZShcbiAgICAgICAgKHNlZywgZXNjYXBlKSA9PiBzZWcucmVwbGFjZShlc2NhcGUucmVwbGFjZSwgZXNjYXBlLndpdGgpLFxuICAgICAgICBzZWdtZW50XG4gICAgICApO1xuICAgICAgcmVnZXggKz0gcHJvY2Vzc2VkO1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVnZXggKz0gJ1xcXFwvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlZ2V4O1xufVxuXG4vKipcbiAqIEZvciBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucywgcmV0dXJucyBhIG1hdGNoZXIgZnVuY3Rpb24uXG4gKlxuICogVGhlIG1hdGNoZXIgcmV0dXJucyB0cnVlIGZvciBnaXZlbiBVUkwgb25seSB3aGVuIEFOWSBvZiB0aGUgcG9zaXRpdmUgcGF0dGVybnMgaXMgbWF0Y2hlZCBhbmQgTk9ORSBvZiB0aGUgbmVnYXRpdmUgb25lcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JNYXRjaGVyKHBhdHRlcm5zOiBzdHJpbmdbXSk6ICh1cmw6IHN0cmluZykgPT4gYm9vbGVhbiB7XG4gIGNvbnN0IHByb2Nlc3NlZFBhdHRlcm5zOiB7XG4gICAgcG9zaXRpdmU6IGJvb2xlYW47XG4gICAgcmVnZXg6IFJlZ0V4cDtcbiAgfVtdID0gcHJvY2Vzc0dsb2JQYXR0ZXJucyhwYXR0ZXJucykubWFwKCh7IHBvc2l0aXZlLCByZWdleCB9KSA9PiAoe1xuICAgIHBvc2l0aXZlLFxuICAgIHJlZ2V4OiBuZXcgUmVnRXhwKHJlZ2V4KSxcbiAgfSkpO1xuXG4gIGNvbnN0IGluY2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcigoc3BlYykgPT4gc3BlYy5wb3NpdGl2ZSk7XG4gIGNvbnN0IGV4Y2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcigoc3BlYykgPT4gIXNwZWMucG9zaXRpdmUpO1xuXG4gIHJldHVybiAodXJsOiBzdHJpbmcpID0+XG4gICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKSAmJlxuICAgICFleGNsdWRlUGF0dGVybnMuc29tZSgocGF0dGVybikgPT4gcGF0dGVybi5yZWdleC50ZXN0KHVybCkpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zIGludG8gbGlzdCBvZiBSZWdFeHBzIHdpdGggaW5mb3JtYXRpb24gd2hldGhlciB0aGUgZ2xvYiBwYXR0ZXJuIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzR2xvYlBhdHRlcm5zKFxuICB1cmxzOiBzdHJpbmdbXVxuKTogeyBwb3NpdGl2ZTogYm9vbGVhbjsgcmVnZXg6IHN0cmluZyB9W10ge1xuICByZXR1cm4gdXJscy5tYXAoKHVybCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aXZlID0gIXVybC5zdGFydHNXaXRoKCchJyk7XG4gICAgdXJsID0gcG9zaXRpdmUgPyB1cmwgOiB1cmwuc3Vic3RyKDEpO1xuICAgIHJldHVybiB7IHBvc2l0aXZlLCByZWdleDogYF4ke2dsb2JUb1JlZ2V4KHVybCl9JGAgfTtcbiAgfSk7XG59XG4iXX0=