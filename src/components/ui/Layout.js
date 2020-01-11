import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// css imports
import './Layout.css';
import Main from "./Main";
import Navbar from "./Navbar/Navbar";

function Layout() {
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="min-vh-100">
        <Navbar/>
        <Main/>
      </div>
    </React.Fragment>

  )
}

export default Layout;