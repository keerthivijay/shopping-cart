import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginUser, logoutUser } from "../store/UserSlice.jsx";
import { validateLogin } from '../utils/formValidators.js';

function UserLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user.userDetails);
    useEffect(() => {
        console.log('logout first!');
        dispatch(logoutUser());
    },[]);

    const onSubmitHandler = (values) => {
        dispatch(loginUser(values));

        if(localStorage.getItem("isAuthenticated") === 'true') {
            navigate("/");
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <>
            <h1>User Login</h1>
            <Formik
                initialValues={{ username: "", password: "" }}
                validate={validateLogin}
                onSubmit={(values) => {
                    onSubmitHandler(values);
                }}
            >
                <Form className="form form-sign-in" action="#">
                    <label htmlFor="username">User name:</label>
                    <Field type="text" name="username" id="username" />
                    <ErrorMessage name="username" component="div" className="error" />

                    <label htmlFor="password">Password:</label>
                    <Field type="password" name="password" id="password" />
                    <ErrorMessage name="password" component="div" className="error" />

                    <button className="btn btn-login" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    );
}

export default UserLogin;