import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import env from 'react-dotenv'
import {context} from '../appReducer'

export default function Login() {

  const [creds,setCreds] = useState({email: "",password: ""})
  const [error,setError] = React.useState('')
  const { dispatch } = React.useContext(context)

  function formStateUpdate(event) {
    setCreds({...creds, [event.target.type]: event.target.value})
  }

  async function formSubmit(event) {

    event.preventDefault()
    
    let response = await fetch(`${env.API_URL}/api/v1/users/login`, {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-type': 'application/json'
      }
    }).catch(() => setError('Login failed: server unreachable'))
    
    if (response){
    
      let data = await response.json()

      if (response.status === 200){
        // successful login
        setError(`Logged in as ${creds.email}`)
        dispatch({
          type: "setToken",
          data
        })
        dispatch({
          type: "setLogin",
          user: creds.email
        })
      }
      else{
        // failed login
        setError(`Failed to Login - ${data.error}`)
        setCreds({email: "",password: ""})
        console.log(data.error) // contains error
      }
    }
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

