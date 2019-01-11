import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }

        //destructuring
        const { title, description } = this.props.stream;

        return (
            <div>
                {/* Without destructuring***
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5> */}

                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);