import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";
import { ICharacter } from "models/models";

interface CardsProps {
  cards: ICharacter[];
  isLoading: boolean;
}

export default class Cards extends Component<CardsProps> {
  render() {
    const { cards, isLoading } = this.props;
    return (
      <ul className={styles.cards}>
        {cards && cards.map((card, index) => <Card card={card} key={index} />)}
        {!isLoading && !cards && (
          <h3 className={styles.notFound}>Not found ...</h3>
        )}
      </ul>
    );
  }
}
