import { fork } from 'redux-saga/effects'; // eslint-disable-line no-unused-vars

import searchSaga from 'sagas/search-saga';
import selectVideoSaga from 'sagas/select-video-saga';
import authCallbackSaga from 'sagas/auth-callback-saga';
import loginSaga from 'sagas/login-saga';
import getVideoRatingSaga from 'sagas/get-video-rating-saga';
import rateVideoSaga from 'sagas/rate-video-saga';

export default function* combineSagas() {
    yield [
        fork(searchSaga),
        fork(selectVideoSaga),
        fork(authCallbackSaga),
        fork(loginSaga),
        fork(getVideoRatingSaga),
        fork(rateVideoSaga)
    ];
}
