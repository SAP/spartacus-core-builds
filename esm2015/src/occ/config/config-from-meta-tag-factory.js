/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const OCC_BASE_URL_META_TAG_NAME = 'occ-backend-base-url';
/** @type {?} */
export const OCC_BASE_URL_META_TAG_PLACEHOLDER = 'OCC_BACKEND_BASE_URL_VALUE';
/** @type {?} */
export const MEDIA_BASE_URL_META_TAG_NAME = 'media-backend-base-url';
/** @type {?} */
export const MEDIA_BASE_URL_META_TAG_PLACEHOLDER = 'MEDIA_BACKEND_BASE_URL_VALUE';
/**
 * @param {?} meta
 * @return {?}
 */
export function occServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(OCC_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== OCC_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { occ: { baseUrl } } }
        : {};
}
/**
 * @param {?} meta
 * @return {?}
 */
export function mediaServerConfigFromMetaTagFactory(meta) {
    /** @type {?} */
    const baseUrl = getMetaTagContent(MEDIA_BASE_URL_META_TAG_NAME, meta);
    return baseUrl && baseUrl !== MEDIA_BASE_URL_META_TAG_PLACEHOLDER
        ? { backend: { media: { baseUrl } } }
        : {};
}
/**
 * @param {?} name
 * @param {?} meta
 * @return {?}
 */
function getMetaTagContent(name, meta) {
    /** @type {?} */
    const metaTag = meta.getTag(`name="${name}"`);
    return metaTag && metaTag.content;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZyb20tbWV0YS10YWctZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnL2NvbmZpZy1mcm9tLW1ldGEtdGFnLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsc0JBQXNCOztBQUNoRSxNQUFNLE9BQU8saUNBQWlDLEdBQUcsNEJBQTRCOztBQUM3RSxNQUFNLE9BQU8sNEJBQTRCLEdBQUcsd0JBQXdCOztBQUNwRSxNQUFNLE9BQU8sbUNBQW1DLEdBQzlDLDhCQUE4Qjs7Ozs7QUFFaEMsTUFBTSxVQUFVLGlDQUFpQyxDQUFDLElBQVU7O1VBQ3BELE9BQU8sR0FBRyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUM7SUFDbkUsT0FBTyxPQUFPLElBQUksT0FBTyxLQUFLLGlDQUFpQztRQUM3RCxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1FBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxtQ0FBbUMsQ0FBQyxJQUFVOztVQUN0RCxPQUFPLEdBQUcsaUJBQWlCLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDO0lBQ3JFLE9BQU8sT0FBTyxJQUFJLE9BQU8sS0FBSyxtQ0FBbUM7UUFDL0QsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ1QsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsSUFBVTs7VUFDM0MsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztJQUM3QyxPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgT0NDX0JBU0VfVVJMX01FVEFfVEFHX05BTUUgPSAnb2NjLWJhY2tlbmQtYmFzZS11cmwnO1xuZXhwb3J0IGNvbnN0IE9DQ19CQVNFX1VSTF9NRVRBX1RBR19QTEFDRUhPTERFUiA9ICdPQ0NfQkFDS0VORF9CQVNFX1VSTF9WQUxVRSc7XG5leHBvcnQgY29uc3QgTUVESUFfQkFTRV9VUkxfTUVUQV9UQUdfTkFNRSA9ICdtZWRpYS1iYWNrZW5kLWJhc2UtdXJsJztcbmV4cG9ydCBjb25zdCBNRURJQV9CQVNFX1VSTF9NRVRBX1RBR19QTEFDRUhPTERFUiA9XG4gICdNRURJQV9CQUNLRU5EX0JBU0VfVVJMX1ZBTFVFJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9jY1NlcnZlckNvbmZpZ0Zyb21NZXRhVGFnRmFjdG9yeShtZXRhOiBNZXRhKTogT2NjQ29uZmlnIHtcbiAgY29uc3QgYmFzZVVybCA9IGdldE1ldGFUYWdDb250ZW50KE9DQ19CQVNFX1VSTF9NRVRBX1RBR19OQU1FLCBtZXRhKTtcbiAgcmV0dXJuIGJhc2VVcmwgJiYgYmFzZVVybCAhPT0gT0NDX0JBU0VfVVJMX01FVEFfVEFHX1BMQUNFSE9MREVSXG4gICAgPyB7IGJhY2tlbmQ6IHsgb2NjOiB7IGJhc2VVcmwgfSB9IH1cbiAgICA6IHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFTZXJ2ZXJDb25maWdGcm9tTWV0YVRhZ0ZhY3RvcnkobWV0YTogTWV0YSk6IE9jY0NvbmZpZyB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRNZXRhVGFnQ29udGVudChNRURJQV9CQVNFX1VSTF9NRVRBX1RBR19OQU1FLCBtZXRhKTtcbiAgcmV0dXJuIGJhc2VVcmwgJiYgYmFzZVVybCAhPT0gTUVESUFfQkFTRV9VUkxfTUVUQV9UQUdfUExBQ0VIT0xERVJcbiAgICA/IHsgYmFja2VuZDogeyBtZWRpYTogeyBiYXNlVXJsIH0gfSB9XG4gICAgOiB7fTtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0YVRhZ0NvbnRlbnQobmFtZTogc3RyaW5nLCBtZXRhOiBNZXRhKSB7XG4gIGNvbnN0IG1ldGFUYWcgPSBtZXRhLmdldFRhZyhgbmFtZT1cIiR7bmFtZX1cImApO1xuICByZXR1cm4gbWV0YVRhZyAmJiBtZXRhVGFnLmNvbnRlbnQ7XG59XG4iXX0=