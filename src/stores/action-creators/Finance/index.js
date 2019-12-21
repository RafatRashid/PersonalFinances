import axios from '../../../helpers/AxiosHelper';
import {financeActions} from "../../actions/Actions";

export const fetchAllFinances = () => dispatch => {
  return axios.get('/finances')
    .then(
      response => dispatch({
          type: financeActions.FETCH_FINANCES,
          payload: {...response.data}
        },
        error => {
          console.log(error)
        })
    )
}

export const setFinanceId = financeId => dispatch => {
  dispatch({
    type: financeActions.SET_FINANCE_ID,
    payload: {financeId}
  })
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
