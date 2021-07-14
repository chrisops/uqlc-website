import React from 'react';
import {context} from '../appReducer'

export default function Post() {

    const state = React.useContext(context)
    console.log(state)

    const imgStyle = {margin: '20px 0 0px 20%'}
    const pStyle = {margin: '30px 20%'}

  return (
    <>
        <h2>Latest News</h2>

        <button>New post</button>

        { state.posts.map((post, index) => {
          return (
            <>
              <h3>{post.title}</h3>
              <img align='left' alt='placeholder' src={post.image} style={imgStyle} /><p style={pStyle}>{post.body}</p>
              <br/>
            </>
          )
        }) }
    </>
  );
}
