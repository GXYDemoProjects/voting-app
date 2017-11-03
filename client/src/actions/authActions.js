import axios from 'axios';
import * as actions from './types';


const ROOT_URL = 'http://localhost:5000/api';

export const signinUser = (email, password) => {
  return dispatch => { 
    dispatch({type: actions.CLEAR_ERROR});
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        console.log('response.data:', response.data);
        dispatch({ type: actions.AUTH_USER, payload: response.data.userName });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
      })
      .catch(err => {
        // If request is bad...
        // - Show an error to the user
        dispatch({type:actions.AUTH_ERROR, payload:err.response})
      });
  }
};

export const signupUser = (userName, email, password) => {
  return dispatch => {
    dispatch({type: actions.CLEAR_ERROR});
    axios.post(`${ROOT_URL}/signup`, { userName, email, password })
      .then(response => {
        console.log('response.data:', response.data);
        dispatch({ type: actions.AUTH_USER, payload: response.data.userName });
        localStorage.setItem('token', response.data.token);
      })
      .catch(err => dispatch({ type:actions.AUTH_ERROR, payload:err.response.data.error }));
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
      axios.get(`${ROOT_URL}/auth`,{ headers: { authorization: localStorage.token }})
      .then(response => dispatch({type:actions.AUTH_USER, payload: response.data.userName}))
      .catch(err => console.log('token authentication error:', err.response.data.error));
    }
  }
};


