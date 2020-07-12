import React, { Component } from "react";
import Input from "../../components/UI/Forms/Input/Input";
import Button from "../../components/UI/Forms/Button/Button";
import axios from "../../axios-posts";
class NewPost extends Component {
  addPostHandler = (event) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };
    axios.post("/posts.json", data).then((response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <form onSubmit={this.addPostHandler}>
        <Input elementtype="input" placeholder="title" name="title" />
        <Input elementtype="input" placeholder="content" name="content" />
        <Button btnType="Success">Submit</Button>
      </form>
    );
  }
}

export default NewPost;
