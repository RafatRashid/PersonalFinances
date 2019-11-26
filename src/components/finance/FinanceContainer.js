import React from 'react'
import { connect } from 'react-redux'

import * as FinanceAc from '../../stores/action-creators/Finance'
import { getFinances } from '../../stores/reducers/Finance'
import Finance from "./Finance"
import './Finance.css'

class FinanceContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllFinances();
  }

  render() {
    let finances = Object.keys(this.props.finances).map(financeId => {
      return (
        <Finance key={financeId} finance={this.props.finances[financeId]}
          openDetail={this.openFinanceDetail} />
      )
    })

    finances = [(<Finance key={'add' + 0} openDetail={this.createNewFinance} />), ...finances]

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
    console.log(financeId);
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

export default connect(mapStateToProps, mapDispatchToProps)(FinanceContainer)