import React, { Component } from "react";
import Input from "../../components/UI/Forms/Input/Input";
import Button from "../../components/UI/Forms/Button/Button";
import axios from "../../axios-posts";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import { Redirect } from "react-router-dom";
class NewPost extends Component {
  state = {
    redirec: false,
  };
  addPostHandler = (event) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };

    axios.post("/posts.json", data).then((response) => {
      this.setState({ redirect: true });
      console.log(response);
    });
  };
  render() {
    let redirectElement = null;
    if (this.state.redirect) {
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

export default NewPost;
