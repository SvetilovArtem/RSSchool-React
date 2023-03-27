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
        <img src={this.props.user.img} alt="" />

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Имя: </span>
            <span>{this.props.user.name}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Дата рождения: </span>
            <span>{this.props.user.date}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Пол: </span>
            <span>{this.props.user.sex}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoItemName}>Национальность: </span>
            <span>{this.props.user.nationality}</span>
          </div>
        </div>
      </li>
    );
  }
}
