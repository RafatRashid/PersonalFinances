import {financeActions} from '../../actions/Actions';

let detailToEdit = {}
let currentFinanceDetail = []

const financeDetailReducer = (state = currentFinanceDetail, action) => {

  switch (action.type) {
    case financeActions.FETCH_FINANCE_DETAIL:
      return fetchFinanceDetail(state, action.payload)

    case financeActions.SAVED_FINANCE_DETAIL:
      return appendNewDetailToList(state, action.payload)

    case financeActions.EDITED_FINANCE_DETAIL:
      return replaceDetailToList(state, action.payload)

    default:
      return state
  }
}

const fetchFinanceDetail = (state, {financeDetails}) => {
  let currentState = [...state]
  currentState = financeDetails
  return currentState
}

const appendNewDetailToList = (state, {financeId, financeDetail}) => {
  let currentState = [...state]
  if (currentState.length > 0)
    currentState.push(financeDetail)
  else
    currentState = [financeDetail]

  return currentState
}

const replaceDetailToList = (state, {financeDetail}) => {
  let currentState = [...state]
  let detailIndex = currentState.findIndex(x => x.detailId == financeDetail.detailId)
  currentState[detailIndex] = financeDetail

  return currentState
}

export default financeDetailReducer;

