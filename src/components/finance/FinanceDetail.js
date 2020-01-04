import React from 'react'
import moment from "moment"
import {connect} from 'react-redux'
import {getSelectedFinanceDetails} from "../../stores/reducers/Finance";

const processFinanceDetails = (currentFinanceDetails, clickHandler) => {
    let totalIns = 0
    let totalOuts = 0

    let financeDetails = currentFinanceDetails.length === 0
        ? (
            <tr>
                <td colSpan="4">No details available</td>
            </tr>)
        : currentFinanceDetails
            .map(fd => {
                totalIns += fd.transactionType === 'in' ? parseInt(fd.amount) : 0
                totalOuts += fd.transactionType === 'out' ? parseInt(fd.amount) : 0

                return (
                    <tr key={fd.detailId} onClick={() => clickHandler(fd)}>
                        <td>{fd.description}</td>
                        <td>{moment(fd.date).format('DD-MM-YYYY')}</td>
                        <td>{fd.transactionType === 'in' ? fd.amount : ''}</td>
                        <td>{fd.transactionType === 'out' ? fd.amount : ''}</td>
                    </tr>
                )
            })
    return {financeDetails, totalIns, totalOuts}
}

const FinanceDetail = (props) => {
    let {financeDetails, totalIns, totalOuts} = processFinanceDetails(props.currentFinanceDetails, props.onClick)

    return (
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
    )
}

const mapStateToProps = (state) => {
    return {
        currentFinanceDetails: getSelectedFinanceDetails(state)
    }
}

export default connect(mapStateToProps)(FinanceDetail);