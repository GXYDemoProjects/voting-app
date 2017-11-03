import * as actions from '../actions/types';
// state={
//   userName:string,
//   authentication: boolean,
//   error:string,
// }
const user = (state = {}, action) => {
  switch(action.type) {
    case actions.AUTH_USER:
      return {
        userName:action.payload, 
        authentication: true
      };
    case actions.UNAUTH_USER: 
      return {
         userName: '', 
         authetication: false
      };
    default:
      return state;
  }
};

export default user;