import React from "react";
import classes from "./Post.module.css";
import { Media } from 'reactstrap';

//render post flags
const post = (props) => {
  return (
    // <div className={classes.Post}>
    //   <p>{props.postData.title}</p>
    //   <p>{props.postData.content}</p>
    // </div>

   <div className={classes.Post}>
    <div className="row">
      <Media>
        <Media left middle>
          <img src='./brand-icon.png'  alt='Author Image' />
        </Media>
        <Media body>
          <Media heading>
            <strong>{props.postData.title}</strong>
          </Media>
          {props.postData.content}
        </Media>
      </Media>
    </div>
   </div>
  );
};

export default post;
