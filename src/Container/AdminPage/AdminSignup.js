import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import user from '../../images/user.png';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AdminSignup.css';

const AdminSignUp = () => {

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
        adminusername: '',
        adminemail: '',
        adminpassword: '',
        admincompanykey: '',
        AdminIsRegistered: false
    }
    const validate = yup.object().shape({
        adminusername: yup.string().required('User Name is reruired'),
        adminemail: yup.string().email().required('Required'),
        adminpassword: yup.string().min(6, 'Password must be 6 character').required('Password is required'),
        admincompanykey: yup.string().min(6, 'Company Key must be 6 character').required('Company Key is required'),
    });

    const submit = (values) => {
        const url = 'http://localhost:4000/jobvilla_admins';
        Axios.post(url, {
            "AdminUserName": values.adminusername,
            "AdminEmail": values.adminemail,
            "AdminPassword": values.adminpassword,
            "AdminIsRegistered": true
        });
        console.log(values);
        localStorage.setItem("AdminUserName", values.adminusername);
        localStorage.setItem("AdminEmail", values.adminemail);
        localStorage.setItem("AdminPassword", values.adminpassword);
        // localStorage.setItem("AdminCompanyKey", values.admincompanykey);
        localStorage.setItem("AdminIsRegistered", true);
        const Adminkey = values.admincompanykey;
        if(Adminkey === 'SHUBHAM'){
            navigate('/adminlogin');
        }else{
            alert("Invalid AdminKey !");
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
                    <body className="login-back d-flex align-items-center justify-content-center">
                        <div className="login m-3">
                            <img className="image d-block" src={user} alt="logo" />
                            <Form>
                                <div className="d-block form-group pt-3">
                                    <Field className="form-control my-login-input login-email-input" type="text" name='adminusername' placeholder="User Name" />
                                    <p className='text-danger err-p mt-2'><ErrorMessage name='adminusername' /></p>
                                </div>
                                <div className="d-block form-group pt-2">
                                    <Field className="form-control my-login-input login-email-input" type="email" name='adminemail' placeholder="Email" />
                                    <p className='text-danger err-p mt-2'><ErrorMessage name='adminemail' /></p>
                                </div>
                                <div className="form-group pt-2">
                                    <Field className="form-control my-login-input" type={state1 ? "text" : "password"} name='adminpassword' placeholder="Password" />
                                    <div className="input-group-append">
                                        <span className="input-group-text h-100 eye-box">
                                            <button className='eye-btn' onClick={hideShowPass1}> {
                                                state1 ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                            }</button>
                                        </span>
                                    </div><br />
                                </div>
                                <p className='text-danger err-p mt-0'><ErrorMessage name='adminpassword' /></p>




                                <div className="form-group pt-2">
                                    <Field className="form-control my-login-input" type={state2 ? "text" : "password"} name='admincompanykey' placeholder="Company Key" />
                                    <div className="input-group-append">
                                        <span className="input-group-text h-100 eye-box">
                                            <button className='eye-btn' onClick={hideShowPass2}> {
                                                state2 ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                            }</button>
                                        </span>
                                    </div><br />
                                </div>
                                <p className='text-danger err-p mt-0'><ErrorMessage name='admincompanykey' /></p>




                                <div className="signup text-end">
                                    <p className='sign-text'>Already have an account?<span><Link to={'/adminlogin'}> Login</Link></span></p>
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

export default AdminSignUp;
