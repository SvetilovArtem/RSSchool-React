import React, { Component } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShareAlt } from "react-icons/fa";
import { CardType } from "../../types/CardType";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Card.module.scss";

interface CardProps {
  card: CardType;
}

export default class Card extends Component<CardProps> {
  state = {
    isFavorite: false,
    likesCount: this.props.card.likes,
    isDropdownOpen: false,
  };

  onClickLikeHandler() {
    this.setState({ isFavorite: !this.state.isFavorite });

    if (this.state.isFavorite) {
      this.setState({ likesCount: this.state.likesCount - 1 });
    } else {
      this.setState({ likesCount: this.state.likesCount + 1 });
    }
  }
  render() {
    return (
      <li className={styles.card}>
        <img src={this.props.card.img} alt="" />
        <div className={styles.content}>
          <h3 className={styles.title}>{this.props.card.title}</h3>
          <p className={styles.desc}>{this.props.card.desc}</p>
        </div>
        <div className={styles.functions}>
          <div onClick={() => this.onClickLikeHandler()}>
            <AiFillLike
              color={this.state.isFavorite ? "rgba(255, 70, 70)" : "#ffffff"}
            />{" "}
            {this.state.likesCount}
          </div>
          <div>
            <FaComment color="white" /> {this.props.card.comments}
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
    );
  }
}
