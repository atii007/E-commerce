import React from "react";
import styles from "./Navbar.module.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={navlogo} alt="" className={styles.navLogo} />
      <img src={navProfile} className={styles.navProfile} alt="" />
    </div>
  );
};

export default Navbar;
