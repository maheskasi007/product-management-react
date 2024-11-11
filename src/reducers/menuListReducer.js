const menuListReducer = (state = [], action) => {
  switch (action.type) {
    case 'LIST_MENU':
      return action.payload;

    default:
      return state;
  }
};
export default menuListReducer;
