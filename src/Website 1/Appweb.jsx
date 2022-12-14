import { Routes, Route } from "react-router-dom";
import React from 'react';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import Navbar from "./Navbar";
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';

const Appweb=()=>{
    return(
        <>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/service" element={<Service/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route path="*" element ={<Home/>}/>
          </Routes>
          <Footer/>
        </>
    )
}

export default Appweb;