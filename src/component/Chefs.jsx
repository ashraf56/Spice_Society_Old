import React, { useEffect, useState } from 'react';
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


   

        </div>
    );
};

export default Chefs;