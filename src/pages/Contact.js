import React from 'react';

export default function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <form>
        <input type='text' placeholder='Name'></input><br/><br/>
        <input type='text' placeholder='Email'></input><br/><br/>
        <textarea rows="20" cols="50" placeholder='Message'></textarea>
      </form>
    </>
  );
}
