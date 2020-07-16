import React, { Component } from "react";
import axios from "../../axios-posts";
import Button from "../../components/UI/Forms/Button/Button";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Forms/Input/Input";

//page to edit posts
class EditPost extends Component {
  state = {
    loadedPost: null, //stores the already existing post data
    redirect: false, // set to true when need to redirect after sumbiting the post
  };
  componentDidMount() {
    //makes the post load only once in the beggineing
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
    // istivated when the title is edited and makes the change into the state
    const data = {
      title: event.target.value,
      content: this.state.loadedPost.content,
    };
    this.setState({ loadedPost: data });
  };

  onChangeHandlerContent = (event) => {
    //is activated when the content is changes and makes change is state as well
    const data = {
      title: this.state.loadedPost.title,
      content: event.target.value,
    };
    this.setState({ loadedPost: data });
  };

  onSubmitHandler = (event) => {
    //activated after submitting
    event.preventDefault();
    const data = {
      //object consitsting of title and data
      title: event.target.title.value,
      content: event.target.content.value,
    };
    axios
      .put("/posts/" + this.props.match.params.id + ".json", data)
      .then((response) => {
        this.setState({ redirect: true }); //redirect variable made ture
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
      post = <Redirect to="/" />; //redirected once the form is submitted
    }

    return post;
  }
}

export default EditPost;
