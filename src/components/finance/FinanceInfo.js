import React from 'react'
import {connect} from 'react-redux'
import {getSelectedFinanceDetails} from '../../stores/reducers/Finance'
import * as FinanceAc from '../../stores/action-creators/Finance'

import moment from 'moment'

class FinanceInfo extends React.Component {
  componentDidMount() {
    let {financeId} = this.props.location.state;
    this.props.fetchFinanceDetails(financeId)
  }

  render() {
    let totalIns = 0
    let totalOuts = 0

    let financeDetails = !this.props.currentFinanceDetails
      ? (
        <tr>
          <td colSpan="4">No details available</td>
        </tr>)
      : this.props.currentFinanceDetails
        .map(fd => {
          totalIns += fd.transactionType === 'in' ? parseInt(fd.amount) : 0
          totalOuts += fd.transactionType === 'out' ? parseInt(fd.amount) : 0

          return (
            <tr key={fd.detailId}>
              <td>{fd.description}</td>
              <td>{moment(fd.date).format('DD-MM-YYYY')}</td>
              <td>{fd.transactionType === 'in' ? fd.amount : ''}</td>
              <td>{fd.transactionType === 'out' ? fd.amount : ''}</td>
            </tr>
          )
        })

    return (
      <div className='row'>
        <div className='col-md-12'>

          <h4>Finance information</h4>

          <table className="table table-hover">
            <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>In</th>
              <th>Out</th>
            </tr>
            </thead>

            <tbody>
            {financeDetails}

            <tr className='total'>
              <td colSpan='2'>Total</td>
              <td>{totalIns}</td>
              <td>{totalOuts}</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentFinanceDetails: getSelectedFinanceDetails(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFinanceDetails: financeId => dispatch(FinanceAc.fetchFinanceDetail(financeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceInfo)