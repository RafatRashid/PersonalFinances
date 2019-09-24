import React from 'react';
import TextInput from "../../input-controls/TextInput";
import {login} from "../../../stores/action-creators/AuthAC";
import {connect} from "react-redux";

import {validateAllControls} from "../../input-controls/control-helpers/CommonEventHandlers";
import {Redirect, withRouter} from "react-router";


class Login extends React.Component {
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
    if(this.props.loggedIn){
      return <Redirect to={'/'} />
    }
    else {
      return (
        <div className='row'>
          <div className='col-md-4 offset-md-4'>

            <form onSubmit={(ev) => this.login(ev)}>
              <TextInput
                className='col-md-12'
                label='User Name'
                placeholder='User name'
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
                placeholder='Password'
                name={this.state.password.name}
                value={this.state.password.value}
                isControlValid={this.state.password.isValid}
                validationMessage={this.state.password.validationMessage}
                validationRules={this.state.password.validationRules}
                setControlState={this.onControlValueChange}/>

              <button className='btn btn-primary'>Log in</button>
            </form>

          </div>
        </div>
      )
    }
  }

  login = (ev) => {
    ev.preventDefault();

    if (validateAllControls(this.state, this.onControlValueChange)) {
      this.props.logIn({username: this.state.username.value, password: this.state.password.value});
    }
  }

  // componentDidUpdate() {
  //   if(this.props.loggedIn)
  //     this.props.history.push('/');
  // }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authStore.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);