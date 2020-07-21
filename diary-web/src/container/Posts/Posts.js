import React, { Component } from "react";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Button from "../../components/UI/Forms/Button/Button";
import * as postsActions from "../../store/actions/index";

//Container component that is rendered during the first page after login
class Posts extends Component {
<<<<<<< HEAD
    state = {
        posts: null,
    };

    componentDidMount() {
        Axios.get("/posts.json")
            .then((res) => {
                let fetchedPosts = [];
                for (let key in res.data) {
                    fetchedPosts.push({...res.data[key], id: key });
                }
                this.setState({ posts: fetchedPosts });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        let postRender = null;
        if (this.state.posts) {
            postRender = this.state.posts.map((post) => ( <
                Link to = { "/post/" + post.id }
                key = { post.id } >
                <
                Post postData = { post }
                /> <
                /Link>
            ));
        }
        return ( <
            Auxillary > { postRender } <
            Link to = "/new" >
            <
            Button > New Post < /Button> <
            /Link> <
            /Auxillary>
        );
    }
}

export default Posts;
=======
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPosts: () => dispatch(postsActions.getPostsReq()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
>>>>>>> eedf72f042712a4cfdf1ed828195aa6055d404a0
