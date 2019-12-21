import React from 'react'
import {Route, Switch} from 'react-router-dom'
import FinancesCollection from "./FinancesCollection";
import FinanceInfo from "./FinanceInfo";

const FinanceContainer = (props) => {
  return (
    <Switch>
      <Route path='/finance/info' component={FinanceInfo}/>
      <Route path='/' component={FinancesCollection}/>
    </Switch>
  )
}

export default FinanceContainer