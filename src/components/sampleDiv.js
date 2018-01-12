import React from "react";
import "./sampleDiv.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const sampleDiv = props => (
  <div>
  	<h1>Sample Text</h1>
  	<a href={props.link}><h2>{props.title}</h2></a>
  </div>
);

export default sampleDiv;