import React from "react";
//button compoenent please add all button stying in the button css module file
const button = (props) => (
  <button
    disabled={props.disabled}
    // className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
