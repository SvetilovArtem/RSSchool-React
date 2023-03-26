import CardUser from "components/CardUser/CardUser";
import React, { Component } from "react";
import { UserType } from "types/UserType";
import styles from "./CardsUsers.module.scss";

interface CardsProps {
  users: UserType[];
  avatar: string;
}
export default class CardsUsers extends Component<CardsProps> {
  render() {
    return (
      <ul className={styles.cards}>
        {this.props.users.map((user, i) => (
          <CardUser user={user} avatar={this.props.avatar} key={i} />
        ))}
      </ul>
    );
  }
}
