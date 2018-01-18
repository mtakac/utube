/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { Provider } from 'react-redux';
import { assert } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SearchForm from 'components/search-form';
import IconButton from 'components/icon-button';
import { store } from 'store';

describe('Components', () => {

    describe('<SearchForm />', () => {

        const setup = (propOverrides) => {
            const props = {
                onSubmit: sinon.spy(),
                ...propOverrides
            };

            const component = mount(<Provider store={store}><SearchForm {...props} /></Provider>);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        it('should render search <input />', () => {
            const { component } = setup();

            assert.lengthOf(component.find('input[type="search"]'), 1);
        });

        it('should render <IconButton />', () => {
            const { component } = setup();

            assert.lengthOf(component.find(IconButton), 1);
        });

        it('should call the callback when submitted', () => {
            const { component, props } = setup();
            const { onSubmit } = props;
            component.find('form').simulate('submit');

            assert.isTrue(onSubmit.calledOnce);
        });
    });
});
