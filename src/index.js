import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import authReducer from '../src/stores/reducers/AuthReducer';

const rootElement = document.getElementById('root');

const combinedReducer = {
  authStore: authReducer
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(combinedReducer), composeEnhancers(applyMiddleware(ReduxThunk)));


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, rootElement);
serviceWorker.unregister();
