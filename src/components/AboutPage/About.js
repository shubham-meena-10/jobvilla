import './About.css';
import { Link } from 'react-router-dom'
import NavBar from '../Navbar/NavBar';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function About() {
    return (<>
        <body className='about-full-back'>
            <NavBar />
            <section id='header'>
                <div className='about-banner text-center'>
                    <h1>Jobs Around You</h1>
                    <p>We Hire Good People, Give Them Good Jobs, And Pay Them Good Wages</p>
                </div>
            </section>
            <CardGroup className='upper-size'>
                <Card className='myCards'>
                    <Card.Img className='card_images' variant="top" src="about.jpg" />
                    <Card.Body>
                        <Card.Title>Jenny Doe</Card.Title>
                        <Card.Title className='post-style mb-4 mt-0'>Ceo & founder</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti, eveniet nesciunt! Eaque voluptas repellat dolore temporibus laborum,
                            praesentium at mollitia, nihil nemo, quisquam doloribus est.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button type='submit' className='contact-btn w-100 p-2'>Contact</button>
                    </Card.Footer>
                </Card>
                <Card className='myCards'>
                    <Card.Img className='card_images' variant="top" src="about.jpg" />
                    <Card.Body>
                        <Card.Title>Jenny Doe</Card.Title>
                        <Card.Title className='post-style mb-4 mt-0'>Co-founder</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti, eveniet nesciunt! Eaque voluptas repellat dolore temporibus laborum,
                            praesentium at mollitia, nihil nemo, quisquam doloribus est.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button type='submit' className='contact-btn w-100 p-2'>Contact</button>
                    </Card.Footer>
                </Card>
                <Card className='myCards'>
                    <Card.Img className='card_images' variant="top" src="about.jpg" />
                    <Card.Body>
                        <Card.Title>Jenny Doe</Card.Title>
                        <Card.Title className='post-style mb-4 mt-0'>Manager</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti, eveniet nesciunt! Eaque voluptas repellat dolore temporibus laborum,
                            praesentium at mollitia, nihil nemo, quisquam doloribus est.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button type='submit' className='contact-btn w-100 p-2'>Contact</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </body>
    </>
    );
}

export default About;
