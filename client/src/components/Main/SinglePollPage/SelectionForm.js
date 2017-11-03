import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Error from '../LoginPage/Error';
import { Field, reduxForm } from 'redux-form';

const SelectionForm = props => {
  const { handleSubmit, pristine, submitting, pollError, pollId, vote } = props;
  const { voteValue } = props.values;
  return (
    <div className="selection">
      <h5>{props.title}</h5> 
      <p>{props.description}</p>
      <form onSubmit={handleSubmit(()=>vote(pollId, voteValue))}>
        {props.data.map((candidate, index) => (
          <div key={index}>
            <Field component="input" type="radio" className="with-gap" value={candidate.item} name="voteValue" id={`candidate${index}`} />
            <label htmlFor={`candidate${index}`} >{candidate.item} </label>
          </div>
        ))}
        <Error error={pollError} />
        <button className="btn-selection btn waves-effect waves-light" disabled={submitting || pristine} type="submit" >
          Submit
        </button>
      </form>
    </div>
  )  
}

export default reduxForm({
  form: 'selectionForm', // a unique identifier for this form
})(SelectionForm)