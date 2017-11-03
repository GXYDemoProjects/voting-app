import * as actions from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000/api';

const _axios = axios.create({
  baseURL: `${ROOT_URL}`,
  timeout: 2000
});

export const fetchAllPolls = () => {
  return dispatch => {
    _axios.get(`/allpolls`,
    {headers: { authorization: localStorage.getItem('token') }})
    .then(res => {
      dispatch({
        type: actions.UPDATE_POLLS,
        payload: res.data.polls
      });
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, payload: err.response.data.error}));
  }
};

export const fetchMyPolls = () => {
  return dispatch => {
    console.log('token:', localStorage.getItem('token'));
    _axios.get(`/mypolls`,
    {headers: { authorization: localStorage.getItem('token') }})
    .then(res => {
      dispatch({
        type: actions.UPDATE_POLLS,
        payload: res.data.polls
      });
    })
    .catch(err => {
      console.log('err:', err);
      dispatch({type: actions.POLL_ERROR, payload: err.response.data.error})
    });
  }
};



export const fetchCurrentPoll = pollId => {
  return dispatch => {
    _axios.get(`/polls/${pollId}`,
    {headers: { authorization: localStorage.getItem('token') }})
    .then(res => {
      console.log('res:', res);
      dispatch({
        type: actions.UPDATE_CURRENT,
        payload: res.data
      });
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, payload: err.response.data.error}));
  }
};

export const newPoll = (title, description, candidates) => {
  return dispatch => {
    title = title.trim();
    description = description.trim();
    candidates = candidates.map(candidate => candidate.trim());
    _axios.post('/newpoll', {title, description, candidates},
    {headers: { authorization: localStorage.getItem('token') }})
    .then(res => {
      dispatch({type: actions.NEW_POLL, payload: res.data.pollId});
    })
    .catch(err => dispatch({type: actions.POLL_ERROR, payload: err.response.data.error}));
  }
}

export const vote = (pollId, voteValue) => {
  return dispatch => {
    voteValue = voteValue.trim();
    _axios.post(`/polls/${pollId}/vote`, {voteValue},
    {headers: { authorization: localStorage.getItem('token') }})
    .then(response => {
      dispatch({ type:actions.UPDATE_CURRENT, 
        payload: response.data
      })
    })
    .catch(err => {
      console.log('err:', err.response);
      dispatch({type: actions.POLL_ERROR, payload: err.response.data.error})
    });
  };
};

export const deletePoll = pollId => {
  return dispatch => {
    _axios.delete(`/${pollId}`,
    {headers: { authorization: localStorage.getItem('token') }})
    .then(res => {
      dispatch({type: actions.DELETE_STATUS});
      dispatch({type: actions.TOGGLE_MODAL, status: false});
    })
    .catch(err => {
      console.log('err:', err);
      dispatch({type: actions.POLL_ERROR, payload: err.response.data.error});
    });
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