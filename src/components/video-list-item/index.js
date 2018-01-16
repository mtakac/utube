import React from 'react';
import PropTypes from 'prop-types';

import './video-list-item.scss';

/**
 * Responsible for rendering a list item of a video list.
 */
const VideoListItem = ({ id, title, image }) => (
    <li className="nav-item video-list-item" key={id}>
        <a className="d-flex p-0 mb-2 nav-link" href="/">
            <img className="mr-2" src={image} alt={title} width="120" height="90" />
            <h2 className="h6 text-dark">{title}</h2>
        </a>
    </li>
);

VideoListItem.propTypes = {
    /** Youtube video id. */
    id: PropTypes.string.isRequired,

    /** Video title. */
    title: PropTypes.string.isRequired,

    /** URL to video image. */
    image: PropTypes.string.isRequired
};

export default VideoListItem;
