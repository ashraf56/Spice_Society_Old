import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

const ChefCard = ({singlechef}) => {
    let {id ,likes,description,chef_name,years_of_experience}=singlechef;
    return (
        <div>
          
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{chef_name}</h5>
        <p className="card-text">{years_of_experience}</p>
      </div>
    </div>
  </div>
  



        </div>
    );
};

export default ChefCard;