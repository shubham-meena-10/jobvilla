// import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Button, Nav } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.clear();
//     navigate('/signup');
//   }
//   return (
//     <div>
//       <Navbar bg="dark" expand="lg" className="navbar-dark mt-5">
//         <Container>
//           <Navbar.Brand>DashBoard</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link>
//                 <Button className="btn-warning" onClick={logout}>Logout</Button>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Dashboard;



import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { RiShieldUserFill } from 'react-icons/ri';
import './dashboard.css'
import { useNavigate } from "react-router-dom";
import Home from './Home';

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
      <Navbar fixed="top" bg='dark' variant='dark' expand="lg" className='navbar-dark nav-colo-1'>
        <Container className='mynav'>
          <Navbar.Brand as={Link} to="/home"><img className='logo-img' src="job-villa-logo.svg" alt='' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="jagah ms-auto space-1 nav-menu">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/signup">Internships</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
              {/* <Nav.Link as={Link} to="/signup"><FaUserAlt className='mb-1' /></Nav.Link> */}
              <NavDropdown title=<FaUserAlt className='mb-1' /> id='nav-dropdown' className='drop-color'>
                <NavDropdown.Item as={Link} to="/profile"><RiShieldUserFill className='profile-icon'/> Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}><BiLogOut className='profile-icon'/> Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Home /> */} 
    </>
  );
}

export default Dashboard;
