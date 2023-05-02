import React from 'react';
import Banner from './Banner';
import About from './About';
import Chefs from './Chefs';

const Home = () => {
    return (
        <div className='justify-content-center'>
           <Banner/>
           <About/>
           <Chefs/>
        </div>
    );
};

export default Home;