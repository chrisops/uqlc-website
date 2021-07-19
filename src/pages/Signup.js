import React from 'react';

export default function Signup() {

  const [creds,setCreds] = React.useState({email: "",password: "", confirm: ""})

  function formStateUpdate(event) {
    setCreds({...creds, [event.target.id]: event.target.value})
  }

  async function formSubmit(event) {

    event.preventDefault()
    /*
    let response = await fetch(`${env.API_URL}/signup`,{
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-type': 'application/json'
      }
    })
    
    let data = await response.json()

    if (response.state === 200){
      // successful login
    }
    else{
      // failed login
      data.error // contains error
    }

    
    TO DO: 
     - add dotenv for dev environment
     - add logic for handling successful login
     - store token response in state context
    */
  }

  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={formSubmit} onChange={formStateUpdate}>
        <input id='email' type='email' placeholder='Email'></input><br/><br/>
        <input id='password' type='password' placeholder='Password'></input><br/><br/>
        <input id='confirm' type='password' placeholder='Confirm Password'></input><br/><br/>
        <input type='submit' value='Register' />
      </form>
    </>
  );
}
