import {financeActions} from '../../actions/Actions';

let financesState = {}

const financesReducer = (state = financesState, action) => {

  switch(action.type) {
    case financeActions.FETCH_FINANCES:
    case financeActions.SAVED_NEW_FINANCE_LOG:
      return fetchAllFinances(state, action.payload)
    default:
      return state
  }
}

const fetchAllFinances = (state, {finances}) => {
  return finances
}

export default financesReducer;

