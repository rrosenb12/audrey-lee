import React from 'react';
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={NavBar}/>
    </Switch>
  );
}

export default App;
