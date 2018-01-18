import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import search from 'reducers/search-reducer';
import video from 'reducers/video-reducer';
import error from 'reducers/error-reducer';
import accessToken from 'reducers/access-token-reducer';

const rootReducer = combineReducers({
    form,
    router,
    search,
    error,
    video,
    accessToken
});

export default rootReducer;
