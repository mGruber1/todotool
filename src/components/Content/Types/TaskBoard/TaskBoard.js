import React, { useState, useEffect } from "react";
import Styles from "./TaskBoard.module.scss";
const TaskBoard = () => {
  let [resData, setResData] = useState([{}]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(task.task),
    };
    fetch("http://localhost:5000/get-tasks", requestOptions)
      .then((response) => response.json())
      .then(function (data) {
        let dataset = data;
        // console.log("RESDATA: ",dataset[0])
        setResData(dataset)
      });
  }, []);

  console.dir(resData)
  return (
    <div className={Styles.taskboard}>
      <div className={Styles.taskboard__header}>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </div>
      <div className={Styles.taskboard__content}>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Comment</th>
            <th>Expiration</th>
            <th>Status</th>
          </tr>
          {
              resData.map(element => {
                  return (
                      <tr>
                          <td>{element._id}</td>
                          <td>{element.taskName}</td>
                          <td>{element.taskType}</td>
                          <td>{element.taskPriority}</td>
                          <td>{element.taskComment}</td>
                          <td>{element.taskDueDate}</td>
                          <td>{element.taskStatus}</td>
                      </tr>
                  )
              })
          }
        </table>
      </div>
    </div>
  );
};

export default TaskBoard;
