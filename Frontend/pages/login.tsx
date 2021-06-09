import React from "react";
import styles from "../styles/Loginpage.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { signIn, providers, useSession } from "next-auth/client";

export const getServerSideProps = async () => {
  const myProviders = await providers();
  return {
    props: {
      myProviders,
    },
  };
};

export default function Login({ myProviders }: any) {
  const router = useRouter();
  return (
    <>
      <div style={{ backgroundColor: "#FDFDFD", height: "100vh" }}>
        <div style={{ marginLeft: 100, marginTop: -20, cursor: "pointer" }}>
          <img
            src="/chatpadconnectlogo.png"
            alt=""
            onClick={() => router.push("/")}
          />
        </div>
        <div>
          <img
            src="/connect1.png"
            alt=""
            style={{
              marginLeft: 100,
              position: "fixed",
              marginTop: 10,
              height: 450,
              width: 600,
            }}
          />
        </div>
        <div style={{ marginLeft: 780, marginTop: 60 }}>
          <p className={styles.bigText}>Welcome to ChatPad Connect</p>
        </div>
        <div style={{ marginLeft: 785 }}>
          <p className={styles.smallText}>By signing in you accept our</p>
        </div>
        <div style={{ marginLeft: 785, marginTop: -10 }}>
          <p className={styles.smallText}>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <a style={{ color: "#0D0E88" }}>Privacy Policy</a>
            </Link>{" "}
            and{" "}
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <a style={{ color: "#0D0E88" }}>Terms of Service</a>
            </Link>
          </p>
        </div>
        <div style={{ marginTop: 300, marginLeft: 330 }}>
          <p className={styles.smallText} style={{ fontWeight: "normal" }}>
            Login To Your Account
          </p>
        </div>
        <div style={{ marginTop: -8, marginLeft: 125 }}>
          <p className={styles.smallText}>
            Welcome To ChatPad Connect. To Start An Instant Meet, Login To Your
            Account Here.
          </p>
        </div>
        {myProviders &&
          Object.values(myProviders).map((p: any) => {
            if (p.name.includes("Google")) {
              return (
                <div
                  style={{ marginTop: 10, marginLeft: 785 }}
                  onClick={() =>
                    signIn(p.id, { callbackUrl: "http://localhost:3000/home" })
                  }
                >
                  <a
                    className={`btn btn-primary btn-block py-2 mb-3 ${styles.btnGoogle}`}
                  >
                    <i className="fa fa-google fa-2x mr-1"></i>
                    <span
                      className="font-weight-bold"
                      style={{
                        bottom: 7,
                        fontWeight: "bold",
                        marginLeft: 10,
                        position: "relative",
                      }}
                    >
                      Continue with Google
                    </span>
                  </a>
                </div>
              );
            } else {
              return (
                <div
                  style={{ marginTop: -330, marginLeft: 785 }}
                  onClick={() =>
                    signIn(p.id, { callbackUrl: "http://localhost:3000/home" })
                  }
                >
                  <a
                    className={`btn btn-primary btn-block py-2 mb-3 ${styles.btnGithub}`}
                  >
                    <i className="fa fa-github fa-2x mr-1"></i>
                    <span
                      className="font-weight-bold"
                      style={{
                        bottom: 7,
                        fontWeight: "bold",
                        marginLeft: 10,
                        position: "relative",
                      }}
                    >
                      Continue with Github
                    </span>
                  </a>
                </div>
              );
            }
          })}
      </div>
    </>
  );
}
