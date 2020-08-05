import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'


const NavbarComponent = () => {

  return (
    <div className='container'>
      <Navbar className='navbar navbar-dark' expand='lg' id='navbar'>
        <Navbar.Brand id='nav-brand'>
          <Link to='#' >
            <Image
              src={require('../images/ja_logo.png')}
              height='50px'
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#' style={{color: '#000'}}>About</Nav.Link>
            <Nav.Link href='#' style={{color: '#000'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;