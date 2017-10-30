const user = (state = {}, action) => {
  switch(action.type) {
    case 'LOGOUT':
      return {...state, login: false};
    case 'LOGIN': 
      return {...state, login: true};
    case 'REGISTER':
      return {...state, login: true};
    default:
      return state;
  }
};

export default user;