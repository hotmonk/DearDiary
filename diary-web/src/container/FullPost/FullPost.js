import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/UI/Forms/Button/Button";
import * as editPostActions from "../../store/actions/index";

//rendered when full post is rendered, also has option to deete the post
class FullPost extends Component {
<<<<<<< HEAD
    state = {
        loadedPost: null,
        redirect: false,
    };
    componentDidMount() {
        axios
            .get("/posts/" + this.props.match.params.id + ".json")
            .then((res) => {
                console.log(res);
                this.setState({ loadedPost: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
=======
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
>>>>>>> eedf72f042712a4cfdf1ed828195aa6055d404a0
    }
    deletePostHandler = () => {
        axios
            .delete("/posts/" + this.props.match.params.id + ".json")
            .then((res) => {
                // console.log(res.data);
                // this.setState({ loadedPost: res.data });
                this.setState({ redirect: true });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    editPostHandler = () => {
        this.props.history.push(this.props.location.pathname + "/edit");
    };
    render() {
        let post = null;
        if (this.state.loadedPost) {
            post = ( <
                div >
                <
                p > Title: { this.state.loadedPost.title } < /p> <
                p > Content: { this.state.loadedPost.content } < /p> <
                Button clicked = { this.deletePostHandler } > Delete < /Button> <
                Button clicked = { this.editPostHandler } > Edit < /Button> <
                /div>
            );
        }
        if (this.state.redirect) {
            post = < Redirect to = "/" / > ;
        }

        return post;
    }
}

<<<<<<< HEAD
export default FullPost;
=======
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
>>>>>>> eedf72f042712a4cfdf1ed828195aa6055d404a0
