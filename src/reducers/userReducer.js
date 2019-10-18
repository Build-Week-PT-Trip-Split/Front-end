import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
} from '../actions/index.js';

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_START:
            return {
                ...state
            }
        
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
            
            
        case GET_USERS_FAIL:
            return {
                ...state
            }
            
        default: return state;
    }
}

export default userReducer;