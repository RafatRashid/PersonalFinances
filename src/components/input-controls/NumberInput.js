import React from 'react';

import './Input.css';
import { focused, blurred } from './control-helpers/ControlColorModifiers';
import { validate } from './control-helpers/CommonEventHandlers';

let touched = false;


const controlFocused = (name, isControlValid) => {
  if (isControlValid || !touched) {
    touched = true;
    focused(document.getElementsByName(name)[0]);
  }
}

const controlBlurred = (name, isControlValid) => {
  if (isControlValid) {
    blurred(document.getElementsByName(name)[0]);
  }
}

const NumberInput = (props) => {
  let validationMessage = '';
  if (props.validationMessage) {
    validationMessage =
      <label className='control-validation-message'>* {props.validationMessage}</label>
  }

  return (
    <div className={props.className} style={{ textAlign: 'left', marginTop: '8px', marginBottom: '10px' }}>
      <div className='control-div'>
        <label className='control-label'>{props.label}</label>

        <input type='number' name={props.name} placeholder={props.placeholder}
          className='control-input' defaultValue={props.value}
          onFocus={() => controlFocused(props.name, props.isControlValid)}
          onChange={() => validate(props.name, props.isControlValid, props.validationRules, props.setControlState)}
          onBlur={() => controlBlurred(props.name, props.isControlValid)} />
      </div>

      {validationMessage}
    </div>
  );
}


NumberInput.defaultProps = {
  label: "Number Input",
  placeholder: "placeholder"
}

export default NumberInput;


