import React from "react";

import styles from "./Modal.module.scss";
import { ICharacter } from "models/models";

const Modal = ({
  card,
  setChosenCard,
}: {
  card: ICharacter;
  setChosenCard: (e: string) => void;
}) => {
  return (
    <>
      <div className={styles.overlay} onClick={() => setChosenCard("")}></div>
      <div className={styles.modal}>
        <div className={styles.closeBtn} onClick={() => setChosenCard("")}>
          &times;
        </div>
        <img src={card.image} alt="" />
        <div className={styles.info}>
          <p>
            Name: <span className={styles.textLighter}>{card.name}</span>
          </p>
          <p>
            Gender: <span className={styles.textLighter}>{card.gender}</span>
          </p>
          <p>
            From:{" "}
            <span className={styles.textLighter}>{card.location.name}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
