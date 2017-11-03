import * as actions from './types';

export const toggleSideBar = status => {
  return dispatch => dispatch({type: actions.TOGGLE_SIDE, status});
}
export const toggleDropdown = status => {
  return dispatch => dispatch({type: actions.TOGGLE_DROPDOWN, status});
};

export const loadMore  = () => {
  return dispatch => dispatch({type: actions.LOAD_MORE});
};

export const switchActive = payload => {
  return dispatch => dispatch({type: actions.SWITCH_ACTIVE, payload});
};

export const toggleModal = status => {
  return dispatch => dispatch({type: actions.TOGGLE_MODAL, status})
}
