/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import IconButton from 'components/icon-button';

describe('Components', () => {

    describe('<IconButton />', () => {

        const setup = (propOverrides) => {
            const props = {
                type: 'button',
                icon: <svg />,
                handleClick: sinon.spy(),
                ...propOverrides
            };

            const component = shallow(<IconButton {...props} />);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        // Enzyme is not able to render dangerouslySetInnerHTML at the moment
        // so we can only check if icon gets passed as a prop.
        it('should render the passed icon', () => {
            const { component } = setup();
            const { dangerouslySetInnerHTML: { __html } } = component.props();

            assert.equal(__html.type, 'svg');
        });

        it('should pass pass down CSS classes', () => {
            const { component } = setup({ className: 'anyClass anotherClass' });

            assert.isTrue(component.find('button').hasClass('anyClass'));
            assert.isTrue(component.find('button').hasClass('anotherClass'));
        });

        it('should call the callback when clicked', () => {
            const { component, props } = setup();
            const { handleClick } = props;
            component.find('button').simulate('click');

            assert.isTrue(handleClick.calledOnce);
        });
    });
});
