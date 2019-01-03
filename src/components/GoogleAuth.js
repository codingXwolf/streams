import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({//Window scope. gapi is a variable. gapi is avaivable in window scope.
                clientId: 
                '656390081522-5bppctpdjia9620qiqd4kkb2086u30vp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {//only load when the entire gapi libarary is ready to go. Finds out if user is signed in or not.
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        }); 
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>I dont know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
}

export default GoogleAuth;