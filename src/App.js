import React from 'react';
import {Switch} from 'react-router-dom';
import './App.css';

import Login from '../src/components/auth/Login/Login';
import Layout from "./components/ui/Layout";


// const getLoggedInState = () => {
//   return localStorage.getItem('FinLogToken');
// }

function App() {
  // let loggedInState = getLoggedInState();
  let loggedInState = true;

  if (!loggedInState) {
    return (
      <Login/>
    )
  } else {
    return (
      <div className='container-fluid'>
        <Switch>
          <Layout/>
        </Switch>
      </div>
    );
  }
}

export default App;
