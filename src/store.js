import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from 'reducers';
import sagas from 'sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {};
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routerReduxMiddleware = routerMiddleware(history);
const middlewares = applyMiddleware(sagaMiddleware, routerReduxMiddleware);
const store = createStore(reducers, defaultState, composeEnhancers(middlewares));

sagaMiddleware.run(sagas);

export { store, history };
