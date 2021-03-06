import React from "react";
import "./Text.stories.js";
import "./Text.css";

const Text = props => {
  const { email, input, small, medium, large, placeholder } = props;
  let classList = `Text`;

  if (small) {
    classList += `-small`;
  }
  if (medium) {
    classList += `-medium`;
  }
  if (large) {
    classList += `-large`;
  }
  return (
    <div>
      <div>{props.label}</div>
    <input
      email={email}
      type={input}
      className={classList}
      placeholder={placeholder}
    ></input>
    </div>
  );
};
export default Text;
