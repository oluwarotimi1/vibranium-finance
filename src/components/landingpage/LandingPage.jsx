import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./landingpage.module.css";

const LandingPage = () => {
  return (
    <Container className={styles.container}>
      <h1>
        Speculate on <span className={styles.vgc}>pre-VGC</span> stocks &{" "}
        <span className={styles.vgc}>pre-VGC</span> tokens
      </h1>
      <h4>
        Vibranium Finance is a decentralized trading platform allowing anyone,
        anywhere to gain exposure to any pre-public asset.
      </h4>
      <div className={styles.landing_btn}>
        <div className={styles.btn_container}>
          <a href="https://www.google.com">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Buy VGC
          </a>
        </div>
        <div>
          <Link to="/newsletter" className={styles.newsletter_link}>
            <button className={`btn ${styles.btn_join}`}>
              Join Newsletter
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
