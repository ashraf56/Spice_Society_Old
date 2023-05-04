import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  FaArrowCircleLeft, FaCrosshairs, FaFileExport, FaFire,  FaTimesCircle,  FaTrash,  FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../Authentication page/AuthCenter/AuthCenter';
import  '../index.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Header = () => {
  let {user,logout}=useContext(Authcontext);

let signOut=()=>{
  logout().then(() => {

  }).catch((error) => {
  
  });
  
}

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="body" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase'> <span className='fs-3 text-danger'><FaFire /></span> Spice-Society </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className='ms-auto  '>
   
  <li className="nav-item">
    <NavLink className="nav-link active-link" to='/' activeClassName="active" >Home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link " activeClassName="active" to='/blog' >blog</NavLink>  </li>
  <li className="nav-item">
  <NavLink className="nav-link " activeClassName="active " to='/signup' >REgister</NavLink>  </li>
 

  <li className="nav-item ps-3">
{
user ? <p className='nav-item d-flex  align-items-center'>
        

  {user.photoURL? 
 
 <img src={user.photoURL}   data-tooltip-id="my-tooltip" 
 data-tooltip-content={user.displayName} 
 data-tooltip-place="top"  className= 'border border-danger w-25 rounded-circle  img-fluid'  />
:<FaUserCircle className='fs-2'/>
}  


<a className='nav-link ps-3 w-50    fw-semibold' onClick={signOut}>
LOGOUT

</a>

    

</p> : <NavLink className="nav-link"  to='/login' >Login</NavLink> 

} <Tooltip 
id='my-tooltip'
/>
 
  
   </li>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;