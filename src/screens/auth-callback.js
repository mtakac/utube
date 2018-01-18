import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authCallbackReceived } from 'actions';
import { getUriParameterByName } from 'utils';

export class AuthCallback extends Component {
    static propTypes = {
        location: PropTypes.shape({
            hash: PropTypes.string.isRequired
        }).isRequired,

        handleAuthCallback: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { location: { hash }, handleAuthCallback } = this.props;
        const accessToken = getUriParameterByName('access_token', hash);
        const error = getUriParameterByName('error', hash);

        console.log(this.props); // eslint-disable-line

        return handleAuthCallback(accessToken, error);
    }

    render() {
        return null;
    }
}

const mapDispatchToProps = dispatch => ({
    handleAuthCallback: (accessToken, error) => dispatch(authCallbackReceived(accessToken, error))
});

export default connect(null, mapDispatchToProps)(AuthCallback);
