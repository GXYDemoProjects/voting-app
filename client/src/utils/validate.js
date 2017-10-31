const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'You must provide a value';
  }
  if (!values.description) {
    errors.description = 'You must provide a value';
  }
  if (!values.candidates || !values.candidates.length) {
    errors.candidates = { _error: 'At least one candidate must be entered' };
  } else {
    const candidatesArrayErrors = [];
    values.candidates.forEach((candidate, candidateIndex) => {
      if (!candidate) {
        candidatesArrayErrors[candidateIndex] = 'You must provide a value';
      }
    });
    if (candidatesArrayErrors.length) {
      errors.candidates = candidatesArrayErrors;
    }
  }
  return errors;
};

export default validate;