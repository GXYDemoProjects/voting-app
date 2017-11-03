import * as actions from '../actions/types';

// polls: {
//   [{_id,title,description}]
// }

const polls = (state = [], action) => {
  switch(action.type) {
    case actions.UPDATE_POLLS: 
      return action.payload;
    case actions.CLEAR_POLLS:
      return {};
    default:
      return state;
  }
};

export default polls;