
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import user from '../../images/user.png';
import './AdminLogin.css';
import '../../components/Common/Common.css';
const AdminLogin = () => {

    const [state, setstate] = useState(false);
    const hideShowPass = (e) => {
        e.preventDefault();
        setstate(pervState => !pervState);
    }

    const navigate = useNavigate();
    const InitialData = {
        adminemail: '',
        adminpassword: '',
        admincompanykey: '',
    }
    const validate = yup.object().shape({
        adminemail: yup.string().email().required(),
        adminpassword: yup.string().min(6, 'password must be 6 character').required(),
        admincompanykey: yup.string().min(6, 'Company Key must be 6 character').required('Company Key is required field'),
    });

    const submit = values => {
        const Adminemail = localStorage.getItem('AdminEmail')
        const Adminpassword = localStorage.getItem('AdminPassword')
        if (Adminemail === values.adminemail && Adminpassword === values.adminpassword && values.admincompanykey === 'SHUBHAM') {
            navigate('/admindash')
        } else {
            alert("Data did not matched !")
        }
    }
    return (
        <Formik
            initialValues={InitialData}
            validationSchema={validate}
            onSubmit={submit}
        >
            <div>
                <body className="login-back d-flex align-items-center justify-content-center">
                    <div className="login m-3">
                        <img className="image d-block" src={user} alt="logo" />
                        <Form>
                            <div className="d-block form-group pt-5">
                                <Field className="form-control my-login-input login-email-input" type="email" name='adminemail' placeholder="Email" />
                                <p className='text-danger err-p mt-2'><ErrorMessage name='adminemail' /></p>
                            </div>
                            <div className="form-group pt-3">
                                <Field className="form-control my-login-input" type={state ? "text" : "password"} name='adminpassword' placeholder="Password" />
                                <div className="input-group-append">
                                    <span className="input-group-text h-100 eye-box">
                                        <button className='eye-btn' onClick={hideShowPass}> {
                                            state ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                        }</button>
                                    </span>
                                </div><br />
                            </div>
                            <p className='text-danger err-p mt-0'><ErrorMessage name='adminpassword' /></p>
                            <div className="form-group pt-3">
                                <Field className="form-control my-login-input" type={state ? "text" : "password"} name='admincompanykey' placeholder="Company Key" />
                                <div className="input-group-append">
                                    <span className="input-group-text h-100 eye-box">
                                        <button className='eye-btn' onClick={hideShowPass}> {
                                            state ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                        }</button>
                                    </span>
                                </div><br />
                            </div>
                            <p className='text-danger err-p mt-0'><ErrorMessage name='admincompanykey' /></p>
                            <div className="signup text-end">
                                <p className='sign-text'>Don't have an account?<span><Link to={'/adminsignup'}> SignUp</Link></span></p>
                            </div>
                            <button className="btn btn-outline-primary all-btn-color w-100 mt-4 mb-4" type="submit" >Login</button>
                        </Form>
                    </div>
                </body>
            </div>
        </Formik>
    );
}

export default AdminLogin;
