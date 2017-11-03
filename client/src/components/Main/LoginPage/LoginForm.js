import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import AuthField from './AuthField';
import Error from './Error';
import * as authActions from '../../../actions/authActions';
import * as errorActions from '../../../actions/errorActions';
import { connect } from 'react-redux';

const formFields = [
  { label: 'Email', name: 'email', type:'text', icon: 'email' },
  { label: 'Password', name: 'password', type:'password', icon: 'lock' },
];


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.authentication) {
      this.props.history.push('/mypolls');
    }
  }
  componentWillUnmount() {
    this.props.removeErrors();
  }
  signIn() {
    const { email, password } = this.props.values;
    this.props.signinUser(email, password);
  }
  render() {
    const { handleSubmit, pristine, submitting, authError } = this.props;
    return (
      <div className="form">
        <h5 style={{marginTop: '50px'}}>Sign in to Your Account</h5>
        <form onSubmit={handleSubmit(this.signIn)}>
          <div className="container" style={{marginTop: '40px'}}>
            {
              formFields.map(({ label, name, type, icon }) => 
                (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
              )
            }
          </div>
          <Error error={authError} className="auth-error" />
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
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

const mapStateToProps = state => ({
  authentication: state.user.authentication,
  authError: state.errors.authError,
  values: state.form.loginForm.values
});

const actions = {...authActions, ...errorActions};

const LoginFormContainer =  withRouter(connect(mapStateToProps, actions)(LoginForm));

export default reduxForm({
  validate,
  form: 'loginForm',
})(LoginFormContainer);
