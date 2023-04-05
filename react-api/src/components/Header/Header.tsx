import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

class Header extends Component {
  state = {
    activePath: "/",
  };
  render() {
    const navs = [
      { name: "Main", path: "/" },
      { name: "About", path: "/about" },
      { name: "Form", path: "/form" },
    ];

    return (
      <header className={styles.header}>
        {navs.map((nav, index) => (
          <NavLink
            to={nav.path}
            className={
              this.state.activePath === nav.path ? styles.active : styles.item
            }
            key={index}
            onClick={() => this.setState({ activePath: nav.path })}
          >
            {nav.name}
          </NavLink>
        ))}
      </header>
    );
  }
}
export default Header;
