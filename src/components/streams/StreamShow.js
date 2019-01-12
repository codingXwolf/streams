import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();

    }

    componentDidMount() {
        const { id } = this.props.match.params;
        
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() { 
    //this component lifecycle will trigger when you exit to another page.
    //destroy will tell the player to stop attempting to stream video and detach
    // itself from the video element that we had created down the render method
        this.player.destroy();
    }

    buildPlayer() {       
        if (this.player || !this.props.stream) {
            return;
        }

        const { id } = this.props.match.params;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
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
                <video 
                ref={this.videoRef}
                style={{ width: '100%'}}
                controls
                />
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