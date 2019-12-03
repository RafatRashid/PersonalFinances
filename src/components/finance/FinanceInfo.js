import React from 'react'
import { getCurrentFinance } from '../../stores/reducers/Finance'

const FinanceInfo = () => {
  return (
    <div>
      Finance information
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentFinance: getSelectedFinance(state)
  }
}

export default connect()(FinanceInfo)