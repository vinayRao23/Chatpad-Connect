import React from "react";
import styles from "../styles/Homepage.module.css";
import { DropDownMenu } from "./dropDownMenu";

export const NavBar = () => {
  return (
    <div
      className={styles.navCover}
      style={{ marginTop: -720, marginLeft: 260 }}
    >
      <div style={{ marginLeft: 1105, marginTop: -40 }}>
        <DropDownMenu />
      </div>
    </div>
  );
};

export default NavBar;
