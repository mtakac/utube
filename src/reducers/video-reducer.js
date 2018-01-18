import {
    SELECT_VIDEO_REQUEST,
    SELECT_VIDEO_SUCCESS,
    SELECT_VIDEO_FAIL,
    GET_VIDEO_RATING_REQUEST,
    GET_VIDEO_RATING_SUCCESS,
    GET_VIDEO_RATING_FAIL,
    RATE_VIDEO_REQUEST,
    RATE_VIDEO_SUCCESS
} from 'actions/types';

export const initialState = { data: null, rating: null, loading: false };

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_VIDEO_REQUEST: {
            return { ...state, loading: true };
        }
        case SELECT_VIDEO_SUCCESS: {
            const { payload: { video } } = action;

            return { ...state, data: video, loading: false };
        }
        case SELECT_VIDEO_FAIL: {
            return { ...state, loading: false };
        }
        case GET_VIDEO_RATING_REQUEST: {
            return { ...state, loading: true };
        }
        case GET_VIDEO_RATING_SUCCESS: {
            const { rating } = action.payload;

            return { ...state, rating, loading: false };
        }
        case GET_VIDEO_RATING_FAIL: {
            return { ...state, loading: false };
        }
        case RATE_VIDEO_REQUEST:
        case RATE_VIDEO_SUCCESS: {
            const { payload: { rating } } = action;

            return { ...state, rating };
        }
        default:
            return state;
    }
};

export default videoReducer;
