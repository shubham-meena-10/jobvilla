import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import user from '../../images/user.png';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../Common/Common.css';

const SignUp = () => {

    const [state1, setstate1] = useState(false);
    const [state2, setstate2] = useState(false);
    const hideShowPass1 = (e) => {
        e.preventDefault();
        setstate1(pervState => !pervState);
    }
    const hideShowPass2 = (e) => {
        e.preventDefault();
        setstate2(pervState => !pervState);
    }

    const navigate = useNavigate();
    const data = {
        username: '',
        email: '',
        password: '',
        cpassword: '',
        IsRegistered: false
    }
    const validate = yup.object().shape({
        username: yup.string().required('User Name is reruired'),
        email: yup.string().email().required('Required'),
        password: yup.string().min(6, 'Password must be 6 character').required('Password is required'),
        cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    });

    const submit = (values, { resetForm }) => {
        const url = 'http://localhost:4000/jobvilla_users';
        Axios.post(url, {
            "UserName": values.username,
            "Email": values.email,
            "Password": values.password,
            "IsRegistered": true
        });
        console.log(values);
        localStorage.setItem("UserName", values.username);
        localStorage.setItem("Email", values.email);
        localStorage.setItem("Password", values.password);
        localStorage.setItem("IsRegistered", true);
        resetForm({ values: '' });
        navigate('/login');
    }
    return (
        <>
            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            >
                <>
                    <body className="login-back d-flex align-items-center justify-content-center">
                        <div className="login m-3">
                            <img className="image d-block" src={user} alt="logo" />
                            <Form>
                                <div className="d-block form-group pt-3">
                                    <Field className="form-control my-login-input login-email-input" type="text" name='username' placeholder="User Name" />
                                    <p className='text-danger error-message-text mt-2'><ErrorMessage name='username' /></p>
                                </div>
                                <div className="d-block form-group pt-2">
                                    <Field className="form-control my-login-input login-email-input" type="email" name='email' placeholder="Email" />
                                    <p className='text-danger error-message-text mt-2'><ErrorMessage name='email' /></p>
                                </div>
                                <div className="form-group pt-2">
                                    <Field className="form-control my-login-input" type={state1 ? "text" : "password"} name='password' placeholder="Password" />
                                    <div className="input-group-append">
                                        <span className="input-group-text h-100 eye-box">
                                            <button className='eye-btn' onClick={hideShowPass1}> {
                                                state1 ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                            }</button>
                                        </span>
                                    </div><br />
                                </div>
                                <p className='text-danger error-message-text mt-0'><ErrorMessage name='password' /></p>
                                <div className="form-group pt-2">
                                    <Field className="form-control my-login-input" type={state2 ? "text" : "password"} name='cpassword' placeholder="Confirm Password" />
                                    <div className="input-group-append">
                                        <span className="input-group-text h-100 eye-box">
                                            <button className='eye-btn' onClick={hideShowPass2}> {
                                                state2 ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                            }</button>
                                        </span>
                                    </div><br />
                                </div>
                                <p className='text-danger error-message-text mt-0'><ErrorMessage name='cpassword' /></p>
                                <div className="signup text-end">
                                    <p className='sign-text'>Already have an account?<span><Link to={'/login'}> Login</Link></span></p>
                                </div>
                                <button className="btn btn-outline-primary all-btn-color w-100 mt-4 mb-4" type="submit" >Register</button>
                            </Form>
                        </div>
                    </body>
                </>
            </Formik>
        </>
    );
}

export default SignUp;
