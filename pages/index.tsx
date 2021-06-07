import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Landingpage.module.css";

export default function LandingPage() {
  return (
    <>
      <div className={styles.navbar}></div>
      <button className={styles.signup}>Sign Up</button>
    </>
  );
}
