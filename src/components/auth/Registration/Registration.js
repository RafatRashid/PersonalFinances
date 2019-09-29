import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import TextInput from "../../input-controls/TextInput";
import {registerUser} from "../../../stores/action-creators/AuthAC";
import {validateAllControls} from "../../input-controls/control-helpers/CommonEventHandlers";


class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        name: 'username',
        value: null,
        isValid: false,
        validationRules: {
          isRequired: true
        },
        validationMessage: null
      },
      password: {
        name: 'password',
        value: null,
        isValid: false,
        validationRules: {
          isRequired: true
        },
        validationMessage: null
      }
    }
  }

  onControlValueChange = (controlName, controlValue, controlIsValid, validationMessage) => {
    let updatedState = {...this.state};

    updatedState[controlName].value = controlValue;
    updatedState[controlName].isValid = controlIsValid;
    updatedState[controlName].validationMessage = validationMessage;

    this.setState(updatedState);
  };

  render() {
    return (
      <div className='row'>

        <div className='col-md-4 offset-md-4'>
          <h3>Registration</h3>
          <hr/>

          <form onSubmit={(ev) => this.register(ev)}>
            <TextInput
              className='col-md-12'
              label='New User Name'
              placeholder='Enter user name'
              name={this.state.username.name}
              value={this.state.username.value}
              isControlValid={this.state.username.isValid}
              validationMessage={this.state.username.validationMessage}
              validationRules={this.state.username.validationRules}
              setControlState={this.onControlValueChange}/>

            <TextInput
              isPassword={true}
              className='col-md-12'
              label='Password'
              placeholder='Enter a password'
              name={this.state.password.name}
              value={this.state.password.value}
              isControlValid={this.state.password.isValid}
              validationMessage={this.state.password.validationMessage}
              validationRules={this.state.password.validationRules}
              setControlState={this.onControlValueChange}/>

            <div className={"row"}>
              <div className={"col-md-12"}>
                <button className='btn btn-primary'>Register</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    )
  }

  register = (ev) => {
    ev.preventDefault();

    if (validateAllControls(this.state, this.onControlValueChange)) {
      this.props.registerUser({username: this.state.username.value, password: this.state.password.value});
      this.props.history.push('/');
    }
  }
}


const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user) => dispatch(registerUser(user))
  }
};

export default withRouter(connect(null, mapDispatchToProps)(Registration));