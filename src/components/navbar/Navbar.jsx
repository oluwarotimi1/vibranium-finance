import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


// import LOGO from '../../assets/vibranium-finance-logo/png/logo-black.png'

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className={styles.nav_container}>
        {/* <a>{LOGO}</a> */}
        <h3 className={styles.logo}>ViBraNium</h3>
        <div className={`${styles.slidernv} ${state? styles.slidernv_active :null}`}>
        <RxCross2
          className={styles.close_nav}
          onClick={() => setState(!state)}
        />
          <nav>
            <Link to="">Docs</Link>
            <Link to="">Blog</Link>
            <Link to="">Testnet</Link>
            <Link to="">Simulator</Link>
          </nav>
          <div className={styles.container}>
            <a href="/buyvfc">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Buy VFC
            </a>
          </div>
          <div className={styles.icons}>
            <Link to="/twitter">
              <BsTwitter />
            </Link>
            <Link to="/twitter">
              <FaDiscord />
            </Link>
          </div>
        </div>

        <div className={styles.toggle_btn} onClick={()=>setState(!state)}>
          <TiThMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
