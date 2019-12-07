import React from 'react';

// css imports
import './Layout.css';
import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <React.Fragment>
      {/*<Header/>*/}
      <div className="row min-vh-100">
        <Sidebar/>
        <Main/>
      </div>
    </React.Fragment>

  )
}

export default Layout;