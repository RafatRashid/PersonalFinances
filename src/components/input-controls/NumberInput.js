import React from 'react';
import './Input.css';

const NumberInput = (props) => {
  let onChange = props.onChange ? props.onChange : console.log;
  return (
    <div className='control-div'>
      <label className='control-label'>{props.label}</label>

      <input type='number' name={props.name} placeholder={props.placeholder}
             className='control-input' value={props.value}
             onChange={(ev) => onChange(ev)}/>
    </div>
  );
}

NumberInput.defaultProps = {
  label: "Number Input",
  placeholder: "placeholder",
  name: 'Number',
  value: 0
}

export default NumberInput;
