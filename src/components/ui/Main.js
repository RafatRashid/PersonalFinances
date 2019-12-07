import React from 'react'
import Sidebar from "./Sidebar/Sidebar"
import {Route, Switch} from "react-router-dom"

import AllFinances from '../finance/AllFinances'

const Main = () => {
  return (
    <main className="col bg-faded py-3">
      <Switch>
        <Route exact path='/finances' component={AllFinances}/>
        <Route exact path='/reports' component={() => <h3>Reports</h3>}/>
      </Switch>
    </main>
  )
}

export default Main