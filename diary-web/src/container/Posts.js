import React, { Component } from "react";
import Post from "../components/Post";
class Posts extends Component {
  state = {
    posts: [
      {
        title: "Post 1",
        content: "Conetent 1",
        id: "1",
      },
      {
        title: "Post 2",
        content: "Content 2",
        id: "2",
      },
      {
        title: "Post 3",
        content: "Content 3",
        id: "3",
      },
    ],
  };

  render() {
    return this.state.posts.map((post) => <Post postData={post} />);
  }
}

export default Posts;
