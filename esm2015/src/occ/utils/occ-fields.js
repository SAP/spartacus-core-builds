import { deepMerge, isObject } from '../../config/utils/deep-merge';
/**
 * Merge occ fields parameters
 *
 * @param fields Fields definition as string or object
 */
export function mergeFields(fields) {
    const parsedFields = fields.map((f) => typeof f === 'string' ? parseFields(f) : f);
    const mergedFields = optimizeFields(deepMerge({}, ...parsedFields));
    return stringifyFields(mergedFields);
}
/**
 * Optimize fields definition by removing not needed groups
 *
 * @param fields
 */
export function optimizeFields(fields = {}) {
    const keys = Object.keys(fields);
    if (keys.includes('FULL')) {
        delete fields['DEFAULT'];
        delete fields['BASIC'];
    }
    else if (keys.includes('DEFAULT')) {
        delete fields['BASIC'];
    }
    Object.keys(fields).forEach((key) => {
        fields[key] = optimizeFields(fields[key]);
    });
    return fields;
}
/**
 * Parse string field definition to an AST object
 *
 * @param fields Fields string definition
 * @param startIndex Used for recurrence
 */
export function parseFields(fields, startIndex = 0) {
    const parsedFields = {};
    let i = startIndex;
    while (i < fields.length) {
        if (fields[i] === ',') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            startIndex = i + 1;
        }
        else if (fields[i] === '(') {
            const subFields = parseFields(fields, i + 1);
            if (Array.isArray(subFields)) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = subFields[0];
                startIndex = subFields[1];
                i = startIndex - 1;
            }
            else {
                return parsedFields;
            }
        }
        else if (fields[i] === ')') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            return [parsedFields, i + 1];
        }
        i++;
    }
    if (startIndex < fields.length) {
        parsedFields[fields.substr(startIndex, i - startIndex)] = {};
    }
    return parsedFields;
}
/**
 * Convert AST object fields definition to string representation
 *
 * @param fields
 */
export function stringifyFields(fields) {
    return Object.keys(fields)
        .map((key) => {
        const subFields = stringifyFields(fields[key]);
        return subFields ? `${key}(${subFields})` : key;
    })
        .join(',');
}
/**
 * Extract part of the object described by fields definition
 *
 * @param data
 * @param fields
 */
export function extractFields(data, fields) {
    const parsedFields = typeof fields === 'string' ? parseFields(fields) : fields;
    return getObjectPart(data, parsedFields);
}
function getObjectPart(data, fields) {
    if (!isObject(data)) {
        return data;
    }
    const keys = Object.keys(fields);
    if (keys.length === 0 ||
        // we should not extract parts of the object with ambiguous fields definitions
        keys.find((el) => el === 'BASIC' || el === 'DEFAULT' || el === 'FULL')) {
        return data;
    }
    const result = {};
    keys.forEach((key) => {
        if (data.hasOwnProperty(key)) {
            result[key] = getObjectPart(data[key], fields[key]);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy91dGlscy9vY2MtZmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFcEU7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsTUFBMkI7SUFDckQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ3BDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNDLENBQUM7SUFDRixNQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDcEUsT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLFNBQWlCLEVBQUU7SUFDaEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEI7U0FBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEI7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFB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QUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUksSUFBTyxFQUFFLE1BQWM7SUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVqQyxJQUNFLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNqQiw4RUFBOEU7UUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQU8sSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFDdEU7UUFDQSxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBTyxDQUFDO0lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwTWVyZ2UsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG4vKipcbiAqIE1lcmdlIG9jYyBmaWVsZHMgcGFyYW1ldGVyc1xuICpcbiAqIEBwYXJhbSBmaWVsZHMgRmllbGRzIGRlZmluaXRpb24gYXMgc3RyaW5nIG9yIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VGaWVsZHMoZmllbGRzOiAoc3RyaW5nIHwgb2JqZWN0KVtdKTogc3RyaW5nIHtcbiAgY29uc3QgcGFyc2VkRmllbGRzID0gZmllbGRzLm1hcCgoZikgPT5cbiAgICB0eXBlb2YgZiA9PT0gJ3N0cmluZycgPyBwYXJzZUZpZWxkcyhmKSA6IGZcbiAgKTtcbiAgY29uc3QgbWVyZ2VkRmllbGRzID0gb3B0aW1pemVGaWVsZHMoZGVlcE1lcmdlKHt9LCAuLi5wYXJzZWRGaWVsZHMpKTtcbiAgcmV0dXJuIHN0cmluZ2lmeUZpZWxkcyhtZXJnZWRGaWVsZHMpO1xufVxuXG4vKipcbiAqIE9wdGltaXplIGZpZWxkcyBkZWZpbml0aW9uIGJ5IHJlbW92aW5nIG5vdCBuZWVkZWQgZ3JvdXBzXG4gKlxuICogQHBhcmFtIGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVGaWVsZHMoZmllbGRzOiBvYmplY3QgPSB7fSk6IG9iamVjdCB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpO1xuICBpZiAoa2V5cy5pbmNsdWRlcygnRlVMTCcpKSB7XG4gICAgZGVsZXRlIGZpZWxkc1snREVGQVVMVCddO1xuICAgIGRlbGV0ZSBmaWVsZHNbJ0JBU0lDJ107XG4gIH0gZWxzZSBpZiAoa2V5cy5pbmNsdWRlcygnREVGQVVMVCcpKSB7XG4gICAgZGVsZXRlIGZpZWxkc1snQkFTSUMnXTtcbiAgfVxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGZpZWxkc1trZXldID0gb3B0aW1pemVGaWVsZHMoZmllbGRzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBQYXJzZSBzdHJpbmcgZmllbGQgZGVmaW5pdGlvbiB0byBhbiBBU1Qgb2JqZWN0XG4gKlxuICogQHBhcmFtIGZpZWxkcyBGaWVsZHMgc3RyaW5nIGRlZmluaXRpb25cbiAqIEBwYXJhbSBzdGFydEluZGV4IFVzZWQgZm9yIHJlY3VycmVuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmllbGRzKFxuICBmaWVsZHM6IHN0cmluZyxcbiAgc3RhcnRJbmRleCA9IDBcbik6IFtvYmplY3QsIG51bWJlcl0gfCBvYmplY3Qge1xuICBjb25zdCBwYXJzZWRGaWVsZHMgPSB7fTtcblxuICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gIHdoaWxlIChpIDwgZmllbGRzLmxlbmd0aCkge1xuICAgIGlmIChmaWVsZHNbaV0gPT09ICcsJykge1xuICAgICAgaWYgKGkgPiBzdGFydEluZGV4KSB7XG4gICAgICAgIHBhcnNlZEZpZWxkc1tmaWVsZHMuc3Vic3RyKHN0YXJ0SW5kZXgsIGkgLSBzdGFydEluZGV4KV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0SW5kZXggPSBpICsgMTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkc1tpXSA9PT0gJygnKSB7XG4gICAgICBjb25zdCBzdWJGaWVsZHMgPSBwYXJzZUZpZWxkcyhmaWVsZHMsIGkgKyAxKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1YkZpZWxkcykpIHtcbiAgICAgICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHN1YkZpZWxkc1swXTtcbiAgICAgICAgc3RhcnRJbmRleCA9IHN1YkZpZWxkc1sxXTtcbiAgICAgICAgaSA9IHN0YXJ0SW5kZXggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZEZpZWxkcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkc1tpXSA9PT0gJyknKSB7XG4gICAgICBpZiAoaSA+IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtwYXJzZWRGaWVsZHMsIGkgKyAxXTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgaWYgKHN0YXJ0SW5kZXggPCBmaWVsZHMubGVuZ3RoKSB7XG4gICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZEZpZWxkcztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IEFTVCBvYmplY3QgZmllbGRzIGRlZmluaXRpb24gdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gKlxuICogQHBhcmFtIGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RmllbGRzKGZpZWxkczogb2JqZWN0KTogc3RyaW5nIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkcylcbiAgICAubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkcyA9IHN0cmluZ2lmeUZpZWxkcyhmaWVsZHNba2V5XSk7XG4gICAgICByZXR1cm4gc3ViRmllbGRzID8gYCR7a2V5fSgke3N1YkZpZWxkc30pYCA6IGtleTtcbiAgICB9KVxuICAgIC5qb2luKCcsJyk7XG59XG5cbi8qKlxuICogRXh0cmFjdCBwYXJ0IG9mIHRoZSBvYmplY3QgZGVzY3JpYmVkIGJ5IGZpZWxkcyBkZWZpbml0aW9uXG4gKlxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSBmaWVsZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGaWVsZHM8VD4oZGF0YTogVCwgZmllbGRzOiBzdHJpbmcgfCBvYmplY3QpOiBUIHtcbiAgY29uc3QgcGFyc2VkRmllbGRzID1cbiAgICB0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJyA/IHBhcnNlRmllbGRzKGZpZWxkcykgOiBmaWVsZHM7XG4gIHJldHVybiBnZXRPYmplY3RQYXJ0PFQ+KGRhdGEsIHBhcnNlZEZpZWxkcyk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdFBhcnQ8VD4oZGF0YTogVCwgZmllbGRzOiBvYmplY3QpOiBUIHtcbiAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkcyk7XG5cbiAgaWYgKFxuICAgIGtleXMubGVuZ3RoID09PSAwIHx8XG4gICAgLy8gd2Ugc2hvdWxkIG5vdCBleHRyYWN0IHBhcnRzIG9mIHRoZSBvYmplY3Qgd2l0aCBhbWJpZ3VvdXMgZmllbGRzIGRlZmluaXRpb25zXG4gICAga2V5cy5maW5kKChlbCkgPT4gZWwgPT09ICdCQVNJQycgfHwgZWwgPT09ICdERUZBVUxUJyB8fCBlbCA9PT0gJ0ZVTEwnKVxuICApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHt9IGFzIFQ7XG5cbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGdldE9iamVjdFBhcnQoZGF0YVtrZXldLCBmaWVsZHNba2V5XSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19