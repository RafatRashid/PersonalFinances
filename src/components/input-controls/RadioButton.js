import React from 'react';

import './Input.css';

const RadioButton = (props) => {
  let validationMessage = '';
  if (props.validationMessage) {
    validationMessage =
      <label className='control-validation-message'>* {props.validationMessage}</label>
  }

  return (
    <div className={props.className} style={{ textAlign: 'left', marginTop: '8px', marginBottom: '10px' }}>
      <div className='control-div'>
        <label className='control-label'>{props.label}</label>

        <input type='radio' name={props.name} placeholder={props.placeholder}
          className='control-input' defaultValue={props.value}
          onChange={() => setRadioCheck(props.name, props.isChecked, props.setControlState)} />
      </div>

      {validationMessage}
    </div>
  );
}


RadioButton.defaultProps = {
  label: 'Radio input',
  name: 'myRadio',

  isChecked: ''
}


export default RadioButton;