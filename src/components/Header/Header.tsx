import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
    );
  }
}
