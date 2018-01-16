/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

import './icon-button.scss';

/**
 * Renders button with SVG icon.
 */
const IconButton = ({
    type, icon, className, handleClick
}) => (
    <button
        type={type}
        dangerouslySetInnerHTML={{ __html: icon }}
        className={`icon-button ${className}`}
        onClick={handleClick}
    />
);

IconButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']).isRequired,

    /** SVG icon. */
    icon: PropTypes.node.isRequired,

    /** Callback called on button click. Behaves like standard HTML button if
     * callback is not provided */
    handleClick: PropTypes.func,

    /** Use bootstrap button classes. Eg. ```btn btn-primary``` */
    className: PropTypes.string
};

IconButton.defaultProps = {
    handleClick: null,
    className: ''
};

export default IconButton;
