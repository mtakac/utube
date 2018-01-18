/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Alert from 'components/alert';

describe('Components', () => {

    describe('<Alert />', () => {

        const setup = (propOverrides) => {
            const props = {
                className: 'alert alert-danger',
                ...propOverrides
            };

            const alert = <Alert {...props}>Ooops something went wrong...</Alert>;
            const component = shallow(alert);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        it('should render message', () => {
            const { component } = setup();

            assert.equal(component.text(), 'Ooops something went wrong...');
        });

        it('should have correct class', () => {
            const { component, props } = setup();
            const { className } = props;

            assert.isTrue(component.find('div').hasClass(className));
        });
    });
});
