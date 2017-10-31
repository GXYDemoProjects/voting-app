import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import AuthField from '../LoginPage/AuthField';
import validate from '../../../utils/validate';

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
    {submitFailed && error && <span className="error red-text">{error}</span>}
  </ul>
)};


const NewPollForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(() => {console.log(true)})}>
      {
        formFields.map(({ label, name, type, icon }) => 
          (<Field key={name} component={AuthField} icon={icon} type={type} label={label} name={name} />)
        )
      }

      <FieldArray name="candidates" component={renderCandidates} />
      <button className="btn-save btn waves-effect waves-light" type="submit" disabled={submitting} >
        Save Poll
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'newPollForm', // a unique identifier for this form
  validate
})(NewPollForm)