import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { ErrorModel } from '../../../../model/misc.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
import * as ɵngcc0 from '@angular/core';
export declare class BadRequestHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleBadPassword(request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleBadLoginResponse(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleValidationError(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleBadCartRequest(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected handleVoucherOperationError(_request: HttpRequest<any>, response: HttpErrorResponse): void;
    protected getErrors(response: HttpErrorResponse): ErrorModel[];
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BadRequestHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QuaGFuZGxlci5kLnRzIiwic291cmNlcyI6WyJiYWQtcmVxdWVzdC5oYW5kbGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hcHBsaWNhYmxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJhZFJlcXVlc3RIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gICAgcmVzcG9uc2VTdGF0dXM6IEh0dHBSZXNwb25zZVN0YXR1cztcbiAgICBoYW5kbGVFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBoYW5kbGVCYWRQYXNzd29yZChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBoYW5kbGVCYWRMb2dpblJlc3BvbnNlKF9yZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBoYW5kbGVWYWxpZGF0aW9uRXJyb3IoX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGhhbmRsZUJhZENhcnRSZXF1ZXN0KF9yZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCByZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBoYW5kbGVWb3VjaGVyT3BlcmF0aW9uRXJyb3IoX3JlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldEVycm9ycyhyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UpOiBFcnJvck1vZGVsW107XG4gICAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHk7XG59XG4iXX0=