import React from 'react';

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input type='text' placeholder='Email'></input><br/><br/>
        <input type='password' placeholder='Password'></input><br/><br/>
        <input type='submit' value='Log in' />
      </form>
    </>
  );
}