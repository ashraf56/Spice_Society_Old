import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe';

const DetailChef = () => {
    let {id}=useParams();
    let Chefdetail=useLoaderData();
    return (
        <div>
  
            
{
    Chefdetail.map(Chef=> <Recipe
    
    Chef={Chef}
    ></Recipe>)
}

         </div>
    );
};

export default DetailChef;