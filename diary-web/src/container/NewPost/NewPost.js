import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Forms/Input/Input";
import Button from "../../components/UI/Forms/Button/Button";
import Auxillary from "../../hoc/Auxillary/Auxillary";

import * as newPostActions from "../../store/actions/index";
//rendered when making a new entry
class NewPost extends Component {
  state = {
    redirec: false, //set to true once form is submitted to redirect
  };
  addPostHandler = (event) => {
    //submit form to the database
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    this.props.onSubmitHandler(data);
  };
  render() {
    let redirectElement = null;
    if (this.props.redirect) {
      //if redirect state variable is true then redirect to "/"
      redirectElement = <Redirect to="/" />;
    }
    return (
      <Auxillary>
        {redirectElement}
        <form onSubmit={this.addPostHandler}>
          <Input elementtype="input" placeholder="title" name="title" />
          <Input elementtype="input" placeholder="content" name="content" />
          <Button btnType="Success">Submit</Button>
        </form>
      </Auxillary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redirect: state.newPost.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitHandler: (data) => dispatch(newPostActions.postPostReq(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
