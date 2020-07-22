import React from "react";
import "./App.css";
import Posts from "./container/Posts/Posts";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import NewPost from "./container/NewPost/NewPost";
import FullPost from "./container/FullPost/FullPost";
import EditPost from "./container/EditPost/EditPost";
function App() {
  return (
    <div>
      <Layout>
        {/* routing links setup */}
        <Switch>
          <Route path="/post/:id/edit" component={EditPost} />
          <Route path="/post/:id" component={FullPost} />
          <Route path="/new" component={NewPost} />
          <Route path="/" component={Posts} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
