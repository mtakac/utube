import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { JSDOM } from 'jsdom';
import chai, { assert } from 'chai';
import chaiJq from 'chai-jq';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';

require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.svg'] = () => null;

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
const $ = jquery(global.window);

chai.use(chaiJq);

function renderComponent(ComponentClass, props = {}, state = {}) {
    const provider = (
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    const componentInstance = ReactTestUtils.renderIntoDocument(provider);

    return $(ReactDOM.findDOMNode(componentInstance)); // eslint-disable-line react/no-find-dom-node
}

$.fn.simulate = function(eventName, value) {
    if (value) this.val(value);

    ReactTestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, assert };
