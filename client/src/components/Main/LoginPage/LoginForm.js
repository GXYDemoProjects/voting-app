import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AuthField from './AuthField';

const formFields = [
  { label: 'Email', name: 'loginEmail', type:'text', icon: 'email' },
  { label: 'Password', name: 'loginPassword', type:'password', icon: 'lock' },
];


const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return ( 
    <div className="form">
      <h5 style={{marginTop: '50px'}}>Sign in to Your Account</h5>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{marginTop: '40px'}}>
          {
            formFields.map(({ label, name, type, icon }) => 
              (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
            )
          }
        </div>

        <button className="btn waves-effect waves-light" type="submit" name="action"  disabled={pristine || submitting}>
          Login
          <i className="material-icons right">send</i>
        </button>
      </form>

      <p style={{marginTop: '20px'}}>
        Don't have an account?<span> </span> 
        <Link to="/register">
          Create an account
        </Link>
      </p>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!re.test(values.loginEmail)) {
    errors.loginEmail = 'You must provide a valid email';
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
  form: 'loginForm',
  destroyOnUnmount: false
})(LoginForm);