import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/icon-button';
import './styles.scss';

/**
 * Renders rating button.
 */
const RatingButton = ({
    icon,
    isActive,
    className,
    handleClick
}) => {
    const classes = `${className} ${(isActive) ? 'active' : ''}`;

    return (
        <IconButton
            type="button"
            icon={icon}
            className={`rating-button ${classes}`}
            handleClick={handleClick}
        />
    );
};

RatingButton.propTypes = {
    /** SVG icon. */
    icon: PropTypes.node.isRequired,

    /** Adds active class to button. */
    isActive: PropTypes.bool,

    /** Use bootstrap button classes. Eg. ```btn btn-primary``` */
    className: PropTypes.string,

    /** Callback called on button click. */
    handleClick: PropTypes.func
};

RatingButton.defaultProps = {
    className: '',
    isActive: false,
    handleClick: null
};

export default RatingButton;
