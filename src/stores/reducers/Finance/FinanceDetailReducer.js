import {financeActions} from '../../actions/Actions';

let financeDetailState = {}

const financeDetailReducer = (state = financeDetailState, action) => {

  switch(action.type) {
    case financeActions.FETCH_FINANCE_DETAIL:
      return fetchFinanceDetail(state, action.payload)
    default:
      return state
  }
}

const fetchFinanceDetail = (state, {financeId, detail}) => {
  let financeDetailState = {...state}
  financeDetailState[financeId] = detail
  return financeDetailState
}

export default financeDetailReducer;

