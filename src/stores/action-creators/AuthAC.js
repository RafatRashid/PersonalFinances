import {authActions} from "../actions/Actions";
import axios from "../../helpers/AxiosHelper";

const onLoginSuccess = (responseData) => {
  return {
    type: authActions.LOGIN_SUCCESS,
    token: responseData.token
  }
}

const onLoginFailure = (err) => {
  return {
    type: authActions.LOGIN_FAILED,
    failedMessage: err.response.data.message
  }
}

export const login = (user) => {

  return dispatch => {
    axios.post('/auth', user)
      .then(response => {
        dispatch(onLoginSuccess(response.data))
      })
      .catch((err) => {
        alert(err.response.data.responseMessage);
        dispatch(onLoginFailure(err))
      });
  }
}
