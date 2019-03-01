import React from "react";
import "./style.css";
import '../images/background/theSimpsonsFamily.jpg'

export default function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}
