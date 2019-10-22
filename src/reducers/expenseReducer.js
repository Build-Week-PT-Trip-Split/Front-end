import {
    GET_EXPENSES_START,
    GET_EXPENSES_SUCCESS,
    GET_EXPENSES_FAIL
} from '../actions/index.js';

const initialState = {
    expenses: []
}

const expenseReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_EXPENSES_START:
            return {
                ...state
            }
        
        case GET_EXPENSES_SUCCESS:
            return {
                ...state,
                expenses: action.payload
            }

        case GET_EXPENSES_FAIL:
            return {
                ...state
            }
        default: return state;
    }
}

export default expenseReducer;

