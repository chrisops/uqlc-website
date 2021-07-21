import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import BootNav from 'react-bootstrap/Nav';

import Contact from '../pages/Contact'
import Events from '../pages/Events'
import Home from '../pages/Home'


export default function Nav({openModal}) {
  return (
    <>
        <Router>
          <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>UQLC</Navbar.Brand> 

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <BootNav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/events'>Events</Link>
                <Link className='nav-link' to='/contact'>Contact Us</Link>
                <button className='nav-link' onClick={openModal({show: true, type: 'Log in'})}>Log in</button>
                <button className='nav-link' onClick={openModal({show: true, type: 'Sign up'})}>Sign up</button>
              </BootNav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="/contact"><Contact /></Route>
          <Route path="/events"><Events /></Route>
          <Route exact path="/" ><Home /></Route>
          

          </Container>
        </Router>
        </>
  );
}
