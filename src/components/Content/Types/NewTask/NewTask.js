import React, { useState } from "react";
import Styles from "./NewTask.module.scss";

const NewTask = () => {
  const [errMsg, setErrMsg] = useState("");
  const [task, setTask] = useState({
    task: {
      taskName: "",
      taskType: "",
      taskPriority: "",
      taskDueDate: "",
      taskComment: "",
      taskStatus: "new"
    },
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("submitted");

    // Check if one or more inputs have been left empty

    for (let i = 0; i <= 4; i++) {
      if (event.target.form[i].value === "") {
        setErrMsg("Hey buddy, you've left one or more fields empty!");
        // console.log("ive done this: " + i + " times!");
        return;
      }
    }

    // Inputs have been validated, errMsg is All Fine
    setErrMsg("All Fine!");
    // console.dir(task.task)
    // Post Input Values to API-Endpoint
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task.task),
    };
    fetch("http://localhost:5000/task-write", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));

    // console.dir(task.task);
    // Reset Inputs
    formResetHandler(event);
  };

  const formResetHandler = (event) => {
    for (let i = 0; i <= 4; i++) {
      event.target.form[i].value = "";
    }
  };

  const inputsChangedHandler = (event) => {
    // console.log("INPUT CHANGED!");
    let target = event.target;
    let name = event.target.name;
    let value = event.target.value;

    setTask((prevState) => ({
      task: {
        ...prevState.task,
        [name]: value,
      },
    }));
  };

  return (
    <div className={Styles.newtask}>
      <div className={Styles.newtask__heading}>
        <h1>New Task</h1>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div className={Styles.newtask__controlgroup}>
          <input
            onChange={inputsChangedHandler}
            type="text"
            name="taskName"
            placeholder="Task Name"
          />
        </div>
        <div className={Styles.newtask__controlgroup}>
          <input
            onChange={inputsChangedHandler}
            type="text"
            name="taskComment"
            placeholder="Task Comment"
          />
        </div>
        <div className={Styles.newtask__controlgroup}>
          <label>Task Type</label>
          <select onChange={inputsChangedHandler} name="taskType">
            {/* Types should be able to be created dynamically to the users needs */}
            <option value=""></option>
            <option value="Action">Action</option>
            <option value="Research">Research</option>
            <option value="Else">Else</option>
          </select>
        </div>
        <div className={Styles.newtask__controlgroup}>
          <label>Task Priority</label>
          <select onChange={inputsChangedHandler} name="taskPriority">
            <option value=""></option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Backlog">Backlog</option>
          </select>
        </div>
        <div className={Styles.newtask__controlgroup}>
          <label>Due To</label>
          <input
            onChange={inputsChangedHandler}
            type="date"
            name="taskDueDate"
          />
        </div>
        <div className={Styles.newtask__controlgroup}>
          <button
            onClick={formSubmitHandler}
            className={Styles.btnsend}
            type="submit"
            value="ABSENDEN"
          >
            ABSENDEN
          </button>
          <button
            onClick={formResetHandler}
            className={Styles.btnreset}
            type="button"
            value="RESET"
          >
            RESET
          </button>
        </div>
      </form>
      <p>{errMsg}</p>
    </div>
  );
};

export default NewTask;
