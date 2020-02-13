import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home.jsx';
import Exo1 from './Exo1.jsx';
import Exo2 from './Exo2.jsx';
import Exo3 from './Exo3.jsx';
import Exo4 from './Exo4.jsx';
import Exo5 from './Exo5.jsx';
import Exo6 from './Exo6.jsx';
import Exo7 from './Exo7.jsx';
import './HomeStyle.css';
import './App.css';
export default function App() {
  return (
    <Router>
      <div className="App-header">
        <nav >
          <ul className="navi" >
            <li className="App-link">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Exo1">Exo 1</Link>
            </li>
            <li>
              <Link to="/Exo2">Exo 2</Link>
            </li>
            <li>
              <Link to="/Exo3">Exo 3</Link>
            </li>
            <li>
              <Link to="/Exo4">Exo 4</Link>
            </li>
            <li>
              <Link to="/Exo5">Exo 5</Link>
            </li>
            <li>
              <Link to="/Exo6">Exo 6</Link>
            </li>
            <li>
              <Link to="/Exo7">Exo 7</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/Exo1">
            <Exo1 />
          </Route>
          <Route path="/Exo2">
            <Exo2 />
          </Route>
          <Route path="/Exo3">
            <Exo3 />
          </Route>
          <Route path="/Exo4">
            <Exo4 />
          </Route>
          <Route path="/Exo5">
            <Exo5 />
          </Route>
          <Route path="/Exo6">
            <Exo6 />
          </Route>
          <Route path="/Exo7">
            <Exo7 />
          </Route>
        </Switch>
      </div>
    </Router>


// LE CAROUSELLE

  );
}
