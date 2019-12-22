import React from 'react'

import TextInput from "../input-controls/TextInput";
import NumberInput from "../input-controls/NumberInput";
import SelectInput from "../input-controls/SelectInput";
import DatePicker from "react-datepicker";

const selectOptions = [
  {value: 'in', text: 'in'},
  {value: 'out', text: 'out'},
]

const FinanceDetailEditor = ({currentDetail, changeHandler, saveHandler, closeHandler}) => {
  return (
    <div style={{padding: '0 5px'}}>
      <label><b>New Finance</b></label><br />
      <form>

        <TextInput
          label='Description'
          name='description'
          value={currentDetail.description}
          onChange={(ev) => changeHandler(ev)}
        />

        <NumberInput
          label='Amount'
          name='amount'
          value={currentDetail.amount}
          onChange={(ev) => changeHandler(ev)}
        />

        <SelectInput
          label='Transaction'
          name='transactionType'
          options={selectOptions}
          selected={currentDetail.transactionType}
          onChange={(ev) => changeHandler(ev)}
        />

        <DatePicker
          selected={currentDetail.date ? new Date(currentDetail.date) : ''}
          onChange={(date) => changeHandler(null, date)}
        />

        <div className='row' style={{marginTop: '10px'}}>
          <div className='col-md-12'>
            <button className='btn btn-sm btn-outline-success' onClick={saveHandler}>Save</button>
            &nbsp;
            <button className='btn btn-sm btn-outline-danger' onClick={closeHandler}>Close</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default FinanceDetailEditor