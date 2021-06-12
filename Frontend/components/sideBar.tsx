import React, { useEffect, useState } from "react";
import styles from "../styles/Homepage.module.css";
import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { useSession, signOut } from "next-auth/client";

export const SideBar = () => {
  const router = useRouter();
  const [tabSelected, setTabSelected] =
    useState<"home" | "meet" | "logout">("home");
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.href.substr(
          window.location.href.lastIndexOf("/") + 1
        ) === "home"
      )
        setTabSelected("home");
      if (
        window.location.href.substr(
          window.location.href.lastIndexOf("/") + 1
        ) === "meet"
      )
        setTabSelected("meet");
    }
  }, [typeof window]);
  return (
    <div className={styles.sideBar}>
      <div style={{ position: "relative", bottom: 50 }}>
        <img
          src="/chatpadconnectlogo.png"
          alt=""
          onClick={() => router.push("/home")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Button onClick={() => router.push("/home")}>
        <div
          className={styles.tab}
          style={{
            top: 0,
            position: "relative",
            backgroundColor: tabSelected === "home" ? "" : "#F6FBFF",
            color: tabSelected === "home" ? "" : "#2d2a2e",
          }}
        >
          <i
            className="fa fa-home fa-2x"
            style={{ position: "relative", right: 55, bottom: -17 }}
          />
          <div
            style={{
              left: 7,
              top: -21.5,
              position: "relative",
              textTransform: "none",
            }}
          >
            Home
          </div>
        </div>
      </Button>
      <Button style={{ top: 20 }} onClick={() => router.push("/meet")}>
        <div
          className={styles.tab}
          style={{
            top: 0,
            position: "relative",
            backgroundColor: tabSelected === "meet" ? "" : "#F6FBFF",
            color: tabSelected === "meet" ? "#fff" : "#2d2a2e",
          }}
        >
          <i
            className="fa fa-microphone fa-2x"
            style={{
              position: "relative",
              left: -55,
              top: 20,
              color: tabSelected === "meet" ? "#fff" : "#2d2a2e",
            }}
          />
          <div
            style={{
              left: 6,
              top: -22.5,
              position: "relative",
              color: tabSelected === "meet" ? "#fff" : "#2d2a2e",
              textTransform: "none",
            }}
          >
            Meet
          </div>
        </div>
      </Button>
      <Button style={{ top: 40 }} onClick={() => signOut({ callbackUrl: "/" })}>
        <div
          className={styles.tab}
          style={{ top: 0, position: "relative", backgroundColor: "#f6fbff" }}
        >
          <i
            className="fa fa-sign-out fa-2x"
            style={{
              position: "relative",
              color: "#2d2a2e",
              left: -50,
              top: 19,
            }}
          />
          <div
            style={{
              left: 15,
              top: -22.5,
              position: "relative",
              color: "#2d2a2e",
              textTransform: "none",
            }}
          >
            Logout
          </div>
        </div>
      </Button>
    </div>
  );
};

export default SideBar;
