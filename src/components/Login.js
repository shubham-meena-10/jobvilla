import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';
import { BiEyeSlash,BiEye } from 'react-icons/bi'
import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const data = {
        email: '',
        password: '',
    }
    const validate = yup.object().shape({
        email: yup.string().email()
            .required('Required'),
        password: yup.string()
            .min(6, 'Password must be 6 character')
            .required('Password is required'),
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
                <div className='container-log container-fluid d-flex justify-content-center'>
                    <Form className="myform-log">
                        <h1 className="text-center">Login Now</h1>
                            <label className='form-check-label'>Email</label>
                            <Field placeholder="Email" name="email" type="email" className='form-control log-control' />
                            <p className='text-danger'><ErrorMessage name='userName' /></p>
                            <label className='form-check-label'>Password</label>
                            <Field type='password' name="password" class="form-control log-control" placeholder="Password" />
                            <p className='text-danger'><ErrorMessage name='password' /></p>
                            <p>Dont Have An Account?<span><Link className='sign-link' to='/signup'>Sign Up</Link></span></p>
                            <button className="btn btn-primary mt-3 w-100" type="submit">Login</button>
                    </Form>
                </div>
                </>
            </Formik>
        </>
    )

}

export default Login;
