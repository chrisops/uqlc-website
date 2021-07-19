import React, {useReducer,useState} from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import appReducer, {context} from './appReducer'
import Modal from 'react-modal';

// Components

import Nav from './components/Nav'
import Banner from './components/Banner'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'
import Profile from './pages/Profile'
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
    token: localStorage.getItem('token')
  })

  const [modal,setModal] = useState({show: false, type: 'Log in'})

  function openModal(newModal){
    return () => setModal({...modal, ...newModal})
  }

  console.log(modal)

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

        <Banner />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </context.Provider>
  );
}

export default App;