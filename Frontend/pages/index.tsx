import React from "react";
import styles from "../styles/Landingpage.module.css";
import Wave from "../components/wave";
import { useRouter } from "next/dist/client/router";

export default function LandingPage() {
  const router = useRouter();
  return (
    <>
      <div>
        <img
          src="/chatpadconnectlogo.png"
          alt=""
          style={{ marginLeft: 50, position: "fixed", marginTop: -70 }}
        />
      </div>
      <div style={{ marginLeft: 1125, marginTop: 45 }}>
        <button className={styles.signup} onClick={() => router.push("/login")}>
          Get Started
        </button>
      </div>
      <div style={{ marginLeft: 60, marginTop: 150 }}>
        <h1 className={styles.landingPageText}>Meet With Friends And</h1>
      </div>
      <div style={{ marginLeft: 60 }}>
        <h1 className={styles.landingPageText}> Family. Anytime, Anywhere.</h1>
      </div>
      <div>
        <img
          src="/connect2.png"
          alt=""
          style={{
            marginLeft: 780,
            position: "fixed",
            marginTop: -230,
            height: 450,
            width: 600,
          }}
        />
      </div>
      <Wave />
    </>
  );
}
