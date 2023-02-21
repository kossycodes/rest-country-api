/* eslint-disable default-param-last */
import { ActionType } from './action';

const filters = [
  { name: 'name', query: '' },
  { name: 'region', query: '' },
];

const reducer = (state = filters, action) => {
  if (action.type === ActionType.CHANGE_FILTER_QUERY) {
    const filtered = state.filter((filter) => filter.name !== action.payload.name);
    return [...filtered, action.payload];
  }
  return state;
};

export default reducer;
