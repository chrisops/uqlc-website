import React from 'react';
import NewPost from './NewPost'
import {context} from '../appReducer'

export default function Post() {

    const state = React.useContext(context)
    const [toggle,setToggle] = React.useState(false)
    console.log(state)

    const imgStyle = {margin: '20px 0 0px 20%'}
    const pStyle = {margin: '30px 20%', minHeight: '150px'}

  return (
    <>
        <h2>Latest News</h2>

        <button onClick={()=> setToggle(!toggle)}>New post</button>

        {toggle ? <NewPost setToggle={setToggle} /> : null}

        { state.posts.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.title}</h3>
              <img align='left' alt='placeholder' src={post.image} style={imgStyle} /><p style={pStyle}>{post.body}</p>
              <br/>
            </div>
          )
        }) }
    </>
  );
}
