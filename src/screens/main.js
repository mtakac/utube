import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopBarContainer from 'containers/top-bar-container';
import VideoPanelContainer from 'containers/video-panel-container';
import VideoListContainer from 'containers/video-list-container';
import Alert from 'components/alert';

const renderError = (error) => {
    if (!error) {
        return null;
    }

    return <Alert className="alert alert-danger">{error}</Alert>;
};

export const Main = ({ error }) => (
    <div className="main-screen">
        <TopBarContainer />
        <div className="pt-2 pb-5 container">
            {renderError(error)}
            <div className="row">
                <div className="col-12 col-md-8 mb-4 mb-lg-0">
                    <VideoPanelContainer />
                </div>
                <div className="col-12 col-md-4">
                    <VideoListContainer />
                </div>
            </div>
        </div>
    </div>
);

Main.propTypes = {
    error: PropTypes.string
};

Main.defaultProps = {
    error: null
};

const mapStateToProps = state => ({
    error: state.error
});

export default connect(mapStateToProps)(Main);
