import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Main from './Main';
import '../styles/App.css';


class App extends React.Component {

  render() {    
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({
//   authentication: state.user.authentication
// }) 
export default App;
