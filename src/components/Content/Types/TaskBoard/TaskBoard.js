import React, { useState, useEffect } from "react";
import Styles from "./TaskBoard.module.scss";
import Filter from "./Filter/Filter";
import FilterModal from "./Filter/FilterModal/FilterModal";

const TaskBoard = () => {
  let [resData, setResData] = useState([{}]);
  let [filterClicked, setFilterClicked] = useState(false);
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
        setResData(dataset);
      });
  }, []);

  const filterClickedHandler = () => {
    setFilterClicked(!filterClicked);
  };
  // console.dir(filterClicked)
  return (
    <div className={Styles.taskboard}>
      <div className={Styles.taskboard__content}>
        {filterClicked && <FilterModal/>}
        <table>
          <tr>
            <th>
              <Filter clickHandler={filterClickedHandler} />
              ID
            </th>
            <th>Name</th>
            <th>Type</th>
            <th>Priority</th>
            <th>Comment</th>
            <th>Expiration</th>
            <th>Status</th>
          </tr>
          {resData.map((element) => {
            return (
              <tr>
                <td key={element.id}>{element._id}</td>
                <td>{element.taskName}</td>
                <td>{element.taskType}</td>
                <td>{element.taskPriority}</td>
                <td>{element.taskComment}</td>
                <td>{element.taskDueDate}</td>
                <td>{element.taskStatus}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TaskBoard;
