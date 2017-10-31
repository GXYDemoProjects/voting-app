import * as actions from '../actions/types';
// state={
//   userName:string,
//   authentication: boolean,
//   error:string,
// }
const user = (state = {}, action) => {
  switch(action.type) {
    case actions.CLEAR_ERROR:
      return {...state, error: ''}
    case actions.AUTH_USER:
      return {
        userName:action.payload, 
        error: 'success', 
        authentication: true
      };
    case actions.UNAUTH_USER: 
      return {
         userName: '', 
         error: '', 
         authetication: false
      };
    case actions.AUTH_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default user;