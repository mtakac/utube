import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Renders Google's OAuth2 authorization form. Actual form fields are all hidden.
 * User only sees Login button.
 */
class LoginForm extends Component {
    static propTypes = {
        /** URL to Google OAuth2 authorization endpoint. */
        oauthUrl: PropTypes.string.isRequired,

        /** Client id of our app. */
        oauthClientId: PropTypes.string.isRequired,

        /** After login redirect URL. */
        oauthRedirectUri: PropTypes.string.isRequired,

        /** Requested access permission scopes. */
        oauthScope: PropTypes.string.isRequired,

        /** Callback called on local storage change. */
        onLogin: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onStorageChange = this.onStorageChange.bind(this);
    }

    // If we want to open the form in new window, we need a way how to share states
    // between two windows. Here we add a listener that fires every time local storage
    // is changed.
    componentDidMount() {
        window.addEventListener('storage', this.onStorageChange);
    }

    componentWillUnmount() {
        window.removeEventListener('storage', this.onStorageChange);
    }

    // We alreday have a listener, now we can open a new window. Every change to local storage
    // made from that window will cause our listener to fire.
    onSubmit(e) {
        e.preventDefault();
        window.open('test.html', 'sign-in', 'scrollbars=no,menubar=no,height=600,width=500,toolbar=no,status=no');
        e.target.submit();
    }

    onStorageChange() {
        this.props.onLogin();
    }

    render() {
        const {
            oauthUrl, oauthClientId, oauthRedirectUri, oauthScope
        } = this.props;

        return (
            <form method="GET" action={oauthUrl} className="login-form" target="sign-in" onSubmit={this.onSubmit}>
                <input type="hidden" name="client_id" value={oauthClientId} />
                <input type="hidden" name="redirect_uri" value={oauthRedirectUri} />
                <input type="hidden" name="response_type" value="token" />
                <input type="hidden" name="scope" value={oauthScope} />
                <input type="hidden" name="state" value="pass-throug value" />
                <input type="hidden" name="include_granted_scopes" value="true" />
                <button type="submit" className="btn btn-link">Login</button>
            </form>
        );
    }
}

export default LoginForm;

