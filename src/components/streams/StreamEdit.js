import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        
        return <div>{this.props.stream.title}</div>
    }
};

//remember ownProps is a reference to the props object we get from the parent to child. 
// its the second argument of mapStateToProps
const mapStateToProps = (state, ownProps) => {
    //state.streams goes into out state store.stream.
    //[ownProps.match.params.id] bracket notation to access id then return it
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);