import React from 'react';
import {Route} from 'react-router-dom';

// import css
import './Main.css';

// import components
import Finance from "../finance/Finance";

const Main = () => {
  return (
    <div className="main">
      <Route path="/finance" component={Finance}/>
    </div>
  )
}

export default Main;