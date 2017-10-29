import { combineReducers } from 'redux';
import user from './user';
import polls from './polls';
import ui from './ui';

const App = combineReducers({
  ui,
  user,
  polls,
});

export default App;
