/* eslint-env mocha */
import 'utils/test-helper';

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import TopBar from 'components/top-bar';
import SearchForm from 'components/search-form';

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

    it('should pass the callback to <SearchForm />', () => {
        const handleSearch = () => {};
        const { component } = setup({ handleSearch });
        const { handleSubmit } = component.find(SearchForm).props();

        assert.equal(handleSubmit.name, handleSearch.name);
    });
});
