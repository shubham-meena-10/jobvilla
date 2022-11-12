import './profile.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiLogOut } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';

// import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

const Profile = () => {
    let cursor1 = document.querySelector('.cursor-1');
    let cursor2 = document.querySelector('.cursor-2');


    window.onmousemove = (e) => {
        cursor1.style.top = e.pageY + 'px';
        cursor1.style.left = e.pageX + 'px';
        cursor2.style.top = e.pageY + 'px';
        cursor2.style.left = e.pageX + 'px';
    }

    document.querySelectorAll('a').forEach(links => {

        links.onmouseenter = () => {
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        }

        links.onmouseleave = () => {
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        }

    });
    return (
        <>
            <body>
                {/* <!-- custom cursors  --> */}
                <div class="cursor-1"></div>
                <div class="cursor-2"></div>

                <Dashboard />
                <div className="container top-size">
                    <div className="main">
                        <div className="row">
                            <div className="col-md-4 mt-1">
                                <div className="card sidebar">
                                    <div className="card-body text-center">
                                        <img src="pic-1.png" className="rounded-circle" width="150" alt='' />
                                        <div className="row mt-3 icons-1 d-flex justify-content-around">
                                            <h3>Shubham Meena</h3>
                                            <div className='col-md-6 mt-3'>   <Link><img src='logo-of-whatsapp-2.png' alt='' /></Link></div>
                                            <div className='col-md-6 mt-3'>
                                                <div className='row'>
                                                    <Link className='ic'><BsPersonCircle /></Link>
                                                </div>
                                                <div className='row'>
                                                    <Link className='ic'>Edit Profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3 icons-1 d-flex'>
                                            <div className='col-md-6'>  <Link><img src='logo-of-facebook.png' alt='' /></Link></div>
                                            <div className='col-md-6'>
                                                <div className='row'>
                                                    <Link className='ic'><AiFillSetting /></Link>
                                                </div>
                                                <div className='row'>
                                                    <Link className='ic'>Setings</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3 icons-1 d-flex'>
                                            <div className='col-md-6'>   <Link><img src='logo-of-twitter-2.png' alt='' /></Link></div>
                                            <div className='col-md-6'>
                                                <div className='row'>
                                                    <Link className='ic'><BiLogOut /></Link>
                                                </div>
                                                <div className='row'>
                                                    <Link className='ic'>Log Out</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3 icons-1 d-flex'>
                                            <div className='col-md-6'>  <Link><img src='logo-of-linkedin.png' alt='' /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 mt-1 content-box">
                                <div className="card mb-1 content">
                                    <h1 className="m-3 pt-1">About</h1>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Full Name</h5>
                                            </div>
                                            <div className="col-md-9 text-secondary">
                                                Shubham Meena
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Email</h5>
                                            </div>
                                            <div className="col-md-9 text-secondary">
                                                shubhamji1913@gmail.com
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Phone</h5>
                                            </div>
                                            <div className="col-md-9 text-secondary">
                                                9893229774
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Address</h5>
                                            </div>
                                            <div className="col-md-9 text-secondary">
                                                Ajnas road khategaon,dewas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-1 content">
                                    <h1 className="m-3">Recent Projects</h1>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Project Name</h5>
                                            </div>
                                            <div className="col-md-9 text-secondary">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quis? Inventore ullam libero laudantium provident sunt ut sapiente explicabo pariatur, aspernatur accusamus quaerat quae magni dolore, voluptates id animi natus vitae temporibus magnam blanditiis possimus exercitationem iure? A quia recusandae dolorum ducimus tempore quisquam delectus consectetur sunt quos blanditiis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></body>
        </>
    );
}

export default Profile;