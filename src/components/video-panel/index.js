/* eslint-disable react/no-danger  */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anchorme from 'anchorme';

import RatingButton from 'components/rating-button';
import thumbUp from 'components/video-panel/thumb-up.svg';
import thumbDown from 'components/video-panel/thumb-down.svg';
import './styles.scss';

/**
 * Renders details of a video passed as props. Video player is responsive, using
 * Bootstrap's ```embed-responsive``` and description preserves white space and
 * uses ```anchorme``` to turn URLs into links. It also renders rating buttons if
 * a user is logged in.
 */
class VideoPanel extends Component {
    static propTypes = {
        video: PropTypes.shape({
            /** Video id. */
            id: PropTypes.string.isRequired,

            /** Video title. */
            title: PropTypes.string.isRequired,

            /** Full video description. */
            description: PropTypes.string.isRequired
        }),

        /** Current users's rating of the video */
        rating: PropTypes.oneOf(['none', 'like', 'dislike']),

        /** Indicates loading state */
        isLoading: PropTypes.bool,

        /** Indicates whether user is logged in or not. */
        isLoggedIn: PropTypes.bool,

        /** Callback called on props change.. */
        handleGetVideoRating: PropTypes.func.isRequired,

        /** Callback called on rating button click. */
        handleVideoRating: PropTypes.func.isRequired
    }

    static defaultProps = {
        video: null,
        rating: null,
        isLoggedIn: false,
        isLoading: false
    }

    constructor(props) {
        super(props);

        this.renderVideoPanel = this.renderVideoPanel.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.renderRatings = this.renderRatings.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!Object.is(this.props.video, nextProps.video)) {
            const { handleGetVideoRating, video, isLoggedIn } = nextProps;

            window.scrollTo(0, 0);
            if (video && isLoggedIn) handleGetVideoRating(video.id);
        }
    }

    handleRating(buttonPressed) {
        const { video, rating, handleVideoRating } = this.props;

        if (rating === buttonPressed) return handleVideoRating(video.id, 'none');
        return handleVideoRating(video.id, buttonPressed);
    }

    renderRatings() {
        const { isLoggedIn, rating } = this.props;

        if (!isLoggedIn) return null;

        return (
            <div className="ratings">
                <RatingButton
                    icon={thumbUp}
                    isActive={rating === 'like'}
                    className="mr-2 btn btn-outline-secondary"
                    handleClick={() => this.handleRating('like')}
                />
                <RatingButton
                    icon={thumbDown}
                    isActive={rating === 'dislike'}
                    className="btn btn-outline-secondary"
                    handleClick={() => this.handleRating('dislike')}
                />
            </div>
        );
    }

    renderVideoPanel() {
        const { isLoading, video } = this.props;

        if (isLoading) {
            return (
                <div className="card">
                    <div className="card-img-top embed-responsive embed-responsive-16by9" />
                </div>
            );
        }

        if (!video) {
            return null;
        }

        return (
            <div className="card text-dark">
                <div className="card-img-top embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.id}
                        allowFullScreen
                    />
                </div>

                <div className="d-flex justify-content-between flex-wrap card-header">
                    <h1 className="d-flex flex-column justify-content-center mx-0 my-2  h5">{video.title}</h1>


                    {this.renderRatings()}
                </div>

                <div className="card-body">
                    <p className="card-text">
                        <small dangerouslySetInnerHTML={{ __html: anchorme(video.description) }} />
                    </p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="video-panel">
                {this.renderVideoPanel()}
            </div>
        );
    }
}

export default VideoPanel;
