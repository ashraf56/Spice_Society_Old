import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe';
import RecipeDetail from './RecipeDetail';

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


{
    Chefdetail.map(Chef=> <RecipeDetail
    
        Chef={Chef}
        ></RecipeDetail>)
}


         </div>
    );
};

export default DetailChef;