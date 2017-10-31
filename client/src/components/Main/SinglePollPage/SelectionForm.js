import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SelectionForm = props => {
  const { handleSubmit, pristine, submitting} = props;
  return (
    <div className="selection">
      <h5>{props.title}</h5> 
      <p>{props.description}</p>
      <form onSubmit={handleSubmit(()=>console.log('test'))}>
        {props.data.map((candidate, index) => (
          <div key={index}>
            <Field component="input" type="radio" className="with-gap" value={candidate.item} name="selection" id={`candidate${index}`} />
            <label htmlFor={`candidate${index}`} >{candidate.item} </label>
          </div>
        ))}

        <button className="btn-selection btn waves-effect waves-light" disabled={submitting || pristine} type="submit" >
          Submit
        </button>
      </form>
    </div>
  )  
}

// const validate = (values) => {
//   const errors = {};
//   if (!values.selection) {
//     errors.selection = 'You must select at least one';
//   }

//   return errors;
// }

export default reduxForm({
  // validate,
  form: 'selectionForm', // a unique identifier for this form
})(SelectionForm)