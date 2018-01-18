import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    LOAD_MORE_VIDEOS_SUCCESS
} from 'actions/types';

export const initialState = {
    q: null, nextPageToken: null, results: [], loading: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST: {
            const { payload: { q, nextPageToken } } = action;

            return {
                ...state,
                q,
                nextPageToken,
                loading: true
            };
        }
        case SEARCH_SUCCESS: {
            const { payload: { nextPageToken, results } } = action;

            return {
                ...state,
                nextPageToken,
                results,
                loading: false
            };
        }
        case SEARCH_FAIL: {
            return { ...state, loading: false };
        }
        case LOAD_MORE_VIDEOS_SUCCESS: {
            const { payload: { nextPageToken, results } } = action;

            return {
                ...state,
                nextPageToken,
                results: [...state.results, ...results],
                loading: false
            };
        }
        default:
            return state;
    }
};

export default searchReducer;
