import React from 'react';
import "./Index.css";

import Common from './Common';
import web from '../images/about.jpg';

const About=()=>{
    return(
        <>
          <Common 
          name='Welcome to About page' 
          imgsrc={web}
          visit="/contact"
          btname="Contact Now"
          />
        </>
    )
}

export default About;