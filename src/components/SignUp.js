import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';
import './signup.css'

const SignUp = () => {
    const navigate = useNavigate();
    const data = {
        userName: '',
        email: '',
        password: '',
        cpassword: '',
        checkbox: false
    }
    const validate = yup.object().shape({
        username: yup.string()
            .required('Required'),
        email: yup.string().email()
            .required('Required'),
        password: yup.string()
            .min(6, 'Password must be 6 character')
            .required('Password is required'),
        cpassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        checkbox: yup.boolean()
            .oneOf([true], 'Checkbox must be field')
            .required('Please click the checkbox'),
    })

    const submit = values => {
        const url = 'http://localhost:4000/applyers';
        Axios.post(url, {
            "applyName": values.username,
            "applyEmail": values.email,
        })
        console.log(values)
        localStorage.setItem("UserName", values.username)
        localStorage.setItem("Email", values.email)
        localStorage.setItem("Password", values.password)
        localStorage.setItem("ConfirmPassword", values.cpassword)
        localStorage.setItem("Checkbox", values.checkbox)
        localStorage.setItem("IsRegistered", true)
        const userName = localStorage.getItem('UserName')
        const Password = localStorage.getItem('Password')
        navigate('/login')
    }
    return (
        <>
            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            >
                <>
                    <div className='container-reg container-fluid d-flex justify-content-center'>
                        <Form className='myform-reg'>
                            <h1 className='text-center'>Sign Up</h1>
                            <label className='form-check-label'>User Name</label>
                            <Field placeholder="User Name" name="username" type="text" className='form-control reg-control' />
                            <p className='text-danger'><ErrorMessage name='username' /></p>

                            <label className='form-check-label'>Email</label>
                            <Field placeholder="Email" name="email" type="email" className='form-control reg-control' />
                            <p className='text-danger'><ErrorMessage name='email' /></p>

                            <label className='form-check-label'>Password</label>
                            <Field placeholder="Password" name="password" type="password" className='form-control reg-control' />
                            <p className='text-danger'><ErrorMessage name='password' /></p>

                            <label className='form-check-label'>Confirm Password</label>
                            <Field placeholder="Confirm Password" name="cpassword" type="password" className='form-control reg-control' />
                            <p className='text-danger'><ErrorMessage name='cpassword' /></p>

                            <Field className='form-check-Field mycheck m-1' name="checkbox" type="checkbox" />
                            <label className='form-check-label'>Remember me.</label>
                            <p className='text-danger'><ErrorMessage name='checkbox' /></p>

                            <p>Already Have An Account?<span><Link className='log-link' to='/login'>Login</Link></span></p>
                            <button className="btn btn-primary mt-2 w-100" type="submit">Register</button>
                        </Form>
                    </div>
                </>
            </Formik>
        </>
    )
}
export default SignUp;
