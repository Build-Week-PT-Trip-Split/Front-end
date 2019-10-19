import axiosWithAuth from '../utils/axiosAuth.js';

// Users Reducer Action Variables

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

// Trips Reducer Action Variables

export const GET_TRIPS_START = "GET_TRIPS_START";
export const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
export const GET_TRIPS_FAIL = "GET_TRIPS_FAIL";


export const getUsers = () => (dispatch) => {
    console.log("getUsers Fired")
    dispatch({type: GET_USERS_START})
    axiosWithAuth().get('https://tripsplitr.herokuapp.com/users')
            .then((res) => {
                // console.log(res.data)
                dispatch({type: GET_USERS_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_USERS_FAIL, payload: err}));
}

export const getTrips = () => (dispatch) => {
    console.log("getTrips Fired")
    dispatch({type: GET_TRIPS_START})
    axiosWithAuth().get('https://tripsplitr.herokuapp.com/trips')
            .then((res) => {
                // console.log(res.data)
                dispatch({type: GET_TRIPS_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_TRIPS_FAIL, payload: err}));
}