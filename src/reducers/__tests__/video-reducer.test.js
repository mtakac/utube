/* eslint-env mocha */
import { assert } from 'chai';

import videoReducer, { initialState } from 'reducers/video-reducer';
import {
    SELECT_VIDEO_REQUEST,
    SELECT_VIDEO_SUCCESS,
    SELECT_VIDEO_FAIL,
    GET_VIDEO_RATING_REQUEST,
    GET_VIDEO_RATING_SUCCESS,
    GET_VIDEO_RATING_FAIL
} from 'actions/types';

describe('Reducers', () => {

    describe('VideoReducer', () => {
        it('should return initial state', () => {
            assert.deepEqual(videoReducer(undefined, {}), initialState);
        });

        it('should handle SELECT_VIDEO_REQUEST', () => {
            const action = {
                type: SELECT_VIDEO_REQUEST,
                payload: { id: '1' }
            };

            const state = videoReducer(undefined, action);
            const expectedState = { ...initialState, loading: true };

            assert.deepEqual(state, expectedState);
        });

        it('should handle SELECT_VIDEO_SUCCESS', () => {
            const action = {
                type: SELECT_VIDEO_SUCCESS,
                payload: {
                    video: {
                        id: '1',
                        title: 'Video title',
                        description: 'Video description'
                    }
                }
            };

            const oldState = { ...initialState, loading: true };
            const state = videoReducer(oldState, action);
            const expectedState = {
                ...oldState,
                data: {
                    id: '1',
                    title: 'Video title',
                    description: 'Video description'
                },
                loading: false
            };

            assert.deepEqual(state, expectedState);
        });

        it('should handle SELECT_VIDEO_FAIL', () => {
            const action = { type: SELECT_VIDEO_FAIL };
            const oldState = { ...initialState, loading: true };
            const state = videoReducer(oldState, action);
            const expectedState = { ...oldState, loading: false };

            assert.deepEqual(state, expectedState);
        });

        it('should handle GET_VIDEO_RATING_REQUEST', () => {
            const action = {
                type: GET_VIDEO_RATING_REQUEST,
                payload: { id: '1', rating: 'dislike' }
            };

            const oldState = { ...initialState, rating: null };
            const state = videoReducer(oldState, action);
            const expectedState = {
                ...oldState,
                loading: true
            };

            assert.deepEqual(state, expectedState);
        });

        it('should handle GET_VIDEO_RATING_SUCCESS', () => {
            const action = {
                type: GET_VIDEO_RATING_SUCCESS,
                payload: { rating: 'dislike' }
            };

            const oldState = {
                ...initialState,
                data: {
                    id: '1',
                    title: 'Title 1',
                    description: 'Description 1'
                },
                rating: 'like',
                loading: true
            };

            const state = videoReducer(oldState, action);
            const expectedState = {
                ...oldState,
                rating: 'dislike',
                loading: false
            };

            assert.deepEqual(state, expectedState);
        });

        it('should handle GET_VIDEO_RATING_FAIL', () => {
            const action = { type: GET_VIDEO_RATING_FAIL };
            const oldState = {
                ...initialState,
                rating: 'like',
                loading: true
            };

            const state = videoReducer(oldState, action);
            const expectedState = {
                ...oldState,
                loading: false
            };

            assert.deepEqual(state, expectedState);
        });
    });
});
