import React from 'react';
import Alert from 'react-bootstrap/Alert'
import {context} from '../appReducer'
import env from 'react-dotenv'

export default function Signup() {

  const [creds,setCreds] = React.useState({email: "",password: "", confirm: ""})
  const [error,setError] = React.useState('')
  const {dispatch} = React.useContext(context)

  function formStateUpdate(event) {
    setCreds({...creds, [event.target.id]: event.target.value})
  }

  console.log(env)

  async function formSubmit(event) {
    console.log(env)
    event.preventDefault()
    if (creds.password !== creds.confirm){
      setError('Passwords do not match')
    }
    
    let response = await fetch(`${env.API_URL}/users/register`,{
      method: 'POST',
      body: JSON.stringify({email: creds.email, password: creds.password}),
      headers: {
        'Content-type': 'application/json'
      }
    })

    console.log(response)
    console.log(response.status)
    console.log(response.status === 201)
    
    let data = await response.json()

    console.log()

    if (response.status === 201){
      // successful sign up
      setError(`Successfully signed up as ${creds.email}`)
    }
    else{
      // failed sign up
      console.log(data) // contains error
      setError(`${response.status} - ${data.error}`)
    }

    
    // TO DO: 
    //  - add dotenv for dev environment
    //  - add logic for handling successful login
    //  - store token response in state context
    
  }

  return (
    <>
      <h2>Sign up</h2>
      {(error !== '') ?
      <Alert variant={error.match(/^Success/) ? 'success' : 'danger'}>{error}</Alert>
      :
        null}
      <form onSubmit={formSubmit} onChange={formStateUpdate}>
        <input id='email' type='email' placeholder='Email'></input><br/><br/>
        <input id='password' type='password' placeholder='Password'></input><br/><br/>
        <input id='confirm' type='password' placeholder='Confirm Password'></input><br/><br/>
        <input type='submit' value='Register' />
      </form>
    </>
  );
}
