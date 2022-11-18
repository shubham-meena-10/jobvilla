import { Link, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaRupeeSign, FaAngleDoubleRight, FaUser, FaSlideshare, FaBuilding, FaHandPeace, FaTwitter, FaFacebook, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import './home.css';
import NavBar from './NavBar';
function Home() {
    const navigate = useNavigate();
    function gotoRegister() {
        navigate('/applyjob');
    }
    return (
        <>
            <div>
                <NavBar />
                <section id='header'>
                    <div className='banner text-center'>
                        <h1>Search Between<br /><span className='span-head'> 5000+ </span><br />Open Jobs</h1>
                    </div>
                </section>
                {/* Top Reqruiters  */}
                <section id='recruiters'>
                    <div className='container text-center'>
                        <h3 className='main-headings-home'>TOP RECRUITERS</h3>
                        <div>
                            <img src="./logo-of-coca-cola.png" alt="" />
                            <img src="./infosys-logo-1.png" alt="" />
                            <img src="./wipro-logo-1.png" alt="" />
                            <img src="./ibm-logo-1.png" alt="" />
                            <img src="./samsung-logo-1.png" alt="" />
                            <img src="./tcs-logo-1.png" alt="" />
                        </div>
                        <div>
                            <img src="./amazon-logo-1.png" alt="" />
                            <img src="./logo-of-godrej.png" alt="" />
                            <img src="./logo-of-oppo.png" alt="" />
                            <img src="./logo-of-paypal.png" alt="" />
                            <img src="./logo-of-philips.png" alt="" />
                            <img src="./capgemini-logo-1.png" alt="" />
                        </div>
                        <div>
                            <img src="./facebook-logo-1.png" alt="" />
                            <img src="./sap-logo-1.png" alt="" />
                            <img src="./cognizant-logo-1.png" alt="" />
                            <img src="./microsoft-logo-1.png" alt="" />
                            <img src="./accenture-logo-1.png" alt="" />
                            <img src="./oracle-logo-1.png" alt="" />
                        </div>
                    </div>
                </section>

                {/*  Recent Jobs  */}
                <section id='jobs'>
                    <div className='container'>
                        <h5>RECENT UPDATES</h5>
                        <div className='company-details'>
                            <div className='job-update'>
                                <h4><b>Seasoned Senior python devloper (Fresher)</b></h4>
                                <p>XYZ Solution Pvt Ltd</p>
                                <FaBriefcase className='fa-icons' /><span> 0-1 years</span><br />
                                <FaRupeeSign className='fa-icons' /><span> 3.50 - 4.00 Lacs p. Link.</span><br />
                                <FaMapMarkerAlt className='fa-icons' /><span> Banglore </span><br />
                                <p>Skills <FaAngleDoubleRight className='fa-icons' /><small>Java</small><small>Python</small><small>HTML,CSS</small><small>.Net</small>
                                </p>
                                <p>Description <FaAngleDoubleRight className='fa-icons' />Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Deserunt enim ex commodi sint exercitationem. <Link to={'/signup'} className='read-more' > Read More</Link></p>
                            </div>
                            <div className='apply-btn'>
                                <button type='button' className='btn btn-primary' onClick={gotoRegister}>Apply</button>
                            </div>
                        </div>
                        <div className='company-details'>
                            <div className='job-update'>
                                <h4><b>Seasoned Senior python devloper (Fresher)</b></h4>
                                <p>XYZ Solution Pvt Ltd</p>
                                <FaBriefcase className='fa-icons' /><span> 0-1 years</span><br />
                                <FaRupeeSign className='fa-icons' /><span> 3.50 - 4.00 Lacs p. Link.</span><br />
                                <FaMapMarkerAlt className='fa-icons' /><span> Banglore </span><br />
                                <p>Skills <FaAngleDoubleRight className='fa-icons' /><small>Java</small><small>Python</small><small>HTML,CSS</small><small>.Net</small>
                                </p>
                                <p>Description <FaAngleDoubleRight className='fa-icons' />Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Deserunt enim ex commodi sint exercitationem. <Link to={'/signup'} className='read-more'> Read More</Link></p>
                            </div>
                            <div className='apply-btn'>
                                <button type='button' className='btn btn-primary' onClick={gotoRegister}>Apply</button>
                            </div>
                        </div>
                        <div className='company-details'>
                            <div className='job-update'>
                                <h4><b>Seasoned Senior python devloper (Fresher)</b></h4>
                                <p>XYZ Solution Pvt Ltd</p>
                                <FaBriefcase className='fa-icons' /><span> 0-1 years</span><br />
                                <FaRupeeSign className='fa-icons' /><span> 3.50 - 4.00 Lacs p. Link.</span><br />
                                <FaMapMarkerAlt className='fa-icons' /><span> Banglore </span><br />
                                <p>Skills <FaAngleDoubleRight className='fa-icons' /><small>Java</small><small>Python</small><small>HTML,CSS</small><small>.Net</small>
                                </p>
                                <p>Description <FaAngleDoubleRight className='fa-icons' />Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Deserunt enim ex commodi sint exercitationem. <Link to={'/signup'} className='read-more' > Read More</Link></p>
                            </div>
                            <div className='apply-btn'>
                                <button type='button' className='btn btn-primary' onClick={gotoRegister}>Apply</button>
                            </div>
                        </div>
                        <div className='company-details'>
                            <div className='job-update'>
                                <h4><b>Seasoned Senior python devloper (Fresher)</b></h4>
                                <p>XYZ Solution Pvt Ltd</p>
                                <FaBriefcase className='fa-icons' /><span> 0-1 years</span><br />
                                <FaRupeeSign className='fa-icons' /><span> 3.50 - 4.00 Lacs p. Link.</span><br />
                                <FaMapMarkerAlt className='fa-icons' /><span> Banglore </span><br />
                                <p>Skills <FaAngleDoubleRight className='fa-icons' /><small>Java</small><small>Python</small><small>HTML,CSS</small><small>.Net</small>
                                </p>
                                <p>Description <FaAngleDoubleRight className='fa-icons' />Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Deserunt enim ex commodi sint exercitationem. <Link to={'/signup'} className='read-more' > Read More</Link></p>
                            </div>
                            <div className='apply-btn'>
                                <button type='button' className='btn btn-primary' onClick={gotoRegister}>Apply</button>
                            </div>
                        </div>
                        <div className='company-details'>
                            <div className='job-update'>
                                <h4><b>Seasoned Senior python devloper (Fresher)</b></h4>
                                <p>XYZ Solution Pvt Ltd</p>
                                <FaBriefcase className='fa-icons' /><span> 0-1 years</span><br />
                                <FaRupeeSign className='fa-icons' /><span> 3.50 - 4.00 Lacs p. Link.</span><br />
                                <FaMapMarkerAlt className='fa-icons' /><span> Banglore </span><br />
                                <p>Skills <FaAngleDoubleRight className='fa-icons' /><small>Java</small><small>Python</small><small>HTML,CSS</small><small>.Net</small>
                                </p>
                                <p>Description <FaAngleDoubleRight className='fa-icons' />Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Deserunt enim ex commodi sint exercitationem.<Link to={'/signup'} className='read-more' > Read More</Link></p>
                            </div>
                            <div className='apply-btn'>
                                <button type='button' className='btn btn-primary' onClick={gotoRegister}>Apply</button>
                            </div>
                        </div>

                        <ul className='pagelink text-center'>
                            <li className='left-arrow'>&#8592;</li>
                            <li className='active'>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li className='right-arrow'>&#8594;</li>
                        </ul>
                    </div>
                </section>

                {/* ---- Site Stats ---- */}
                <section id='site-stats'>
                    <div className='container text-center'>
                        <h3 className='main-headings-home'>JOBVILLAS SITE STATS</h3>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='stats-box'>
                                            <FaUser className='stats-icon' /><span><small>100k +</small></span>
                                            <p>Job Seekers</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='stats-box'>
                                            <FaSlideshare className='stats-icon' /><span><small>500 +</small></span>
                                            <p>Employers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='stats-box'>
                                            <FaHandPeace className='stats-icon' /><span><small>10k +</small></span>
                                            <p>Active Jobs</p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='stats-box'>
                                            <FaBuilding className='stats-icon' /><span><small>400 +</small></span>
                                            <p>Companies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -------------------- app Banner----- */}
                <section id='app-banner' className='text-center'>
                    <h1>Find Jobs On Mobile, Download Jobvilla App</h1>
                    <Link href='#'><img src='./logo-of-appstore.png' alt='appstore' /></Link>
                    <Link href='#'><img src='./logo-of-playstore.png' alt='playstore' /></Link>
                </section>

                {/* ------- fotter  -- */}
                <section id='footer' className='text-center'>
                    <img src='job-villa-logo.svg' className='footer-image' alt='logo' />
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolor officiis. Blanditiis, quibusdam.<br /> Press the bell icon to get new notification</p>
                    <Link href='#'><FaTwitter className='footer-img' /></Link>
                    <Link href='#'><FaFacebook className='footer-img' /></Link>
                    <Link href='#'><FaWhatsapp className='footer-img' /></Link>
                    <Link href='#'><FaLinkedinIn className='footer-img' /></Link>
                    <hr />
                    <p className='text-light'>Made by Shubham Meena</p>
                </section>
            </div>
        </>
    )
}
export default Home;
