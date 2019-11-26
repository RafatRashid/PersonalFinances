import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';

import Login from '../src/components/auth/Login/Login';
import Layout from "./components/ui/Layout";
import ProgressBar from './components/ui/ProgressBar';

// const getLoggedInState = () => {
//   return localStorage.getItem('FinLogToken');
// }

function App(props) {
  // let loggedInState = getLoggedInState();
  let loggedInState = true;

  return (
    <React.Fragment>
      <div className='container-fluid'>
        <Switch>
          <Layout />
        </Switch>
      </div>
      <ProgressBar visible={props.showSpinner} />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.isLoggedIn,
    showSpinner: state.spinner.showSpinner
  }
}

export default withRouter(connect(mapStateToProps)(App));
