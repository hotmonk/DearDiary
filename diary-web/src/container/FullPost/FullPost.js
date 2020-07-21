import React, { Component } from "react";
import axios from "../../axios-posts";
import Button from "../../components/UI/Forms/Button/Button";
import { Redirect } from "react-router-dom";
class FullPost extends Component {
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

export default FullPost;