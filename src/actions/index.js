import streams from '../apis/streams';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_STREAM, 
    FETCH_STREAMS, 
    DELETE_STREAM, 
    EDIT_STREAM } 
    from './types';

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

//REST CRUD 

//POST | Create - record | Route - /streams | single record
export const createStream = formValues => async (dispatch, getState) => {//getState is going to get entire state
    const { userId } = getState().auth; //google user Id from our store 
    const response = await streams.post('./streams', { ...formValues, userId });
    
    dispatch({ type: CREATE_STREAM, payload: response.data });
    //Do some programmatic navigation to 
    // get the user back to the root route
};

//GET | GET ALL - List | Route - /streams | list of records
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

//Get | GET BY ID - single record | Route - /streams/:id | single record
export const fetchStream = id => async dispatch => { 
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
};

//UPDATE | PUT - single record | Route - /streams/:id | edit single record
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
};

//DELETE | DELETE - single record | Route - /streams/:id | delete single record
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
};


