import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

import Input from "../../components/UI/Forms/Input/Input";
//import Button from "../../components/UI/Forms/Button/Button";
import Auxillary from "../../hoc/Auxillary/Auxillary";

import * as newPostActions from "../../store/actions/index";
//rendered when making a new entry
class NewPost extends Component {
  state = {
    redirec: false, //set to true once form is submitted to redirect
  };
  addPostHandler = (event) => {
    //submit form to the database
    //event.preventDefault();
    const data = {
      title: event.title,
      content: event.content
    };

    this.props.onSubmitHandler(data);
  };
  render() {
    let redirectElement = null;
    if (this.props.redirect) {
      //if redirect state variable is true then redirect to "/"
      redirectElement = <Redirect to="/" />;
    }
    return (
      <Auxillary>
        {redirectElement}
        <div className="container">
          <LocalForm onSubmit={(values) => this.addPostHandler(values) }>
            <Row className="form-group">
                <Label htmlFor="title" md={2}><strong>Post Title</strong></Label>
                <Col md={10}>
                    <Control.text model=".title" id="title" name="title"
                        placeholder="Catchy title here bitch"
                        className="form-control"
                         />
                </Col>
            </Row>
          
            <Row className="form-group">
                <Label htmlFor="content" md={2}><strong>Post Description</strong></Label>
                <Col md={10}>
                    <Control.textarea model=".content" id="content" name="content"
                        rows="12" placeholder="You saw shit? Time to step on it"
                        className="form-control" />
                </Col>
            </Row>
            <Row className="form-group">
                <Col md={{size:10, offset: 2}}>
                    <Button type="submit" color="primary">
                    Send Post
                    </Button>
                </Col
>            </Row>
        </LocalForm>
        </div>
      </Auxillary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redirect: state.newPost.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitHandler: (data) => dispatch(newPostActions.postPostReq(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
