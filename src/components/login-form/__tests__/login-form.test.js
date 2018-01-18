/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import LoginForm from 'components/login-form';

describe('Components', () => {

    describe('<LoginForm />', () => {
        const setup = (propOverrides) => {
            const props = {
                oauthUrl: 'http://www.oauth.com',
                oauthClientId: '1234',
                oauthRedirectUri: 'http://redirect-uri.com',
                oauthScope: 'everything',
                onLogin: sinon.spy(),
                ...propOverrides
            };

            const component = mount(<LoginForm {...props} />);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });
    });
});
