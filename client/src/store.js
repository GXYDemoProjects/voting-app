import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducer from './reducers';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
    return applyMiddleware(ReduxThunk);
  } else {
    return applyMiddleware(ReduxThunk, logger);
  }
}
const store = createStore(reducer, composeEnhancers(middleware()));
export {store}; 