import * as actions from '../actions/types';
// currentPoll = {
//   currentUser,
//   pollId,
//   title,
//   description,
//   data,
//   deleteStatus,
//   newPollId
// }

const polls = (state = [], action) => {
  switch(action.type) {
    case actions.UPDATE_CURRENT: 
      return {...state, ...action.payload, newPollId: 0};
    case actions.DELETE_STATUS: 
      return {...state, deleteStatus: true}
    case actions.CLEAR_CURRENT: 
      return {};
    case actions.NEW_POLL:
      return {...state, newPollId: action.payload}
    case actions.UNAUTH_USER:
      return {...state, currentUser: false}
    default:
      return state;
  }
};

export default polls;