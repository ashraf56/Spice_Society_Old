import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import {  FaRegThumbsUp } from "react-icons/fa";


const ChefCard = ({singlechef}) => {
    let {id ,likes,chef_picture,chef_name,years_of_experience,number_of_recipes}=singlechef;
    return (
        <div>
          
  <div className="col ">
    <div className="card rounded-5">
      <div className="card-body m-2 ">
      <div className='py-3'>
        <img src={chef_picture} className="img-fluid w-25 rounded-5" />
      </div>
      
      
        <h5 className="card-title">{chef_name}</h5>
        <p className=" fs-semibold">Experience:{years_of_experience} years</p>
        <p className=" fs-semibold"><FaRegThumbsUp/>  {likes} </p>
        <p className=" fs-semibold">number of recipes :{number_of_recipes} </p>
        <button className='btn btn-outline-danger'>View Recipes</button>
      
      </div>
    </div>
  </div>
  



        </div>
    );
};

export default ChefCard;