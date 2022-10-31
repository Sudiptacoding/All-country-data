import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='snab'>
      <Button variant="primary" onClick={handleShow}>
        Navbar
      </Button>

      <div className='fnav'>
        <Button variant="primary" onClick={handleShow}>
          Navbar <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ textAlign: 'center' }} >Select Your Country</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='navBar'>
            <div className='Nav-Items'><NavLink className='nav-linkss' to='/'>Home</NavLink></div>
            <div className='Nav-Items'><NavLink className='nav-linkss' to='/about'>About</NavLink></div>

          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar;