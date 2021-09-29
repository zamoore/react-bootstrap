import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@app/styles/styles.css';
import '@app/icon-lib';
import Home from '@pages/home/page';

const App = () => (
  <div>
    <header>
      <h1>React Boilerplate</h1>
    </header>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon="home" />
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
