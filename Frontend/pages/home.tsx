import { useSession } from "next-auth/client";
import React, { useEffect, useState } from "react";
import { DropDownMenu } from "../components/dropDownMenu";
import styles from "../styles/Homepage.module.css";
import SideBar from "../components/sideBar";
import NavBar from "../components/navBar";

const home = () => {
  const [session] = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <>
      <SideBar />
      <NavBar />
      <div>
        <img
          src="/chatpadconnectlogo.png"
          alt=""
          style={{ width: 450, height: 400, marginLeft: 570, marginTop: 50 }}
        />
        <h3 style={{ marginLeft: 380, marginTop: -100, fontWeight: "lighter" }}>
          To get started using ChatPad Connect, click the "Meet" tab so you can
          start an instant meet.
        </h3>
      </div>
    </>
  );
};

export default home;
