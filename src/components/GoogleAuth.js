import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
 
class GoogleAuth extends React.Component {
    //reason why we're adding redux is because only the GoogleAuth component has access to if a user is signed in.
    // we need to have it in a global state so we can access it through out our entire app.
    //We need to know if the user is signed in or not (true/false/null)

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({//Window scope. gapi is a variable. gapi is avaivable in window scope.
                clientId: 
                '656390081522-5bppctpdjia9620qiqd4kkb2086u30vp.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {//only load when the entire gapi libarary is ready to go. Finds out if user is signed in or not.
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); version 1. Now we will be calling the onAuthChange with arguments isSignedIn
                this.onAuthChange(this.auth.isSignedIn.get())//with redux 
                this.auth.isSignedIn.listen(this.onAuthChange);//listen checks if your are signed in or not.
            });
        }); 
    }

    //version 1 before adding redux
    // onAuthChange = () => {
    //     this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    // }; 
    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    //version 2 with redux
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());//get current google user ID
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);