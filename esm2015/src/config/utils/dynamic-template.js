export class DynamicTemplate {
    static resolve(templateString, templateVariables) {
        for (const variableLabel of Object.keys(templateVariables)) {
            const placeholder = new RegExp('\\${' + variableLabel + '}', 'g');
            templateString = templateString.replace(placeholder, templateVariables[variableLabel]);
        }
        return templateString;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NvbmZpZy91dGlscy9keW5hbWljLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBc0IsRUFBRSxpQkFBeUI7UUFDOUQsS0FBSyxNQUFNLGFBQWEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDMUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEUsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQ3JDLFdBQVcsRUFDWCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FDakMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNUZW1wbGF0ZSB7XG4gIHN0YXRpYyByZXNvbHZlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcsIHRlbXBsYXRlVmFyaWFibGVzOiBPYmplY3QpIHtcbiAgICBmb3IgKGNvbnN0IHZhcmlhYmxlTGFiZWwgb2YgT2JqZWN0LmtleXModGVtcGxhdGVWYXJpYWJsZXMpKSB7XG4gICAgICBjb25zdCBwbGFjZWhvbGRlciA9IG5ldyBSZWdFeHAoJ1xcXFwkeycgKyB2YXJpYWJsZUxhYmVsICsgJ30nLCAnZycpO1xuICAgICAgdGVtcGxhdGVTdHJpbmcgPSB0ZW1wbGF0ZVN0cmluZy5yZXBsYWNlKFxuICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZXNbdmFyaWFibGVMYWJlbF1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVN0cmluZztcbiAgfVxufVxuIl19