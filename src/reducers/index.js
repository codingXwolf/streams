import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //reducer is being renamed in the import section to formReducer. Makes it clear what youre reducing.
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});