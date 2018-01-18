import { LOGIN_SUCCESS, LOGOUT } from 'actions/types';

export const initialState = null;

const accessTokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            const { payload: { accessToken } } = action;

            return accessToken;
        }
        case LOGOUT: {
            return null;
        }
        default:
            return state;
    }
};

export default accessTokenReducer;
