import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Forms/Button/Button";
import * as editPostActions from "../../store/actions/index";

//rendered when full post is rendered, also has option to deete the post
class FullPost extends Component {
  state = {
    loadedPost: null, //stores the full pst
    redirect: false, // redirect after delete reques
  };
  componentDidMount() {
    this.props.onInitPost(this.props.match.params.id);
  }
  deletePostHandler = () => {
    // delete the given post
    this.props.onDeletePost(this.props.match.params.id);
  };
  editPostHandler = () => {
    // to redirect to edit the post
    this.props.history.push(this.props.location.pathname + "/edit");
  };
  render() {
    let post = null;
    if (this.props.title) {
      post = (
        <div>
          <p>Title: {this.props.title}</p>
          <p>Content: {this.props.content}</p>
          <Button clicked={this.deletePostHandler}>Delete</Button>
          <Button clicked={this.editPostHandler}>Edit</Button>
        </div>
      );
    }
    if (this.props.redirect) {
      //if the post is deleted then this if statement will redirect if redirect state variable is true
      post = <Redirect to="/" />;
    }

    return post;
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.editPost.title,
    content: state.editPost.content,
    redirect: state.editPost.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPost: (id) => dispatch(editPostActions.initPost(id)),
    onDeletePost: (id) => dispatch(editPostActions.deletePostReq(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
