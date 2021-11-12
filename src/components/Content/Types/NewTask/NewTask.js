import React, { useState } from "react";
import Styles from "./NewTask.module.scss";

const NewTask = () => {
  // <MOCK-USER>
  const [user, setUser] = useState("Max");

  // /> MOCK-USER

  const [errMsg, setErrMsg] = useState("");
  const [task, setTask] = useState({
    task: {
      taskName: "",
      taskType: "",
      taskPriority: "",
      taskDueDate: "",
    },
  });

  const taskNameChangedHandler = (event) => {
    setTask((prevState) => ({
      task: {
        ...prevState.task,
        taskName: event.target.value,
      },
    }));
  };

  const taskTypeChangedHandler = (event) => {
    setTask((prevState) => ({
      task: {
        ...prevState.task,
        taskType: event.target.value,
      },
    }));
  };

  const taskPriorityChangedHandler = (event) => {
    setTask((prevState) => ({
      task: {
        ...prevState.task,
        taskPriority: event.target.value,
      },
    }));
  };

  const taskDueDateChangedHandler = (event) => {
    setTask((prevState) => ({
      task: {
        ...prevState.task,
        taskDueDate: event.target.value,
      },
    }));
  };

  const submitBtnHandler = (event) => {
    if (
      task.task.taskName === "" ||
      task.task.taskDueDate === "" ||
      task.task.taskPriority === "" ||
      task.task.taskType === ""
    ) {
      setErrMsg("One Or More Fields have been left empty!");
    } else {
      // Check if data has been already sent, or not!

      setErrMsg("All Fine Buddy!");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task.task),
      };
      fetch("http://localhost:5000/task-write", requestOptions)
        .then((response) => response.json())
        .then((data) => this.setState({ postId: data.id }));
    }
  };
  // console.dir(JSON.stringify(task.task));
  const resetBtnHandler = (event) => {
    console.log("Here comes the reset ...!");
  };

  return (
    <div className={Styles.newtask}>
      <div className={Styles.newtask__heading}>
        <h1>New Task</h1>
      </div>
      <div className={Styles.newtask__controlgroup}>
        <input
          onChange={taskNameChangedHandler}
          type="text"
          name="task_name"
          placeholder="Task Name"
        />
      </div>

      <div className={Styles.newtask__controlgroup}>
        <label>Task Type</label>
        <select onChange={taskTypeChangedHandler} name="task_type">
          {/* Types should be able to be created dynamically to the users needs */}
          <option value=""></option>
          <option value="action">Action</option>
          <option value="research">Research</option>
          <option value="else">Else</option>
        </select>
      </div>
      <div className={Styles.newtask__controlgroup}>
        <label>Task Priority</label>
        <select onChange={taskPriorityChangedHandler} name="task_priority">
          <option value=""></option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="backlog">Backlog</option>
        </select>
      </div>
      <div className={Styles.newtask__controlgroup}>
        <label>Due To</label>
        <input
          onChange={taskDueDateChangedHandler}
          type="date"
          name="task_expiry"
        />
      </div>
      <div className={Styles.newtask__controlgroup}>
        <button
          onClick={submitBtnHandler}
          className={Styles.btnsend}
          type="button"
          value="Absenden"
        >
          Absenden
        </button>
        <button
          onClick={resetBtnHandler}
          className={Styles.btnreset}
          type="button"
          value="Reset"
        >
          Reset
        </button>
      </div>
      <p>{errMsg}</p>
    </div>
  );
};

export default NewTask;
