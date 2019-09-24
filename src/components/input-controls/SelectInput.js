import React from 'react';

const SelectInput = ({ label = "Drop down", options = [] }) => {

  let optionJsx = options.length === 0
    ? (<option value="">Select an option</option>)
    : options.map(op => {
      return (
        <option key={op.value} value={op.value}>{op.text}</option>
      )
    });

  return (
    <div>
      <label>{label}</label>
      <select>
        {optionJsx}
      </select>
    </div>
  )
}

export default SelectInput;