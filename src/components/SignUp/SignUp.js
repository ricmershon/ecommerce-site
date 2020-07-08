import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';

import './sign-up-styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = this.state;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {displayName})

      // this will clear the form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''  
      })
    } catch (error) {
      console.error(error)

    }
     
  }

  handleChange = (event) => {
    // this.setState({ [event.target.id]: event.target.value })
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={ this.handleSubmit }>
          <FormInput
            name='displayName'
            type='text'
            value={ displayName }
            handleChange={ this.handleChange }
            label='Display Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            value={ email }
            handleChange={ this.handleChange }
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={ password }
            handleChange={ this.handleChange }
            label='Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={ confirmPassword }
            handleChange={ this.handleChange }
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>sign up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;