import {combineReducers} from 'redux';

import finances from './FinancesReducer'
import financeDetails from './FinanceDetailReducer'

let financeReducer = combineReducers({
  allFinances: finances,
  financeDetails: financeDetails
})

export default financeReducer;

export const getFinances = state => state.finance.allFinances
export const getFinanceDetails = state => state.finance.financeDetails