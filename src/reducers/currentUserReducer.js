import {
    GET_CURRENT_USER_START,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAIL
} from '../actions/index.js';

const initialState = {
    currentUser: {}
}

const currentUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CURRENT_USER_START:
            return {
                ...state
            }
        
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }

        case GET_CURRENT_USER_FAIL:
            return {
                ...state
            }
        default: return state;
    }
}

export default currentUserReducer;