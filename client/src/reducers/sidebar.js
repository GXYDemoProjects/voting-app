const sideBarVisibility = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SIDE':
      console.log('toggle side');
      return action.status;
    default:
      return state;
  }
};

export default sideBarVisibility;