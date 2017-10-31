import axios from 'axios';
import * as actions from './types';
import * as actionCreators from './index';
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
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(actionCreators.authError('Wrong password or email'));
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
      .catch(response => dispatch(actionCreators.authError(response.data.error)));
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
  }
};

export const fetchMyPolls = () => {
  return dispatch => {
    dispatch({type: actions.CLEAR_ERROR});
    axios.get(`ROOT_URL/mypolls`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: actions.FETCH_MYPOLLS,
          payload: response.data.polls
        });
      });
  }
};

export const fetchAllPolls = () => {
  return dispatch => {
    dispatch({type: actions.CLEAR_ERROR});
    axios.get(`ROOT_URL/allpolls`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: actions.FETCH_ALLPOLLS,
          payload: response.data.polls
        });
      });
  }
};

export const fetchCurrentPoll = pollId => {
  return dispatch => {
    axios.get(`ROOT_URL/${pollId}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: actions.FETCH_ALLPOLLS,
          payload: response.data.polls
        });
      });
  }
};

export const vote = (pollId, value) => {
  return dispatch => {
    axios.get(`ROOT_URL/${pollId}/vote/${value}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        fetchCurrentPoll(pollId);
      });
  };
};
