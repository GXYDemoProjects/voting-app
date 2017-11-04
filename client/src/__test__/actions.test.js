import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions/pollActions';
import * as types from '../actions/types';
import fetchMock from 'fetch-mock';
// import expect from 'expect' // You can use any testing library
import mockPolls from '../data/mockPolls';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  
  it('creates FETCH_ALLPOLLS_SUCCESS when fetching allpolls has been done', () => {
    fetchMock
      .getOnce('/allpolls', { body: {polls: mockPolls}, headers: { 'content-type': 'application/json' } })


    const expectedActions = [
      { type: types.UPDATE_POLLS, payload: mockPolls },
    ];
    const store = mockStore({ polls: [] });

    return store.dispatch(actions.fetchAllPolls()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})