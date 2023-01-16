import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './landingpage.module.css'

const LandingPage = () => {
  return (
    <Container className={styles.container}>
      <h1>Speculate on <span className={styles.vgc}>pre-VGC</span> stocks & <span className={styles.vgc}>pre-VGC</span> tokens</h1>
      <h4>Vibranium Finance is a decentralized trading platform allowing anyone, anywhere to gain exposure to any pre-public asset.</h4>
      <div className={styles.landing_btn}>
        <div className={styles.btn_container}>
            <a to="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Buy VFC Here
            </a>
          </div>
        <button className={`${styles.btn_container} ${styles.btn_join}`}>Join Newsletter</button>
      </div>
    </Container>
  )
}

export default LandingPage
