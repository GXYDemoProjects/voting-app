import { combineReducers } from 'redux';
import sidebarVisibility from './sidebar';
import dropdownVisibility from './dropdown';
import currentIndex from './currentIndex';
import user from './user';
import polls from './polls';


const App = combineReducers({
  sidebarVisibility,
  dropdownVisibility,
  user,
  polls,
  currentIndex
});

export default App;
