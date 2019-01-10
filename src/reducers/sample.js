//Sample Code for reducers

//Array-based approach
// const streamReducer = (state=[], action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
//             return state.map(stream => {
//                 if (stream.id === action.payload.id) {
//                     return action.payload;
//                 } else {
//                     return stream;
//                 }
//             });
//             default: 
//             return state;
//     }
// };

//Object-base approach
// const streamReducer = (state={}, action) => {
//     switch (action.type) {
//         case EDIT_STREAM:
            //approach 1
            // const newState = { ...state }; has the same value pairs as the state object(line 20). It only returns a new object from reducer. If you dont return a new object redux will throw an error.
            // newState[action.payload.id] = action.payload;
            // return newState;

            //approach 2. 2015 sytax. Does the same thing as approach 1
//             return { ...state, [action.payload.id]: action.payload}
//         default:
//             return state;  
//     }
// };

// const animalSounds = {cat: 'meow', dog: 'bark'};
// const animal = 'lion';
// const sound = 'roar';

// animalSounds = {...animalSounds, [animal]: sound}
//[animal] turns animal into a key propety
//sound will be the property value