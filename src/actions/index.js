import {axiosWithAuth} from '../utils/axiosAuth.js';

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const getUsers = () => (dispatch) => {
    console.log("getUsers Fired")
    dispatch({type: GET_USERS_START})
    axiosWithAuth().get('https://tripsplitr.herokuapp.com/users')
            .then((res) => {
                console.log(res.data)
                dispatch({type: GET_USERS_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: GET_USERS_FAIL, payload: err}));
}