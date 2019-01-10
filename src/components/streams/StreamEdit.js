import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit A Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    //final ex: using lodash library is a function that firstgument is the object
                    //seond and third arguments are the properties names from which you want to pull out and insert to initialValues
                    initialValues={_.pick(this.props.stream,'title', 'description')}
                //ex 2:initialValues={{title: this.props.stream.title}} 
                //ex 1:initialValues={{ title: 'Edit Me', description: 'Change me to!!'}}
                //special property name with redux form.
                //this is how we can re populate the form using redux form.
                />
            </div>
        )
    }
};

//remember ownProps is a reference to the props object we get from the parent to child. 
// its the second argument of mapStateToProps
const mapStateToProps = (state, ownProps) => {
    //state.streams goes into out state store.stream.
    //[ownProps.match.params.id] bracket notation to access id then return it
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);