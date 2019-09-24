import React from 'react';

const CheckBoxInput = ({ label = "Checkbox label" }) => (
  <div>
    <label>{label}</label>
    <input type="checkbox" />
  </div>
)

export default CheckBoxInput;