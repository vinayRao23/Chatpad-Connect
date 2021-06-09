import React from "react";
import styles from "../styles/Homepage.module.css";

const home = () => {
  return (
    <>
      <div className={styles.sideBar}>
        <div style={{ position: "relative", bottom: 50 }}>
          <img src="/chatpadconnectlogo.png" alt="" />
        </div>
        <div className={styles.tab} style={{ top: -25, position: "relative" }}>
          <i
            className="fa fa-home fa-2x"
            style={{ position: "relative", right: -40, bottom: -17 }}
          />
          <div style={{ left: 86, top: -15.5, position: "relative" }}>Home</div>
        </div>
      </div>
    </>
  );
};

export default home;
