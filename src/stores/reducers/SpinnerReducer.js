const initialState = {
  showSpinner: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SPINNER":
      return showSpinner()
    case "HIDE_SPINNER":
      return hideSpinner()
    default:
      return state;
  }
}

const showSpinner = (state) => {
  let currentState = {
    ...state
  }
  currentState.showSpinner = true;
  return currentState;
}

const hideSpinner = (state) => {
  let currentState = {
    ...state
  }
  currentState.showSpinner = false;
  return currentState;
}

export default reducer;