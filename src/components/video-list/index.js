import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from 'components/video-list-item';

/**
 * Renders array of videos as a list. Each video in a list is rendered
 * as ```<VideoListItem />```. If there are at least 10 videos in a list,
 * it will also render Load more button.
 */
const VideoList = ({
    videos,
    q,
    nextPageToken,
    isLoading,
    handleLoadMore,
    handleSelectVideo
}) => {
    const renderVideoListItems = () => (
        videos.map(video => (
            <VideoListItem
                key={video.id}
                {...video}
                handleSelectVideo={handleSelectVideo}
            />))
    );

    const onClick = () => handleLoadMore(q, nextPageToken);

    return (
        <ul className="nav flex-column video-list">
            {renderVideoListItems()}
            <li>
                {
                    (videos.length > 9) ?
                        <button
                            className="w-100 btn btn-outline-success"
                            type="button"
                            onClick={onClick}
                            disabled={isLoading}
                        >
                            {(isLoading) ? 'Loading...' : 'Load more'}
                        </button>
                        : null
                }
            </li>
        </ul>
    );
};

VideoList.propTypes = {
    /** Array of videos. */
    videos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,

    /** Search query. */
    q: PropTypes.string,

    /** Token extracted from Youtube api response identifying next page of the search. */
    nextPageToken: PropTypes.string,

    /** Indicates loading state. */
    isLoading: PropTypes.bool,

    /** Callback called on Load More button click. */
    handleLoadMore: PropTypes.func.isRequired,

    /** Callback passed to ```<VideoListItem />. */
    handleSelectVideo: PropTypes.func.isRequired
};

VideoList.defaultProps = {
    q: null,
    nextPageToken: null,
    isLoading: false
};

export default VideoList;
