import _ from 'lodash';
import {
CREATE_STREAM,
FETCH_STREAMS,
FETCH_STREAM, 
DELETE_STREAM,
EDIT_STREAM 
} from '../actions/types';

export default (state ={}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }; 
            //_.mapKeys(arr, 'id') you pass in an array with second argument 'id', it will return an object with property name of id from the orignal object. 
            //EX: [{id:'12', title:'My Stream'}] will turn to {12: {id:'12', title: 'My Stream' }}
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
            //using library lodash. Creates a new objects with all property from state plus whatever we pass to it.
        default:
            return state;
    }
};