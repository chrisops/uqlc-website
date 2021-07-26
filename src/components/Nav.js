import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import BootNav from 'react-bootstrap/Nav';

import Contact from '../pages/Contact'
import Events from '../pages/Events'
import Home from '../pages/Home'
import Admin from '../pages/Admin'

import {context} from '../appReducer'
import Profile from '../pages/Profile';

export default function Nav({openModal}) {

  const { userLoggedIn, userAdmin, token } = React.useContext(context)

  return (
    <>
        <Router>
          <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>UQLC</Navbar.Brand> 

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle' style={{width:'100%'}}>
              <BootNav className='ml-auto'>
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/events'>Events</Link>
                  {/* <Link className='nav-link' to='/contact'>Contact Us</Link> */}
                  <a href='mailto:test@test.com' className='nav-link'>Contact Us</a>
                  <a className='nav-link' href="https://membership.sportstg.com/regoform.cgi?formID=97328&fbclid=IwAR1Yd2sjU7mn9Jx3gCStKfgWUV-cCVFMXuoztUJSTQXXFBzRkP3taqTtseA">Register</a>
                  { (userLoggedIn && !userAdmin) ? <Link className='nav-link' to='/profile'>Profile</Link> : null}
                  { (userLoggedIn && userAdmin) ? <Link className='nav-link' to='/admin'>Administration</Link> : null}
                  { userLoggedIn ? <p>Logged in as {userLoggedIn}</p> : null}
                  
                  <button className='nav-link' onClick={openModal({show: true, type: 'Log in'})}>Log in</button>
                  <button className='nav-link' onClick={openModal({show: true, type: 'Sign up'})}>Sign up</button>
              </BootNav>
            </Navbar.Collapse>

          </Navbar>

          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/events"><Events /></Route>
          <Route exact path="/profile"><Profile /></Route>
          <Route exact path="/admin"><Admin /></Route>
          <Route exact path="/" ><Home /></Route>
          </Container>
        </Router>
    </>
  );
}
