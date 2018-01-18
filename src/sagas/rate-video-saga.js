import { takeLatest, put, call } from 'redux-saga/effects';

import { RATE_VIDEO_REQUEST } from 'actions/types';
import { rateVideoSuccess, rateVideoFail } from 'actions';
import YoutubeApi from 'services/youtube-api';

function* rateVideo(action) {
    const { payload: { id, rating } } = action;
    const response = yield call(YoutubeApi.setVideoRating, id, rating);
    const { status } = response;

    if (status > 299) return yield put(rateVideoFail());

    return yield put(rateVideoSuccess(id, rating));
}

function* rateVideoSaga() {
    yield takeLatest(RATE_VIDEO_REQUEST, rateVideo);
}

export default rateVideoSaga;
