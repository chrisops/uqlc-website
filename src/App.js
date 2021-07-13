import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Nav />
      <Banner />
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
