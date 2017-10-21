const dropdownVisibility = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_DROPDOWN':
      console.log('toggle dropdown');
      return action.status;
    default:
      return state;
  }
};

export default dropdownVisibility;