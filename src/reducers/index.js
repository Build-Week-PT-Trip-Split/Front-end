import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import tripReducer from './tripReducer.js';
import expenseReducer from './expenseReducer.js';

const rootReducer = combineReducers({
    userReducer: userReducer,
    tripReducer: tripReducer,
    expenseReducer: expenseReducer
})

export default rootReducer;