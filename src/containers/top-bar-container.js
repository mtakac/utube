import { connect } from 'react-redux';

import TopBar from 'components/top-bar';
import { searchRequest, loginAttempt, logout } from 'actions';

const mapStateToProps = state => ({
    isLoggedIn: !!state.accessToken
});

const mapDispatchToProps = dispatch => ({
    handleSearch: values => dispatch(searchRequest(values.q)),
    handleLogin: () => dispatch(loginAttempt()),
    handleLogout: () => dispatch(logout())
});

const TopBarContainer = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default TopBarContainer;
