import React from "react";
import { UserType } from "../../types/UserType";

import styles from "./CardUser.module.scss";

interface CardProps {
  user: UserType;
  avatar: string;
}

const Card = ({ user }: CardProps) => {
  return (
    <li className={styles.card}>
      <img src={user.img} alt="" />
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.infoItemName}>Имя: </span>
          <span>{user.name}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemName}>Дата рождения: </span>
          <span>{user.date}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemName}>Пол: </span>
          <span>{user.sex}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemName}>Национальность: </span>
          <span>{user.nationality}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
