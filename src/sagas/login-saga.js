import { takeLatest, put } from 'redux-saga/effects';

import { LOGIN_ATTEMPT } from 'actions/types';
import { loginSuccess, loginFail } from 'actions';

function* login() {
    const accessToken = window.localStorage.getItem('accessToken');
    const error = window.localStorage.getItem('error');

    if (error) {
        window.localStorage.removeItem('error');
        return yield put(loginFail(error));
    }

    window.localStorage.removeItem('accessToken');
    return yield put(loginSuccess(accessToken));
}

function* loginSaga() {
    yield takeLatest(LOGIN_ATTEMPT, login);
}

export default loginSaga;
