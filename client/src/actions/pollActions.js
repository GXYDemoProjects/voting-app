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
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token')
  },
  body: JSON.stringify(data)
});

const deleteOpts = () => ({
  method: 'DELETE',
  headers: { authorization: localStorage.getItem('token') }
});
export const fetchAllPolls = () => {
  return dispatch => {
    return fetch(`${ROOT_URL}/allpolls`, getOpts())
    .then(res => res.json())
    .then(res => {
      // console.log('res:', res);
      if(res.error) {
        dispatch({ type:actions.POLL_ERROR, payload:res.error });
      } else {
        dispatch({
          type: actions.UPDATE_POLLS,
          payload: res.polls
        });
      }
    })
    .catch(err => {
      console.log('err:', err);
    });
  }
};




export const fetchMyPolls = () => {
  return dispatch => {
    return fetch(`${ROOT_URL}/mypolls`, getOpts())
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        dispatch({ type:actions.POLL_ERROR, payload:res.error });
      } else {
        dispatch({
          type: actions.UPDATE_POLLS,
          payload: res.polls
        });
      }
    })
    .catch(err => {
      console.log('err:', err);
    });
  }
};



export const fetchCurrentPoll = pollId => {
  return dispatch => {
    return fetch(`${ROOT_URL}/polls/${pollId}`, getOpts())
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        dispatch({type: actions.POLL_ERROR, payload: res.error});
      } else {
        dispatch({
          type: actions.UPDATE_CURRENT,
          payload: res
        });
      }
    })
    .catch(err => {
      console.log('err:', err);
    });
  }
};

export const newPoll = (title, description, candidates) => {
  return dispatch => {
    title = title.trim();
    description = description.trim();
    candidates = candidates.map(candidate => candidate.trim());
    return fetch(`${ROOT_URL}/newpoll`, postWithData({title, description, candidates}))
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        dispatch({ type:actions.POLL_ERROR, payload:res.error });
      } else {
        dispatch({type: actions.NEW_POLL, payload: res.pollId});
      }
    })
    .catch(
      err => {
        console.log('err:', err);
      });
  }
}

export const vote = (pollId, voteValue) => {
  return dispatch => {
    voteValue = voteValue.trim();
    return fetch(`${ROOT_URL}/polls/${pollId}/vote`, postWithData({voteValue}))
    .then(res => res.json())
    .then(res => {
      // console.log('res:', res);
      if(res.error) {
        dispatch({ type:actions.POLL_ERROR, payload:res.error });
      } else {
        dispatch({ type:actions.UPDATE_CURRENT, payload: res});
      }
    })
    .catch(err => {
      console.log('err:', err);
    });
  };
};

export const deletePoll = pollId => {
  return dispatch => {
    return fetch(`${ROOT_URL}/${pollId}`, deleteOpts())
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        dispatch({ type:actions.POLL_ERROR, payload:res.error });
      } else {
        dispatch({type: actions.DELETE_STATUS});
        dispatch({type: actions.TOGGLE_MODAL, status: false});
      }
    })
    .catch(err => {
      console.log('err:', err);
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

