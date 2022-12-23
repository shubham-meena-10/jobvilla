import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import './navbar.css'

function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div className='nav-image'>
      <Navbar fixed="top" variant='dark' expand="lg" className='navbar-dark nav-colo-1 navbar-inner'>
        <Container className='mynav'>
          <Navbar.Brand as={Link} to="/home"><img className='logo-img' src="job-villa-logo.svg" alt='' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav link-item-colr" />
          <Navbar.Collapse id="basic-navbar-nav  nav-colo-1">
            <Nav className="jagah ms-auto space-1 nav-menu">
              <Nav.Link as={Link} className='link-item-colr' to="/home">Home</Nav.Link>
              <Nav.Link as={Link} className='link-item-colr' to="/about">About</Nav.Link>
              <Nav.Link as={Link} className='link-item-colr' to="/internship">Internships</Nav.Link>
              <Nav.Link as={Link} className='link-item-colr' to="/contactus">Contact</Nav.Link>
              <NavDropdown title=<FaUserAlt className='link-item-colr mb-1' /> id='nav-dropdown' className='drop-color'>
                <NavDropdown.Item as={Link} className='link-item-colr' onClick={logout}><BiLogOut className='profile-icon' /> Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
