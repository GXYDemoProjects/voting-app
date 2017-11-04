import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

const initState = {
  polls:
}

const store = createStore(reducer, initState, applyMiddleware(ReduxThunk));
export {store}; 