import React from 'react';
import {context} from '../appReducer'

export default function AboutUs() {

  const [edit,setEdit] = React.useState(false)
  const {about, dispatch} = React.useContext(context)
  const [text,setText] = React.useState(about)

  function editAbout(event){
    if (edit){
      dispatch({
        type: 'setAbout',
        newAbout: text
      })
    }
      setEdit(!edit)
  }

  return (
    <>
      <h2>About Us</h2>
        {edit ? 
            <textarea onChange={(e)=>setText(e.target.value)}style={{margin: '20px 25%'}} rows="10" cols="70" placeholder='Write a new post...' id='body'>{about}</textarea>
          : 
            <p style={{margin: '20px 25%'}}>{about}</p>}
          <br/>
          <button onClick={editAbout}>{!edit ? 'Edit' : 'Save' }</button>
          <br/><br/>
      
      <img alt='placeholder' src="https://via.placeholder.com/250" />
    </>
  );
}
