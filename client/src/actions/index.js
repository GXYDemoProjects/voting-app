import * as actions from './types';

export const toggleSideVisibility = (status) => ({
  type: actions.TOGGLE_SIDE,
  status,
});

export const toggleDropdownVisibility = (status) => ({
  type: actions.TOGGLE_DROPDOWN,
  status,
});

export const loadMore  = () => ({
  type: actions.LOAD_MORE,
});

export const activeLink = (path) => ({
  type: actions.SWITCH_ACTIVE,
  path
});

export const authError = error => {
  return {
    type: actions.AUTH_ERROR,
    payload: error
  };
}