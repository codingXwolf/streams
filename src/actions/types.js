export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

//reason why were are putting the types into strings is because 
//if we make an error we can quickly track the error. It will most likely be a speelling error.

export const CREATE_STREAM = 'CREATE_STREAM'; //POST
export const FETCH_STREAMS = 'FETCH_STREAMS'; //GET ALL
export const FETCH_STREAM = 'FETCH_STREAM'; //GET BY ID
export const DELETE_STREAM = 'DELETE_STREAM'; //DELETE
export const EDIT_STREAM = 'EDIT_STREAM'; //UPDATE