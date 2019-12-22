import React from 'react';

const SelectInput = ({ label = "Drop down", name='select', options = [], selected='', onChange }) => {

  let optionJsx = options.map(op => {
      return (
        <option key={op.value} value={op.value}>{op.text}</option>
      )
    });

  return (
    <div className='form-group'>
      <label className='form-text'>{label}</label>
      <select
        className='form-control'
        name={name}
        defaultValue={selected}
        onChange={(ev) => onChange(ev)}
      >
        {optionJsx}
      </select>
    </div>
  )
}

export default SelectInput;