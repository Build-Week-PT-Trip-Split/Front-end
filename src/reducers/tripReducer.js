import {
    GET_TRIPS_START,
    GET_TRIPS_SUCCESS,
    GET_TRIPS_FAIL,
    GET_TRIP_START,
    GET_TRIP_SUCCESS,
    GET_TRIP_FAIL
} from '../actions/index.js';

const initialState = {
    trips: []
}

const tripReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TRIPS_START:
            return {
                ...state
            }
        
        case GET_TRIPS_SUCCESS:
            return {
                ...state,
                trips: action.payload
            }

        case GET_TRIPS_FAIL:
            return {
                ...state
            }
        case GET_TRIP_START:
            return {
                ...state
            }
            
        case GET_TRIP_SUCCESS:
            return {
                ...state,
                    trips: state.trips.length !== 0 ? state.trips.map(trip => trip.id === action.payload.id ? action.payload : trip) : [action.payload]
            }
    
        case GET_TRIP_FAIL:
            return {
                ...state
            }    
        default: return state;
    }
}

export default tripReducer;