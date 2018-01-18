import { connect } from 'react-redux';

import VideoPanel from 'components/video-panel';
import { getVideoRatingRequest, rateVideoRequest } from 'actions';

const mapDispatchToProps = dispatch => ({
    handleGetVideoRating: id => dispatch(getVideoRatingRequest(id)),
    handleVideoRating: (id, rating) => dispatch(rateVideoRequest(id, rating))
});

const mapStateToProps = state => ({
    video: state.video.data,
    rating: state.video.rating,
    loading: state.video.loading,
    isLoggedIn: !!state.accessToken
});

const VideoPanelContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPanel);

export default VideoPanelContainer;
