import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }


    renderInput = ({ input, label, meta }) => {//destructering from input and label. Now able to access inside function
        // This is one way we can access value.
        // return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        //shorter syntax
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues => {
    //e.preventDefault() no need because of redux form/handleSubmit. No Event object at all.
        console.log(formValues)
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title!';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors
};

//reminder that reduxForm wrappped around StreamForm
//passing props to redux form not streaform.
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);