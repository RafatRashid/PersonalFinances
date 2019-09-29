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
      return informLoginFailure(state)

    case authActions.REGISTRATION:
      return onRegistration(state)

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

let informLoginFailure = (state) => {
  return {
    ...state,
    isLoggedIn: false
  };
}

let onRegistration = (state) => {
  localStorage.removeItem('FinLogToken')

  return {
    ...state,
    isLoggedIn: false
  }
}

export default reducer;




