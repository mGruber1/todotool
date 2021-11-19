import React from "react";
import Styles from "./FilterModal.module.scss";
import Button from "./../../../../../../globals/Button/Button";
import Form from "./Form/Form";

const FilterModal = () => {
  
  const buttonClickedHandler = (event) => {
    // console.log(event.target.innerText)

    if (event.target.innerText === "Filter Results") {
      console.log("Filtering!")
    } else if ( event.target.innerText === "x" ) {
      console.log("Quit!")
      
    } else {
      console.log("Reset Filter!")
    }
  }
  
  return (
    <div className={Styles.filtermodal}>
      <div className={Styles.filtermodal__dismiss}>
        <span onClick={buttonClickedHandler}>
          x
        </span>
      </div>
      <div className={Styles.filtermodal__head}>
        <h1>Filter Results</h1>
      </div>
      <div className={Styles.filtermodal__filter}>
        <Form></Form>
      </div>
      <div className={Styles.filtermodal__buttons}>
      <Button clickHandler={buttonClickedHandler} size="sm" btnCaption="Filter Results"></Button>
      <Button clickHandler={buttonClickedHandler} size="sm" btnCaption="Reset Filter"></Button>
      </div>

    </div>
  );
};

export default FilterModal;
