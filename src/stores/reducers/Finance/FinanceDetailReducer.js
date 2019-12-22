import {financeActions} from '../../actions/Actions';

let currentFinanceDetail = []

const financeDetailReducer = (state = currentFinanceDetail, action) => {

  switch (action.type) {
    case financeActions.FETCH_FINANCE_DETAIL:
    case financeActions.SAVED_FINANCE_DETAIL:
      return fetchFinanceDetail(state, action.payload)

    default:
      return state
  }
}

const fetchFinanceDetail = (state, {financeDetails}) => {
  let currentState = [...state]
  currentState = financeDetails
  return currentState
}

export default financeDetailReducer;

