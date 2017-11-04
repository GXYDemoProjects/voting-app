import * as actions from './types';
import * as constants from '../constants';

const ROOT_URL = constants.ROOT_URL;
const getOpts = () => ({
  method: 'GET',
  headers: { authorization: localStorage.getItem('token') }
});
const postWithData = data => ({
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

export const signinUser = (email, password) => {
  return dispatch => { 
    email = email.trim();
    password = password.trim();
    dispatch({type: actions.CLEAR_ERROR});
    // Submit email/password to the server
    return fetch(`${ROOT_URL}/signin`, postWithData({ email, password }))
    .then(res => res.json())
    .then(res => {
      // If request is good...
      // - Update state to indicate user is authenticated
      if(res.error) {
        dispatch({ type:actions.AUTH_ERROR, payload:res.error });
      } else {
        localStorage.setItem('token', res.token);
        dispatch({ type: actions.AUTH_USER, payload: res.userName });
      }
      // - Save the JWT token
      // - redirect to the route '/feature'
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log('err:', err);
      // dispatch({type:actions.AUTH_ERROR, payload:'Your password or email may be wrong'})
    });
  }
};

export const signupUser = (userName, email, password) => {
  return dispatch => {
    userName = userName.trim();
    email = email.trim();
    password = password.trim();
    return fetch(`${ROOT_URL}/signup`, postWithData({ userName, email, password }))
    .then(res => res.json())
    .then(res => {
      console.log('res:', res);
      if(res.error) {
        dispatch({ type:actions.AUTH_ERROR, payload:res.error });
      } else {
        localStorage.setItem('token', res.token);
        dispatch({ type: actions.AUTH_USER, payload: res.userName });
      }
    })
    .catch(err => {
      console.log('err:', err);
      // dispatch({ type:actions.AUTH_ERROR, payload:err });
    });
  }
};


export const signoutUser = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: actions.UNAUTH_USER });
  }
};

export const fetchAuth = () => {
  return dispatch => {
    if(localStorage.token) {
      return fetch(`${ROOT_URL}/auth`, getOpts())
      .then(res => res.json())
      .then(res => {
        if(res.error) {
          dispatch({ type:actions.AUTH_ERROR, payload:res.error });
        } else {
          dispatch({ type: actions.AUTH_USER, payload: res.userName });
        }
      })
      .catch(err => {
        console.log('token authentication error:', err);
      });
    }
  }
};


