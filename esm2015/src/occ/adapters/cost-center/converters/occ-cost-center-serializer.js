import { Injectable } from '@angular/core';
export class OccCostCenterSerializer {
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign(Object.assign({}, source), { activeFlag: source.active });
            delete target.active;
        }
        return target;
    }
}
OccCostCenterSerializer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvc3QtY2VudGVyLXNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY29zdC1jZW50ZXIvY29udmVydGVycy9vY2MtY29zdC1jZW50ZXItc2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsT0FBTyxDQUFDLE1BQWtCLEVBQUUsTUFBdUI7UUFDakQsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sbUNBQ0EsTUFBYyxLQUNsQixVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FDMUIsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN0QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQVpGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvb3JnLXVuaXQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ29zdENlbnRlclNlcmlhbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8Q29zdENlbnRlciwgT2NjLkNvc3RDZW50ZXI+IHtcbiAgY29udmVydChzb3VyY2U6IENvc3RDZW50ZXIsIHRhcmdldD86IE9jYy5Db3N0Q2VudGVyKTogT2NjLkNvc3RDZW50ZXIge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0ge1xuICAgICAgICAuLi4oc291cmNlIGFzIGFueSksXG4gICAgICAgIGFjdGl2ZUZsYWc6IHNvdXJjZS5hY3RpdmUsXG4gICAgICB9O1xuICAgICAgZGVsZXRlIHRhcmdldC5hY3RpdmU7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbn1cbiJdfQ==