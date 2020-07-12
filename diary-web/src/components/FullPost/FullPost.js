import React from "react";
const fullPost = (props) => {
  return (
    <div>
      <p>{props.postData.title}</p>
      <p>{props.postData.content}</p>
    </div>
  );
};

export default fullPost;
