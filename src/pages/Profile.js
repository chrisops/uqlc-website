import React from 'react';
import env from 'react-dotenv';
import { context } from '../appReducer'
import Alert from 'react-bootstrap/Alert'

export default function Profile() {

  const [image,setImage] = React.useState('')

  const {userLoggedIn, userId} = React.useContext(context)
  const [error,setError] = React.useState('')

  const [profile,setProfile] = React.useState({
    name: '',
    number: '',
    position: '',
    totalSeasons: '',
    description: '',
    imageurl: '',
  })

  async function uploadImage(){
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset','uqlc_image')
    data.append('cloud_name','bdtech')
    console.log(data)
    console.log(image)
    let res = await fetch('https://api.cloudinary.com/v1_1/bdtech/image/upload',{
      method: 'POST',
      body: data
    })
    if (res.status === 200){
      let resData = await res.json()
      setProfile({...profile, imageurl: resData.url})
      updateProfile(userId)
    }else{
      setError('Failed to upload image')
    }
  }

  async function getProfile(userId){
    if (!userId) return
    let response = await fetch(`${env.API_URL}/api/v1/players/${userId}`)
    if (response){
      let data = await response.json()
      setProfile({
        name: data.name,
        number: data.number,
        position: data.position,
        totalSeasons: data.seasons,
        description: data.description,
        imageurl: data.imageurl,
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
        imageurl: profile.imageurl,
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
      { <img src={(profile.imageurl !== '') ? profile.imageurl : 'avatar.png' } alt='Lacrosse Player' height='200'/> }
      <br />
      <input type='file' onChange={(e)=>{
        setImage(e.target.files[0])
        uploadImage()
        }}/>
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
