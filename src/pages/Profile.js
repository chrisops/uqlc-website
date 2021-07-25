import React from 'react';
import env from 'react-dotenv';

export default function Profile(props) {

  const [profile,setProfile] = React.useState({
    name: '',
    number: '',
    position: '',
    totalSeasons: '',
    description: '',
  })

  async function getProfile(){
    let response = fetch(`${env.API_URL}/players/`)
  }

  return (
    <>
      <img src='avatar.png' alt='blank avatar' height='200'/>
      <h3>{props.userLoggedIn}</h3>
      <h4>Name: <input type='text' value={profile.name} /></h4>
      <h4>Number: <input type='text' value={profile.number} /></h4>
      <h4>Position: {profile.position}<input type='text' value={profile.position} /></h4>
      <h4>Seasons: {profile.totalSeasons}<input type='text' value={profile.number} /></h4>
      <h4>Bio: {profile.description}</h4><textarea rows='9' cols='34' placeholder='Write a bit about yourself...'></textarea>
    </>
  );
}
