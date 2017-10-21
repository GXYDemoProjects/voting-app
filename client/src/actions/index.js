export const toggleSideVisibility = (status) => ({
  type: 'TOGGLE_SIDE',
  status,
});

export const toggleDropdownVisibility = (status) => ({
  type: 'TOGGLE_DROPDOWN',
  status,
});

export const loadMore  = () => ({
  type: 'LOAD_MORE',
})