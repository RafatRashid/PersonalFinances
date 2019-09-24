import { erred, focused } from "./ControlColorModifiers";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkRequired = (validationRules, inputtedValue, controlValidState, validationMessage) => {
  if (validationRules.isRequired) {
    controlValidState = !(inputtedValue == null || inputtedValue === '');
    if (!controlValidState)
      validationMessage = 'Field must not be empty'
  }

  return [controlValidState, validationMessage];
}

const checkEmail = (validationRules, inputtedValue, controlValidState, validationMessage) => {
  if (validationRules.isEmail && validationMessage == null) {
    controlValidState = emailRegex.test(inputtedValue);
    if (!controlValidState)
      validationMessage = 'Email should be in mno@xyz.abc form'
  }

  return [controlValidState, validationMessage];
}

const checkMinMax = (validationRules, inputtedValue, controlValidState, validationMessage) => {
  if (validationMessage == null) {
    if (validationRules.min != null) {
      controlValidState = !(parseInt(inputtedValue) < validationRules.min);
      if (!controlValidState) {
        validationMessage = 'number must be greater than ' + validationRules.min;
      }
    }
    if (validationRules.max != null && validationMessage == null) {
      controlValidState = !(validationRules.max < parseInt(inputtedValue));
      if (!controlValidState) {
        validationMessage = 'number must be lesser than ' + validationRules.max;
      }
    }
  }

  return [controlValidState, validationMessage];
}

// const checkPositiveNegative = (validationRules, inputtedValue, controlValidState, validationMessage) => {
//   if (validationRules.positiveOnly && validationMessage == null) {
//     controlValidState = !(inputtedValue < 0);
//     if (!controlValidState)
//       validationMessage += 'enter only positive numbers';
//   }
//
//   if (validationRules.negativeOnly && validationMessage == null) {
//     controlValidState = !(inputtedValue > 0);
//     if (!controlValidState)
//       validationMessage += 'enter only negative numbers';
//   }
//
//   return [controlValidState, validationMessage];
// }

export const validate = (name, isControlValid, validationRules, setControlState) => {
  let inputEl = document.getElementsByName(name)[0];

  let inputtedValue = inputEl.value;
  let validationMessage = null;
  let controlValidState = isControlValid;

  [controlValidState, validationMessage] = checkRequired(validationRules, inputtedValue, controlValidState, validationMessage);
  [controlValidState, validationMessage] = checkEmail(validationRules, inputtedValue, controlValidState, validationMessage);
  [controlValidState, validationMessage] = checkMinMax(validationRules, inputtedValue, controlValidState, validationMessage);

  if (!controlValidState) {
    erred(inputEl);
  } else {
    validationMessage = null;
    focused(inputEl);
  }

  if(setControlState)
    setControlState(name, inputtedValue, controlValidState, validationMessage);
}

export const validateAllControls = (formControls, controlChangeHandler) => {
  let allValid = true;
  Object.keys(formControls).forEach((key) => {
    let c = formControls[key];

    if (!c.isValid)
      validate(c.name, c.isValid, c.validationRules, controlChangeHandler)

    allValid = !c.isValid ? false : allValid;
  })

  return allValid;
}