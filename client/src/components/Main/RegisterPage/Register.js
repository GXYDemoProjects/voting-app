import React from 'react';
import AuthContainer from '../LoginPage/AuthContainer';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <AuthContainer>
      <RegisterForm />
    </AuthContainer>
  );
}

export default Register;