export const ActionType = {
  CHANGE_FILTER_QUERY: 'CHANGE_FILTER_QUERY',
};

export const receiveFilterQueryActionCreator = (name, query) => ({
  type: ActionType.CHANGE_FILTER_QUERY,
  payload: {
    name,
    query,
  },
});
