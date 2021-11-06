import React, { useState } from "react";
import Styles from "./NTForm.module.scss";
import Button from "./../../../../globals/Button/Button";
const NTForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const btnClickHandler = (event) => {};
  return (
    <div className={Styles.ntform}>
      <div className={Styles.ntform__container}>
        <label>Name</label>
        <input type="text" name="task_name" placeholder="New Task"></input>
      </div>
      <div className={Styles.ntform__container}>
        <label>Type</label>
        <select name="task_type">
          <option value="Research">Research</option>
          <option value="Project">Project</option>
          <option value="Evaluation">Evaluation</option>
          <option value="Reminder">Reminder</option>
        </select>
        <label>Priority</label>
        <select name="task_priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
          <option value="backlog">Backlog</option>
        </select>
      </div>
      <div className={Styles.ntform__container}>
        <label>Details</label>
        <input
          type="text"
          name="task_details"
          placeholder="Enter Task Details"
        ></input>
      </div>
      <div className={Styles.ntform__container}>
        <Button
          clickHandler={btnClickHandler}
          btnCaption="Add"
          size="lg"
        ></Button>
      </div>
    </div>
  );
};

export default NTForm;
