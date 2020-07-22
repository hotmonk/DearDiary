import * as actionTypes from "./actionTypes";
import axios from "../../axios-posts";

export const getPosts = (posts) => {
  let fetchedPosts = [];
  for (let key in posts) {
    fetchedPosts.push({ ...posts[key], id: key }); //making array from the returned resposne object
  }
  return {
    type: actionTypes.GET_POSTS,
    posts: fetchedPosts,
  };
};

export const getPostsReq = (token) => {
  return (dispatch) => {
    axios
      .get("/posts.json?auth=" + token) //get request to get all posts from firebase
      .then((res) => {
        dispatch(getPosts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
