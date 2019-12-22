import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import "react-datepicker/dist/react-datepicker.css";

import App from './App';
import store from './stores/ConfigureStore';

const rootElement = document.getElementById('root')

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, rootElement);
serviceWorker.unregister();
