import { ActionType } from './action';

const reducer = (theme = 'light', action = {}) => {
  switch (action.type) {
    case ActionType.CHANGE_THEME:
      return action.payload;
    default: return theme;
  }
};

export default reducer;
