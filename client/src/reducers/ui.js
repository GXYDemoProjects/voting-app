import * as actions from '../actions/types';
import * as Constants from '../constants';

// state = {
//   dropdownVisibility,
//   sidebarVisibility,
//   currentIndex,
//   activeLink,
//   modalVisibility
// }

const initialUI = {
    sidebarVisibility: false,
    dropdownVisibility: false,
    currentIndex: Constants.OneLoadNums,
    modalVisibility: false,
    activeLink: ''
};

const ui = (state = initialUI, action) => {
  switch(action.type) {
    case actions.TOGGLE_DROPDOWN:
      console.log('toggle dropdown');
      return {...state, dropdownVisibility: action.status};
    case actions.TOGGLE_SIDE:
      console.log('toggle side');
      return {...state, sidebarVisibility: action.status};
    case actions.LOAD_MORE:
      return {...state, currentIndex: state.currentIndex + Constants.OneLoadNums};
    case actions.UNAUTH_USER: 
      return {...state, dropdownVisibility: false}
    case actions.TOGGLE_MODAL:
      return {...state, modalVisibility: action.status}
    default:
      return state;
  }
};

export default ui;