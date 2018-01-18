import { takeLatest, call } from 'redux-saga/effects';

import { AUTH_CALLBACK_RECEIVED } from 'actions/types';
import GoogleAuthApi from 'services/google-auth-api';

function* authCallback(action) {
    const { payload: { accessToken, error } } = action;

    if (error) {
        window.localStorage.setItem('error', error);
        return window.close();
    }

    const response = yield call(GoogleAuthApi.verifyToken, accessToken);
    const { status, data: { aud } } = response;

    if (status > 299 || !GoogleAuthApi.syncVerifyClientId(aud)) {
        window.localStorage.setItem('error', error);
        return window.close();
    }

    window.localStorage.setItem('accessToken', accessToken);
    return window.close();
}

function* authCallbackSaga() {
    yield takeLatest(AUTH_CALLBACK_RECEIVED, authCallback);
}

export default authCallbackSaga;
