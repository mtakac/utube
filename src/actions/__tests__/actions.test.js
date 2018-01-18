/* eslint-env mocha */
import { assert } from 'chai';

import * as actions from 'actions';
import * as types from 'actions/types';

describe('Actions', () => {
    const setup = (action, args) => {
        if (args) {
            return {
                action: actions[action](...Object.values(args)),
                args
            };
        }

        return {
            action: actions[action](),
            args
        };
    };

    const payloads = {
        /** Search actions */
        searchRequest: {
            type: types.SEARCH_REQUEST,
            payload: {
                q: 'Search for this!',
                nextPageToken: 'xyz'
            }
        },
        searchSuccess: {
            type: types.SEARCH_SUCCESS,
            payload: {
                results: [{ id: '1' }],
                nextPageToken: 'xyz'
            }
        },
        searchFail: {
            type: types.SEARCH_FAIL
        },

        /** Select video actions */
        selectVideoRequest: {
            type: types.SELECT_VIDEO_REQUEST,
            payload: {
                id: '1'
            }
        },
        selectVideoSuccess: {
            type: types.SELECT_VIDEO_SUCCESS,
            payload: {
                video: {
                    id: '1',
                    title: 'Video title',
                    description: 'Video description'
                }
            }
        },
        selectVideoFail: {
            type: types.SELECT_VIDEO_FAIL
        },

        /** Load more videos */
        loadMoreVideosSuccess: {
            type: types.LOAD_MORE_VIDEOS_SUCCESS,
            payload: {
                results: [{
                    id: '2',
                    title: 'Video title',
                    image: 'http://www.image.com'
                }],
                nextPageToken: 'xzz'
            }
        },

        /** Authorization actions */
        authCallbackReceived: {
            type: types.AUTH_CALLBACK_RECEIVED,
            payload: {
                accessToken: 'xyz', error: null
            }
        },
        loginAttempt: {
            type: types.LOGIN_ATTEMPT
        },
        loginSuccess: {
            type: types.LOGIN_SUCCESS,
            payload: { accessToken: 'xyz' }
        },
        loginFail: {
            type: types.LOGIN_FAIL
        },
        logout: {
            type: types.LOGOUT
        },

        /** Get video rating actions */
        getVideoRatingRequest: {
            type: types.GET_VIDEO_RATING_REQUEST,
            payload: { id: '1' }
        },
        getVideoRatingSuccess: {
            type: types.GET_VIDEO_RATING_SUCCESS,
            payload: { rating: 'like' }
        },
        getVideoRatingFail: {
            type: types.GET_VIDEO_RATING_FAIL
        },

        /** Rate video actions */
        rateVideoRequest: {
            type: types.RATE_VIDEO_REQUEST,
            payload: { id: '1', rating: 'none' }
        },
        rateVideoSuccess: {
            type: types.RATE_VIDEO_SUCCESS,
            payload: { id: '1', rating: 'like' }
        },
        rateVideoFail: {
            type: types.RATE_VIDEO_FAIL
        }
    };

    Object.keys(actions).forEach((actionName) => {
        const actionToTest = payloads[actionName];

        if (!actionToTest) {
            return;
        }

        it(`should create ${actionName}`, () => {
            const { type, payload } = actionToTest;
            const { action } = setup(actionName, payload);
            const expectedAction = payload ? { type, payload } : { type };

            assert.deepEqual(action, expectedAction);
        });
    });
});
