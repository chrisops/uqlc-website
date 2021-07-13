import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Nav from './components/Nav'
import Banner from './components/Banner'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
      <Nav />
      <Banner />
        <Switch>
          <Route path="/login">
            <Login />
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
  );
}

export default App;
