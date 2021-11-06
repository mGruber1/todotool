import React from "react";
import Styles from "./Content.module.scss";
import NewTask from "./NewTask/NewTask";
const Content = () => {
  return <div className={Styles.content}>
      <NewTask></NewTask>
  </div>;
};

export default Content;
