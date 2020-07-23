import React, { Component } from "react";
import "./App.css";
import Posts from "./container/Posts/Posts";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NewPost from "./container/NewPost/NewPost";
import FullPost from "./container/FullPost/FullPost";
import EditPost from "./container/EditPost/EditPost";
import Header from "./container/Header/Header";
import Auth from "./container/Auth/Auth";
import Logout from "./container/Auth/Logout/Logout";
import * as actions from "./store/actions/index";
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/post/:id/edit" component={EditPost} />
          <Route path="/post/:id" component={FullPost} />
          <Route path="/new" component={NewPost} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Posts} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>
      <Header/>
          {/* routing links setup */}
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
