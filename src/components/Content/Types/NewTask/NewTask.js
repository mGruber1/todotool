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
      taskComment: ""
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
        return
      }
    }

    // Inputs have been validated, errMsg is All Fine
    setErrMsg("All Fine!")
    console.dir(task.task)
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

  // const submitBtnHandler = (event) => {
  //   if (
  //     task.task.taskName === "" ||
  //     task.task.taskDueDate === "" ||
  //     task.task.taskPriority === "" ||
  //     task.task.taskType === ""
  //   ) {
  //     setErrMsg("One Or More Fields have been left empty!");
  //   } else {
  //     // Check if data has been already sent, or not!

  //     setErrMsg("All Fine Buddy!");
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(task.task),
  //     };
  //     fetch("http://localhost:5000/task-write", requestOptions)
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ postId: data.id }));
  //   }
  // };
  // console.dir(JSON.stringify(task.task));

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
          <input onChange={inputsChangedHandler} type="text" name="taskComment" placeholder="Task Comment"/>
        </div>
        <div className={Styles.newtask__controlgroup}>
          <label>Task Type</label>
          <select onChange={inputsChangedHandler} name="taskType">
            {/* Types should be able to be created dynamically to the users needs */}
            <option value=""></option>
            <option value="action">Action</option>
            <option value="research">Research</option>
            <option value="else">Else</option>
          </select>
        </div>
        <div className={Styles.newtask__controlgroup}>
          <label>Task Priority</label>
          <select onChange={inputsChangedHandler} name="taskPriority">
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
