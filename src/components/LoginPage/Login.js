// // import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { useNavigate, Link } from 'react-router-dom';
// import { useState } from 'react';
// // import NavBar from '../Navbar/NavBar';
// import { BiEyeSlash,BiEye } from 'react-icons/bi'
// import { FaEye } from 'react-icons/fa';
// // import {RiErrorWarningFill} from 'react-icons/ri'
// import './login.css'

// const Login = () => {
//     const [passwordShown, setPasswordShown] = useState(false);
//     const togglePassword = () => {
//       setPasswordShown(!passwordShown);
//     };


//     const navigate = useNavigate();
//     const data = {
//         email: '',
//         password: '',
//     }
//     const validate = yup.object().shape({
//         email: yup.string().email()
//             .required(),
//         password: yup.string()
//             .min(6, 'Password must be 6 character')
//             .required(),
//     })

//     const submit = values => {
//         const email = localStorage.getItem('Email')
//         const Password = localStorage.getItem('Password')
//         if (email === values.email && Password === values.password) {
//             navigate('/dash')
//         }else{
//             alert("Data did not matched !")
//         }
//     }
//     return (
//         <>
//             <Formik
//                 initialValues={data}
//                 validationSchema={validate}
//                 onSubmit={submit}
//             >
//                 <>
//                 <div className="container-fluid container-log">
//                         <div className="myform-log row d-flex justify-content-center align-items-center">
//                             <div className="d-flex align-items-center mt-4 card w-auto p-5">
//                                 <Form className='mt-0'>
//                                     <h1 className='text-center mt-0 mb-4'>Login</h1>
//                                     {/* <label className='form-label mb-0'>Email</label> */}
//                                     <Field placeholder="Email" name="email" type="email" className='form-control p-1' />
//                                     <p className='text-danger err-p'><ErrorMessage name='email' /></p>

//                                     {/* <label className='form-label mb-0'>Password</label> */}
//                                     <Field placeholder="Password" name="password" type={passwordShown ? "text" : "password"} className='form-control p-1' />
//                                     <button onClick={togglePassword}><FaEye/> </button>
//                                     <p className='text-danger err-p'><ErrorMessage name='password' /></p>

//                                     <h6 className='rem-size'>Dont Have an account?<span><Link className='log-link' to='/signup'>SignUp</Link></span></h6>
//                                     <button className="btn btn-outline-primary mt-3 w-100" type="submit">Login</button>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>

//                 </>
//             </Formik>
//         </>
//     )

// }

// export default Login;






// // import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import { useNavigate, Link } from 'react-router-dom';
// import { useState } from 'react';
// // import NavBar from '../Navbar/NavBar';
// import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
// // import {RiErrorWarningFill} from 'react-icons/ri'
// import './login.css'

// const Login = () => {

//     const [state, setstate] = useState(false);
//     const hideShowPass = (e) => {
//         e.preventDefault();
//         setstate(pervState => !pervState);
//     }


//     const [passwordShown, setPasswordShown] = useState(false);
//     const togglePassword = () => {
//         setPasswordShown(!passwordShown);
//     };


//     const navigate = useNavigate();
//     const data = {
//         email: '',
//         password: '',
//     }
//     const validate = yup.object().shape({
//         email: yup.string().email()
//             .required(),
//         password: yup.string()
//             .min(6, 'password must be 6 character')
//             .required(),
//     })

//     const submit = values => {
//         const email = localStorage.getItem('Email')
//         const Password = localStorage.getItem('Password')
//         if (email === values.email && Password === values.password) {
//             navigate('/dash')
//         } else {
//             alert("Data did not matched !")
//         }
//     }

//     return (
//         <>
//             <Formik
//                 initialValues={data}
//                 validationSchema={validate}
//                 onSubmit={submit}
//             >
//                 <>
//                     <div className="container-fluid container-log">
//                         <div className="myform-log row d-flex justify-content-center align-items-center">
//                             <div className="d-flex align-items-center mt-4 card w-auto p-5">
//                                 <Form className='mt-0'>
//                                     <h1 className='text-center mt-0 mb-4'>Login</h1>
//                                     {/* <label className='form-label mb-0'>Email</label> */}
//                                     <Field placeholder="Email" name="email" type="email" className='form-control p-1' />
//                                     <p className='text-danger err-p'><ErrorMessage name='email' /></p>

//                                     {/* <label className='form-label mb-0'>Password</label> */}
//                                     <Field placeholder="Password" name="password" type={state ? "text" : "password"} className='form-control p-1' />
//                                     <span className='eye-icon'><button className='eye-btn' onClick={hideShowPass}> {
//                                         state ? <FaEyeSlash /> : <FaEye />
//                                     }</button></span>


//                                     {/* 
//                                     <div className="col-12">
//                                         <div className="input-group mb-3">
//                                             <div className="input-group-prepend">
//                                                 <span className="input-group-text" id="basic-addon1"><FaLock /></span>
//                                             </div>
//                                             <Field name="password" type="password" value="" className="input form-control" id="password"
//                                                 placeholder="password" required="true" aria-label="password" aria-describedby="basic-addon1" />
//                                             <div className="input-group-append">
//                                                 <span className="input-group-text" onclick={password_show_hide}>
//                                                    <FaEye id="show_eye" />
//                                                    <FaEyeSlash className="d-none" id="hide_eye"/>
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div> */}



//                                     {/* <div className="col-12">
//                                         <div className="input-group mb-3">
//                                             <div className="input-group-prepend">
//                                                 <span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span>
//                                             </div>
//                                             <Field name="password" type="password" value="" className="input form-control" id="password"
//                                                 placeholder="password" required="true" />
//                                             <div className="input-group-append">
//                                                 <span className="input-group-text">
//                                                     <i className="fas fa-eye" id="show_eye"></i>
//                                                     <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div> */}









//                                     {/* <p className='text-danger err-p'><ErrorMessage name='password' /></p> */}
//                                     {/* <h6 className='rem-size'>Dont Have an account?<span><Link className='log-link' to='/signup'>SignUp</Link></span></h6>
//                                     <button className="btn btn-outline-primary mt-3 w-100" type="submit">Login</button>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>

//                 </>
//             </Formik>
//         </>
//     )

// }

// export default Login;
//  */}

















import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import user from '../../images/user.png';
import './login.css';
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
                                <p className='text-danger err-p mt-2'><ErrorMessage name='email' /></p>
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
                            <p className='text-danger err-p mt-0'><ErrorMessage name='password' /></p>
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
