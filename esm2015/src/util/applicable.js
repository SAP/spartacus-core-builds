/**
 * Helper logic to resolve best matching Applicable
 *
 * Finding best match is a two step process:
 * 1. Find all matching applicables
 *    - all applicables for which hasMatch(...matchParams) will return true
 *    - all applicables without hasMatch method (implicit always match)
 * 2. Find the applicable with highest priority
 *    - applicable with highest getPriority(...priorityParams) will win
 *    - applicable without getPriority method is treated as Priotity.NORMAL or 0
 *    - applicables with the same priority are sorted by order of providers, the applicable that was provided later wins
 *
 * @param applicables - array or applicable-like instancese
 * @param matchParams - array of parameters passed for hasMatch calls
 * @param priorityParams - array of parameters passed for getPriority calls
 */
export function resolveApplicable(applicables = [], matchParams = [], priorityParams = []) {
    const matchedApplicables = applicables.filter((applicable) => !applicable.hasMatch || applicable.hasMatch(...matchParams));
    if (matchedApplicables.length < 2) {
        return matchedApplicables[0];
    }
    let lastPriority = -Infinity;
    return matchedApplicables.reduce((acc, curr) => {
        const currPriority = curr.getPriority
            ? curr.getPriority(...priorityParams)
            : 0 /* NORMAL */;
        if (lastPriority > currPriority) {
            return acc;
        }
        lastPriority = currPriority;
        return curr;
    }, undefined);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2FwcGxpY2FibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsY0FBbUIsRUFBRSxFQUNyQixjQUFxQixFQUFFLEVBQ3ZCLGlCQUF3QixFQUFFO0lBRTFCLE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FDM0MsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQzVFLENBQUM7SUFFRixJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5QjtJQUVELElBQUksWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzdCLE9BQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzdDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLENBQUMsZUFBZ0IsQ0FBQztRQUNwQixJQUFJLFlBQVksR0FBRyxZQUFZLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELFlBQVksR0FBRyxZQUFZLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbnVtIFByaW9yaXR5IHtcbiAgLyoqXG4gICAqIFVzZWQgYXMgZmFsbGJhY2ssIHdoZW4gdGhlcmUgaXMgbm8gb3RoZXIgbWF0Y2hlc1xuICAgKi9cbiAgRkFMTEJBQ0sgPSAtNTAsXG4gIC8qKlxuICAgKiBVc2VkIG1haW5seSBpbiBsaWJyYXJpZXMsIGVhc3kgb3ZlcnJpZGFibGVcbiAgICovXG4gIExPVyA9IC0xMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgcHJpb3JpdHlcbiAgICovXG4gIE5PUk1BTCA9IDAsXG4gIC8qKlxuICAgKiBIaWdoIHByaW9yaXR5IGZvciBtYXRjaGVzIHRoYXQgc2hvdWxkIHRha2UgcHJlY2VkZW5jZVxuICAgKi9cbiAgSElHSCA9IDEwLFxufVxuXG4vKipcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBpbXBsZW1lbnRpbmcgYXBwbGljYWJsZXMgaW4gYSBjb25zaXN0ZW50IHdheVxuICpcbiAqIEFwcGxpY2FibGVzIGFyZSBtYWlubHkgdXNlZCB0byBmaW5kIGJlc3QgbWF0Y2hpbmcgb25lIGZyb20gbXVsdGkgcHJvdmlkZWRcbiAqIGNsYXNzZXMsIGxpa2UgaGFuZGxlcnMsIHJlc29sdmVycywgZXRjLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2FibGUge1xuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFwcGxpY2FibGUgY2FuIGJlIHVzZWQgdG8gaGFuZGxlIHNwZWNpZmllZCBjb25kaXRpb25cbiAgICovXG4gIGhhc01hdGNoPyguLi5wYXJhbXMpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByaW9yaXR5IG9yIHNjb3JlIGZvciBzcGVjaWZpZWQgYXBwbGljYWJsZS5cbiAgICpcbiAgICogSWYgbXVsdGlwbGUgYXBwbGljYWJsZXMgY2FuIGJlIGFwcGxpZWQgdG8gc3BlY2lmaWVkIGNvbmRpdGlvbiwgdGhlIG9uZVxuICAgKiB3aXRoIGhpZ2hlc3QgcHJpb3JpdHkgb3Igc2NvcmUgd2lucy5cbiAgICovXG4gIGdldFByaW9yaXR5PyguLi5wYXJhbXMpOiBQcmlvcml0eSB8IG51bWJlcjtcbn1cblxuLyoqXG4gKiBIZWxwZXIgbG9naWMgdG8gcmVzb2x2ZSBiZXN0IG1hdGNoaW5nIEFwcGxpY2FibGVcbiAqXG4gKiBGaW5kaW5nIGJlc3QgbWF0Y2ggaXMgYSB0d28gc3RlcCBwcm9jZXNzOlxuICogMS4gRmluZCBhbGwgbWF0Y2hpbmcgYXBwbGljYWJsZXNcbiAqICAgIC0gYWxsIGFwcGxpY2FibGVzIGZvciB3aGljaCBoYXNNYXRjaCguLi5tYXRjaFBhcmFtcykgd2lsbCByZXR1cm4gdHJ1ZVxuICogICAgLSBhbGwgYXBwbGljYWJsZXMgd2l0aG91dCBoYXNNYXRjaCBtZXRob2QgKGltcGxpY2l0IGFsd2F5cyBtYXRjaClcbiAqIDIuIEZpbmQgdGhlIGFwcGxpY2FibGUgd2l0aCBoaWdoZXN0IHByaW9yaXR5XG4gKiAgICAtIGFwcGxpY2FibGUgd2l0aCBoaWdoZXN0IGdldFByaW9yaXR5KC4uLnByaW9yaXR5UGFyYW1zKSB3aWxsIHdpblxuICogICAgLSBhcHBsaWNhYmxlIHdpdGhvdXQgZ2V0UHJpb3JpdHkgbWV0aG9kIGlzIHRyZWF0ZWQgYXMgUHJpb3RpdHkuTk9STUFMIG9yIDBcbiAqICAgIC0gYXBwbGljYWJsZXMgd2l0aCB0aGUgc2FtZSBwcmlvcml0eSBhcmUgc29ydGVkIGJ5IG9yZGVyIG9mIHByb3ZpZGVycywgdGhlIGFwcGxpY2FibGUgdGhhdCB3YXMgcHJvdmlkZWQgbGF0ZXIgd2luc1xuICpcbiAqIEBwYXJhbSBhcHBsaWNhYmxlcyAtIGFycmF5IG9yIGFwcGxpY2FibGUtbGlrZSBpbnN0YW5jZXNlXG4gKiBAcGFyYW0gbWF0Y2hQYXJhbXMgLSBhcnJheSBvZiBwYXJhbWV0ZXJzIHBhc3NlZCBmb3IgaGFzTWF0Y2ggY2FsbHNcbiAqIEBwYXJhbSBwcmlvcml0eVBhcmFtcyAtIGFycmF5IG9mIHBhcmFtZXRlcnMgcGFzc2VkIGZvciBnZXRQcmlvcml0eSBjYWxsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFwcGxpY2FibGU8VCBleHRlbmRzIEFwcGxpY2FibGU+KFxuICBhcHBsaWNhYmxlczogVFtdID0gW10sXG4gIG1hdGNoUGFyYW1zOiBhbnlbXSA9IFtdLFxuICBwcmlvcml0eVBhcmFtczogYW55W10gPSBbXVxuKTogVCB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1hdGNoZWRBcHBsaWNhYmxlcyA9IGFwcGxpY2FibGVzLmZpbHRlcihcbiAgICAoYXBwbGljYWJsZSkgPT4gIWFwcGxpY2FibGUuaGFzTWF0Y2ggfHwgYXBwbGljYWJsZS5oYXNNYXRjaCguLi5tYXRjaFBhcmFtcylcbiAgKTtcblxuICBpZiAobWF0Y2hlZEFwcGxpY2FibGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gbWF0Y2hlZEFwcGxpY2FibGVzWzBdO1xuICB9XG5cbiAgbGV0IGxhc3RQcmlvcml0eSA9IC1JbmZpbml0eTtcbiAgcmV0dXJuIG1hdGNoZWRBcHBsaWNhYmxlcy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgIGNvbnN0IGN1cnJQcmlvcml0eSA9IGN1cnIuZ2V0UHJpb3JpdHlcbiAgICAgID8gY3Vyci5nZXRQcmlvcml0eSguLi5wcmlvcml0eVBhcmFtcylcbiAgICAgIDogUHJpb3JpdHkuTk9STUFMO1xuICAgIGlmIChsYXN0UHJpb3JpdHkgPiBjdXJyUHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIGxhc3RQcmlvcml0eSA9IGN1cnJQcmlvcml0eTtcbiAgICByZXR1cm4gY3VycjtcbiAgfSwgdW5kZWZpbmVkKTtcbn1cbiJdfQ==