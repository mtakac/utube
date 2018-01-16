import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/icon-button';

import magnifyingGlass from './magnifying-glass.svg';

/**
 * Renders search form.
 */
const SearchForm = ({ handleSubmit }) => (
    <form
        className="d-flex justify-content-between form search-form"
        onSubmit={handleSubmit}
    >
        <input
            className="mr-1 form-control"
            type="search"
            placeholder="Search..."
        />
        <IconButton
            type="submit"
            icon={magnifyingGlass}
            className="btn btn-success"
        />
    </form>
);

SearchForm.propTypes = {
    /** Callback called on form submit. */
    handleSubmit: PropTypes.func.isRequired
};

export default SearchForm;
