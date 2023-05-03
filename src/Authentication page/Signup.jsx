import React from 'react';
import { Card } from 'react-bootstrap';

const Signup = () => {


    let handleSignup = e =>{
        e.preventDefault();
        let form=e.target;
        let email=form.email.value;
        let password=form.password.value;
        let user=form.user.value;
        let url=form.photo.value;
        console.log(email,password,user,url);
    }

    return (
        <div>
             <div className='  my-5 container'>
   

   <h1 className='text-center text-dark fw-bold text-uppercase'>SIgn up NOw</h1>
   
       <Card className='mx-auto w-50 my-5' >
   
       <form onSubmit={handleSignup}  className='m-5'>
  
     
     <div className="mb-3 w-100">
       <label className="form-label">Name</label>
       <input type="email" className="form-control" name='user' id="exampleInputEmail1" />
     </div> 
       <div className="mb-3 w-100">
       <label className="form-label">Email address</label>
       <input type="email" className="form-control" name='email' id="exampleInputEmail1" />
     </div>
     <div className="mb-3 w-100">
       <label className="form-label">Photo url</label>
       <input type="email" className="form-control" name='photo' id="exampleInputEmail1" />
     </div>
     <div className="mb-3 w-100">
       <label className="form-label">Password</label>
       <input type="password" className="form-control" name='password' id="exampleInputPassword1"/>
     </div>
     
     <button type="submit" className="btn btn-dark w-100">Submit</button>
   </form>
       </Card>
   
   
   
   
   
   
   </div>
        </div>
    );
};

export default Signup;