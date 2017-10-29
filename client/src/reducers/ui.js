import * as Constants from '../constants';
const ui = (state = {}, action) => {
  switch(action.type) {
    case 'TOGGLE_DROPDOWN':
      console.log('toggle dropdown');
      return {...state, dropdownVisibility: action.status};
    case 'TOGGLE_SIDE':
      console.log('toggle side');
      return {...state, sidebarVisibility: action.status};
    case 'LOAD_MORE':
      return {...state, currentIndex: state.currentIndex + Constants.OneLoadNums};
    case 'SWITCH_ACTIVE':
      return {...state, activeLink: action.path}
    default:
      return state;
  }
};

export default ui;