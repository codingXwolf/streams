const INITIAL_STATE = {//initial state with the value of null.True constant object. capitalized means other developer should change it.
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false };
        default:
            return state;
    }
};