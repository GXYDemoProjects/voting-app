import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AuthField from '../LoginPage/AuthField';

const formFields = [
  { label: 'Email', name: 'registerEmail', type:'text', icon: 'email' },
  { label: 'name', name: 'registerName', type:'text', icon: 'account_circle' },
  { label: 'Password', name: 'registerPassword', type:'password', icon: 'lock' },
  { label: 'Confirm Password', name: 'registerConfirmPassword', type:'password', icon: 'lock' },
];


const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return ( 
    <div className="register-form">
      <h5>Create Your Account</h5>
      <form onSubmit={handleSubmit}>
        <div className="container">
          {
            formFields.map(({ label, name, type, icon }) => 
              (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
            )
          }
        </div>

        <button className="btn waves-effect waves-light" type="submit" name="action"  disabled={pristine || submitting}>
          Register
          <i className="material-icons right">send</i>
        </button>
      </form>

      <p style={{marginTop: '10px'}}>
        Already have an account?<span> </span> 
        <Link to="/login">
          Login to your account
        </Link>
      </p>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!re.test(values.registerEmail)) {
    errors.registerEmail = 'You must provide a valid email';
  }
  if(values.registerPassword && values.registerPassword.length < 7) {
    errors.registerPassword = 'Password should be longer than 6';
  }
  if(values.registerConfirmPassword !== values.registerPassword) {
    errors.registerConfirmPassword = 'Password do not match';
  }
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'registerForm',
  destroyOnUnmount: false
})(RegisterForm);