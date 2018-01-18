import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import 'styles/main.scss';

import { store, history } from 'store';

import Main from 'screens/main';
import AuthCallback from 'screens/auth-callback';

const App = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={Main} exact />
                <Route path="/login-callback" component={AuthCallback} />
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
