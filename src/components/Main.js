import React from 'react';
import Sidebar from "./ui/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";

import Home from "./home/Home";

const Main = () => {
  return (
    <div className="row min-vh-100">
      <Sidebar/>
      <main className="col bg-faded py-3">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' render={() => <h2>About</h2>}/>
          <Route exact path='/contact' render={() => <h2>contact</h2>}/>

          {/*<Route exact path='/test' component={Test}/>*/}
        </Switch>
      </main>
    </div>
  )
};

export default Main;