import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import './App.css';
import Test from './components/tests/Test';

import Login from './components/auth/Login/Login';
import Home from "./components/home/Home";
import Registration from './components/auth/Registration/Registration';
import ProgressBar from "./components/ui/ProgressBar";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const getLoggedInState = () => {
  let token = localStorage.getItem('FinLogToken');
  return token;
}


function App(props) {
  let routes = null;

  if(getLoggedInState() != null || props.loggedIn) {
    routes = (
      <React.Fragment>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/test' component={Test}/>
      </React.Fragment>
    )
  }
  else {
    routes = (
      <React.Fragment>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Registration}/>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className='container'>
        <Switch>
          {routes}
        </Switch>
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
