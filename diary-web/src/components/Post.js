import React from "react";
import classes from "./Post.module.css";
const post = (props) => {
  return (
    <div className={classes.Post}>
      <p>{props.postData.title}</p>
      <p>{props.postData.content}</p>
    </div>
  );
};

export default post;
