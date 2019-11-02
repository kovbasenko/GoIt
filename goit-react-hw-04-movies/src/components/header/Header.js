import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink
        exact
        activeClassName={styles.activeLink}
        className={styles.headerLink}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={styles.activeLink}
        className={styles.headerLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
}
