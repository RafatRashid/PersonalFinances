import { authActions } from "../actions/Actions";

const initialState = {
  isLoggedIn: null,
  failedMessage: null
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case authActions.LOGIN_SUCCESS:
      return authenticateUser(state, action.token)

    case authActions.LOGIN_FAILED:
      return informLoginFailure(state, action.failedMessage)

    default:
      return state
  }
}


let authenticateUser = (state, token) => {
  localStorage.setItem('FinLogToken', token);
  return {
    ...state,
    isLoggedIn: true
  };
}

let informLoginFailure = (state, failedMessage) => {
  return {
    ...state,
    isLoggedIn: false,
    failedMessage: failedMessage
  };
}

export default reducer;




