import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Login = () => {

let handlelogin = e =>{
    e.preventDefault();
    let form=e.target;
    let email=form.email.value;
    let password=form.password.value;
    console.log(email);
}

    return (

 <div className='  my-5 container'>
   

<h1 className='text-center text-dark fw-bold text-uppercase'>Log IN NOw</h1>

    <Card className='mx-auto w-50 my-5' >

    <form onSubmit={handlelogin}  className='m-5'>
  <div className="mb-3 w-100">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="exampleInputEmail1" />
  </div>
  <div className="mb-3 w-100">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-dark w-100">Submit</button>
 
  <Link to='/signup' className='text-decoration-none text-dark'> Register now </Link>
</form>
    </Card>






</div>

        
    );
};

export default Login;