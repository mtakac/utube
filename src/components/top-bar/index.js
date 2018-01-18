import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from 'components/search-form';
import LoginForm from 'components/login-form';

const OAUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const OAUTH_CLIENT_ID = '338078566399-4p7joqoeim2mvde595eo1o27hj1i3ofg.apps.googleusercontent.com';
const OAUTH_REDIRECT_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080/login-callback' : 'http://mtakac-utube.s3-website.eu-central-1.amazonaws.com/login-callback';
const OAUTH_SCOPE = 'https://www.googleapis.com/auth/youtube';

/**
 * Simple top bar component rendering search form.
 */
const TopBar = ({
    isLoggedIn,
    handleSearch,
    handleLogin,
    handleLogout
}) => {
    const renderAccountLinks = () => {
        if (!isLoggedIn) {
            return (
                <LoginForm
                    oauthUrl={OAUTH_URL}
                    oauthClientId={OAUTH_CLIENT_ID}
                    oauthRedirectUri={OAUTH_REDIRECT_URI}
                    oauthScope={OAUTH_SCOPE}
                    onLogin={handleLogin}
                />
            );
        }

        return <button className="btn btn-link" onClick={handleLogout}>Logout</button>;
    };

    return (
        <nav className="navbar navbar-light bg-light top-bar">
            <a className="text-center navbar-brand" href="/">Utube</a>
            <div className="mx-auto">
                <SearchForm onSubmit={handleSearch} />
            </div>
            <div>
                {renderAccountLinks()}
            </div>
        </nav>
    );
};

TopBar.propTypes = {
    /** Indicates whether user is logged in or not. */
    isLoggedIn: PropTypes.bool,

    /** Callback passed to ```<SeachForm />``` */
    handleSearch: PropTypes.func.isRequired,

    /** Callback passed to ```LoginForm />``` */
    handleLogin: PropTypes.func.isRequired,

    /** Callback called on Logout button click */
    handleLogout: PropTypes.func.isRequired
};

TopBar.defaultProps = {
    isLoggedIn: false
};

export default TopBar;
