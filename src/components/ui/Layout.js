import React from 'react';
// component imports
import Header from "./Header";
// css imports
import './Layout.css';
import Sidebar from "../ui/Sidebar";
import Main from "./Main";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar>
        <Main />
      </Sidebar>
    </React.Fragment>
  )
}

export default Layout;