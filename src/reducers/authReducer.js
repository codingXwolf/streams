import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {//initial state with the value of null.True constant object. capitalized means other developer should change it.
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null }; //when the user signs out. payload value goes back to null.
        default:
            return state;
    }
};