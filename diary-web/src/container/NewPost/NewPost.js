import React, { Component } from "react";
import Input from "../../components/UI/Forms/Input/Input";
import Button from "../../components/UI/Forms/Button/Button";
import axios from "../../axios-posts";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import { Redirect } from "react-router-dom";

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

    axios.post("/posts.json", data).then((response) => {
      this.setState({ redirect: true });
      console.log(response);
    });
  };
  render() {
    let redirectElement = null;
    if (this.state.redirect) {
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

export default NewPost;
