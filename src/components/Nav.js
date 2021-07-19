import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({openModal}) {
  return (
      <nav style={{display:'flex',justifyContent: 'space-between',margin:'0px 25%'}}>
        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
        <Link to='/contact'>Contact</Link>
        <button onClick={openModal({show: true, type: 'Log in'})}>Log in</button>
        <button onClick={openModal({show: true, type: 'Sign up'})}>Sign up</button>
      </nav>
  );
}
