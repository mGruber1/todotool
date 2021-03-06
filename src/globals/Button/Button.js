import React from "react";
import Styles from "./Button.module.scss";
const Button = (props) => {
  // let classList = [{}]
  let classList = [];
  switch (props.size) {
    case "lg":
        classList = Styles.button__lg
      break;
    case "md":
        classList = Styles.button__md
      break;
    case "sm":
        classList = Styles.button__sm
      break;
  }

  // switch (props.type) {
  //   case "submit":
  //     classList.push("TEST")
  // }

  return (
    <button onClick={props.clickHandler} className={classList} type="button">
      {props.btnCaption}
    </button>
  );
};

export default Button;
