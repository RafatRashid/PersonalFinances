import React from 'react';
import './Input.css';

const TextInput = (props) => {
  let type = props.isPassword ? 'password' : 'text';
  let onChange = props.onChange ? props.onChange : console.log;

  return (
    <div className='control-div'>
      <label className='control-label'>{props.label}</label>

      <input type={type} name={props.name} placeholder={props.placeholder}
             className='control-input' value={props.value}
             onChange={(ev) => onChange(ev)}
             autoComplete="false"/>
    </div>
  );
}

TextInput.defaultProps = {
  label: 'Text input',
  placeholder: 'placeholder',
  name: 'myText',
  value: ''
}

export default TextInput;