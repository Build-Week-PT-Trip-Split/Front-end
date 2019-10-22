import {
    GET_CURRENT_USER,
} from '../actions/index.js';

const initialState = {
    currentUser: {}
}

const currentUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default: return state;
    }
}

export default currentUserReducer;