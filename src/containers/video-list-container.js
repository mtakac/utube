import { connect } from 'react-redux';

import VideoList from 'components/video-list';
import { selectVideoRequest, searchRequest } from 'actions';

const mapStateToProps = state => ({
    videos: state.search.results,
    q: state.search.q,
    nextPageToken: state.search.nextPageToken,
    isLoading: state.search.loading
});

const mapDispatchToProps = dispatch => ({
    handleSelectVideo: id => dispatch(selectVideoRequest(id)),
    handleLoadMore: (q, nextPageToken) => dispatch(searchRequest(q, nextPageToken))
});

const VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
