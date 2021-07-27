import React, {useState} from 'react';
import env from 'react-dotenv'
import { context } from '../appReducer'

export default function NewPost(props) {

    const [image,setImage] = React.useState('')

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: '8px 25%',
    }

    // const { posts, dispatch } = React.useContext(context)

    const {userId} = React.useContext(context)

    const [post, setPost] = useState({
        title: '',
        body: '',
        image: 'uqlc_logo.jpeg' //default
    })

    async function uploadImage(){
      if (image === '' || !image) {
        console.log('image is blank, cant upload')
        return false
      }
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
        // console.log(typeof resData.url)
        // console.log(`setting url ${resData.url} into profile: result: ${profile.imageurl}`)
        // updateProfile(userId)
        return resData.url
      }
      else{
        let resData = await res.json()
        console.log(resData)
        return false
      }
    }

    async function submitPost(event){ // submit new post on front page
        event.preventDefault()
        let imageurl = await uploadImage()
        let response = await fetch(`${env.API_URL}/api/v1/posts`,{
            method: 'POST',
            body: JSON.stringify({
                user_id: userId, // change this later
                title: post.title,
                description: post.body,
                image: (imageurl) ? imageurl : null,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201){
            // successful post
            props.getPosts()
        }

       props.setToggle(false)
    }

    function updateState(event){
        setPost({
            ...post,
            [event.target.id]: event.target.value,
        })
    }

  return (
    <>
        <form onSubmit={submitPost} onChange={updateState} style={formStyle}>
            <input type='text' placeholder='Title' id='title'></input><br />
            <textarea rows="10" cols="20" placeholder='Write a new post...' id='body'></textarea><br />
            <input type='file' onChange={(e)=>{
                setImage(e.target.files[0])
            }}/>
            <input type='submit' value='Submit' />
        </form>
    </>
  );
}
