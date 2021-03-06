import React, { Component } from "react";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Button from "../../components/UI/Forms/Button/Button";
import * as postsActions from "../../store/actions/index";

//Container component that is rendered during the first page after login
class Posts extends Component {
  state = {
    posts: null, //state that store all the posts from firembase
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.onInitPosts(this.props.token, this.props.userId);
    }, 100);
  }

  render() {
    let postRender = null;
    if (this.props.posts.loaded) {
      postRender = this.props.posts.posts.map((post) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <Post postData={post} />
        </Link>
      ));
    }
    let logoutButton = null;
    if (this.props.token) {
      logoutButton = (
        <Link to="/logout">
          <button>logout</button>
        </Link>
      );
    }
    return (
      <Auxillary>
        {logoutButton}
        {postRender}

        <Link to="/new">
          <Button>New Post</Button>
        </Link>
      </Auxillary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loaded: state.loaded,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPosts: (token, userId) =>
      dispatch(postsActions.getPostsReq(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
