import React, {useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import appReducer, {context} from './appReducer'
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

function App() {

  const [store,dispatch] = useReducer(appReducer, {
    posts: stubs.posts, // temporary stubs for posts
    about: stubs.about, // temporary stubs for about us text
    userLoggedIn: null,
    token: localStorage.getItem('token')
  })

  return (
    <context.Provider value={{...store, dispatch}}>
      <Router>
        <div style={{ textAlign: 'center' }}>
        <Nav />
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