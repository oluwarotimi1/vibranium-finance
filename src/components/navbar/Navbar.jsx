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
<<<<<<< HEAD
        <h3 className={styles.logo}>Vibranium</h3>
=======
        <h3>Vibranium</h3>
>>>>>>> d7aaae44b9138b65f10df0ea63b6914b3fab6916
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
