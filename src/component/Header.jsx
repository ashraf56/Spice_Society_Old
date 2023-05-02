import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFire } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="body" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase'> <span className='fs-3 text-danger'><FaFire /></span> SpiceSociety </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className='ms-auto'>
          <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link >Blog </Nav.Link>
            <Nav.Link>More deets</Nav.Link>
            <Nav.Link >
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;