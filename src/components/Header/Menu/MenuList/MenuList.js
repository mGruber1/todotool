import React, { Component } from "react";
import Styles from "./MenuList.module.scss";

class MenuList extends Component {
  render() {
    return (
      <div className={Styles.menulist}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Add New Task</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </div>
    );
  }
}

export default MenuList;
