import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Planets from './components/Planets';

function App() {

  return (
    <div className="appBody">
      <Router>
        
        <Nav />

        <Switch>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
