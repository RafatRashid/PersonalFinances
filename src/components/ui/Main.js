import React from 'react'
import {Route, Switch} from "react-router-dom"

import FinanceContainer from "../finance/FinanceContainer";

const Main = () => {
  return (
    <main className="col bg-faded py-3">
      <div className='container'>
        <Switch>
          <Route path='/finance' component={FinanceContainer}/>
          <Route exact path='/reports' component={() => <h3>Reports</h3>}/>
        </Switch>
      </div>
    </main>
  )
}

export default Main