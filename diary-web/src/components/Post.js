import React from "react";

const post = (props) => {
  return (
    <div>
      <p>{props.postData.title}</p>
      <p>{props.postData.content}</p>
    </div>
  );
};

export default post;
