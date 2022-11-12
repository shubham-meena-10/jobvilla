// function Login(){
//     return(
//         <div>
//             <h1>Login Page</h1>
//         </div>
//     )
// }
//  export default Login;





// function SignUp(){
//     return(
//         <div>
//             <h1>Home Page</h1>
//         </div>
//     )
// }
// export default SignUp;



// import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Formik, Form, ErrorMessage, Field } from "formik";
// import * as Yup from "yup";
// import "./login.css";
// import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const initialvalues = {
//     name: "",
//     email: "",
//   };

//   const schemaLogin = Yup.object().shape({
//     name: Yup.string().required("Required Name"),
//     email: Yup.string().email().required("Required Email"),
//   }); 

//   const navigate = useNavigate();

//   const handle = (value) => {

//     navigate('/dash')
//   };

//   return (
//     <div className="container mt-5">
//       <Formik
//         initialValues={initialvalues}
//         validationSchema={schemaLogin}
//         onSubmit={handle}
//       >
//         <Form className="register-form text-start box">
//         <h4 className="text-center">Registration Form</h4>
//           <div className="form-group">
//             <label>Name</label>
//             <Field name="name" type="text" className={"form-control"} />
//             <p className="text-danger" ><ErrorMessage name="name"/></p>
//           </div>

//           <div className="form-group">
//             <label > Email </label>
//             <Field name="email" type="email" className={"form-control"} />
//             <p className="text-danger" ><ErrorMessage name="email"/></p>
//           </div>

//           <div>
//             <p>Dont have an account?<span><Link className="text-decoration-none" to='./signup'>Sign Up</Link></span></p>
//           </div>

//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Login;




import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';

const SignUp = () => {
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
        }
    }
    return (
        <>
            <NavBar />
            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            >
                <>
                    <div className='d-grid col-lg-8 ms-auto mt-5 col-sm-8'>
                        <h1 className="my-4 font-weight-bold .display-4">Login Now</h1>
                        <Form className="d-flex flex-column Justify-content-center align-item-center col-6">
                            <label className='form-check-label'>Email</label>
                            <Field placeholder="Email" name="email" type="email" className='form-control' />
                            <p className='text-danger'><ErrorMessage name='userName' /></p>
                            <label className='form-check-label'>Password</label>
                            <Field placeholder="Password" name="password" type="password" className='form-control' />
                            <p className='text-danger'><ErrorMessage name='password' /></p>
                            <p>Dont Have An Account <span><Link to='/signup'>Sign Up</Link></span></p>
                            <button className="btn btn-primary mt-3" type="submit">Login</button>
                        </Form>
                    </div>
                </>
            </Formik>
        </>
    )

}

export default SignUp;
