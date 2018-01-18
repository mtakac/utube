import {
    SEARCH_FAIL,
    SELECT_VIDEO_FAIL,
    LOGIN_FAIL,
    RATE_VIDEO_FAIL
} from 'actions/types';

export const initialState = null;

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case RATE_VIDEO_FAIL:
        case LOGIN_FAIL:
        case SEARCH_FAIL:
        case SELECT_VIDEO_FAIL: {
            return 'Ooops, something went wrong. Please refresh the page and try again.';
        }
        default:
            return state;
    }
};

export default errorReducer;
