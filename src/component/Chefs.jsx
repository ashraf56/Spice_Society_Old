import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { Spinner } from 'react-bootstrap';
;
const Chefs = () => {
let [chef,setChef]=useState([]);
const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
setTimeout(() => {
   fetch('https://b7a10-chef-recipe-hunter-server-side-ashraf56.vercel.app/chef')
.then(res=> res.json()).then(data=> setChef(data))
    setIsLoading(false);
  }, 3000);

},[])

    return (
        <div className='m-5  my-5'>
          <h1 className='fw-bold py-4 text-center'>Meet Our Talented  <span className='text-danger'>Bangladeshi Chefs</span>
</h1>
<div className="row row-cols-1 row-cols-md-2 g-4">
{isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : 
      <>
      {
    chef.map(singlechef=> <ChefCard
    key={singlechef.id}
    singlechef={singlechef}
    
    ></ChefCard>)
}</>
      
      }
          

          </div>

   

        </div>
    );
};

export default Chefs;