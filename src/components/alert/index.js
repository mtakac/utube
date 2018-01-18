import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders styled message to user. Works with Bootstrap's
 * alert classes.
 */
const Alert = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

Alert.propTypes = {
    /** Message for user. */
    children: PropTypes.node,

    /** Use bootstrap alert classes. Eg. ```alert alert-primary``` */
    className: PropTypes.string
};

Alert.defaultProps = {
    children: '',
    className: 'alert-primary'
};

export default Alert;
