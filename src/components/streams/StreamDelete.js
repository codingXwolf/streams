import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/'

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return(
            //div tag throws off the styling. Needed to use a react fragment.
            //<> </> = <React.Fragment></React.Fragment>
            //<> </> some code checkers/tooling will think its not valid syntax.
            <React.Fragment>
                <button 
                onClick={() => this.props.deleteStream(id)} 
                className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this title?'
        }
        return `Are you sure to want to delete the stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}//passing jsx as props to Modal
                    onDismiss={() => history.push('/')}
                />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    //if you want to double check where you are getting the propert value from check redux dev tools -
    // click on state then streams. Thats where youre getting the properties vslues from.
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {fetchStream, deleteStream })(StreamDelete);