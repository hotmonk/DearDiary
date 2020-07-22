import * as actionTypes from "./actionTypes";
import axios from "../../axios-posts";

export const postPost = () => {
  return {
    type: actionTypes.POST_POST,
  };
};

export const postPostReq = (data, token) => {
  return (dispatch) => {
    axios
      .post("/posts.json?auth=" + token, data)
      .then((response) => {
        dispatch(postPost());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
