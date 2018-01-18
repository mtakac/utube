import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import IconButton from 'components/icon-button';
import magnifyingGlass from './magnifying-glass.svg';

/**
 * Renders search form.
 */
export const SearchForm = ({ handleSubmit }) => (
    <form
        className="d-flex justify-content-between form search-form"
        onSubmit={handleSubmit}
    >
        <Field
            className="mr-1 form-control"
            type="search"
            name="q"
            placeholder="Seach Youtube videos..."
            component="input"
            value=""
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

export default reduxForm({
    form: 'search'
})(SearchForm);
