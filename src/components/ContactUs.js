import { FaPhone,FaMapMarkerAlt, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './contactus.css'
import NavBar from './NavBar';
function ContactUs() {
    return (
        <>
<NavBar />
    <section className="ftco-section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="wrapper mt-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><FaMapMarkerAlt /></span>
                                </div>
                                <div className="text">
                                    <p><span>Address:</span><p className='add-color'> Ajnas road khategaon, dewas</p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><FaPhone /></span>
                                </div>
                                <div className="text">
                                    <p><span>Phone:</span><p><Link className='links'>+91 9893229774</Link></p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><FaEnvelope /></span>
                                </div>
                                <div className="text">
                                    <p><span>Email:</span><p> <Link className='links'>shubhammeena1913@gmail.com</Link></p> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><FaLinkedinIn /></span>
                                </div>
                                <div className="text">
                                    <p><span>Linkedin:</span><p> <Link className='links'>shubham_meena10</Link></p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-7">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                                <h3 className="mb-4">Contact Us</h3>
                                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                    <div className="row">
                                        <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="name">Full Name</label>
                                                    <input type="text" className="form-control" name="name" id="name"
                                                        placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">Email Address</label>
                                                    <input type="email" className="form-control" name="email" id="email"
                                                        placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">Subject</label>
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="#">Message</label>
                                                    <textarea name="message" className="form-control" id="message" cols="30"
                                                        rows="4" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="submit" value="Send Message" className="btn btn-primary mt-4"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-stretch">
                                <div className="info-wrap w-100 img" style={{backgroundImage:`url(https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}
export default ContactUs;