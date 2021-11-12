import React from "react";
import Styles from "./Content.module.scss";

const Content = (props) => {
  return <div className={Styles.content}>{props.children}</div>;
};

export default Content;
