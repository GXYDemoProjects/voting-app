const validateRepetion = candidates => {
  const removeEmptyCandidates = [];
  candidates.forEach(candidate => {
    if(candidate) {
      removeEmptyCandidates.push(candidate.trim());
    }
  });
  console.log('removeEmptyCandidates:', removeEmptyCandidates);
  if(removeEmptyCandidates.length === 0) {
    return false;
  }
  const test = {};
  for(let candidate of removeEmptyCandidates) {
    if(test[candidate]) {
      return true;
    }
    test[candidate] = 1;
  }

  return false;
}

const validate = values => {
  const errors = {};
  if (!values.title || !values.title.trim()) {
    errors.title = 'You must provide a value';
  }
  if (!values.description || !values.description.trim()) {
    errors.description = 'You must provide a value';
  }
  if (!values.candidates || !values.candidates.length) {
    errors.candidates = { _error: 'At least one candidate must be entered' };
  } else if(validateRepetion(values.candidates)) {
    errors.candidates = { _error: 'Candidates should not repeat' };
  } else {
    const candidatesArrayErrors = [];
    values.candidates.forEach((candidate, candidateIndex) => {
      if (!candidate || !candidate.trim()) {
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