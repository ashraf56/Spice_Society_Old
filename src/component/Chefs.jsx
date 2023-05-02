import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
;
const Chefs = () => {
let [chef,setChef]=useState([]);

useEffect(()=>{
fetch('https://b7a10-chef-recipe-hunter-server-side-ashraf56.vercel.app/chef')
.then(res=> res.json()).then(data=> setChef(data))

},[])

    return (
        <div>
          <h1>{chef.length}</h1>


          <div className="row row-cols-1 row-cols-md-2 g-4">

{
    chef.map(singlechef=> <ChefCard
    key={singlechef.id}
    singlechef={singlechef}
    
    ></ChefCard>)
}

          </div>

   

        </div>
    );
};

export default Chefs;