import React, { Component } from 'react';

import FormField from 'components/form-field';

const buildForm = FormComponent => class extends Component {
    renderField(field) {
        const {
            input, type, label, placeholder, helperText, meta
        } = field;

        return (
            <FormField
                input={input}
                type={type}
                label={label}
                placeholder={placeholder}
                helperText={helperText}
                meta={meta}
            />
        );
    }

    renderFormErrors(error) {
        if (!error) return null;

        return error;
    }

    render() {
        return (
            <FormComponent
                {...this.props}
                renderField={this.renderField}
                renderFormErrors={this.renderFormErrors}
            />
        );
    }
};

export default buildForm;
