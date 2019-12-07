import { financeActions } from '../../actions/Actions';

let currentFinanceDetail = []

const financeDetailReducer = (state = currentFinanceDetail, action) => {

  switch (action.type) {
    case financeActions.FETCH_FINANCE_DETAIL:
      return fetchFinanceDetail(state, action.payload)

    default:
      return state
  }
}

const fetchFinanceDetail = (state, { financeDetails }) => {
  return [...financeDetails]
}

export default financeDetailReducer;

