import React, { Component } from "react";
import "./Button.css";
import "./Button.stories.js";
// import "./Icons.js"
// import './Icons.stories.js'
// import './Icons.css'
// This is a functional component - just sent up a little differently as an arrow function!

const Button = (props) => {
  // let classList = ""

  let classList = [];
  let types = [ "primary","success", "danger", "warning", "default","heart","cart"];
  if (types.includes(props.type)) {
    classList.push(`button-${props.type}`);
  }
   
    if (props.large) {
        classList.push("button-large");
      }
    if (props.small) {
      classList.push("button-small");
    }
    if (props.opaque) {
      classList.push("button-opaque");
    }
    if (props.hover) {
      classList.push('button-hover');
    }
    if (props.border) {
      classList.push('button-border');
    }
    if (props.borderl) {
        classList.push('button-border');
      }


    // if (!props.large) {
    //   classList.slice("button-large");
    // }
    // if (!props.small) {
    //   classList.slice("button-small");
    // }
    // if (!props.opaque) {
    //   classList.slice("button-opaque");
    // }
    // if (!props.hover) {
    //   classList.slice("button-hover");
    // }
    // if (!props.border) {
    //   classList.slice("button-border");
    // }
    // if (!props.outline) {
    //   classList.slice(`button-${props.type}`);
    // }
  

  return <button className={classList.join(" ")}>{props.label}</button>;
};
// onClick={props.when(Clicked)}
export default Button;
