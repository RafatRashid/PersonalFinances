import React from 'react';
import { Route } from 'react-router-dom';

// import css
import './Main.css';

// import components
import Finance from "../finance/FinanceContainer";
import FinanceInfo from '../finance/FinanceInfo';

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/finance" component={Finance} />
      <Route exact path="/finance/info" component={FinanceInfo} />
    </div>
  )
}

export default Main;