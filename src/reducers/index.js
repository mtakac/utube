import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

const rootReducer = combineReducers({
    form,
    router
});

export default rootReducer;
