import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignUp (props) {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        if (props.status) {
            setUsers([...users, props.status]);
        }
    }, [props.status]);

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
            {users.map(user => (
                <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Username: {user.username}</li>
                    <li>Password: {user.password}</li>
                </ul>
            ))}
        </div>
    );
};

const myMapPropsToValues = props => {
    const returnObj = {
        name: props.name || "",
        email: props.email || "",
        username: props.username || "",
        password: props.password || "",
    };
    return returnObj;
}

const myHandleSubmit = (values, { setStatus }) => {
    axios
        
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.error(err));
};

const yupSchema = Yup.object().shape({
    name: Yup.string().required("please type a name"),
    email: Yup.string().required("please type an email"),
    password: Yup.string().required("please type a password"),
    role: Yup.string().required("please select a role")
});

const formikObj = {
    mapPropsToValues: myMapPropsToValues,
    handleSubmit: myHandleSubmit,
    validationSchema: yupSchema
};

const EnhancedFormHOC = withFormik(formikObj);

const EnhancedForm = EnhancedFormHOC(SignUp);

export default EnhancedForm;