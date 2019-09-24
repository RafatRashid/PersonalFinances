import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

import './App.css';
import Test from './components/tests/Test';

import Login from '../src/components/auth/Login/Login';
import Home from "./components/home/Home";

const getLoggedInState = () => {
  return localStorage.getItem('FinLogToken');
}

function App() {
  let loggedInState = getLoggedInState();

  if (!loggedInState) {
    return (
      <Login/>
    )
  } else {
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/test' component={Test}/>
        </Switch>
      </div>
    );
  }
}

export default App;
