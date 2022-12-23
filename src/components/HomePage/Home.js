import { Link } from 'react-router-dom';
import { FaUser, FaSlideshare, FaBuilding, FaHandPeace, FaTwitter, FaFacebook, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import CocaColaLogo  from '../../images/logo-of-coca-cola.png';
import WiproLogo from '../../images/wipro-logo-1.png';
import SamsungLogo from '../../images/samsung-logo-1.png';
import SapLogo from '../../images/sap-logo-1.png';
import TcsLogo from '../../images/tcs-logo-1.png';
import OppoLogo from '../../images/logo-of-oppo.png';
import PaypalLogo from '../../images/logo-of-paypal.png';
import PhillipsLogo from '../../images/logo-of-philips.png';
import AccentureLogo from '../../images/accenture-logo-1.png';
import AmaazonLogo from '../../images/amazon-logo-1.png';
import CapgeminiLogo from '../../images/capgemini-logo-1.png';
import CognizantLogo from '../../images/cognizant-logo-1.png';
import InfosysLogo from '../../images/infosys-logo-1.png';
import GodrejLogo from '../../images/logo-of-godrej.png';
import OracleLogo from '../../images/oracle-logo-1.png';
import MicrosoftLogo from '../../images/microsoft-logo-1.png';
import FacebookLogo from '../../images/facebook-logo-1.png';
import IbmLogo from '../../images/ibm-logo-1.png';

import './home.css';
import NavBar from '../Navbar/NavBar';
import JobCard from '../RecentJobs/JobCard';
function Home() {
    return (
        <>
            {/* <div> */}
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
                            <img src={CocaColaLogo} alt="" />
                            <img src={InfosysLogo} alt="" />
                            <img src={WiproLogo} alt="" />
                            <img src={IbmLogo} alt="" />
                            <img src={SamsungLogo} alt="" />
                            <img src={TcsLogo} alt="" />
                        </div>
                        <div>
                            <img src={AmaazonLogo} alt="" />
                            <img src={GodrejLogo} alt="" />
                            <img src={OppoLogo} alt="" />
                            <img src={PaypalLogo} alt="" />
                            <img src={PhillipsLogo} alt="" />
                            <img src={CapgeminiLogo} alt="" />
                        </div>
                        <div>
                            <img src={FacebookLogo} alt="" />
                            <img src={SapLogo} alt="" />
                            <img src={CognizantLogo} alt="" />
                            <img src={MicrosoftLogo} alt="" />
                            <img src={AccentureLogo} alt="" />
                            <img src={OracleLogo} alt="" />
                        </div>
                    </div>
                </section>

                {/*  Recent Jobs  */}
                <section id='jobs'>
                    <div className='container'>
                        <h5>RECENT UPDATES</h5>
                        <JobCard jobtype={"Seasoned Senior Java devloper (Fresher)"} 
                                 companyName={"Appjoy Technologies"}
                                 exprience={" 0-1 years"}
                                 package={" 3.50 - 4.00 Lacs p/a"}
                                 place={" Banglore"}
                                 skills={{skill_1:'Java',skill_2:'DataBase',skill_3:'HTML,CSS',skill_4:'JavaScript'}}
                                 description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim ex commodi sint exercitationem. "}
                                 />
                        <JobCard jobtype={"Seasoned Senior Python devloper (Fresher)"} 
                                 companyName={"Tata Consultancy Services"}
                                 exprience={" 0-1 years"}
                                 package={" 3.50 - 4.00 Lacs p/a"}
                                 place={" Pune"}
                                 skills={{skill_1:'Django',skill_2:'Python',skill_3:'HTML,CSS',skill_4:'Javascript'}}
                                 description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim ex commodi sint exercitationem. "}
                                 />
                        <JobCard jobtype={"Seasoned Senior React devloper (Fresher)"} 
                                 companyName={"Shubh Software Solutions pvt. Ltd."}
                                 exprience={" 0-1 years"}
                                 package={" 3.50 - 4.00 Lacs p/a"}
                                 place={" Hyderabad"}
                                 skills={{skill_1:'Reactjs',skill_2:'JavaScript',skill_3:'HTML,CSS',skill_4:'Bootstrap'}}
                                 description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim ex commodi sint exercitationem. "}
                                 />
                        <JobCard jobtype={"Seasoned Senior Angular devloper (Fresher)"} 
                                 companyName={"Zecdata Technologies"}
                                 exprience={" 0-1 years"}
                                 package={" 3.50 - 4.00 Lacs p/a"}
                                 place={" Indore"}
                                 skills={{skill_1:'Angular',skill_2:'Typescript',skill_3:'HTML,CSS',skill_4:'Javascript'}}
                                 description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim ex commodi sint exercitationem. "}
                                 />
                        <JobCard jobtype={"Seasoned Senior Nodejs devloper (Fresher)"} 
                                 companyName={"HCL Technologies"}
                                 exprience={" 0-1 years"}
                                 package={" 3.50 - 4.00 Lacs p/a"}
                                 place={" Mumbai"}
                                 skills={{skill_1:'Node,Expressjs',skill_2:'Js',skill_3:'HTML,CSS',skill_4:'MongoDb'}}
                                 description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim ex commodi sint exercitationem. "}
                                 />
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
            {/* </div> */}
        </>
    )
}

export default Home;
