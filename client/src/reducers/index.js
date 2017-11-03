import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import user from './user';
import polls from './polls';
import currentPoll from './currentPoll';
import ui from './ui'; 
import errors from './errors';

const App = combineReducers({ 
  ui, 
  user,
  polls,
  currentPoll,
  errors,
  form: reduxForm
});

export default App;
