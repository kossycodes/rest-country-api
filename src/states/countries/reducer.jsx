/* eslint-disable default-param-last */
import { ActionType } from './action';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ALL_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
