import React from 'react'
import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
} from '../actions/index.js';
import { bindActionCreators } from 'redux';

const initialState = {
    users: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_START:
            return {
                ...state
            }
        
        case GET_USERS_SUCCESS: 
            return {
                users: action.payload
            }
            
        case GET_USERS_FAIL:
            return {
                ...state
            }
        
        default: return state;
    }
}