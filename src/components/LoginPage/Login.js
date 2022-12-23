import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import user from '../../images/user.png';
import '../Common/Common.css';
const Login = () => {

    const [state, setstate] = useState(false);
    const hideShowPass = (e) => {
        e.preventDefault();
        setstate(pervState => !pervState);
    }

    const navigate = useNavigate();
    const InitialData = {
        email: '',
        password: '',
    }
    const validate = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6, 'password must be 6 character').required(),
    })

    const submit = values => {
        const email = localStorage.getItem('Email')
        const Password = localStorage.getItem('Password')
        if (email === values.email && Password === values.password) {
            navigate('/dash')
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
                                <Field className="form-control my-login-input login-email-input" type="email" name='email' placeholder="Email" />
                                <p className='text-danger error-message-text mt-2'><ErrorMessage name='email' /></p>
                            </div>
                            <div className="form-group pt-3">
                                <Field className="form-control my-login-input" type={state ? "text" : "password"} name='password' placeholder="Password" />
                                <div className="input-group-append">
                                    <span className="input-group-text h-100 eye-box">
                                        <button className='eye-btn' onClick={hideShowPass}> {
                                            state ? <FaEyeSlash className='login-pass-eye' /> : <FaEye className='login-pass-eye' />
                                        }</button>
                                    </span>
                                </div><br />
                            </div>
                            <p className='text-danger error-message-text mt-0'><ErrorMessage name='password' /></p>
                            <div className="signup text-end">
                                <p className='sign-text'>Don't have an account?<span><Link to={'/signup'}> SignUp</Link></span></p>
                            </div>
                            <button className="btn btn-outline-primary all-btn-color w-100 mt-4 mb-4" type="submit" >Login</button>
                        </Form>
                    </div>
                </body>
            </div>
        </Formik>
    );
}

export default Login;
