import React from 'react'
import moment from 'moment';

import './Finance.css'

const Finance = ({finance}) => {
  return (
    <div className="finance">
      Date: {moment(finance.date).format('DD-MM-YYYY')} <br />
      Number of transactions: {finance.noOfTransactions} <br />
    </div>
  )
}

export default Finance