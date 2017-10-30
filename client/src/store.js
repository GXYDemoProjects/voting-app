import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import * as Constants from './constants';

const initState = {
  user: {
    authentication: true,
    userName: 'GuoXiaoyang',
    userId: '111',
  },
  ui: {
    sidebarVisibility: false,
    dropdownVisibility: false,
    currentIndex: Constants.OneLoadNums,
    activeLink: '/',
  },
  polls: [
    {
      pollId: 1, 
      userName: 'GuoXiaoyang', 
      userId: '111', 
      title: 'Leader Selection',
      description: '',
      data: [
        { item: 'Bob', number: 2 },
        { item: 'Judy', number: 5 },
        { item: 'Amy', number: 7 },
      ]
    },
    {
      pollId: 2, 
      userName: 'GuoJianzhu', 
      userId: '222', 
      title: 'hh Selection',
      description: 'Choose which you like',
      data: [
        { item: 'ad', number: 1 },
        { item: 'ew', number: 4 },
        { item: 'ghgj', number: 5 },
        { item: 'gas', number: 3 },
      ]
    },
    {
      pollId: 3, 
      userName: 'XiaoPan', 
      userId: '333', 
      title: 'asf Selection',
      description: 'adsaf',
      data: [
        { item: 'yu', number: 35 },
        { item: 'qw', number: 15 },
        { item: 'op', number: 17 },
      ]
    },
    {
      pollId: 4, 
      userName: 'GuoXiaoyang', 
      userId: '111', 
      title: 'erb Selection',
      description: 'Choose which you like adg adgah oiu lkj hg  bn tr po yg re wq sa yui jkl fttg gf jh lfg yte',
      data: [
        { item: 'uo', number: 12 },
        { item: 'ehjl', number: 50 },
        { item: 'qewi', number: 79 },
      ]
    },
    {
      pollId: 5, 
      userName: 'GuoXiaoyang', 
      userId: '444', 
      title: 'nk Selection',
      description: 'Choose which you like',
      data: [
        { item: 'asu', number: 22 },
        { item: 'nv', number: 51 },
        { item: 'aso', number: 17 },
        { item: 'asb', number: 36 },
      ]
    },
    {
      pollId: 6, 
      userName: 'XiaoPan', 
      userId: '333', 
      title: 'qwfh Selection',
      description: 'Choose which you like',
      data: [
        { item: 'Bob', number: 2 },
        { item: 'Judy', number: 5 },
        { item: 'Aas', number: 7 },
      ]
    },          
    {
      pollId: 7, 
      userName: 'GuoXiaoyang', 
      userId: '111', 
      title: 'iypds Selection',
      description: 'Choose which you like',
      data: [
        { item: 'agh', number: 22 },
        { item: 'Jas', number: 55 },
        { item: 'age', number: 47 },
        { item: 'oit', number: 47 },
      ]
    },
    {
      pollId: 8, 
      userName: 'GuoJianzhu', 
      userId: '222', 
      title: 'aher Selection',
      description: 'Choose which you like',
      data: [
        { item: 'Bob', number: 12 },
        { item: 'Judy', number: 5 },
        { item: 'Amy', number: 7 },
      ]
    },
    {
      pollId: 9, 
      userName: 'XiaoPan', 
      userId: '333', 
      title: 'ops Selection',
      description: 'Choose which you like',
      data: [
        { item: 'trj', number: 31 },
        { item: 'agh', number: 25 },
        { item: 'qet', number: 17 },
        { item: 'qwp', number: 4 },
        { item: 'qwp', number: 14 },
      ]
    },                  
  ],
  myPolls: [
    {
      pollId: 1, 
      userName: 'GuoXiaoyang', 
      userId: '111', 
      title: 'Leader Selection',
      description: '',
      data: [
        { item: 'Bob', number: 2 },
        { item: 'Judy', number: 5 },
        { item: 'Amy', number: 7 },
      ]
    },
    {
      pollId: 4, 
      userName: 'GuoXiaoyang', 
      userId: '111', 
      title: 'erb Selection',
      description: 'Choose which you like adg adgah oiu lkj hg  bn tr po yg re wq sa yui jkl fttg gf jh lfg yte',
      data: [
        { item: 'uo', number: 12 },
        { item: 'ehjl', number: 50 },
        { item: 'qewi', number: 79 },
      ]
    },
    {
      pollId: 7, 
      userName: 'GuoXiaoyang', 
      userId: '111', 
      title: 'iypds Selection',
      description: 'Choose which you like',
      data: [
        { item: 'agh', number: 22 },
        { item: 'Jas', number: 55 },
        { item: 'age', number: 47 },
        { item: 'oit', number: 47 },
      ]
    }
  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initState, composeEnhancers(applyMiddleware(ReduxThunk)));
export {store}; 