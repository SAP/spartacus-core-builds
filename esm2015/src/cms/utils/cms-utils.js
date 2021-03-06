import { PageType } from '../../model/cms.model';
export const CURRENT_CONTEXT_KEY = 'current';
/**
 *
 * Serializes the provided page context.
 * The pattern used for serialization is: `pageContext.type-pageContext.id`.
 *
 * @param pageContext to serialize
 * @param ignoreContentPageId if set to true, and the PageType is of type ContentPage, then the serialized page context will not contain the ID.
 * Otherwise, the page context if fully serialized.
 */
export function serializePageContext(pageContext, ignoreContentPageId) {
    if (!pageContext) {
        return CURRENT_CONTEXT_KEY;
    }
    if (ignoreContentPageId && pageContext.type === PageType.CONTENT_PAGE) {
        return `${pageContext.type}`;
    }
    return `${pageContext.type}-${pageContext.id}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY21zL3V0aWxzL2Ntcy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0FBRTdDOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxXQUF3QixFQUN4QixtQkFBNkI7SUFFN0IsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixPQUFPLG1CQUFtQixDQUFDO0tBQzVCO0lBRUQsSUFBSSxtQkFBbUIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckUsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM5QjtJQUVELE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9DT05URVhUX0tFWSA9ICdjdXJyZW50JztcblxuLyoqXG4gKlxuICogU2VyaWFsaXplcyB0aGUgcHJvdmlkZWQgcGFnZSBjb250ZXh0LlxuICogVGhlIHBhdHRlcm4gdXNlZCBmb3Igc2VyaWFsaXphdGlvbiBpczogYHBhZ2VDb250ZXh0LnR5cGUtcGFnZUNvbnRleHQuaWRgLlxuICpcbiAqIEBwYXJhbSBwYWdlQ29udGV4dCB0byBzZXJpYWxpemVcbiAqIEBwYXJhbSBpZ25vcmVDb250ZW50UGFnZUlkIGlmIHNldCB0byB0cnVlLCBhbmQgdGhlIFBhZ2VUeXBlIGlzIG9mIHR5cGUgQ29udGVudFBhZ2UsIHRoZW4gdGhlIHNlcmlhbGl6ZWQgcGFnZSBjb250ZXh0IHdpbGwgbm90IGNvbnRhaW4gdGhlIElELlxuICogT3RoZXJ3aXNlLCB0aGUgcGFnZSBjb250ZXh0IGlmIGZ1bGx5IHNlcmlhbGl6ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVQYWdlQ29udGV4dChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICBpZ25vcmVDb250ZW50UGFnZUlkPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgaWYgKCFwYWdlQ29udGV4dCkge1xuICAgIHJldHVybiBDVVJSRU5UX0NPTlRFWFRfS0VZO1xuICB9XG5cbiAgaWYgKGlnbm9yZUNvbnRlbnRQYWdlSWQgJiYgcGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFKSB7XG4gICAgcmV0dXJuIGAke3BhZ2VDb250ZXh0LnR5cGV9YDtcbiAgfVxuXG4gIHJldHVybiBgJHtwYWdlQ29udGV4dC50eXBlfS0ke3BhZ2VDb250ZXh0LmlkfWA7XG59XG4iXX0=