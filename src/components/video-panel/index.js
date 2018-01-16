/* eslint-disable react/no-danger  */

import React from 'react';
import PropTypes from 'prop-types';
import anchorme from 'anchorme';

import './video-panel.scss';

/**
 * Renders details of a video passed as props. Video player is responsive, using
 * Bootstrap's ```embed-responsive``` and description preserves white space and
 * uses ```anchorme``` to turn URLs into links.
 */
const VideoPanel = ({ id, title, description }) => (
    <div className="video-panel">


        <div className="card text-dark">
            <div className="card-img-top embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={id}
                    allowFullScreen
                />
            </div>

            <div className="card-header">
                <h1 className="h5">{title}</h1>
            </div>

            <div className="card-body">
                <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: anchorme(description) }}
                />
            </div>
        </div>
    </div>
);

VideoPanel.propTypes = {
    /** Video id. */
    id: PropTypes.string.isRequired,

    /** Video title. */
    title: PropTypes.string.isRequired,

    /** Full video description. */
    description: PropTypes.string.isRequired
};

export default VideoPanel;
