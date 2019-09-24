import React from 'react';

import TextInput from '../input-controls/TextInput';
// import { validate } from '../input-controls/control-helpers/CommonEventHandlers';
import NumberInput from '../input-controls/NumberInput';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myText: {
        name: 'myText',
        value: 'Booyah',
        isValid: false,
        validationMessage: null,
        validationRules: {
          isRequired: true,
          isEmail: false
        }
      },
      myNumber: {
        name: 'myNumber',
        value: 253,
        isValid: false,
        validationMessage: null,
        validationRules: {
          isRequired: true,
          min: 0,
          max: 100
        }
      }
    }
  }

  getControlState = (controlName, controlValue, controlIsValid, validationMessage) => {
    let updatedState = { ...this.state };

    updatedState[controlName].value = controlValue;
    updatedState[controlName].isValid = controlIsValid;
    updatedState[controlName].validationMessage = validationMessage;

    this.setState(updatedState);
  }

  render() {
    return (
      <div className='row' style={{ textAlign: 'center', marginTop: '25px' }}>
        <div className='col-md-10 offset-md-1'>
          <form>
            <div className="row">
              <TextInput className='col-md-12'
                name={this.state.myText.name}
                validationRules={this.state.myText.validationRules}
                value={this.state.myText.value}
                isControlValid={this.state.myText.isValid}
                validationMessage={this.state.myText.validationMessage}
                setControlState={this.getControlState} />

              <NumberInput className='col-md-12'
                name={this.state.myNumber.name}
                validationRules={this.state.myNumber.validationRules}
                value={this.state.myNumber.value}
                isControlValid={this.state.myNumber.isValid}
                validationMessage={this.state.myNumber.validationMessage}
                setControlState={this.getControlState} />
            </div>

            <button onClick={this.submitForm} className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    )
  }

  submitForm = (ev) => {
    ev.preventDefault();

    // validateAllControls()

    console.log('saving: ', this.state);
  }
}

export default Test;