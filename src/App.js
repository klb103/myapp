import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bulma/css/bulma.min.css';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Docs from './views/Docs';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>

        <Switch>
          <Route path="/docs">
            <Docs/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
