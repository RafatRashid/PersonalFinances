import React from 'react'
import moment from 'moment';

import './Finance.css'

const Finance = ({ finance, openDetail }) => {
  let financeMarkup = null
  if (finance) {
    financeMarkup = (
      <div className="finance" onClick={() => openDetail(finance.id)}>
        Date: {moment(finance.date).format('DD-MM-YYYY')}
        Number of transactions: {finance.noOfTransactions}
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

export default Finance