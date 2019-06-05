import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction } from '../../../state/utils/loader/loader.action';
import { OpenIdToken } from '../../models/kyma-token-types.model';
export declare const LOAD_OPEN_ID_TOKEN = "[Kyma] Load Open ID Token";
export declare const LOAD_OPEN_ID_TOKEN_FAIL = "[Kyma] Load Open ID Token Fail";
export declare const LOAD_OPEN_ID_TOKEN_SUCCESS = "[Kyma] Load Open ID Token Success";
export declare class LoadOpenIdToken extends LoaderLoadAction {
    payload: {
        username: string;
        password: string;
    };
    readonly type = "[Kyma] Load Open ID Token";
    constructor(payload: {
        username: string;
        password: string;
    });
}
export declare class LoadOpenIdTokenFail extends LoaderFailAction {
    payload: any;
    readonly type = "[Kyma] Load Open ID Token Fail";
    constructor(payload: any);
}
export declare class LoadOpenIdTokenSuccess extends LoaderSuccessAction {
    payload: OpenIdToken;
    readonly type = "[Kyma] Load Open ID Token Success";
    constructor(payload: OpenIdToken);
}
export declare type OpenIdTokenActions = LoadOpenIdToken | LoadOpenIdTokenFail | LoadOpenIdTokenSuccess;