import axios from "../../helpers/AxiosHelper";
import {handleErrorMessages, handleSuccessMessages} from "../../helpers/AxiosCallbacks";
import {showSpinner, hideSpinner} from "./SpinnerAC";

import {authActions} from "../actions/Actions";

const onLoginSuccess = (token) => {
  return {
    type: authActions.LOGIN_SUCCESS,
    token: token
  }
}

const onLoginFailure = (err) => {
  return {
    type: authActions.LOGIN_FAILED
  }
}

export const login = (user) => {

  return dispatch => {
    showSpinner(dispatch);
    axios.post('/auth', user)
      .then(response => {
        hideSpinner(dispatch);
        dispatch(onLoginSuccess(response.data.token))
      })
      .catch((err) => {
        hideSpinner(dispatch);
        handleErrorMessages(err);

        dispatch(onLoginFailure(err))
      });
  }
}


const onRegistration = () => {
  return {
    type: authActions.REGISTRATION
  }
}

export const registerUser = (user) => {
  return dispatch => {
    showSpinner(dispatch)
    axios.post('/user', user)
      .then(response => {
        hideSpinner(dispatch);
        handleSuccessMessages(response);
        dispatch(onRegistration(response))
      })
      .catch((err) => {
        hideSpinner(dispatch)
        handleErrorMessages(err)
      });
  }
}
