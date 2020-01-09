import React from 'react'
import { connect } from 'react-redux'

import * as FinanceAc from '../../stores/action-creators/Finance'
import {getFinances, getSelectedFinanceId} from '../../stores/reducers/Finance'
import './Finance.css'
import FinanceCard from './FinanceCard'

class FinancesCollection extends React.Component {
  componentDidMount() {
    this.props.fetchAllFinances();
  }

  render() {
    let finances = Object.keys(this.props.finances).map(financeId => {
      return (
        <FinanceCard key={financeId} finance={this.props.finances[financeId]}
          openDetail={this.openFinanceDetail} />
      )
    })

    finances = [(<FinanceCard key={'add' + 0} openDetail={this.createNewFinance} />), ...finances]

    return (
      <div>
        <h3>Finances</h3>

        <div className="finance-collection">
          {finances}
        </div>
      </div>
    )
  }

  // handler functions
  openFinanceDetail = financeId => {
    return this.props.history.push({
      pathname: '/finance/info',
      state: {financeId}
    })
  }

  createNewFinance = () => {
    console.log('creating new boooyah');
  }
}

const mapStateToProps = state => {
  return {
    finances: getFinances(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFinances: () => dispatch(FinanceAc.fetchAllFinances())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancesCollection)