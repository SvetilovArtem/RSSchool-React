import React, { Component } from "react";
import styles from "./404.module.scss";

export default class ErrorPage extends Component {
  render() {
    return <div className={styles.errorPage}>404</div>;
  }
}
