import React from 'react'
import moment from 'moment';

import './Finance.css'

const FinanceCard = ({ finance, openDetail }) => {
  let financeMarkup = null
  if (finance) {
    financeMarkup = (
      <div className="finance" onClick={() => openDetail(finance.id)}>
        Finances of: {finance.month.toUpperCase()}, {finance.year} <br />
        Number of transactions: {finance.noOfTransactions}<br />
        Total In: {finance.totalInAmount} <br />
        Total Out: {finance.totalOutAmount} <br />
      </div>
    )
  }
  else {
    financeMarkup = (
      <div className="finance text-center" onClick={() => openDetail()}>
        Add New <br />
        <i id='addIcon' className='far fa-plus-square'></i>
      </div>
    )
  }

  return financeMarkup
}

export default FinanceCard