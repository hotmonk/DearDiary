import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Forms/Button/Button";
import Input from "../../components/UI/Forms/Input/Input";
import * as editPostActions from "../../store/actions/index";

//page to edit posts
class EditPost extends Component {
  componentDidMount() {
    //makes the post load only once in the beggineing
    this.props.onInitPost(this.props.match.params.id);
  }

  onChangeHandlerTitle = (event) => {
    this.props.updateTitleHandler(event.target.value);
  };

  onChangeHandlerContent = (event) => {
    this.props.updateContentHandler(event.target.value);
  };

  onSubmitHandler = (event) => {
    //activated after submitting
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };
    this.props.onSubmitPost(this.props.match.params.id, data);
  };
  render() {
    let post = null;
    if (this.props.title) {
      post = (
        <form onSubmit={this.onSubmitHandler}>
          <div>
            Title:{" "}
            <Input
              elementtype="input"
              value={this.props.title}
              name="title"
              onChange={this.onChangeHandlerTitle}
            ></Input>
            Content:
            <Input
              elementtype="textarea"
              value={this.props.content}
              name="content"
              onChange={this.onChangeHandlerContent}
            ></Input>
          </div>
          <Button btnType="Success">Submit</Button>
        </form>
      );
    }
    if (this.props.redirect) {
      let path = "/post/" + this.props.match.params.id;
      post = <Redirect to={path} />; //redirected once the form is submitted
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
    updateTitleHandler: (newTitle) =>
      dispatch(editPostActions.updatePostTitle(newTitle)),
    updateContentHandler: (newContent) =>
      dispatch(editPostActions.updatePostContent(newContent)),
    onInitPost: (id) => dispatch(editPostActions.initPost(id)),
    onSubmitPost: (id, data) =>
      dispatch(editPostActions.updatePostReq(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
