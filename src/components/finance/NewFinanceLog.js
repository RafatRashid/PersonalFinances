import React from 'react';
import SelectInput from '../input-controls/SelectInput';
import { monthsDropDown, months } from '../../helpers/Utilities';

const yearDropDown = () => {
  let currentYear = new Date().getFullYear()
  return [
    { text: currentYear, value: currentYear },
    { text: currentYear - 1, value: currentYear - 1 }
  ]
}

const NewFinanceLog = ({visible, closeForm, changeHandler, onSave, newFinance}) => {
  return (
    <div hidden={!visible}>
      <form>
        <div className='new-log-form'>
          <div className='row'>
            <div className='col-md-10'>
              <label className='new-log-form-label'>New log form</label>
            </div>

            <div className='col-md-2 text-right' onClick={() => closeForm()}>
              <i id='icon-close' className='fas fa-times-circle'></i>
            </div>
          </div>

          <div className='row'>

            <div className='col-md-6 form-group'>
              <SelectInput
                label='Month'
                name='month'
                options={monthsDropDown()}
                onChange={changeHandler}
                selected={newFinance.month}
              />
            </div>

            <div className='col-md-6 form-group'>
              <SelectInput
                label='Year'
                name='year'
                options={yearDropDown()}
                onChange={changeHandler}
                selected={newFinance.year}
              />
            </div>

          </div>

          <div className='row'>
            <div className='col-md-12 text-right'>
              <button onClick={ev => onSave(ev)} className='btn btn-primary btn-sm'>Save</button>
            </div>
          </div>

          <br />
        </div>
      </form>
    </div>
  )
}

export default NewFinanceLog;