// // import { useState } from "react";
// // import React from "react";
// // import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import { Formik, Form, ErrorMessage, Field } from "formik";
// // import * as Yup from "yup";
// // import "./signup.css";
// // import { Link } from 'react-router-dom'
// // import { useNavigate } from "react-router-dom";

// // const SignUp = () => {
// //   const initialvalues = {
// //     name: "",
// //     email: "",
// //     password: "",
// //     confirm_password: "",
// //     checkbox: false,
// //   };


// //   const schema = Yup.object().shape({
// //     name: Yup.string().required("Required Name"),
// //     email: Yup.string().email().required("Required Email"),
// //     password: Yup.string().required("Required Password"),
// //     confirm_password: Yup.string().required('Required Confirm Password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
// //     checkbox: Yup.boolean().oneOf([true], "Please Accept Terms"),
// //   }); 


// //   const navigate = useNavigate();
// //   const handle = (value) => {
// //     localStorage.setItem("name",value.name)
// //     localStorage.setItem("email",value.email)
// //     localStorage.setItem("password",value.password)
// //     navigate('/dash')
// //   };

// //   return (
// //     <div classNameName="container mt-5">
// //       <Formik
// //         initialValues={initialvalues}
// //         validationSchema={schema}
// //         onSubmit={handle}
// //       >
// //         <Form classNameName="register-form text-start box">
// //         <h4 classNameName="text-center">Registration Form</h4>
// //           <div classNameName="form-group">
// //             <label>Name</label>
// //             <Field name="name" type="text" classNameName={"form-control"} />
// //             <p classNameName="text-danger" ><ErrorMessage name="name"/></p>
// //           </div>
// //           <div classNameName="form-group">
// //             <label > Email </label>
// //             <Field name="email" type="email" classNameName={"form-control"} />
// //             <p classNameName="text-danger" ><ErrorMessage name="email"/></p>
// //           </div>

// //           <div classNameName="form-group">
// //             <label > Password </label>
// //             <Field name="password" type="password" classNameName={"form-control"} />
// //             <p classNameName="text-danger" ><ErrorMessage name="password"/></p>
// //           </div>

// //           <div classNameName="form-group">
// //             <label > Confirm Password </label>
// //             <Field name="confirm_password" type="password" classNameName={"form-control"} />
// //             <p classNameName="text-danger" ><ErrorMessage name="group"/></p>
// //           </div>

// //           <div classNameName="form-check">
// //             <Field
// //               name="checkbox"
// //               type="checkbox"
// //               classNameName={"form-check-input"}
// //             />
// //             <label classNameName="form-check-label">All fields confirmed ?</label>
// //             <p classNameName="text-danger" ><ErrorMessage name="checkbox"/></p>
// //           </div>
// //           <div>
// //             <p>Already Have a account?<span><Link classNameName="text-decoration-none" to='./login'> Login</Link></span></p>
// //           </div>

// //           <div classNameName="form-group">
// //             <button type="submit" classNameName="btn btn-primary">
// //               Register
// //             </button>
// //           </div>
// //         </Form>
// //       </Formik>
// //     </div>
// //   );
// // };

// // export default SignUp;








// import "./signup.css";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Field, Formik } from "formik";
// import { useState } from "react";


// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   let handleSubmit = async (e) => {
//     // e.preventDefault();
//     try {
//       let res = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           mobileNumber: mobileNumber,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//     navigate('./apidashboard');
//   };
//   return (
//     <div classNameName="App-1">
//     <Formik onSubmit={handleSubmit}>
//       <form>
//         <Field
//           type="text"
//           value={name}
//           placeholder="Name"
//           classNameName="input-1"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <Field
//           type="text"
//           value={email}
//           placeholder="Email"
//           classNameName="input-1"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           value={mobileNumber}
//           placeholder="Mobile Number"
//           classNameName="input-1"
//           onChange={(e) => setMobileNumber(e.target.value)}
//         />

//         <button type="submit">Create</button>

//         <div classNameName="message">{message ? <p>{message}</p> : null}</div>
//       </form>
//       </Formik>
//     </div>
//   );
// }

// export default SignUp;


// // import { Axios } from "axios";
// // function SignUp(){
// //   const url = "https://jsonplaceholder.typicode.com/posts"
// //   const [data,setData] = useState({
// //     body:"",
// //     title:"",
// //     iduser:"",
// //     id:""
// //   })
// //   function submit(e){
// //     e.preventDefault();
// //     Axios.Post(url,{
// //       body:data.name,
// //       title:data.date,
// //       iduser:parseInt(data.iduser),
// //       id:parseInt(data.id),
// //     })
// //     .then(res =>{
// //       console.log(res.data)
// //     })
// //   }

// //   function handle(e){
// //     const newdata ={...data}
// //     newdata[e.target.id] = e.target.value
// //     setData(newdata)
// //     console.log(newdata)
// //   }
// //   return(
// // <div>
// //   <form onSubmit={(e) => submit(e)}>
// //     <input onChange={(e)=>handle(e)} id="body" value={data.body} placeholder="Body" type={"text"}></input>
// //     <input onChange={(e)=>handle(e)} id="title" value={data.title} placeholder="Title" type={"tex"}></input>
// //     <input onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="UserId" type={"number"}></input>
// //     <input onChange={(e)=>handle(e)} id="id" value={data.id} placeholder="Id" type={"number"}></input>
// //     <button type="submit">Submit</button>
// //   </form>
// // </div>
// //   )
// // }

// // export default SignUp;



// import axios from "axios";
// import React from "react";
// import { Field, Formik } from "formik";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const baseURL = "http://localhost:8000/posts";

// export default function SignUp() {
//   var initialvalues = {
//     id: "",
//     title: "",
//     author: "",
//   };
//   const navigate = useNavigate();
//   // const handle = (value) => {
//   //   localStorage.setItem("name",value.name)
//   //   localStorage.setItem("email",value.email)
//   //   localStorage.setItem("password",value.password)
//   // };


//   const [post, setPost] = useState(null);
//   // const [id, setId] = useState("");
//   // const [title, setTitle] = useState("");
//   // const [author, setAuthor] = useState("");

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost(value) {
//     axios
//       .post(baseURL, {
//         id: value.id,
//         title: value.title,
//         author: value.author,
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   };

//   if (!post) return "No post!"
//   return (
//     <div classNameName="App-1">
//       <Formik
//         initialValues={initialvalues}
//         onSubmit={createPost}
//       >
//         <form>
//           <Field
//             type="number"
//             name='id'
//             placeholder="Id"
//             classNameName="input-1"
//           />
//           <Field
//             type="text"
//             name='title'
//             placeholder="Title"
//             classNameName="input-1"
//           />
//           <Field
//             type="text"
//             name='author'
//             placeholder="Author Name"
//           />
//           <button type="submit">Create</button>
//         </form>
//       </Formik>
//     </div>
//   );
// }













// import axios from "axios";
// import React from "react";

// const baseURL = "http://localhost:8000/posts";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         id: 111,
//         title: "Api 111",
//         author: "Author 111",
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }






// import React, { Component } from 'react'
// import axios from 'axios'
// // // import { Navigate } from 'react-router-dom'
// // import { useNavigate } from 'react-router-dom'
// import './signup.css'
// className SignUp extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       id: '',
//       title: '',
//       author: ''
//     } 
//   }

//   changeHandler = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   submitHandler = e => {
//     e.preventDefault()
//     console.log(this.state)
//     axios
//       .post('http://localhost:4000/posts', this.state)
//       .then(response => {
//         console.log(response)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   render() {
//     const { id, title, author } = this.state

//     return (
//       <div>
//         <form classNameName='mar' onSubmit={this.submitHandler}>
//           <div>
//             <input
//               type="text"
//               name="id"
//               value={id}
//               onChange={this.changeHandler}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="title"
//               value={title}
//               onChange={this.changeHandler}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="author"
//               value={author}
//               onChange={this.changeHandler}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default SignUp;




import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';

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
        const url = 'http://localhost:4000/jobportal';
        Axios.post(url, {
            "UserName": values.userName,
            "Email": values.email,
            "Password": values.password,
            "ConfirmPassword": values.cpassword,
            "Checkbox": values.checkbox
        })
        console.log(values)
        localStorage.setItem("UserName", values.username)
        localStorage.setItem("Email", values.email)
        localStorage.setItem("Password", values.password)
        localStorage.setItem("ConfirmPassword", values.cpassword)
        localStorage.setItem("Checkbox", values.checkbox)
        const userName = localStorage.getItem('UserName')
        const Password = localStorage.getItem('Password')
        if (userName === values.username && Password === values.password) {
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
                        <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                        <Form className="d-flex flex-column Justify-content-center align-item-center col-6">
                            <label className='form-check-label'>User Name</label>
                            <Field placeholder="User Name" name="username" type="text" className='form-control' />
                            <p className='text-danger'><ErrorMessage name='userName' /></p>

                            <label className='form-check-label'>Email</label>
                            <Field placeholder="Email" name="email" type="email" className='form-control' />
                            <p className='text-danger'><ErrorMessage name='userName' /></p>

                            <label className='form-check-label'>Password</label>
                            <Field placeholder="Password" name="password" type="password" className='form-control' />
                            <p className='text-danger'><ErrorMessage name='password' /></p>

                            <label className='form-check-label'>Confirm Password</label>
                            <Field placeholder="Confirm Password" name="cpassword" type="password" className='form-control' />
                            <p className='text-danger'><ErrorMessage name='cpassword' /></p>

                            <label className='form-check-label'>Remember me.</label>
                            <Field className='form-check-input' name="checkbox" type="checkbox" />
                            <p className='text-danger'><ErrorMessage name='checkbox' /></p>

                            <p>Already Have An Account <span><Link to='/login'>Login</Link></span></p>
                            <button className="btn btn-primary mt-3" type="submit">Register</button>
                        </Form>
                    </div>
                </>
            </Formik>
        </>
    )
}
export default SignUp;
