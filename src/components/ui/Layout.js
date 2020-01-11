import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// css imports
import './Layout.css';
import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <React.Fragment>
      {/*<Header/>*/}
      <ToastContainer />
      <div className="row min-vh-100">
        <Sidebar/>
        <Main/>
      </div>
    </React.Fragment>

  )
}

export default Layout;