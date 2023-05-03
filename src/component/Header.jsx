import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFire, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Authcontext } from '../Authentication page/AuthCenter/AuthCenter';
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
         
          <Nav className='ms-auto'>
   
  <li className="nav-item">
    <Link className="nav-link" to='/' >Home</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to='/blog' >blog</Link>  </li>
  <li className="nav-item">
{
user ? <>
        
<button className='font-bold btn rounded-5 w-50'

>
  {user? 
<img src={user.photoURL} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title={user?.displayName }  className= ' w-50 rounded-circle  img-fluid  '  />
:<FaUserCircle/>}  

</button> 
<span className=' w-25' onClick={signOut}>sign out</span>
    

</> : <Link className="nav-link" to='/login' >Login</Link> 

}
 
  
   </li>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;