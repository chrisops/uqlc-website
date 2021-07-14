import React, {useState} from 'react';
import {context} from '../appReducer'

export default function NewPost() {

    const [post, setPost] = useState({
        title: '',
        body: '',
        image: 'https://via.placeholder.com/150'
    })

    function submitPost(event){
        event.preventDefault()
    }

    function updateState(event){
        setPost({
            ...post,
            [event.target.id]: event.target.value
        })
    }

  return (
    <>
        <form onSubmit={submitPost} onChange={updateState}>
            <input type='text' placeholder='Title' id='title'></input>
            <textarea rows="10" cols="20" placeholder='Write a new post...' id='body'></textarea>
            <button>Upload Image</button>
            <input type='submit' value='Submit' />
        </form>
    </>
  );
}
