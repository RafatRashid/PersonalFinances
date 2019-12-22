import React from 'react'
import {connect} from 'react-redux'
import {getSelectedFinanceDetails} from '../../stores/reducers/Finance'
import * as FinanceAc from '../../stores/action-creators/Finance'
import FinanceDetail from "./FinanceDetail";
import FinanceDetailEditor from "./FinanceDetailEditor";

class FinanceInfo extends React.Component {
  state = {
    editorIsOpen: true,
    detailsColSize: 7,

    currentDetail: {
      description: '',
      amount: 0,
      transactionType: '',
      date: ''
    }
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
              <a onClick={this.openEditor}>
                <i className='fa fa-plus-square' style={{marginTop: '5px', fontSize: '20px'}}></i>
              </a>
            </div>
          </div>

          <div className='row'>
            <div className={'col-md-' + this.state.detailsColSize}>
              <FinanceDetail/>
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

  saveDetail = (ev) => {
    ev.preventDefault()
    this.props.saveFinanceDetail(this.props.location.state.financeId, this.state.currentDetail)
  }

  closeEditor = (ev) => {
    ev.preventDefault()

    this.setState({
      detailsColSize: 12,
      editorIsOpen: false
    })
  }

  openEditor = () => {
    this.setState({
      detailsColSize: 7,
      editorIsOpen: true
    })
  }

  changeHandler = (ev, date) => {
    let name = null
    let value = null
    
    if(date) {
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