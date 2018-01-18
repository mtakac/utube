/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import RatingButton from 'components/rating-button';
import IconButton from 'components/icon-button';

describe('Components', () => {

    describe('<RatingButton />', () => {

        const setup = (propOverrides) => {
            const props = {
                icon: <svg />,
                handleClick: () => { },
                ...propOverrides
            };

            const component = shallow(<RatingButton {...props} />);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        it('should pass the icon to <IconButton />', () => {
            const { component, props } = setup();
            const { icon } = props;
            const iconButton = component.find(IconButton);

            assert.deepEqual(icon, iconButton.props().icon);
        });

        it('should pass handleClick callback to <IconButton />', () => {
            const { component, props } = setup();
            const { handleClick } = props;
            const iconButton = component.find(IconButton);

            assert.equal(handleClick, iconButton.props().handleClick);
        });

        it('should not have class "active" when is not active', () => {
            const { component } = setup();

            assert.notInclude(component.props().className, 'active');
        });

        it('should have class "active" when is active', () => {
            const { component } = setup({ isActive: true });

            assert.include(component.props().className, 'active');
        });
    });
});
