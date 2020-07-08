import React from 'react';

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import './sign-in-and-sign-up-styles.scss';

const SignInAndSignUp = (params) => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUp;