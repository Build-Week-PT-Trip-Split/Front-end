import {
    GET_TRIPS_START,
    GET_TRIPS_SUCCESS,
    GET_TRIPS_FAIL
} from '../actions/index.js';

const initialState = {
    trips: [{
        id: 1,
        name: "Italy",
        date: "01/01/2020",
        base_cost: 200000,
        complete: 0,
        user_id: 0,
        img: "https://trojantravel.usc.edu/wp-content/uploads/2016/07/SHS_264989543_Venice.jpg",
        created_at: "2019-05-31 20:16:46",
        updated_at: "2019-05-31 20:16:46"
        }]
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
        default: return state;
    }
}

export default tripReducer;

