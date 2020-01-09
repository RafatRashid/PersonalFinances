import React from 'react'
import {connect} from 'react-redux'
import {getSelectedFinanceDetails} from '../../stores/reducers/Finance'
import * as FinanceAc from '../../stores/action-creators/Finance'
import FinanceDetail from "./FinanceDetail";
import FinanceDetailEditor from "./FinanceDetailEditor";

const defaultDetail = {
  description: '',
  amount: 0,
  transactionType: '',
  date: ''
}

class FinanceInfo extends React.Component {
  state = {
    editorIsOpen: false,
    detailsColSize: 12,

    currentDetail: {...defaultDetail}
  }

  componentDidMount() {
    let {financeId} = this.props.location.state;
    this.props.fetchFinanceDetails(financeId)
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-11'>
              <h4>Finance Details</h4>
            </div>
            <div className='col-md-1'>
              <a onClick={() => this.openEditor()}>
                <i className='fa fa-plus-square' style={{marginTop: '5px', fontSize: '20px'}}></i>
              </a>
            </div>
          </div>

          <div className='row'>
            <div className={'col-md-' + this.state.detailsColSize}>
              <FinanceDetail
                onClick={this.getSelectedDetail}/>
            </div>

            <div className={'col-md-' + (12 - this.state.detailsColSize)} hidden={!this.state.editorIsOpen}>
              <FinanceDetailEditor
                currentDetail={this.state.currentDetail}
                saveHandler={this.saveDetail}
                closeHandler={this.closeEditor}
                changeHandler={this.changeHandler}
              />
            </div>
          </div>

        </div>
      </div>
    )
  }

  getSelectedDetail = detail => {
    this.openEditor(null, detail)
  }

  saveDetail = (ev) => {
    ev.preventDefault()
    this.props.saveFinanceDetail(this.props.location.state.financeId, this.state.currentDetail)
    this.closeEditor()
  }

  closeEditor = (ev) => {
    if (ev) ev.preventDefault()

    this.setState({
      detailsColSize: 12,
      editorIsOpen: false,
      currentDetail: {...defaultDetail}
    })
  }

  openEditor = (ev, detailToEdit) => {
    let state = {
      ...this.state,
      detailsColSize: 7,
      editorIsOpen: true
    }
    if (detailToEdit)
      state.currentDetail = detailToEdit

    this.setState(state)
  }

  changeHandler = (ev, date) => {
    let name = null
    let value = null

    if (date) {
      name = 'date'
      value = date.toISOString()
    } else {
      name = ev.target.name
      value = ev.target.value
    }

    let currentDetail = {...this.state.currentDetail}
    currentDetail[name] = value
    this.setState({
      currentDetail: currentDetail
    })
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFinanceDetails: financeId => dispatch(FinanceAc.fetchFinanceDetail(financeId)),
    saveFinanceDetail: (financeId, financeDetails) => dispatch(FinanceAc.saveFinanceDetail(financeId, financeDetails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceInfo)