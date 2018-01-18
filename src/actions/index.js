import * as types from 'actions/types';

/** Search actions */
export const searchRequest = (q, nextPageToken) => ({
    type: types.SEARCH_REQUEST,
    payload: { q, nextPageToken }
});

export const searchSuccess = (results, nextPageToken) => ({
    type: types.SEARCH_SUCCESS,
    payload: { results, nextPageToken }
});

export const searchFail = () => ({
    type: types.SEARCH_FAIL
});

/** Select video actions */
export const selectVideoRequest = id => ({
    type: types.SELECT_VIDEO_REQUEST,
    payload: { id }
});

export const selectVideoSuccess = video => ({
    type: types.SELECT_VIDEO_SUCCESS,
    payload: { video }
});

export const selectVideoFail = () => ({
    type: types.SELECT_VIDEO_FAIL
});

/** Load more videos actions */
export const loadMoreVideosSuccess = (results, nextPageToken) => ({
    type: types.LOAD_MORE_VIDEOS_SUCCESS,
    payload: { results, nextPageToken }
});

/** Authorization actions */
export const authCallbackReceived = (accessToken, error) => ({
    type: types.AUTH_CALLBACK_RECEIVED,
    payload: { accessToken, error }
});

export const loginAttempt = () => ({
    type: types.LOGIN_ATTEMPT
});

export const loginSuccess = accessToken => ({
    type: types.LOGIN_SUCCESS,
    payload: { accessToken }
});

export const loginFail = () => ({
    type: types.LOGIN_FAIL
});

export const logout = () => ({
    type: types.LOGOUT
});

/** Get video rating actions */
export const getVideoRatingRequest = id => ({
    type: types.GET_VIDEO_RATING_REQUEST,
    payload: { id }
});

export const getVideoRatingSuccess = rating => ({
    type: types.GET_VIDEO_RATING_SUCCESS,
    payload: { rating }
});

export const getVideoRatingFail = () => ({
    type: types.GET_VIDEO_RATING_FAIL
});

/** Rate video actions */
export const rateVideoRequest = (id, rating) => ({
    type: types.RATE_VIDEO_REQUEST,
    payload: { id, rating }
});

export const rateVideoSuccess = (id, rating) => ({
    type: types.RATE_VIDEO_SUCCESS,
    payload: { id, rating }
});

export const rateVideoFail = () => ({
    type: types.RATE_VIDEO_FAIL
});
