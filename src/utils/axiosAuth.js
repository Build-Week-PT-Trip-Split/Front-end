import React from 'react'
import axios from 'axios';

// const axiosWithAuth = () => {
//     const token = localStorage.getItem("token");

//     return axios.create({
//         baseURL: 'https://tripsplitr.herokuapp.com',
//         headers: {
//             Authorization: token
//         }
//     });
// };

// export default axiosWithAuth;

export const axiosWithAuth = () => {
    // const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxNiwidXNlcm5hbWUiOiJzb2ZpYSIsImlhdCI6MTU3MTE5NzU2OSwiZXhwIjoxNTcxMjgzOTY5fQ.xN9PPhtFDr2l2MltghCjEElFVCjN3AZIvPoD1g6p4pE"
        },
    });
};