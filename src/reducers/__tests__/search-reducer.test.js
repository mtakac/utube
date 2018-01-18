/* eslint-env mocha */
import { assert } from 'chai';

import searchReducer, { initialState } from 'reducers/search-reducer';
import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    LOAD_MORE_VIDEOS_SUCCESS
} from 'actions/types';

describe('Reducers', () => {

    describe('SeachReducer', () => {
        it('should return initial state', () => {
            assert.deepEqual(searchReducer(undefined, {}), initialState);
        });

        it('should handle SEARCH_REQUEST', () => {
            const action = {
                type: SEARCH_REQUEST,
                payload: { q: 'Search for this!', nextPageToken: null }
            };

            const state = searchReducer(undefined, action);
            const expectedState = { ...initialState, q: 'Search for this!', loading: true };

            assert.deepEqual(state, expectedState);
        });

        it('should handle SEARCH_REQUEST with nextPageToken', () => {
            const action = {
                type: SEARCH_REQUEST,
                payload: { q: 'Search for this!', nextPageToken: '2' }
            };

            const oldState = {
                ...initialState,
                q: 'Search for this!',
                nextPageToken: '2',
                results: [{ id: '1' }]
            };

            const state = searchReducer(oldState, action);
            const expectedState = { ...oldState, loading: true };

            assert.deepEqual(state, expectedState);
        });

        it('should handle SEARCH_SUCCESS', () => {
            const payload = {
                results: [{ id: '2' }],
                nextPageToken: '2'
            };

            const action = { type: SEARCH_SUCCESS, payload };
            const oldState = {
                ...initialState, q: 'Search for this!', results: [{ id: '1' }], loading: true
            };

            const state = searchReducer(oldState, action);
            const expectedState = {
                ...oldState,
                q: 'Search for this!',
                nextPageToken: '2',
                results: [{ id: '2' }],
                loading: false
            };

            assert.deepEqual(state, expectedState);
        });

        it('should handle SEARCH_FAIL', () => {
            const action = { type: SEARCH_FAIL };
            const oldState = { ...initialState, q: 'Search for this!', loading: true };
            const state = searchReducer(oldState, action);
            const expectedState = { ...oldState, loading: false };

            assert.deepEqual(state, expectedState);
        });

        it('should handle LOAD_MORE_VIDEOS_SUCCESS', () => {
            const payload = {
                results: [{ id: '2' }],
                nextPageToken: '3'
            };

            const action = { type: LOAD_MORE_VIDEOS_SUCCESS, payload };
            const oldState = {
                ...initialState, q: 'Search for this!', results: [{ id: '1' }], nextPageToken: '2', loading: true
            };
            const state = searchReducer(oldState, action);
            const expectedState = {
                ...oldState,
                results: [{ id: '1' }, { id: '2' }],
                nextPageToken: '3',
                loading: false
            };

            assert.deepEqual(state, expectedState);
        });
    });
});
