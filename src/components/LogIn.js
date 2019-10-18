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
           <button>Sign Up</button>
           <button>Forgot Password</button>
        </div>
    );
};

const LogInWithFormik = withFormik({
    mapPropsToValues( { username, password }) {
        return {
            username: username || "",
            password: password || ""
        }
    },

    // validations 

    validationSchema: Yup.object().shape({
        username: Yup.string().required("username is required"),
        password: Yup.string().required("password is required"),
    }),

    handleSubmit(values) {
        console.log("this is value eneter:", values);
        axios
        .get(`https://tripsplitr.herokuapp.com/users`)
        .then (res => {
            console.log("These are user lists:", res)
        })
        .catch(error => console.log(error));
    }




})(LogIn)

export default LogInWithFormik;


// API Calls 
// https://tripsplitr.herokuapp.com/