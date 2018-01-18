import React from 'react';
import PropTypes from 'prop-types';

import './video-list-item.scss';

/**
 * Renders a single list item of a video list.
 */
const VideoListItem = ({
    id,
    title,
    image,
    handleSelectVideo
}) => {
    const onClick = (e) => {
        e.preventDefault();
        return handleSelectVideo(id);
    };

    return (
        <li key={id} className="nav-item video-list-item">
            <a
                className="d-flex p-0 mb-2 nav-link"
                href="/"
                onClick={onClick}
            >
                <img className="mr-2" src={image} alt={title} width="120" height="90" />
                <h2 className="h6 text-dark">{title}</h2>
            </a>
        </li>
    );
};

VideoListItem.propTypes = {
    /** Youtube video id. */
    id: PropTypes.string.isRequired,

    /** Video title. */
    title: PropTypes.string.isRequired,

    /** URL to video image. */
    image: PropTypes.string.isRequired,

    /** Callback called on ```<VideoListItem /> click. */
    handleSelectVideo: PropTypes.func.isRequired
};

export default VideoListItem;
