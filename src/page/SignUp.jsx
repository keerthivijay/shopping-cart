import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SuccessMessage from '../components/SuccessMessage';
import { createUser, loginUser } from '../store/UserSlice.jsx';
import { validateSignUp } from '../utils/formValidators.js';

function SignUp() {
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Sign-up</h1>
            {status ? <SuccessMessage message={"Successfully signed up!"} /> : ''}
            <Formik
                initialValues={{
                    name: '',
                    mobile: '',
                    email: '',
                    password: '',
                    confirmpassword: ''
                }}
                validate={validateSignUp}
                onSubmit={(values, { resetForm }) => {
                    delete values['confirmpassword'];
                    console.log(values);
                    dispatch(createUser(values));
                    setStatus(true);
                    resetForm();
                }}
            >
                <Form className="form form-sign-up" action="#">
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" name="name" id="name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="mobile">Mobile No:</label>
                        <Field type="text" name="mobile" id="mobile" />
                        <ErrorMessage name="mobile" component="div" className="error" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">E-mail Id:</label>
                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password" id="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="confirmpassword">Confirm Password:</label>
                        <Field type="password" name="confirmpassword" id="confirmpassword" />
                        <ErrorMessage name="confirmpassword" component="div" className="error" />
                    </div>

                    <button className="btn btn-sign-up" type="submit">Sign Up</button>
                </Form>
            </Formik>
        </>
    );
}

export default SignUp;