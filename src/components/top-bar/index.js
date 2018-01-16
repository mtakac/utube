import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from 'components/search-form';

/**
 * Simple top bar component rendering search form.
 */
const TopBar = ({ handleSearch }) => (
    <nav className="navbar navbar-light bg-light top-bar">
        <a className="text-center navbar-brand" href="/">Utube</a>
        <div className="ml-0 mr-auto">
            <SearchForm handleSubmit={handleSearch} />
        </div>
    </nav>
);

TopBar.propTypes = {
    /** Callback passed to ```<SeachForm />``` */
    handleSearch: PropTypes.func.isRequired
};

export default TopBar;
