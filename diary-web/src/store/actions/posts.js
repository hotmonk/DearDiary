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

export const getPostsReq = (token, userId) => {
  return (dispatch) => {
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/posts.json" + queryParams) //get request to get all posts from firebase
      .then((res) => {
        dispatch(getPosts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
