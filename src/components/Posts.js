import React from 'react';
import NewPost from './NewPost'
import {context} from '../appReducer'
import env from 'react-dotenv'

export default function Post() {

    const {posts, dispatch} = React.useContext(context)
    const [toggle,setToggle] = React.useState(false)
    const [edit,setEdit] = React.useState(0)
    const [text, setText] = React.useState('')

    const imgStyle = {margin: '20px 0 0px 20%'}
    const pStyle = {margin: '30px 20%', minHeight: '150px'}

    async function updatePost(postid){
      
      let response = await fetch(`${env.API_URL}/api/v1/posts/${postid}`,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          description: text
        }),
      })
      let data = await response.json()
      if (response.status === 200){
        getPosts()
      }else
      {
        // handle error
        console.log(data.error)
      }
    }

    async function deletePost(postid){
      if (window.confirm('Are you sure you want to delete this post?')){
        let response = await fetch(`${env.API_URL}/api/v1/posts/${postid}`,{
          method: 'DELETE',
        })
        let data = await response.json()
        if (response.status === 200){
          // successfully deleted
          getPosts()
          console.log(data.message)
        }else{
          // delete failed
          console.log(data.error)
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getPosts(){
      setEdit(0)
      
      let response = await fetch(`${env.API_URL}/api/v1/posts`)
      let data = await response.json()
      if (response.status === 200){
        let postData = data.map((val,ind)=>{
          return {
            user_id: val.user_id,
            id: val.id,
            title: val.title, 
            body: val.description, 
            image: 'https://via.placeholder.com/150' //temporary
          }
        })
        dispatch({
          type: 'setPosts',
          newPosts: postData
        })
      }else
      {
        // TO DO: do something if fail to get posts
        console.log(data.error)
      }
    }

    
    React.useEffect(getPosts,[])

  return (
    <>
        <h2>Latest News</h2>

        <button onClick={()=> setToggle(!toggle)}>New post</button>

        { toggle ? <NewPost setToggle={setToggle} getPosts={getPosts} /> : null}

        { posts.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.title}</h3>
                { // render edit and delete if edit is not set
                (edit !== post.id) ? 
                  <>
                    <button onClick={() => {setEdit(post.id); setText(post.body)}}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                  </>
                  : null
                }
              <img align='left' alt='placeholder' src={post.image} style={imgStyle} />
              {(edit !== post.id) ? <p style={pStyle}>{post.body}</p> : 
              <>
                <input type='submit' value='submit' onClick={(e) => {e.preventDefault(); updatePost(post.id); setText(post.body)}}/><button onClick={()=>setEdit(0)}>Cancel</button>
                <textarea value={text} onChange={(e)=>setText(e.target.value)} style={{margin: '30px 20%'}} rows="10" cols="50" id='body'>
                </textarea>
                
              </>
              }
              <br/>
            </div>
          )
        }) }
    </>
  );
}
