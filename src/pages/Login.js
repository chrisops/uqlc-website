import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import env from 'react-dotenv'
import {context} from '../appReducer'
// import env from 'react-dotenv'; Disabled ENV for dev - using stubs

export default function Login() {

  const [creds,setCreds] = useState({email: "",password: ""})
  const [error,setError] = React.useState('')
  const { dispatch } = React.useContext(context)

  function formStateUpdate(event) {
    setCreds({...creds, [event.target.type]: event.target.value})
  }

  async function formSubmit(event) {

    event.preventDefault()
    
    let response = await fetch(`${env.API_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-type': 'application/json'
      }
    })
    
    let data = await response.json()

    if (response.status === 200){
      // successful login
      setError(`Logged in as ${creds.email}`)
      dispatch({
        type: "setToken",
        data
      })
    }
    else{
      // failed login
      setError(`Failed to Login ${response.status} - ${data.error}`)
      setCreds({email: "",password: ""})
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
      {(error !== '') ?
      <Alert variant={error.match(/^Logged/) ? 'success' : 'danger'}>{error}</Alert>
      :
        null}
      <form onSubmit={formSubmit} onChange={formStateUpdate}>
        <input type='email' placeholder='Email' value={creds.email}></input><br/><br/>
        <input type='password' placeholder='Password' value={creds.password}></input><br/><br/>
        <input type='submit' value='Log in' />
      </form>
    </>
  );
}

