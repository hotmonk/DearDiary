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

export const initPost = (id) => {
  return (dispatch) => {
    axios
      .get("/posts/" + id + ".json")
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

export const updatePostReq = (id, data) => {
  return (dispatch) => {
    axios
      .put("/posts/" + id + ".json", data)
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

export const deletePostReq = (id) => {
  return (dispatch) => {
    axios
      .delete("/posts/" + id + ".json")
      .then(() => {
        dispatch(deletePost());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
