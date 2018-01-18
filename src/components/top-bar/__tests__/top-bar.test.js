/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import TopBar from 'components/top-bar';
import SearchForm from 'components/search-form';

describe('Components', () => {

    describe('<TopBar />', () => {

        const setup = (propOverrides) => {
            const props = {
                handleSearch: () => {},
                ...propOverrides
            };

            const component = shallow(<TopBar {...props} />);

            return { component, props };
        };

        it('should render', () => {
            const { component } = setup();

            assert.isTrue(component.exists());
        });

        it('should render <SearchForm />', () => {
            const { component } = setup();

            assert.lengthOf(component.find(SearchForm), 1);
        });

        it('should pass handleSearch callback to <SearchForm />', () => {
            const { component, props } = setup();
            const { handleSearch } = props;
            const searchForm = component.find(SearchForm);

            assert.equal(handleSearch, searchForm.props().onSubmit);
        });
    });
});
