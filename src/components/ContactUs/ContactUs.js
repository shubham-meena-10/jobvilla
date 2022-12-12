import './contactus.css';
import '../Common/Common.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import NavBar from '../../components/Navbar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Practice1 = () => {
    const showToastMessage = () => {
        toast.success('Message Sent Successfully !', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const data = {
        contactname: '',
        contactemail: '',
        contactsubject: '',
        contactmessage: '',
        contactmobile: ''
    }
    const validate = yup.object().shape({
        contactname: yup.string().required('Name is reruired'),
        contactemail: yup.string().email().required('Email is Required'),
        contactsubject: yup.string().required('Subject is required'),
        contactmessage: yup.string().required('Message is required'),
        contactmobile: yup.string().required('Mobile number is required'),
    });
    const submit = (values, { resetForm }) => {
        const url = 'http://localhost:4000/contact_form';
        Axios.post(url, {
            "Name": values.contactname,
            "Email": values.contactemail,
            "Subject": values.contactsubject,
            "Message": values.contactmessage,
            "Mobile": values.contactmobile,
        });
        console.log(values)
        localStorage.setItem("ContactName", values.contactname);
        localStorage.setItem("ContactEmail", values.contactemail);
        localStorage.setItem("ContactSubject", values.contactsubject);
        localStorage.setItem("ContactMessage", values.contactmessage);
        localStorage.setItem("ContactMobile", values.contactmobile);
        resetForm({ values: '' });
        showToastMessage();
    }

    return (
        <>
            <ToastContainer />
            <Formik
                initialValues={data}
                validationSchema={validate}
                onSubmit={submit}
            >
                <>
                    <div className='container-fluid contact-container'>
                        <div>
                            <NavBar />
                        </div>
                        <div className='row d-flex justify-content-evenly'>
                            <div className='col-lg-3'>
                                <div className='contact-icon d-flex justify-content-center'>
                                    <FaMapMarkerAlt className='my-icon' />
                                </div>
                                <div className='contact-info d-flex justify-content-center mt-2'>
                                    <small><span>Ajnas Road Khategaon</span></small>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='contact-icon d-flex justify-content-center'>
                                    <FaPhone className='my-icon' />
                                </div>
                                <div className='contact-info d-flex justify-content-center mt-2'>
                                    <small><span>+91 9893229774</span></small>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='contact-icon d-flex justify-content-center'>
                                    <FaEnvelope className='my-icon' />
                                </div>
                                <div className='contact-info d-flex justify-content-center mt-2'>
                                    <small><span>shubhammeena1913@gmail.com</span></small>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='contact-icon d-flex justify-content-center'>
                                    <FaLinkedinIn className='my-icon' />
                                </div>
                                <div className='contact-info d-flex justify-content-center mt-2'>
                                    <small><span>shubhammeena10</span></small>
                                </div>
                            </div>
                        </div>
                        <div className='row m-5'>
                            <div className='col'>
                                <img className='contact-img' src="contactus-3.svg" alt="" />
                            </div>
                            <div className='col-md-6 mt-4 contact-form'>
                                <h2 className='text-center mb-4'><b>Contact Us</b></h2>
                                <Form className='my-contact-form'>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <Field type="text" placeholder='Full Name' name='contactname' className='form-control w-100' />
                                            <p className='text-danger err-p'><ErrorMessage name='contactname' /></p>
                                            <Field type="text" placeholder='Subject' name='contactsubject' className='form-control w-100 mt-4' />
                                            <p className='text-danger err-p'><ErrorMessage name='contactsubject' /></p>
                                        </div>
                                        <div className="col">
                                            <Field type="email" placeholder='Email' name='contactemail' className='form-control w-100' />
                                            <p className='text-danger err-p'><ErrorMessage name='contactemail' /></p>
                                            <Field type="text" placeholder='Mobile' name='contactmobile' className='form-control w-100 mt-4' />
                                            <p className='text-danger err-p'><ErrorMessage name='contactmobile' /></p>
                                        </div>
                                    </div>
                                    <dir>
                                        <Field name="contactmessage" component="textarea" rows="3" placeholder='Write Your Message...' className='form-control w-100 mt-4' />
                                        <p className='text-danger err-p'><ErrorMessage name='contactmessage' /></p>
                                    </dir>
                                    <div className='text-center'>
                                        <button className='btn btn-outline-primary all-btn-color mt-4 w-75' type='submit'>Send Message</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </>
            </Formik>
        </>
    )
}

export default Practice1;
