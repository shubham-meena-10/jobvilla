// // import React, { Component } from 'react'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
// // import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import Home from './Home';
// import Contact from './Contact';
// import About from './About';

// // export default class NavbarComp extends Component {
// function NavBar() {
//     return (
//         <Router>
//             <div>
//                 <Navbar bg="dark" variant={"dark"} expand="lg">
//                     <Navbar.Brand href="#">Navbar Demo Arjun Codes</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="mr-auto my-2 my-lg-0"
//                             style={{ maxHeight: '100px' }}
//                             navbarScroll
//                         >
//                             <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                             <Nav.Link as={Link} to="/about">About</Nav.Link>
//                             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </div>
//             <div>
//                 <Switch>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/contact">
//                         <Contact />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     )
// }

// export default NavBar;



import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import './navbar.css'
function NavBar() {
    return (
        <Navbar fixed="top" bg='dark' variant='dark' expand="lg" className='navbar-dark nav-colo'>
            <Container className='mynav'>
                <Navbar.Brand as={Link} to="/home"><img className='navlogo-img' src="job-villa-logo.svg" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="jagah ms-auto space-1 nav-menu">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Internships</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
                        {/* <Nav.Link as={Link} to="/signup"><FaUserAlt className='mb-1' /></Nav.Link> */}
                        <NavDropdown title=<FaUserAlt className='mb-1'/> id='nav-dropdown' className='drop-color'>
                            <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;






// import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaUser } from 'react-icons/fa';
// import { FaUserAlt } from 'react-icons/fa';
// import { AiFillHome } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// import './navbar.css'
// const NavBar = () => {

//     const navigate = useNavigate();
//     const logout = () => {
//         localStorage.clear();
//         navigate('/home');
//     }

//     return (
//         <Navbar fixed="top" bg='dark' variant='dark' expand="lg" className='navbar-dark nav-colo'>
//             <Container className='mynav'>
//                 <Navbar.Brand as={Link} to="/home"><img className='logo-img' src="logo-white.png" alt='' /></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="jagah ms-auto space-1 nav-menu">
//                         <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/about">About</Nav.Link>
//                         <Nav.Link as={Link} to="/internships">Internships</Nav.Link>
//                         <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
//                         {/* <Nav.Link as={Link} to="/signup"><FaUserAlt className='mb-1' /></Nav.Link> */}
//                         <NavDropdown title=<FaUserAlt className='mb-1' /> id='nav-dropdown' className='drop-color'>
//                             <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
//                             <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavBar;













// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './navbar.css'

// function NavBar() {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Container fluid>
//                 <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                     <Nav
//                         className="me-auto my-2 my-lg-0"
//                         style={{ maxHeight: '100px' }}
//                         navbarScroll
//                     >
//                         <Nav.Link href="#action1">Home</Nav.Link>
//                         <Nav.Link href="#action2">Link</Nav.Link>
//                         <NavDropdown title=<FaUserAlt className='mb-1' />>
//                             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                             <NavDropdown.Item href="#action4">
//                                 Another action
//                             </NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action5">
//                                 Something else here
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                         <Nav.Link href="#" disabled>
//                             Link
//                         </Nav.Link>
//                     </Nav>
//                     <Form className="d-flex">
//                         <Form.Control
//                             type="search"
//                             placeholder="Search"
//                             className="me-2"
//                             aria-label="Search"
//                         />
//                         <Button variant="outline-success">Search</Button>
//                     </Form>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavBar;
