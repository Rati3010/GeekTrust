import axios from "axios";
import * as types from "./actionType.js";

export const getMembers = () => (dispatch) => {
  axios
    .get(`https://wandering-tuxedo-calf.cyclic.app/members`)
    .then((res) => dispatch({ type: types.GET_MEMBERS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const deleteSelected = () => {};
export const searchQuery = (query) => (dispatch) => {
  axios
    .get("https://wandering-tuxedo-calf.cyclic.app/members")
    .then((res) =>
      res.data.filter(
        (member) =>
          member.name.toLowerCase().includes(query.toLowerCase()) ||
          member.email.toLowerCase().includes(query.toLowerCase()) ||
          member.role.toLowerCase().includes(query.toLowerCase())
      )
    )
    .then((data) => dispatch({ type: types.SEARCH_QUERY, payload: data }))
    .catch((err) => console.log(err));
};                                                                                                                                                                                                                               
export const editMember = () => {};
