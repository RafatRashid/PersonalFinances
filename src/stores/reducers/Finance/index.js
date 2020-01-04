import { combineReducers } from 'redux';

import finances from './FinancesReducer'
import financeDetail from './FinanceDetailReducer'

let financeReducer = combineReducers({
  allFinances: finances,
  financeDetail: financeDetail
})

export default financeReducer;

export const getFinances = state => state.finance.allFinances
export const getSelectedFinanceDetails = state => state.finance.financeDetail
