import * as actions from '../actions/types';

// errors = {
//   authError: '',
//   pollError: '',
// }

const errors = (state = {}, action) => {
  switch(action.type) {
    case actions.AUTH_ERROR:
      return {...state, authError: action.payload };
    case actions.POLL_ERROR:
      return {...state, pollError: action.payload};
    case actions.CLEAR_ERROR:
    case actions.UNAUTH_USER:
      return {authError: '', pollError: ''};
    default:
      return state;
  }
};

export default errors;