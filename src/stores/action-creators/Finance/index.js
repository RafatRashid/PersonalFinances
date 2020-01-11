import axios from '../../../helpers/AxiosHelper';
import { financeActions } from "../../actions/Actions";
import { handleSuccessMessages, handleErrorMessages } from '../../../helpers/AxiosCallbacks';
import { toast } from 'react-toastify';

export const fetchAllFinances = () => dispatch => {
  return axios.get('/finances')
    .then(
      response => dispatch({
        type: financeActions.FETCH_FINANCES,
        payload: { ...response.data }
      },
        error => {
          console.log(error)
        })
    )
}

export const fetchFinanceDetail = financeId => dispatch => {
  return axios.get('/finance?financeId=' + financeId)
    .then(
      response => dispatch({
        type: financeActions.FETCH_FINANCE_DETAIL,
        payload: response.data
      },
        error => {
          console.log(error)
        })
    )
}

export const saveFinanceDetail = (financeId, financeDetail) => dispatch => {
  console.log(financeDetail.detailId)
  return financeDetail.detailId == null
    ? postFinanceDetail(financeId, financeDetail, dispatch)
    : putFinanceDetail(financeId, financeDetail, dispatch)
}

const postFinanceDetail = (financeId, financeDetail, dispatch) => {
  return axios.post('/finance', { financeId, financeDetail })
    .then(
      response => {
        handleSuccessMessages(response)
        dispatch({
          type: financeActions.SAVED_FINANCE_DETAIL,
          payload: response.data
        })
      },
      error => {
        handleErrorMessages(error)
        console.log(error)
      }
    )
}

const putFinanceDetail = (financeId, financeDetail, dispatch) => {
  return axios.put('/finance', { financeId, financeDetail })
    .then(
      response => {
        handleSuccessMessages(response)
        dispatch({
          type: financeActions.EDITED_FINANCE_DETAIL,
          payload: response.data
        })
      },
      error => {
        handleErrorMessages(error)
        console.log(error)
      }
    )
}

export const saveNewFinance = newFinanceLog => dispatch => {
  return axios.post('/finance/newLog', newFinanceLog)
    .then(
      response => {
        handleSuccessMessages(response)
        dispatch({
          type: financeActions.SAVED_NEW_FINANCE_LOG,
          payload: { ...response.data }
        })
      },
      error => handleErrorMessages(error)
    );
}