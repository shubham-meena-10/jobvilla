import NavBar from "../Navbar/NavBar";
import './applyjob.css';
import '../Common/Common.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
const ApplyJob = () => {
    const data = {
        applyname: '',
        applyemail: '',
        applymobile: '',
        applyexperience: '',
        applymessage:''
    }
    const validate = yup.object().shape({
        applyname: yup.string()
            .required('Required field'),
        applyemail: yup.string().email()
            .required('Required field'),
        applymobile: yup.string()
            .min(10, "must be 10 characters")
            .required('Required field'),
        applyexperience: yup.string()
            .required('Required field'),
        applymessage: yup.string()
            .required('Required field'),
    })
    const navigate = useNavigate();
    const submit = val => {
        const url = 'http://localhost:4000/applyers';
        Axios.post(url, {
            "applyName": val.applyname,
            "applyEmail": val.applyemail,
            "applyMobile": val.applymobile,
            "applyExperience": val.applyexperience,
            "applyMessage": val.applymessage,
        })
        localStorage.setItem("applyName", val.applyname);
        localStorage.setItem("applyEmail", val.applyemail);
        localStorage.setItem("applyMobile", val.applymobile);
        localStorage.setItem("applyExperience", val.applyexperience);
        localStorage.setItem("applyMessage", val.applymessage);
        alert("You Application Successfully Accepted");
        navigate('/home');
    }
    return(
        <>
            <NavBar />
            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            ><>
                    <div className="container-fluid apply-container">
                        <div className="row  mx-0 justify-content-center">
                            <div className="col-md-7 col-lg-5 apply-top px-lg-2 col-xl-4 px-xl-0 px-xxl-3">
                                <Form className="w-100 rounded-1 p-4 border bg-white">
                                    <Field
                                        name="applyname"
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Name"
                                    />
                                    <p className='text-danger error-message-text'><ErrorMessage name='applyname' /></p>

                                    <Field
                                        name="applyemail"
                                        type="email"
                                        className="form-control mt-3"
                                        placeholder="Email"
                                    />
                                    <p className='text-danger error-message-text'><ErrorMessage name='applyemail' /></p>

                                    <Field
                                        name="applymobile"
                                        type="number"
                                        className="form-control mt-3"
                                        placeholder="Mobile no."
                                    />
                                    <p className='text-danger error-message-text'><ErrorMessage name='applymobile' /></p>
                                    <Field
                                        name="applyexperience"
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Time of Experience"
                                    />
                                    <p className='text-danger error-message-text'><ErrorMessage name='applyexperience' /></p>
                                    <Field
                                        name='applymessage'
                                        component="textarea"
                                        rows="4"
                                        className='form-control mt-3'
                                        placeholder='About yourself'
                                    />
                                    <p className='text-danger error-message-text'><ErrorMessage name='applymessage' /></p>

                                    <button className="btn btn-outline-primary all-btn-color px-3 rounded-3 w-100" type="submit" >Apply</button>
                                </Form>
                            </div>
                        </div>
                    </div></>
            </Formik>
        </>
    )
}

export default ApplyJob;
