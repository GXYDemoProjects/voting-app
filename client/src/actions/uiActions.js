import * as actions from './types';

export const toggleSidebar = status => {
  return dispatch => dispatch({type: actions.TOGGLE_SIDE, status});
}
export const toggleDropdown = status => {
  return dispatch => dispatch({type: actions.TOGGLE_DROPDOWN, status});
};

export const loadMore  = () => {
  return dispatch => dispatch({type: actions.LOAD_MORE});
};


export const toggleModal = status => {
  return dispatch => dispatch({type: actions.TOGGLE_MODAL, status})
}
