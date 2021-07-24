import React from 'react';

export default function Profile(props) {

  const [profile,setProfile] = React.useState({
    name: '',
    number: '',
    position: '',
    totalSeasons: '',
    description: '',
  })

  return (
    <>
      <img src='avatar.png' alt='blank avatar' height='200'/>
      <h3>{props.userLoggedIn}</h3>
      <h4><input type='text' placeholder='Name' value={profile.name} /></h4>
      <h4>Number: <input type='text' value={profile.number} /></h4>
      <h4>Position: {profile.position}<input type='text' value={profile.position} /></h4>
      <h4>Seasons: {profile.totalSeasons}<input type='text' value={profile.number} /></h4>
      <h4>Bio: {profile.description}</h4><textarea rows='9' cols='34'></textarea>

    </>
  );
}
