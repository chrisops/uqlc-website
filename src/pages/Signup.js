import React from 'react';

export default function Signup() {
  return (
    <>
      <h2>Sign up</h2>
      <form>
        <input type='text' placeholder='Email'></input><br/><br/>
        <input type='password' placeholder='Password'></input><br/><br/>
        <input type='password' placeholder='Confirm Password'></input><br/><br/>
        <input type='submit' value='Register' />
      </form>
    </>
  );
}
