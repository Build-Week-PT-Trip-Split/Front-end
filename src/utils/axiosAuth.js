import React from 'react'
import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: 'https://tripsplitr.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;