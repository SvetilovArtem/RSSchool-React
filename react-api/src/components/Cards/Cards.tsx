import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import { ICharacter } from "models/models";

interface CardsProps {
  cards: ICharacter[];
}

export default class Cards extends Component<CardsProps> {
  render() {
    const { cards } = this.props;
    return (
      <ul className={styles.cards}>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </ul>
    );
  }
}
