import React from "react";
import MenuList from "./MenuList/MenuList";
import Styles from "./Menu.module.scss";
const Menu = () => {
  return (
    <div clasName={Styles.menu}>
      <MenuList></MenuList>
    </div>
  );
};

export default Menu;
