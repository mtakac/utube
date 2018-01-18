/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import { Main } from 'screens/main';
import Alert from 'components/alert';

describe('Screens', () => {

    const setup = (propOverrides) => {
        const props = {
            error: null,
            ...propOverrides
        };

        const component = shallow(<Main {...props} />);

        return { component, props };
    };

    describe('Main', () => {
        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        it('should render <Alert /> if error exists', () => {
            const { component } = setup({ error: 'Some error!' });

            assert.lengthOf(component.find(Alert), 1);
        });

        it('should not render <Alert /> if error does not exist', () => {
            const { component } = setup();

            assert.lengthOf(component.find(Alert), 0);
        });
    });

});
