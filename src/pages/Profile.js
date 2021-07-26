import React from 'react';
import env from 'react-dotenv';
import { context } from '../appReducer'
import Alert from 'react-bootstrap/Alert'

export default function Profile() {

  const {userLoggedIn, userId} = React.useContext(context)
  const [error,setError] = React.useState('')

  const [profile,setProfile] = React.useState({
    name: '',
    number: '',
    position: '',
    totalSeasons: '',
    description: '',
  })

  async function getProfile(userId){
    if (!userId) return
    let response = await fetch(`${env.API_URL}/api/v1/players/${userId}`)
    if (response){
      let data = await response.json()
      setProfile({
        name: data[0].name,
        number: data[0].number,
        position: data[0].position,
        totalSeasons: data[0].seasons,
        description: data[0].description,
      })
    }
  }

  async function updateProfile(userId){
    let response = await fetch(`${env.API_URL}/api/v1/players/${userId}`,{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        user_id: userId,
        name: profile.name,
        number: Number(profile.number),
        position: profile.position,
        seasons: Number(profile.totalSeasons),
        description: profile.description,
      })
    })
    if (response){
      let data = await response.json()
      if (response.status === 200){
        setError('Profile updated')
        getProfile(userId)
      }
      else{
        setError(`Failed to update - ${data.error}`)
      }
    }
  }

  function updateForm(e){
    setProfile({
      ...profile,
      [e.target.id]: e.target.value,
    })
  }

  React.useEffect(() => getProfile(userId),[userId])

  return (
    <>
      {(error !== '') ?
      <Alert variant={error.match(/^Profile/) ? 'success' : 'danger'}>{error}</Alert>
      :
        null}
      <img src='avatar.png' alt='blank avatar' height='200'/>
      <br />
      <input type='file' />
      <h3>{userLoggedIn} </h3>
      <p>ID #{userId}</p>
      <form onSubmit={() => updateProfile(userId)} onChange={updateForm}>
        <h4>Name: <input id='name' type='text' value={profile.name ? profile.name : ''} /></h4>
        <h4>Number: <input id='number' type='text' value={profile.number ? profile.number : ''} /></h4>
        <h4>Position: <input id='position' type='text' value={profile.position ? profile.position : ''} /></h4>
        <h4>Seasons: <input id='totalSeasons' type='text' value={profile.totalSeasons ? profile.totalSeasons : ''} /></h4>
        <h4>Bio: </h4><textarea id='description' rows='8' cols='34' placeholder='Write a bit about yourself...' value={profile.description ? profile.description : ''}></textarea>
        <br />
        <input type='submit' value='Update' />
        <br />
        <br />
      </form>
    </>
  );
}
