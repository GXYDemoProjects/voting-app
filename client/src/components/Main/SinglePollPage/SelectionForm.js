import React from 'react';
import Error from '../LoginPage/Error';
import { Field, reduxForm } from 'redux-form';

class SelectionForm extends React.Component {

render() {

  const { handleSubmit, pristine, submitting, pollError, pollId, vote, poll, voteValue } = this.props;
  return (
    <div className="selection">
      <h5>{poll.title}</h5> 
      <p>{poll.description}</p>
      {/* vote(pollId, props.values.voteValue) */}
        <form onSubmit={handleSubmit(()=>vote(pollId, voteValue))}>
          {poll.data.map((candidate, index) => (
            <div key={index}>
              <Field component="input" type="radio" className="with-gap" value={candidate.respond} name="voteValue" id={`candidate${index}`} />
              <label htmlFor={`candidate${index}`} >{candidate.respond} </label>
            </div>
          ))}
          <Error className="poll-error" error={pollError} />
          <button className="btn-selection btn waves-effect waves-light" disabled={submitting || pristine} type="submit" >
            Vote
          </button>
        </form>
      </div>
    );
  }  
}
export default reduxForm({
  form: 'selectionForm', // a unique identifier for this form
})(SelectionForm);