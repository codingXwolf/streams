import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if(touched && error) {
            return(
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
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues => {
        //e.preventDefault() no need because of redux form/handleSubmit. No Event object at all.
        console.log(formValues)
        this.props.createStream(formValues)
    }

    render() {
        // console.log(this.props)
        return (
            // this.props.handleSubmit is redux way to handle submits by user. 
            //for className needs "error" because css makes it display none. 
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/* Field can be any input such as dropdown, checkbox, radio button etc.*/}
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

//defining validate outside class
const validate = formValues => {
    const errors = {};
    if(!formValues.title) {
        //only ran if the user did not enter title. each statement will check for an error
        errors.title = 'You must enter a title!';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);