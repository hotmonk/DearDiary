import React, { Component } from "react";
import Post from "../../components/Post/Post";
import Axios from "../../axios-posts";
import { Link } from "react-router-dom";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Button from "../../components/UI/Forms/Button/Button";

//Container component that is rendered during the first page after login
class Posts extends Component {
  state = {
    posts: null, //state that store all the posts from firembase
  };

  componentDidMount() {
    Axios.get("/posts.json") //get request to get all posts from firebase
      .then((res) => {
        let fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({ ...res.data[key], id: key }); //making array from the returned resposne object
        }
        this.setState({ posts: fetchedPosts }); //storing the array in state
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let postRender = null;
    if (this.state.posts) {
      //postRender will store the post layout once it has been rendered
      //mapping through individual posts
      postRender = this.state.posts.map((post) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <Post postData={post} />
        </Link>
      ));
    }
    //postrender variable will be null till the tie th eposts has been fetched from the data base, after that it will output the post cards
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

export default Posts;
