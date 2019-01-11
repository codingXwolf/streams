import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    //createPortal takes two arguments. First is what can be rendered,
    //second is the DOM element. In this case it will be modal located in the HTML index file under id root.
    //Now this can accessed anywhere in the App.
    //When you create modals is when you ll use createPortals

    return ReactDOM.createPortal (
        <div 
        onClick={props.onDismiss} 
        className="ui dimmer modals visable active"
        >
            {/* stopPropagation will stop any clicking around the window  */}
            {/* title, content, and actions being passed from streamDelete as props. */}
            <div onClick={e => e.stopPropagation} className="ui standard modal visable active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;