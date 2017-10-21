
import * as Constants from '../constants';
const currentIndex = (state=Constants.OneLoadNums, action) => {
  switch(action.type) {
    case 'LOAD_MORE':
      return state + Constants.OneLoadNums;
    default: 
      return state;
  }
};

export default currentIndex;
