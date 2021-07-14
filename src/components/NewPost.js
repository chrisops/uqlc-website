import React, {useState} from 'react';
import {context} from '../appReducer'

export default function NewPost(props) {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: '8px 25%',
    }

    const { posts, dispatch } = React.useContext(context)

    const [post, setPost] = useState({
        title: '',
        body: '',
        image: 'https://via.placeholder.com/150'
    })

    async function submitPost(event){
        event.preventDefault()
        dispatch({
            type: 'setPosts',
            newPosts: [post, ...posts]
        })
        /* TO DO: fetch POST to API

        let response = await fetch(`${env.API_URL}/posts/new`,{
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        if (response.status === 200){
            // successful post
        }

        */
       props.setToggle(false)
    }

    function updateState(event){
        setPost({
            ...post,
            [event.target.id]: event.target.value
        })
    }

  return (
    <>
        <form onSubmit={submitPost} onChange={updateState} style={formStyle}>
            <input type='text' placeholder='Title' id='title'></input><br />
            <textarea rows="10" cols="20" placeholder='Write a new post...' id='body'></textarea><br />
            <button>Upload Image</button>
            <input type='submit' value='Submit' />
        </form>
    </>
  );
}
