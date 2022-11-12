import './About.css';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
function About() {
    return (
        <section className='container-fluid sec-size'>
        <NavBar />
            <h1 className='heading text-center text-dark'><span>About</span> Us</h1>
            <div className='row d-flex align-items-center'>
                <div className='video-container position-relative'>
                    <video width={750} height={500} loop autoPlay muted>
                        <source src='./about-vid.mp4' type='video/mp4'></source>
                    </video>
                    <h3 className='position-absolute'>Best Job Reqruiter</h3>
                </div>
                <div className="content">
                    <h3>why choose us?</h3>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam repudiandae autem asperiores quibusdam omnis commodi alias repellat illum, unde optio temporibus.</p>
                    <p className='text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea est commodi incidunt magni quia molestias perspiciatis, unde repudiandae quidem.</p>
                    <Link to='/signup' className="btn">learn more</Link>
                </div>
            </div>
        </section>
    )
}
export default About;
