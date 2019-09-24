import React from 'react';

import './Input.css';
import {focused, blurred} from './control-helpers/ControlColorModifiers';
import {validate} from './control-helpers/CommonEventHandlers';


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

const TextInput = (props) => {
  let validationMessage = '';
  if (props.validationMessage) {
    validationMessage =
      <label className='control-validation-message'>* {props.validationMessage}</label>
  }

  let type = props.isPassword ? 'password' : 'text';

  return (
    <div className={props.className} style={{textAlign: 'left', marginTop: '15px', marginBottom: '15px'}}>
      <div className='control-div'>
        <label className='control-label'>{props.label}</label>

        <input type={type} name={props.name} placeholder={props.placeholder}
               className='control-input' defaultValue={props.value}
               onFocus={() => controlFocused(props.name, props.isControlValid)}
               onChange={() => validate(props.name, props.isControlValid, props.validationRules, props.setControlState)}
               onBlur={() => controlBlurred(props.name, props.isControlValid)}
               autoComplete="false"/>
      </div>

      {validationMessage}
    </div>
  );
}


TextInput.defaultProps = {
  label: 'Text input',
  placeholder: 'placeholder',
  name: 'myText',

  value: '',
  isControlValid: false,
  validationMessage: ''
}


export default TextInput;