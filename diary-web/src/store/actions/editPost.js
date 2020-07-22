import * as actionTypes from "./actionTypes";
import axios from "../../axios-posts";
export const updatePostTitle = (newTitle) => {
  return {
    type: actionTypes.UPDATE_POST_TITLE,
    newTitle: newTitle,
    redirect: false,
  };
};

export const updatePostContent = (newContent) => {
  return {
    type: actionTypes.UPDATE_POST_CONTENT,
    newContent: newContent,
  };
};

export const setPost = (post) => {
  return {
    type: actionTypes.SET_POST,
    post: post,
  };
};

export const initPost = (id, token) => {
  return (dispatch) => {
    axios
      .get("/posts/" + id + ".json?auth=" + token)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatePost = () => {
  return {
    type: actionTypes.UPDATE_POST,
  };
};

export const updatePostReq = (id, data, token) => {
  return (dispatch) => {
    axios
      .put("/posts/" + id + ".json?auth=" + token, data)
      .then(() => {
        dispatch(updatePost());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePost = () => {
  return {
    type: actionTypes.DELETE_POST,
  };
};

export const deletePostReq = (id, token) => {
  return (dispatch) => {
    axios
      .delete("/posts/" + id + ".json?auth=" + token)
      .then(() => {
        dispatch(deletePost());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
