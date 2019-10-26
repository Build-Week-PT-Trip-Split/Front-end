import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';

const LogIn = ({values, errors, touched}) => {

    return (
        <div className="loginForm">
            <p>Enjoy your trip, Trip Split will do all the math for you</p>
            <Form>
                <label>
                    <Field type="text" name="username" placeholder="Username" className="fieldInput" />
                    {touched.username && errors.username && (
                    <p className="error"> {errors.username} </p>
                     )}
                </label>
                <label>
                    <Field type="password" name="password" placeholder="Password" className="fieldInput" />
                    {touched.password && errors.password && (
                    <p className="error"> {errors.password} </p>
                     )}
                </label>
                <button className="formBtn">Log In</button>
                <p className="form__para" >Don't have an account? <Link to="signup">Sign Up</Link></p>
           <a href="#" className="forgotPassword">Forgot your Password?</a>
            </Form>
        </div>
    );
};

const LogInWithFormik = withFormik({
    mapPropsToValues( { username, password }) {
        return {
            username: username || "",
            password: password || "",
        }
    },

    // validations 

    validationSchema: Yup.object().shape({
        username: Yup.string().required("username is required"),
        password: Yup.string().required("password is required"),
    }),

    handleSubmit(values, {props}) {
        console.log("Login: ", props)
        let history = props.history;
        let location = props.location;
        let { from } = location.state || { from: { pathname: "/" } };
        console.log("this is value eneter:", values);
        axios.post(`https://tripsplitr.herokuapp.com/auth/login`, {
                username: values.username,
                password: values.password
            })
        .then (res => {
            localStorage.setItem('token', res.data.token);
            history.replace(from);
            props.setAuth(true);
            localStorage.setItem('userID', res.data.user.id);
        })
        .catch(error => console.log(error));
    }




})(LogIn)

export default LogInWithFormik;



