// import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
// import NavBar from '../Navbar/NavBar';
// import { BiEyeSlash,BiEye } from 'react-icons/bi'
// import {RiErrorWarningFill} from 'react-icons/ri'
import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const data = {
        email: '',
        password: '',
    }
    const validate = yup.object().shape({
        email: yup.string().email()
            .required(),
        password: yup.string()
            .min(6, 'Password must be 6 character')
            .required(),
    })

    const submit = values => {
        const email = localStorage.getItem('Email')
        const Password = localStorage.getItem('Password')
        if (email === values.email && Password === values.password) {
            navigate('/dash')
        }else{
            alert("Data did not matched !")
        }
    }
    return (
        <>
            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            >
                <>
                <div className="container-fluid container-log">
                        <div className="myform-log row d-flex justify-content-center align-items-center">
                            <div className="d-flex align-items-center mt-4 card w-auto p-5">
                                <Form className='mt-0'>
                                    <h1 className='text-center mt-0 mb-4'>Login</h1>
                                    {/* <label className='form-label mb-0'>Email</label> */}
                                    <Field placeholder="Email" name="email" type="email" className='form-control p-1' />
                                    <p className='text-danger err-p'><ErrorMessage name='email' /></p>

                                    {/* <label className='form-label mb-0'>Password</label> */}
                                    <Field placeholder="Password" name="password" type="password" className='form-control p-1' />
                                    <p className='text-danger err-p'><ErrorMessage name='password' /></p>

                                    <h6 className='rem-size'>Dont Have an account?<span><Link className='log-link' to='/signup'>SignUp</Link></span></h6>
                                    <button className="btn btn-outline-primary mt-3 w-100" type="submit">Login</button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </>
            </Formik>
        </>
    )

}

export default Login;
