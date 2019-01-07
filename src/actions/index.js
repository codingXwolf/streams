import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => { //receives google user id from authReducer.
    return {
        type: SIGN_IN, //string that being imported from the type.js file
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT//string that being imported from the type.js file
    };
};