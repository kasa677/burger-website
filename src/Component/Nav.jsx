import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
       <div className="navbar navbar-expand-lg bg-light navbar-light">
  <div className="container-fluid">
    <a href="index.html" className="navbar-brand">Burger <span>King</span></a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
      <div className="navbar-nav ml-auto">
      <Link to="/" className="nav-item nav-link">Home</Link>
        <Link to="about" className="nav-item nav-link">About</Link>
        <Link to="feature" className="nav-item nav-link">Feature</Link>
        <Link to="chef" className="nav-item nav-link">Chef</Link>
        <Link to="team" className="nav-item nav-link">Team</Link>
     
        <Link to="menu" className="nav-item nav-link">Menu</Link>
        <Link to="booking" className="nav-item nav-link">Booking</Link>
        
        <Link to="contact" className="nav-item nav-link">Contact</Link>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Nav;