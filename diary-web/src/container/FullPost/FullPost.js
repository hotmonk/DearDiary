import React, { Component } from "react";
import axios from "../../axios-posts";
import Button from "../../components/UI/Forms/Button/Button";
import { Redirect } from "react-router-dom";

//rendered when full post is rendered, also has option to deete the post
class FullPost extends Component {
  state = {
    loadedPost: null, //stores the full pst
    redirect: false, // redirect after delete reques
  };
  componentDidMount() {
    // lifecycle method to just load the component once
    axios
      .get("/posts/" + this.props.match.params.id + ".json")
      .then((res) => {
        this.setState({ loadedPost: res.data }); // load the ful post using the id
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deletePostHandler = () => {
    // delete the given post
    axios
      .delete("/posts/" + this.props.match.params.id + ".json")
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  editPostHandler = () => {
    // to redirect to edit the post
    this.props.history.push(this.props.location.pathname + "/edit");
  };
  render() {
    let post = null;
    if (this.state.loadedPost) {
      post = (
        <div>
          <p>Title: {this.state.loadedPost.title}</p>
          <p>Content: {this.state.loadedPost.content}</p>
          <Button clicked={this.deletePostHandler}>Delete</Button>
          <Button clicked={this.editPostHandler}>Edit</Button>
        </div>
      );
    }
    if (this.state.redirect) {
      //if the post is deleted then this if statement will redirect if redirect state variable is true
      post = <Redirect to="/" />;
    }

    return post;
  }
}

export default FullPost;
