import React, { Component } from "react";
import { UserType } from "types/UserType";
import styles from "./CardUser.module.scss";

interface CardProps {
  user: UserType;
}

export default class CardUser extends Component<CardProps> {
  render() {
    return (
      <li className={styles.card}>
        {this.props.user.img === "string" && (
          <img src={this.props.user.img} alt="" />
        )}
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Name: </span>
            <span>{this.props.user.name}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Birthday: </span>
            <span>{this.props.user.date}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Gender: </span>
            <span>{this.props.user.sex}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Nationality: </span>
            <span>{this.props.user.nationality}</span>
          </div>
        </div>
      </li>
    );
  }
}
