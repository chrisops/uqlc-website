import React, {useState} from 'react';
// import env from 'react-dotenv'; Disabled ENV for dev - using stubs

export default function Login() {

  const [creds,setCreds] = useState({email: "",password: ""})

  function formStateUpdate(event) {
    setCreds({...creds, [event.target.type]: event.target.value})
  }

  async function formSubmit(event) {

    event.preventDefault()
    
    let response = await fetch(`${process.env.API_URL}/login`, {
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
      console.log(data.error) // contains error
    }

    /*
    TO DO: 
     - add dotenv for dev environment
     - add logic for handling successful login
     - store token response in state context
    */
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={formSubmit} onChange={formStateUpdate}>
        <input type='email' placeholder='Email'></input><br/><br/>
        <input type='password' placeholder='Password'></input><br/><br/>
        <input type='submit' value='Log in' />
      </form>
    </>
  );
}

