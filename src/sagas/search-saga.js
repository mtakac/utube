import { takeLatest, put, call } from 'redux-saga/effects';
import NProgress from 'nprogress';

import { SEARCH_REQUEST } from 'actions/types';
import { searchSuccess, searchFail, loadMoreVideosSuccess } from 'actions';
import YoutubeApi from 'services/youtube-api';

function* search(action) {
    const { payload: { q, nextPageToken } } = action;

    NProgress.start();
    const response = yield call(YoutubeApi.search, q, nextPageToken);
    NProgress.done();

    const { status, data } = response;

    if (status > 299) return yield put(searchFail());

    const results = data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        image: item.snippet.thumbnails.default.url
    }));

    if (nextPageToken) return yield put(loadMoreVideosSuccess(results, data.nextPageToken));

    return yield put(searchSuccess(results, data.nextPageToken));
}

function* searchSaga() {
    yield takeLatest(SEARCH_REQUEST, search);
}

export default searchSaga;
