import React from "react";
import "./App.css";
import Posts from "./container/Posts/Posts";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import NewPost from "./container/NewPost/NewPost";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/new" component={NewPost} />
          <Route path="/" component={Posts} />
        </Switch>
        <p>Test</p>
      </Layout>
    </div>
  );
}

export default App;
