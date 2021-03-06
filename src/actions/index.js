import axiosWithAuth from '../utils/axiosAuth.js';

// Users Reducer Action Variables

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

// Trips Reducer Action Variables

export const GET_TRIPS_START = "GET_TRIPS_START";
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
export const GET_TRIPS_FAIL = "GET_TRIPS_FAIL";

// Expenses Reducer Action Variables

export const GET_EXPENSES_START = "GET_EXPENSES_START";
export const GET_EXPENSES_SUCCESS = "GET_EXPENSES_SUCCESS";
export const GET_EXPENSES_FAIL = "GET_EXPENSES_FAIL";

// Current User Reducer Action Variables

export const GET_CURRENT_USER_START = "GET_CURRENT_USER_START";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAIL = "GET_CURRENT_USER_FAIL";

// Single Trip Reducer Action Variables

export const GET_TRIP_START = "GET_TRIP_START";
export const GET_TRIP_SUCCESS = "GET_TRIP_SUCCESS";
export const GET_TRIP_FAIL = "GET_TRIP_FAIL";

export const getUsers = () => (dispatch) => {
    console.log("getUsers Fired")
    dispatch({type: GET_USERS_START})
    axiosWithAuth().get('https://tripsplit-1022.herokuapp.com/users')
            .then((res) => {
                dispatch({type: GET_USERS_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_USERS_FAIL, payload: err}));
}

export const getTrips = () => (dispatch) => {
    console.log("getTrips Fired")
    dispatch({type: GET_TRIPS_START})
    axiosWithAuth().get('https://tripsplit-1022.herokuapp.com/trips')
            .then((res) => {
                dispatch({type: GET_TRIPS_SUCCESS, payload: res.data.filter(trip => trip.user_id === Number(localStorage.getItem("userID")))})
            })
            .catch((err) => dispatch({type: GET_TRIPS_FAIL, payload: err}));
}

export const getExpenses = () => (dispatch) => {
    console.log("getExpenses Fired")
    dispatch({type: GET_EXPENSES_START})
    axiosWithAuth().get('https://tripsplit-1022.herokuapp.com/expenses')
            .then((res) => {
                dispatch({type: GET_EXPENSES_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_EXPENSES_FAIL, payload: err}));
}

export const getCurrentUser = (userID) => (dispatch) => {
    console.log("getCurrentUser Fired")
    dispatch({type: GET_CURRENT_USER_START})
    axiosWithAuth().get(`https://tripsplit-1022.herokuapp.com/users/${userID}`)
            .then((res) => {
                dispatch({type: GET_CURRENT_USER_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_CURRENT_USER_FAIL, payload: err}));
}

export const getTrip = (tripID) => (dispatch) => {
    console.log("getTrip Fired")
    dispatch({type: GET_TRIP_START})
    axiosWithAuth().get(`https://tripsplit-1022.herokuapp.com/trips/${tripID}`)
            .then((res) => {
                // console.log(res.data)
                dispatch({type: GET_TRIP_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_TRIP_FAIL, payload: err}));
}