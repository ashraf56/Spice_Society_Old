import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgs from '../assets/hand-drawn-tasty-tequenos-with-sauce_23-2148809453.avif'
const Recipe = ({Chef}) => {
    let {id ,likes,chef_picture,description,chef_name,years_of_experience,number_of_recipes}=Chef;

    return (
        <div >
              <Container>
      <Row className='align-items-center'>
        <Col sm={12} md={6}>
           <h3 className='fw-bold display-5 text-start '>
           Discover  Chef: <span className='text-danger'> {chef_name}</span>
           </h3>
           <p>{description}</p>

        
        </Col>
        <Col sm={12} md={6} >
            <div className='rounded-start-pill'>
 <img src={chef_picture} alt="" className='w-100 ' />
            </div>
           

        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Recipe;