import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import tripReducer from './tripReducer.js';
import expenseReducer from './expenseReducer.js';
import currentUserReducer from './currentUserReducer';

const rootReducer = combineReducers({
    userReducer: userReducer,
    tripReducer: tripReducer,
    expenseReducer: expenseReducer,
    currentUserReducer: currentUserReducer,
})

export default rootReducer;