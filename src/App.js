import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewPage from './components/NewPage';
import BeersPage from './components/BeersPage';
import RandomPage from './components/RandomPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/beers" component={BeersPage} exact />
        <Route path="/random-beer" component={RandomPage} exact />
        <Route path="/new-beer" component={NewPage} exact />
      </Switch>
    </div>
  );
}

export default App;
