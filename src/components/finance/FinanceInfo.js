import React from 'react'
import {connect} from 'react-redux'
import {getSelectedFinanceDetails, getSelectedFinanceId} from '../../stores/reducers/Finance'
import * as FinanceAc from '../../stores/action-creators/Finance'

class FinanceInfo extends React.Component {
  componentDidMount() {
    if(this.props.financeId === 0)
      this.props.history.push('/finance')
    this.props.fetchFinanceDetails(this.props.financeId)
  }

  render() {
    let financeDetails = !this.props.currentFinanceDetails
      ? (<tr><td colSpan="4">No details available</td></tr>)
      : this.props.currentFinanceDetails.map(fd => {
      return (
        <tr key={fd.detailId}>
          <td>{fd.description}</td>
          <td>{fd.date}</td>
          <td>{fd.transactionType === 'in' ? fd.amount : ''}</td>
          <td>{fd.transactionType === 'out' ? fd.amount : ''}</td>
        </tr>
      )
    })

    return (
      <div>
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
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentFinanceDetails: getSelectedFinanceDetails(state),
    financeId: getSelectedFinanceId(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFinanceDetails: financeId => dispatch(FinanceAc.fetchFinanceDetail(financeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceInfo)