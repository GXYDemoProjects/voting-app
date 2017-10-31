import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import AuthField from '../LoginPage/AuthField';
import * as dispatchActions from '../../../actions/dispatchAction';

const formFields = [
  { label: 'Email', name: 'email', type:'text', icon: 'email' },
  { label: 'name', name: 'userName', type:'text', icon: 'account_circle' },
  { label: 'Password', name: 'password', type:'password', icon: 'lock' },
  { label: 'Confirm Password', name: 'confirmPassword', type:'password', icon: 'lock' },
];


let RegisterForm = props => {
  const { handleSubmit, signupUser, pristine, submitting, authError, values } = props;
  const signUp = () => {
    const { userName, email, password } = values;
    console.log('userName,email,password:', userName,email,password);
    signupUser(userName, email, password);
    if(authError === 'success') {
      props.history.push('/mypolls');
    }
  }
  return ( 
    <div className="register-form">
      <h5>Create Your Account</h5>
      <form onSubmit={handleSubmit(signUp)}>
        <div className="container">
          {
            formFields.map(({ label, name, type, icon }) => 
              (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
            )
          }
        </div>
        {
          authError &&       
          <div className="auth-error red-text">
          {authError}
          </div>
        }
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
  if(!re.test(values.email)) {
    errors.email = 'You must provide a valid email';
  }
  if(values.password && values.password.length < 7) {
    errors.password = 'Password should be longer than 6';
  }
  if(values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password do not match';
  }
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

const mapStateToProps = state => ({
  authError: state.user.error,
  values: state.form.registerForm.values
});

RegisterForm =  withRouter(connect(mapStateToProps, dispatchActions)(RegisterForm));


export default reduxForm({
  validate,
  form: 'registerForm',
})(RegisterForm);