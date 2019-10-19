import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = props => {

    return (
        <div className="user-form">
            <Form>
                <Field type="text" name="name" placeholder="Full Name" />
                {props.touched.name && props.errors.name && (
                    <p className="error">{props.errors.name}</p>
                )}
                <Field type="text" name="email" placeholder="Email Address" />
                {props.touched.email && props.errors.email && (
                    <p className="error">{props.errors.email}</p>
                )}
                <Field type="text" name="username" placeholder="Create Username" />
                {props.touched.username && props.errors.username && (
                    <p className="error">{props.errors.username}</p>
                )}
                <Field type="text" name="password" placeholder="Create Password" />
                {props.touched.password && props.errors.password && (
                    <p className="error">{props.errors.password}</p>
                )}
                <button type="submit">Submit</button>
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
    axios.post(`https://tripsplitr.herokuapp.com/auth/register`, values)
    // API doesn't automatically log you in after registering, so another call is required for login
        .then(
            axios.post(`https://tripsplitr.herokuapp.com/auth/login`, {
                username: values.username,
                password: values.password
            })
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                // props.history.push('/trips');
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