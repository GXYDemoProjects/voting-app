import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import AuthField from '../LoginPage/AuthField';
import Error from '../LoginPage/Error';
import validate from '../../../utils/validate';
import { connect } from 'react-redux';
import * as pollActions from '../../../actions/pollActions';
import * as errorActions from '../../../actions/errorActions';

const formFields = [
  { label: 'Title', name: 'title', type:'text', icon: 'loyalty' },
  { label: 'Description', name: 'description', type:'text', icon: 'description' },
];

const renderCandidates = ({ fields, meta: { error, submitFailed } }) => {
  return (
  <ul>
    <li>
    <a className="waves-effect waves-light btn" onClick={() => fields.push()}>
      Add Candidate
    </a>
    </li>
    {fields.map((candidate, index) => (
      <li key={index}>
        <a className="btn-floating waves-effect waves-light remove" onClick={() => fields.remove(index)} >
          <i className="material-icons">clear</i>
        </a>
        <Field component={AuthField} icon="create" type="text" 
        label={`Candidate${index+1}`} name={candidate} />
      </li>
    ))}
    {submitFailed && error && <div className="error red-text">{error}</div>}
  </ul>
)};


class NewPollForm extends React.Component {
  constructor(props) {
    super(props);
    this.newPoll = this.newPoll.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(!nextProps.authentication) {
      this.props.history.push(`/polls/${allpolls}`);
    }
    const newPollId = nextProps.newPollId; 
    if(newPollId) {
      this.props.history.push(`/polls/${newPollId}`);
    }

  }
  componentWillUnmount() {
    this.props.removeErrors();
    this.props.clearCurrent();
  }
  newPoll() {
    const { title, description, candidates } = this.props.values;
    this.props.newPoll(title, description, candidates);
  }
  render() {
    const { handleSubmit, submitting, error } = this.props;
    return (
      <form onSubmit={handleSubmit(this.newPoll)}>
        {
          formFields.map(({ label, name, type, icon }) => 
            (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
          )
        }

        <FieldArray name="candidates" component={renderCandidates} />
        <Error error={error} className="auth-error" />
        <button className="btn-save btn waves-effect waves-light" type="submit" disabled={submitting} >
          Save Poll
        </button>
      </form>
    )
  }
}
const mapStateToProps = state => ({
  newPollId: state.currentPoll.newPollId,
  error: state.authError,
  values: state.form.newPollForm.values,
  authentication: state.user.authentication
});

const actions = {...pollActions, ...errorActions};

const NewPollFormContainer =  withRouter(connect(mapStateToProps, actions)(NewPollForm));


export default reduxForm({
  form: 'newPollForm', // a unique identifier for this form
  validate
})(NewPollFormContainer)