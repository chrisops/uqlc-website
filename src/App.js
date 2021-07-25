import React, {useEffect, useReducer,useState} from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import appReducer, {context} from './appReducer'
import Modal from 'react-modal';
import env from 'react-dotenv'
import jwt_decode from 'jwt-decode'

// Components

import Nav from './components/Nav'
import Banner from './components/Banner'
// import Contact from './pages/Contact'
// import Events from './pages/Events'
// import Home from './pages/Home'
// import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'

// temporary stubs
import stubs from './Stubs'

Modal.setAppElement('#root');

function App() {

  const [store,dispatch] = useReducer(appReducer, {
    posts: stubs.posts, // temporary stubs for posts
    about: stubs.about, // temporary stubs for about us text
    userLoggedIn: null,
    userId: null,
    userAdmin: false,
    token: localStorage.getItem('token')
  })

  
  async function getUser(){
    if (store.token === 'null' || store.token === 'undefined') return
    let decoded = jwt_decode(store.token)
    if (decoded.exp > Date.now()/1000){
      dispatch({
        type: "setLogin",
        user: decoded.email,
        userId: decoded.user_id
      })
    }else{
      localStorage.setItem("token", null)
      dispatch({
        type: 'setLogin',
        user: null
      })
      dispatch({
        type: 'setToken',
        data: {
          token: null
        }
      })
    }
  }

  useEffect(() => getUser(),[store.token]) // get user that's logged in when token changes & onMount

  const [modal,setModal] = useState({show: false, type: 'Log in'}) // set Modal state to render

  function openModal(newModal){
    return () => setModal({...modal, ...newModal})
  }

  return (
    <context.Provider value={{...store, dispatch}}>
      <Router>
        <div style={{ textAlign: 'center' }}>
        <Nav openModal={openModal} />
        <Modal 
          isOpen = {modal.show}
          onRequestClose = {openModal({show: false})}
          contentLabel = "Log in"
        >
          <button onClick={openModal({show:false})}>Close</button>&nbsp;
          <button onClick={openModal({type: (modal.type === 'Log in' ? 'Sign up' : 'Log in')})}>{modal.type === 'Log in' ? 'Sign up' : 'Log in'}</button>
          {
          
          modal.type === 'Log in' ?
            <>
              <Login />
            </>
          :
            modal.type === 'Sign up' ?
              <>
                <Signup />
              </>
            :
              <h1>Error</h1>
          }
          
        </Modal>

        {/* <Banner /> */}
    
        </div>
      </Router>
    </context.Provider>
  );
}

export default App;