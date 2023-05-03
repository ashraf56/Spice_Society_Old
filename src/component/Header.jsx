import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFire } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="body" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase'> <span className='fs-3 text-danger'><FaFire /></span> Spice-Society </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className='ms-auto'>
   
  <li className="nav-item">
    <Link className="nav-link" to='/' >Home</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to='/blog' >blog</Link>  </li>
  <li className="nav-item">
  <Link className="nav-link" to='/login' >Login</Link>  </li>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;