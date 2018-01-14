import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import spinnerSvg from './spinner.svg';
import checkSvg from './check.svg';
import warningSvg from './warning.svg';

const FormField = ({
    input, type, label, placeholder, helperText, meta
}) => {

    const { name } = input;
    const {
        touched, error, asyncValidating, active, submitting
    } = meta;

    let isValid = null;
    let feedbackIcon;

    if (asyncValidating) {
        feedbackIcon = spinnerSvg;
    }

    if (!active && !asyncValidating && touched && error) {
        isValid = false;
        feedbackIcon = warningSvg;
    }

    if (!active && !asyncValidating && touched && !error) {
        isValid = true;
        feedbackIcon = checkSvg;
    }

    const rendeLabel = () => {
        if (!label) {
            return null;
        }

        return <label htmlFor={name}>{label}</label>;
    };

    const renderInputClasses = () => {
        const classNames = ['form-control'];

        if (isValid) {
            classNames.push('is-valid');
        }

        if (!isValid) {
            classNames.push('is-invalid');
        }

        if (asyncValidating) {
            classNames.push('async-validating');
        }

        return classNames.join(' ');
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                {rendeLabel()}
                <small className="form-text text-muted">{helperText}</small>
            </div>
            <div className="position-relative">
                <input
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    className={renderInputClasses()}
                    disabled={asyncValidating || submitting}
                />

                {
                // eslint-disable-next-line react/no-danger
                }<span className="d-none" dangerouslySetInnerHTML={{ __html: feedbackIcon }} />
                <div className="invalid-feedback">{touched ? error : ''}</div>
            </div>
        </div>
    );
};

FormField.propTypes = {

    input: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired,

    meta: PropTypes.shape({
        touched: PropTypes.bool.isRequired,
        asyncValidating: PropTypes.bool.isRequired,
        active: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        error: PropTypes.string
    }).isRequired,

    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    helperText: PropTypes.string
};

FormField.defaultProps = {
    label: null,
    placeholder: null,
    helperText: null
};

export default FormField;
