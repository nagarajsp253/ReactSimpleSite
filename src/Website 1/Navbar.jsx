import React from 'react';
import { NavLink } from 'react-router-dom';
import './Index.css'

const Navbar=()=>{
    return(
    <>
<div className='container-fluid nav_bg'>
<div className='row'>
<div className='col-10 mx-auto'>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">DartWeb</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon navbar-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link menu_active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link menu_active" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link menu_active" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link menu_active" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>

{/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

</>)
}

export default Navbar;