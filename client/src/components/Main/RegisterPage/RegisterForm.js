import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthField from '../LoginPage/AuthField';
import Error from '../LoginPage/Error';
import * as authActions from '../../../actions/authActions';
import * as errorActions from '../../../actions/errorActions';

const formFields = [
  { label: 'Email', name: 'email', type:'text', icon: 'email' },
  { label: 'name', name: 'userName', type:'text', icon: 'account_circle' },
  { label: 'Password', name: 'password', type:'password', icon: 'lock' },
  { label: 'Confirm Password', name: 'confirmPassword', type:'password', icon: 'lock' },
];


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }
  componentWillReceiveProps() {
    if(this.props.authentication) {
      this.props.history.push('/mypolls');
    }
  }
  componentWillUnmount() {
    this.props.removeErrors();
  }
  signUp() {
    const { userName, email, password } = this.props.values;
    console.log('userName,email,password:', userName,email,password);
    this.props.signupUser(userName, email, password);
  }
  render () {
    const { handleSubmit, pristine, submitting, authError} = this.props;
    return ( 
      <div className="register-form">
        <h5>Create Your Account</h5>
        <form onSubmit={handleSubmit(this.signUp)}>
          <div className="container">
            {
              formFields.map(({ label, name, type, icon }) => 
                (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
              )
            }
          </div>
          <Error error={authError} />
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
  }
}

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
  authError: state.errors.authError,
  values: state.form.registerForm.values
});

const actions = {...authActions, ...errorActions};
const RegisterFormContainer =  withRouter(connect(mapStateToProps, actions)(RegisterForm));


export default reduxForm({
  validate,
  form: 'registerForm',
})(RegisterFormContainer);