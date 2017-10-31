import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import user from './user';
import polls from './polls';
import myPolls from './myPolls';
import ui from './ui'; 

const App = combineReducers({ 
  ui, 
  user,
  polls,
  myPolls,
  form: reduxForm
});

export default App;
