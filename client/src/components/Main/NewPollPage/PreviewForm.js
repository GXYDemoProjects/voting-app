import React from 'react';
import { connect } from 'react-redux';

const PreviewForm = ({ values }) => {
  const renderRadios = values => {
    if(!values || !values.candidates) {return null;}
    return (
      <div>
        <p>Options</p>
        <form action="#">
          {values.candidates.map((candidate, index) => (
            <div key={index}>
              <input className="with-gap" name="group" type="radio" id={`candidate${index}`} />
              <label htmlFor={`candidate${index}`}>{candidate}</label>
            </div>
          ))}
        </form>
      </div>
    );
  };
  return (
    <div>
      <h4>Preview Your Poll</h4>
      {values &&
        <div className="preview">
          {values && values.title && <h5>Title: {values.title}</h5> }
          {values && values.description && <p>Description: {values.description}</p>}
          {renderRadios(values)}
        </div>
      }

    </div>
  )
};

const mapStateToProps = state => ({
  values: state.form.newPollForm.values
})

export default connect(mapStateToProps, null)(PreviewForm);
