import { takeLatest, put, call } from 'redux-saga/effects';
import NProgress from 'nprogress';

import { SELECT_VIDEO_REQUEST } from 'actions/types';
import { selectVideoSuccess, selectVideoFail } from 'actions';
import YoutubeApi from 'services/youtube-api';

function* selectVideo(action) {
    const { payload: { id } } = action;

    NProgress.start();
    const response = yield call(YoutubeApi.getVideoById, id);
    NProgress.done();

    const { status, data } = response;

    if (status > 299) return yield put(selectVideoFail());

    const video = data.items.map(item => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description
    }))[0];

    return yield put(selectVideoSuccess(video));
}

function* selectVideoSaga() {
    yield takeLatest(SELECT_VIDEO_REQUEST, selectVideo);
}

export default selectVideoSaga;
