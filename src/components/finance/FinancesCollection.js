import React from 'react'
import { connect } from 'react-redux'

import * as FinanceAc from '../../stores/action-creators/Finance'
import { getFinances, getSelectedFinanceId } from '../../stores/reducers/Finance'
import './Finance.css'
import FinanceCard from './FinanceCard'
import NewFinanceLog from './NewFinanceLog'
import {months} from '../../helpers/Utilities';

const defaultLogFormModel = {
  month: months[new Date().getMonth()],
  year: new Date().getFullYear()
}
class FinancesCollection extends React.Component {
  state = {
    showNewLogForm: false,
    newLogFormModel: { ...defaultLogFormModel }
  }

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
        <h3>Monthly Finance Logs</h3>

        <NewFinanceLog
          visible={this.state.showNewLogForm}
          closeForm={this.closeFinanceForm}
          changeHandler={this.handleNewFinanceLogData}
          onSave={this.saveNewFinanceLog}
          newFinance={this.state.newLogFormModel}
        />

        <div className="finance-collection">
          {finances}
        </div>
      </div>
    )
  }

  // handler functions
  openFinanceDetail = (financeId, financeInfo) => {
    return this.props.history.push({
      pathname: '/finance/info',
      state: { financeId, financeInfo }
    })
  }

  createNewFinance = () => {
    this.setState({
      showNewLogForm: true
    })
  }

  closeFinanceForm = () => {
    this.setState({ showNewLogForm: false })
  }

  handleNewFinanceLogData = (ev) => {
    let name = ev.target.name
    let value = ev.target.value

    let formData = { ...this.state.newLogFormModel }
    formData[name] = value

    console.log(formData)
    this.setState({
      newLogFormModel: formData
    })
  }

  saveNewFinanceLog = (ev) => {
    ev.preventDefault()
    this.props.saveNewFinanceLog(this.state.newLogFormModel)
    this.setState({ showNewLogForm: false, newLogFormModel: { ...defaultLogFormModel } })
  }
}

const mapStateToProps = state => {
  return {
    finances: getFinances(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFinances: () => dispatch(FinanceAc.fetchAllFinances()),
    saveNewFinanceLog: newFinanceLog => dispatch(FinanceAc.saveNewFinance(newFinanceLog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancesCollection)