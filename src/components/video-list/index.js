import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from 'components/video-list-item';

const renderVideoListItems = videos => (
    videos.map(video => <VideoListItem {...video} key={video.id} />)
);

/**
 * Renders array of videos as a list. Each video in a list is rendered
 * as ```<VideoListItem />```.
 */
const VideoList = ({ videos, handleLoadMoreClick }) => (
    <ul className="nav flex-column video-list">
        {renderVideoListItems(videos)}
        <li>
            <button
                className="w-100 btn btn-outline-success"
                type="button"
                onClick={handleLoadMoreClick}
            >
                Load more
            </button>
        </li>
    </ul>
);

VideoList.propTypes = {
    /** Array of videos. */
    videos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,

    /** Callback called on Load More button click. */
    handleLoadMoreClick: PropTypes.func.isRequired
};

export default VideoList;
