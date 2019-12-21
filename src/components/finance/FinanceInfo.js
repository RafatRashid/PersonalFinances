import React from 'react'
import {connect} from 'react-redux'
import {getSelectedFinanceDetails} from '../../stores/reducers/Finance'
import * as FinanceAc from '../../stores/action-creators/Finance'
import FinanceDetail from "./FinanceDetail";

class FinanceInfo extends React.Component {
  componentDidMount() {
    let {financeId} = this.props.location.state;
    this.props.fetchFinanceDetails(financeId)
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>

          <h4>Finance information</h4>

          <FinanceDetail />
          {/*FinanceDetailEditor*/}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFinanceDetails: financeId => dispatch(FinanceAc.fetchFinanceDetail(financeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceInfo)