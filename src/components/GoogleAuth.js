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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);//listen checks if your are signed in or not.
            });
        }); 
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
    };

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
}

export default GoogleAuth;