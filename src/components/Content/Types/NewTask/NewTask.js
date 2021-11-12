import React from "react";
import Styles from "./NewTask.module.scss";

const NewTask = () => {
  return (
    <div className={Styles.newtask}>
      <div className={Styles.newtask__heading}>
        <h1>New Task</h1>
      </div>
      <div className={Styles.newtask__controlgroup}>
          <input type="text" name="task_name" placeholder="Task Name" />
      </div>

      <div className={Styles.newtask__controlgroup}>
          <label>Task Type</label>
          <select name="task_type">
            {/* Types should be able to be created dynamically to the users needs */}
            <option value="action">Action</option>
            <option value="research">Research</option>
            <option value="else">Else</option>
          </select>
      </div>
      <div className={Styles.newtask__controlgroup}>
          <label>Task Priority</label>
          <select name="task_priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="backlog">Backlog</option>
          </select>
      </div>
      <div className={Styles.newtask__controlgroup}>
          <label>Due To</label>
          <input type="date" name="task_expiry" />
      </div>
      <div className={Styles.newtask__controlgroup}>
          <button className={Styles.btnsend} type="button" value="Absenden">
            Absenden
          </button>
          <button className={Styles.btnreset} type="button" value="Reset">
            Reset
          </button>
      </div>
    </div>
  );
};

export default NewTask;
