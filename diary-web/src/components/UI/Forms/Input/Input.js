import React from "react";
import classes from "./Input.module.css";
//input compoenent please add all button stying in the input css module file
const input = (props) => {
  let inputElement = null;
  switch (props.elementtype) {
    case "input":
      inputElement = <input className={classes.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
