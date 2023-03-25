import * as types from "./actionType";

const initialState = {
  members: [],
  page:1,
  limit:10
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MEMBERS:
      return {
        ...state,
        members: payload,
      };
    case types.SEARCH_QUERY:
      return {
        ...state,
        members: payload,
      };
    case types.EDIT_MEMBER:
      return {
        ...state,
        members: payload,
      };
    case types.DELETE_SELECTED:
      return {
        ...state,
        members: payload,
      };
    default:
      return state;
  }
};
