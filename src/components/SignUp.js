import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from 'react-router-dom';

const SignUp = props => {

    return (
        <div className="user-form">
            <p>Enjoy your trip, Trip Split will do all the math for you</p>
            <Form>
                <Field type="text" name="name" placeholder="Full Name" className="fieldInput" />
                {props.touched.name && props.errors.name && (
                    <p className="error">{props.errors.name}</p>
                )}
                <Field type="text" name="email" placeholder="Email Address" className="fieldInput" />
                {props.touched.email && props.errors.email && (
                    <p className="error">{props.errors.email}</p>
                )}
                <Field type="text" name="username" placeholder="Username" className="fieldInput" />
                {props.touched.username && props.errors.username && (
                    <p className="error">{props.errors.username}</p>
                )}
                <Field type="password" name="password" placeholder="Password" className="fieldInput" />
                {props.touched.password && props.errors.password && (
                    <p className="error">{props.errors.password}</p>
                )}
                <button className="button-teal" type="submit">Submit</button>
                <p className="form__para">Already have an account? <Link to="login">Log In</Link></p>
            </Form>
        </div>
    );
};

const myMapPropsToValues = props => {
    console.log(props)
    const returnObj = {
        name: props.name || "",
        email: props.email || "",
        username: props.username || "",
        password: props.password || "",
    };
    return returnObj;
}

const myHandleSubmit = (values, {props}) => {
    console.log(props);
    let history = props.history;
    let location = props.location;
    let { from } = location.state || { from: { pathname: "/" } };
    axios.post(`https://tripsplit-1022.herokuapp.com/auth/register`, values)
    // API doesn't automatically log you in after registering, so another call is required for login
        .then(
            axios.post(`https://tripsplit-1022.herokuapp.com/auth/login`, {
                username: values.username,
                password: values.password
            })
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                history.replace(from);
                props.setAuth(true);
                localStorage.setItem('userID', res.data.user.id);
            })
        )
        .catch(err => console.log(err))
}

const yupSchema = Yup.object().shape({
    name: Yup.string().required("Please enter a name"),
    email: Yup.string().email("Email address not valid").required("Please enter an email address"),
    password: Yup.string().required("Please enter a password"),
    username: Yup.string().required("Please enter a username")
})

const formikObj = {
    mapPropsToValues: myMapPropsToValues,
    handleSubmit: myHandleSubmit,
    validationSchema: yupSchema
};

const EnhancedFormHOC = withFormik(formikObj);

const SignUpForm = EnhancedFormHOC(SignUp);

export default SignUpForm;