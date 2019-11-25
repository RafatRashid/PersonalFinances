import {applyMiddleware, combineReducers, createStore} from "redux";
import ReduxThunk from "redux-thunk";

import auth from "./reducers/AuthReducer";
import financeReducer from "./reducers/Finance";

const combinedReducer = {
  auth: auth,
  finance: financeReducer
}

const logger = store => next => action => {
  console.log('%c ____________________________________________', 'background: #222; color: #bada55')
  console.log('dispatching action: ', action)
  next(action)
  console.log('changed store: ')
  console.log(store.getState())
  console.log('ending dispatching action: ', action)
  console.log('%c ____________________________________________', 'background: #222; color: #bada55')
}

const store = createStore(combineReducers(combinedReducer), applyMiddleware(ReduxThunk, logger));
export default store