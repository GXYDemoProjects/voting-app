import * as actions from './types';

export const removeErrors = () => {
  return dispatch => {
    dispatch({type: actions.CLEAR_ERROR});
  }
}