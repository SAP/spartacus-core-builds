export const FORGOT_PASSWORD_EMAIL_REQUEST = '[User] Forgot Password Email Request';
export const FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS = '[User] Forgot Password Email Request Success';
export const FORGOT_PASSWORD_EMAIL_REQUEST_FAIL = '[User] Forgot Password Email Request Fail';
export class ForgotPasswordEmailRequest {
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST;
    }
}
export class ForgotPasswordEmailRequestFail {
    constructor(payload) {
        this.payload = payload;
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_FAIL;
    }
}
export class ForgotPasswordEmailRequestSuccess {
    constructor() {
        this.type = FORGOT_PASSWORD_EMAIL_REQUEST_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9mb3Jnb3QtcGFzc3dvcmQuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUN4QyxzQ0FBc0MsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FDaEQsOENBQThDLENBQUM7QUFDakQsTUFBTSxDQUFDLE1BQU0sa0NBQWtDLEdBQzdDLDJDQUEyQyxDQUFDO0FBRTlDLE1BQU0sT0FBTywwQkFBMEI7SUFFckMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLDZCQUE2QixDQUFDO0lBQ1QsQ0FBQztDQUN2QztBQUVELE1BQU0sT0FBTyw4QkFBOEI7SUFFekMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtDQUFrQyxDQUFDO0lBQ2pCLENBQUM7Q0FDcEM7QUFFRCxNQUFNLE9BQU8saUNBQWlDO0lBQTlDO1FBQ1csU0FBSSxHQUFHLHFDQUFxQyxDQUFDO0lBQ3hELENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUID1cbiAgJ1tVc2VyXSBGb3Jnb3QgUGFzc3dvcmQgRW1haWwgUmVxdWVzdCc7XG5leHBvcnQgY29uc3QgRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1RfU1VDQ0VTUyA9XG4gICdbVXNlcl0gRm9yZ290IFBhc3N3b3JkIEVtYWlsIFJlcXVlc3QgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgRk9SR09UX1BBU1NXT1JEX0VNQUlMX1JFUVVFU1RfRkFJTCA9XG4gICdbVXNlcl0gRm9yZ290IFBhc3N3b3JkIEVtYWlsIFJlcXVlc3QgRmFpbCc7XG5cbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBGT1JHT1RfUEFTU1dPUkRfRU1BSUxfUkVRVUVTVF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRFbWFpbFJlcXVlc3RTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEZPUkdPVF9QQVNTV09SRF9FTUFJTF9SRVFVRVNUX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0QWN0aW9uID1cbiAgfCBGb3Jnb3RQYXNzd29yZEVtYWlsUmVxdWVzdFxuICB8IEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0RmFpbFxuICB8IEZvcmdvdFBhc3N3b3JkRW1haWxSZXF1ZXN0U3VjY2VzcztcbiJdfQ==