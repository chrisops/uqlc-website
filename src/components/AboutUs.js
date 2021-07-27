import React from 'react';

export default function AboutUs() {
  /*const [text,setText] = React.useState(about)
  const [edit,setEdit] = React.useState(false)
  const {dispatch} = React.useContext(context)

  function editAbout(event){
    if (edit){
      dispatch({
        type: 'setAbout',
        newAbout: text
      })
    }
      setEdit(!edit)
  }*/                         // Disabled feature - editable about us 

  return (
    <>
      <h2 style={{color: 'aliceblue', background: 'maroon'}}>About Us</h2>
        {/* edit ? 
            <textarea onChange={(e)=>setText(e.target.value)}style={{margin: '20px 25%'}} rows="10" cols="70" placeholder='Write a new post...' id='body'>{about}</textarea>
          : 
            <p style={{margin: '20px 25%'}}>{about}</p>
            
            =Disabled feature= - editable about us page

        */}

          <p style={{margin: '20px 25%', marginRight: '50px'}}>UQ Lacrosse Club is dedicated to growing the sport of lacrosse within Brisbane. Although we are a UQ Sport-affiliated club, we don't require our members to be UQ students or staff. Contact us to learn more!</p> {/* About Us */}
          
          <br/>
          {/*<button onClick={editAbout}>{!edit ? 'Edit' : 'Save' }</button>  =Disabled feature= - editable about us page */ }
          <br/><br/>
      
      <img alt='placeholder' width='250' height='250' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/UNC_Lacrosse.jpg/800px-UNC_Lacrosse.jpg" />
    </>
  );
}
