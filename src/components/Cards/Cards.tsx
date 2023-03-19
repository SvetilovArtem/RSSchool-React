import React, { Component } from "react";
import { CardType } from "../../types/CardType";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

interface CardsProps {
  cards: CardType[];
}

export default class Cards extends Component<CardsProps> {

  render() {
    const { cards } = this.props
    return (
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </ul>
    );
  }
}
