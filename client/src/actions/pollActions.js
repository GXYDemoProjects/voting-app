import * as actions from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000/api';

const _axios = axios.create({
  baseURL: `${ROOT_URL}`,
  timeout: 2000,
  headers: { authorization: localStorage.getItem('token') }
});

export const fetchAllPolls = () => {
  return dispatch => {
    _axios.get(`/allpolls`)
    .then(res => {
      dispatch({
        type: actions.UPDATE_POLLS,
        payload: res.data.polls
      });
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, error: err.response.data.error}));
  }
};

export const fetchMyPolls = () => {
  return dispatch => {
    axios.get(`/mypolls`)
    .then(res => {
      dispatch({
        type: actions.UPDATE_POLLS,
        payload: res.data.polls
      });
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, error: err.response.data.error}));
  }
};



export const fetchCurrentPoll = pollId => {
  return dispatch => {
    axios.get(`/polls/${pollId}`)
    .then(res => {
      dispatch({
        type: actions.UPDATE_CURRENT,
        payload: res.data
      });
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, error: err.response.data.error}));
  }
};

export const newPoll = (title, description, candidates) => {
  return dispatch => {
    axios.post('/newpoll')
    .then(res => {
      dispatch({type: actions.NEW_POLL, payload: res.data.pollId});
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, error: err.response.data.error}));
  }
}

export const vote = (pollId, voteValue) => {
  return dispatch => {
    axios.post(`/${pollId}/vote`, {voteValue})
    .then(response => {
      dispatch({ type:actions.UPDATE_CURRENT, 
        payload: response.data
      })
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, error: err.response.data.error}));
  };
};

export const deletePoll = pollId => {
  return dispatch => {
    axios.delete(`/pollId`)
    .then(res => {
      dispatch({type: actions.DELETE_STATUS})
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, error: err.response.data.error}));
  }
};

export const clearCurrent = () => {
  return dispatch => {
    dispatch({type: actions.CLEAR_CURRENT})
  }
};

export const clearPolls = () => {
  return dispatch => {
    dispatch({type: actions.CLEAR_POLLS})
  }
};