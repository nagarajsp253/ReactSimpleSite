import React from 'react';

import "./Index.css";
import Common from './Common';
import web from '../images/home.svg';

const Home=()=>{
    return(
        <>
           <Common
          name='Grow your bussiness with' 
          imgsrc={web}
          visit="/service"
          btname="Get Started"
           />
        </>
    )
}

export default Home;