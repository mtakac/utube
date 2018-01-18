import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_VIDEO_RATING_REQUEST } from 'actions/types';
import { getVideoRatingSuccess, getVideoRatingFail } from 'actions';
import YoutubeApi from 'services/youtube-api';

function* getVideoRating(action) {
    const { payload: { id } } = action;
    const response = yield call(YoutubeApi.getVideoRating, id);
    const { status, data } = response;

    if (status > 299) return yield put(getVideoRatingFail());

    const { rating } = data.items[0];

    return yield put(getVideoRatingSuccess(rating));
}

function* getVideoRatingSaga() {
    yield takeLatest(GET_VIDEO_RATING_REQUEST, getVideoRating);
}

export default getVideoRatingSaga;
