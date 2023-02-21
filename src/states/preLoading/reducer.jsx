/* eslint-disable default-param-last */
import { ActionType } from './action';

const reducer = (preLoading = true, action) => {
  switch (action.type) {
    case ActionType.SET_PRELOADING:
      return action.payload;
    default:
      return preLoading;
  }
};

export default reducer;
