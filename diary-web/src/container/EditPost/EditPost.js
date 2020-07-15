import React, { Component } from "react";
import axios from "../../axios-posts";
import Button from "../../components/UI/Forms/Button/Button";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Forms/Input/Input";
class EditPost extends Component {
  state = {
    loadedPost: null,
    redirect: false,
  };
  componentDidMount() {
    axios
      .get("/posts/" + this.props.match.params.id + ".json")
      .then((res) => {
        this.setState({ loadedPost: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeHandlerTitle = (event) => {
    const data = {
      title: event.target.value,
      content: this.state.loadedPost.content,
    };
    this.setState({ loadedPost: data });
  };

  onChangeHandlerContent = (event) => {
    const data = {
      title: this.state.loadedPost.title,
      content: event.target.value,
    };
    this.setState({ loadedPost: data });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
    };
    axios
      .put("/posts/" + this.props.match.params.id + ".json", data)
      .then((response) => {
        this.setState({ redirect: true });
        console.log(response);
      });
  };
  render() {
    let post = null;
    if (this.state.loadedPost) {
      post = (
        <form onSubmit={this.onSubmitHandler}>
          <div>
            Title:{" "}
            <Input
              elementtype="input"
              value={this.state.loadedPost.title}
              name="title"
              onChange={this.onChangeHandlerTitle}
            ></Input>
            Content:
            <Input
              elementtype="textarea"
              value={this.state.loadedPost.content}
              name="content"
              onChange={this.onChangeHandlerContent}
            ></Input>
          </div>
          <Button btnType="Success">Submit</Button>
        </form>
      );
    }
    if (this.state.redirect) {
      post = <Redirect to="/" />;
    }

    return post;
  }
}

export default EditPost;
