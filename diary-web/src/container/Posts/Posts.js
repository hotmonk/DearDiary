import React, { Component } from "react";
import Post from "../../components/Post";
import Axios from "../../axios-posts";
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

  componentDidMount() {
    Axios.get("/posts.json")
      .then((res) => {
        let fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({ ...res.data[key], id: key });
        }
        this.setState({ posts: fetchedPosts });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <Post key={post.id} postData={post} />
        ))}
      </div>
    );
  }
}

export default Posts;
