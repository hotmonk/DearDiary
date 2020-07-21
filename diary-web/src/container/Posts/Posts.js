import React, { Component } from "react";
import Post from "../../components/Post";
import Axios from "../../axios-posts";
import { Link } from "react-router-dom";
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Button from "../../components/UI/Forms/Button/Button";
class Posts extends Component {
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