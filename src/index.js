import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from 'store';

import './styles/main.scss';

const App = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <div className="container">
                    <h1>Hello world!</h1>
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
