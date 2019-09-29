import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import ReduxThunk from "redux-thunk";
import {ToastContainer} from "react-toastify";
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import authReducer from '../src/stores/reducers/AuthReducer';
import spinnerReducer from '../src/stores/reducers/SpinnerReducer';


const rootElement = document.getElementById('root');

const combinedReducer = {
  authStore: authReducer,
  spinnerStore: spinnerReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(combinedReducer), composeEnhancers(applyMiddleware(ReduxThunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
        <App/>
        <ToastContainer/>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, rootElement);
serviceWorker.unregister();
