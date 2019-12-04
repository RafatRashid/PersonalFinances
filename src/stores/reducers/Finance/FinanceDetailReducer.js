import { financeActions } from '../../actions/Actions';

let currentFinanceDetail = {
  financeId: 0,
  financeDetails: []
}

const financeDetailReducer = (state = currentFinanceDetail, action) => {

  switch (action.type) {
    case financeActions.FETCH_FINANCE_DETAIL:
      return fetchFinanceDetail(state, action.payload)

    case financeActions.SET_FINANCE_ID:
      return setFinanceId(state, action.payload)

    case financeActions.FETCH_FINANCE_DETAIL:
      return fetchFinanceDetail(state, action.payload)

    default:
      return state
  }
}

const fetchFinanceDetail = (state, { financeDetails, financeId }) => {
  let nextState = {...state}
  nextState.financeDetails = financeDetails

  return nextState
}

const setFinanceId = (state, { financeId }) => {
  return {
    ...state,
    financeId
  }
}

const clearFinanceId = state => {
  return {
    ...state,
    financeId: 0
  }
}

export default financeDetailReducer;

