// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import Axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import NavBar from './NavBar';
// import './signup.css'

// const SignUp = () => {
//     const navigate = useNavigate();
//     const data = {
//         userName: '',
//         email: '',
//         password: '',
//         cpassword: '',
//         checkbox: false
//     }
//     const validate = yup.object().shape({
//         username: yup.string()
//             .required('Required'),
//         email: yup.string().email()
//             .required('Required'),
//         password: yup.string()
//             .min(6, 'Password must be 6 character')
//             .required('Password is required'),
//         cpassword: yup.string()
//             .oneOf([yup.ref('password'), null], 'Passwords must match')
//             .required('Confirm password is required'),
//         checkbox: yup.boolean()
//             .oneOf([true], 'Checkbox must be field')
//             .required('Please click the checkbox'),
//     })

//     const submit = values => {
//         const url = 'http://localhost:4000/applyers';
//         Axios.post(url, {
//             "applyName": values.username,
//             "applyEmail": values.email,
//         })
//         console.log(values)
//         localStorage.setItem("UserName", values.username)
//         localStorage.setItem("Email", values.email)
//         localStorage.setItem("Password", values.password)
//         localStorage.setItem("ConfirmPassword", values.cpassword)
//         localStorage.setItem("Checkbox", values.checkbox)
//         localStorage.setItem("IsRegistered", true)
//         const userName = localStorage.getItem('UserName')
//         const Password = localStorage.getItem('Password')
//         navigate('/login')
//     }
//     return (
//         <>
//             <Formik
//                 initialValues={data}
//                 validationSchema={validate}
//                 onSubmit={submit}
//             >
//                 <>
//                     <div className='container-reg container-fluid d-flex justify-content-center'>
//                         <div className='row d-flex justify-content-center'>
//                             <Form className='myform-reg'>
//                                 <h1 className='text-center'>Sign Up</h1>
//                                 <label className='form-check-label'>User Name</label>
//                                 <Field placeholder="User Name" name="username" type="text" className='form-control reg-control' />
//                                 <p className='text-danger'><ErrorMessage name='username' /></p>

//                                 <label className='form-check-label'>Email</label>
//                                 <Field placeholder="Email" name="email" type="email" className='form-control reg-control' />
//                                 <p className='text-danger'><ErrorMessage name='email' /></p>

//                                 <label className='form-check-label'>Password</label>
//                                 <Field placeholder="Password" name="password" type="password" className='form-control reg-control' />
//                                 <p className='text-danger'><ErrorMessage name='password' /></p>

//                                 <label className='form-check-label'>Confirm Password</label>
//                                 <Field placeholder="Confirm Password" name="cpassword" type="password" className='form-control reg-control' />
//                                 <p className='text-danger'><ErrorMessage name='cpassword' /></p>

//                                 <Field className='form-check-Field mycheck m-1' name="checkbox" type="checkbox" />
//                                 <label className='form-check-label'>Remember me.</label>
//                                 <p className='text-danger'><ErrorMessage name='checkbox' /></p>

//                                 <p>Already Have An Account?<span><Link className='log-link' to='/login'>Login</Link></span></p>
//                                 <button className="btn btn-primary mt-2 w-100" type="submit">Register</button>
//                             </Form>
//                         </div>
//                     </div>
//                 </>
//             </Formik>
//         </>
//     )
// }
// export default SignUp;







// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import Axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './signup.css'

// const SignUp = () => {
//     const navigate = useNavigate();
//     const data = {
//         username: '',
//         email: '',
//         password: '',
//         cpassword: '',
//         checkbox: false,
//         IsRegistered:false
//     }
//     const validate = yup.object().shape({
//         username: yup.string()
//             .required('User Name is reruired'),
//         email: yup.string().email()
//             .required('Required'),
//         password: yup.string() 
//             .min(6, 'Password must be 6 character')
//             .required('Password is required'),
//         cpassword: yup.string()
//             .oneOf([yup.ref('password'), null], 'Passwords must match')
//             .required('Confirm password is required'),
//         checkbox: yup.boolean()
//             .oneOf([true], 'Checkbox must be field')
//             .required('Please check the checkbox'),
//     });

//     const submit = (values,{resetForm}) => {
//         const url = 'http://localhost:4000/jobvilla_users';
//         Axios.post(url, {
//             "UserName": values.username,
//             "Email": values.email,
//             "Password": values.password,
//             "ConfirmPassword": values.cpassword,
//             "Checkbox": values.checkbox,
//             "IsRegistered": true
//         });
//         console.log(values)
//         localStorage.setItem("UserName", values.username);
//         localStorage.setItem("Email", values.email);
//         localStorage.setItem("Password", values.password);
//         localStorage.setItem("ConfirmPassword", values.cpassword);
//         localStorage.setItem("Checkbox", values.checkbox);
//         localStorage.setItem("IsRegistered", true);
//         resetForm({values:''});
//         navigate('/login');
//     }
//     return (
//         <>
//             <Formik
//                 initialValues={data}
//                 validationSchema={validate}
//                 onSubmit={submit}
//             >
//                 <>
//                     <div className="container-fluid container-reg">
//                         <div className="myform-reg row d-flex justify-content-center">
//                             <div className="d-flex align-items-center mt-4 card w-auto p-5">
//                                 <Form className='mt-0'>
//                                     <h1 className='text-center mt-0 mb-4'>Sign Up</h1>
//                                     {/* <label className='form-label mb-0'>User Name</label> */}
//                                     <Field placeholder="User Name" name="username" type="text" className='form-control p-1' />
//                                     <p className='text-danger err-p'><ErrorMessage name='username' /></p>

//                                     {/* <label className='form-label mb-0'>Email</label> */}
//                                     <Field placeholder="Email" name="email" type="email" className='form-control p-1' />
//                                     <p className='text-danger err-p'><ErrorMessage name='email' /></p>

//                                     {/* <label className='form-label mb-0'>Password</label> */}
//                                     <Field placeholder="Password" name="password" type="password" className='form-control p-1' />
//                                     <p className='text-danger err-p'><ErrorMessage name='password' /></p>

//                                     {/* <label className='form-label mb-0'>Confirm Password</label> */}
//                                     <Field placeholder="Confirm Password" name="cpassword" type="password" className='form-control p-1' />
//                                     <p className='text-danger err-p'><ErrorMessage name='cpassword' /></p>

//                                     <Field className='form-check-Field m-1' name="checkbox" type="checkbox" />
//                                     <label className='mycheck form-label rem-size'>Remember me.</label>
//                                     <p className='text-danger mb-0 err-p'><ErrorMessage name='checkbox'/></p>

//                                     <h6 className='rem-size'>Already Have An Account?<span><Link className='log-link' to='/login'>Login</Link></span></h6>
//                                     <button className="btn btn-outline-primary mt-3 w-100" type="submit">Register</button>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             </Formik>
//         </>
//     )
// }

// export default SignUp;





import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import user from '../../images/user.png';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

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
                                    <p className='text-danger err-p mt-2'><ErrorMessage name='username' /></p>
                                </div>
                                <div className="d-block form-group pt-2">
                                    <Field className="form-control my-login-input login-email-input" type="email" name='email' placeholder="Email" />
                                    <p className='text-danger err-p mt-2'><ErrorMessage name='email' /></p>
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
                                <p className='text-danger err-p mt-0'><ErrorMessage name='password' /></p>
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
                                <p className='text-danger err-p mt-0'><ErrorMessage name='cpassword' /></p>
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
