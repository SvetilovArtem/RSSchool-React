import React, { Component } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShareAlt } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Card.module.scss";
import { ICharacter } from "models/models";
import Modal from "components/Modal/Modal";

interface CardProps {
  card: ICharacter;
}

export default class Card extends Component<CardProps> {
  state = {
    isFavorite: false,
    likesCount: 20,
    isDropdownOpen: false,
    chosenCard: "",
    isOpen: false,
  };
  constructor(props: CardProps) {
    super(props);
    this.setChosenCard = this.setChosenCard.bind(this);
  }

  onClickLikeHandler() {
    this.setState({ isFavorite: !this.state.isFavorite });

    if (this.state.isFavorite) {
      this.setState({ likesCount: this.state.likesCount - 1 });
    } else {
      this.setState({ likesCount: this.state.likesCount + 1 });
    }
  }
  setChosenCard(name: string) {
    this.setState({ chosenCard: name });
  }
  render() {
    return (
      <>
        <li className={styles.card}>
          <img
            src={this.props.card.image}
            alt=""
            onClick={() => this.setChosenCard(this.props.card.name)}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{this.props.card.name}</h3>
            <p className={styles.desc}>
              {(this.props.card.species, this.props.card.status)}
            </p>
          </div>
          <div className={styles.functions}>
            <div onClick={() => this.onClickLikeHandler()}>
              <AiFillLike
                color={this.state.isFavorite ? "rgba(255, 70, 70)" : "#ffffff"}
              />{" "}
              {this.state.likesCount}
            </div>
            <div>
              <FaComment color="white" /> 20
            </div>
            <div className={styles.socials}>
              <FaShareAlt
                color={
                  this.state.isDropdownOpen ? "rgba(255, 70, 70)" : "#ffffff"
                }
                onClick={() =>
                  this.setState({ isDropdownOpen: !this.state.isDropdownOpen })
                }
              />
              <Dropdown isDropdownOpen={this.state.isDropdownOpen} />
            </div>
          </div>
        </li>
        {this.state.chosenCard === this.props.card.name && (
          <Modal card={this.props.card} setChosenCard={this.setChosenCard} />
        )}
      </>
    );
  }
}
