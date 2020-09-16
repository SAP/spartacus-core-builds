export const ROUTER_GO = '[Router] Go';
export const ROUTER_GO_BY_URL = '[Router] Go By Url';
export const ROUTER_BACK = '[Router] Back';
export const ROUTER_FORWARD = '[Router] Forward';
export class RouteGoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ROUTER_GO;
    }
}
export class RouteGoByUrlAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ROUTER_GO_BY_URL;
    }
}
export class RouteBackAction {
    constructor() {
        this.type = ROUTER_BACK;
    }
}
export class RouteForwardAction {
    constructor() {
        this.type = ROUTER_FORWARD;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvc3RvcmUvYWN0aW9ucy9yb3V0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFDdkMsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7QUFDckQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztBQUMzQyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUM7QUFFakQsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFDUyxPQUlOO1FBSk0sWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRyxTQUFTLENBQUM7SUFPdkIsQ0FBQztDQUNMO0FBRUQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDSSxDQUFDO0NBQ3ZDO0FBRUQsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDVyxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQzlCLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFDVyxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ2pDLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgUk9VVEVSX0dPID0gJ1tSb3V0ZXJdIEdvJztcbmV4cG9ydCBjb25zdCBST1VURVJfR09fQllfVVJMID0gJ1tSb3V0ZXJdIEdvIEJ5IFVybCc7XG5leHBvcnQgY29uc3QgUk9VVEVSX0JBQ0sgPSAnW1JvdXRlcl0gQmFjayc7XG5leHBvcnQgY29uc3QgUk9VVEVSX0ZPUldBUkQgPSAnW1JvdXRlcl0gRm9yd2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZUdvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJPVVRFUl9HTztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHBhdGg6IHN0cmluZ1tdO1xuICAgICAgcXVlcnk/OiBvYmplY3Q7XG4gICAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzO1xuICAgIH1cbiAgKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUm91dGVHb0J5VXJsQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJPVVRFUl9HT19CWV9VUkw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZUJhY2tBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUk9VVEVSX0JBQ0s7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZUZvcndhcmRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUk9VVEVSX0ZPUldBUkQ7XG59XG5cbmV4cG9ydCB0eXBlIFJvdXRpbmdBY3Rpb24gPVxuICB8IFJvdXRlR29BY3Rpb25cbiAgfCBSb3V0ZUdvQnlVcmxBY3Rpb25cbiAgfCBSb3V0ZUJhY2tBY3Rpb25cbiAgfCBSb3V0ZUZvcndhcmRBY3Rpb247XG4iXX0=