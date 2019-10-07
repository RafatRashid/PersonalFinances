import React from 'react';
import {Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import './App.css';

import Login from './components/auth/Login/Login';
import Registration from './components/auth/Registration/Registration';
import ProgressBar from "./components/ui/ProgressBar";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Main from "./components/Main";


const getLoggedInState = () => {
  let token = localStorage.getItem('FinLogToken');
  return token;
}


function App(props) {
  let routes = null;

  if (getLoggedInState() != null || props.loggedIn) {
    routes = <Main />
  } else {
    routes = (
      <React.Fragment>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Registration}/>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className='container-fluid'>
        {routes}
      </div>
      <ProgressBar visible={props.showSpinner}/>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authStore.isLoggedIn,
    showSpinner: state.spinnerStore.showSpinner
  }
}

export default withRouter(connect(mapStateToProps)(App));
