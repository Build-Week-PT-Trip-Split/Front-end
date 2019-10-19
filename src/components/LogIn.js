import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LogIn = ({values, errors, touched}) => {

    return (
        <div>
            <h2> This is log in component</h2>
            <Form className="loginForm">
                <label>
                    Username: 
                    <Field type="text" name="username" placeholder="username"  />
                    {touched.username && errors.username && (
                    <p className="error"> {errors.username} </p>
                     )}
                </label>
                <label>
                    Password: 
                    <Field type="password" name="password" placeholder="password"  />
                    {touched.password && errors.password && (
                    <p className="error"> {errors.password} </p>
                     )}
                </label>
                <button className="loginButton">Log In</button>
            </Form>
           <button type="submit">Sign Up</button>
           <button>Forgot Password</button>
        </div>
    );
};

const LogInWithFormik = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        }
    },

    // validations 

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    }),

    handleSubmit(values) {
        console.log("this is value entered:", values);
        axios
        .post(`https://tripsplitr.herokuapp.com/auth/login`, {
            username: values.username,
            password: values.password
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            // will add redirect to dashboard after we set up routes
            })
        .catch(error => console.log(error));
    }

})(LogIn)

export default LogInWithFormik;


// API Calls 
// https://tripsplitr.herokuapp.com/ 