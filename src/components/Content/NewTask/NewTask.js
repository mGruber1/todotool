import React from "react";
import Styles from "./NewTask.module.scss";
import NTForm from "./NTForm/NTForm";
const NewTask = () => {
  return (
    <div className={Styles.newtask}>
      <div className={Styles.newtask__container}>
        <h1>Add New Task</h1>
      </div>
      <div className={Styles.newtask__container}>
        <NTForm></NTForm> 
        {/* Is a Table better?! */}
      </div>
    </div>
  );
};

export default NewTask;
