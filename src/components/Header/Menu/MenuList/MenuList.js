import React, { Component } from "react";
import Styles from "./MenuList.module.scss";
import {Link, BrowserRouter} from 'react-router-dom';
class MenuList extends Component {
  render() {
    return (
      <div className={Styles.menulist}>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/new-task">New Task</Link></li>
          <li><Link to="/task-board">Task Board</Link></li>
        </ul>
      </div>
    );
  }
}

export default MenuList;
