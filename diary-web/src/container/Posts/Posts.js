import React, { Component } from "react";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import * as postsActions from "../../store/actions/index";
import {Button } from 'reactstrap';

//Container component that is rendered during the first page after login
class Posts extends Component {
  state = {
    posts: null, //state that store all the posts from firembase
  };

  componentDidMount() {
    this.props.onInitPosts();
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

    return (
      <Auxillary>
        <div className="container">
           {postRender}
          <div className="row">
            <Link to="/new">
              <Button color="danger">New Post</Button>
            </Link>
          </div>
        </div>
      </Auxillary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loaded: state.loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPosts: () => dispatch(postsActions.getPostsReq()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);