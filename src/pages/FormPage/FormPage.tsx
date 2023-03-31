import CardsUsers from "components/CardsUsers/CardsUsers";
import Form from "components/Form/Form";
import React, { Component } from "react";
import { UserType } from "types/UserType";
import styles from "./FormPage.module.scss";

export default class FormPage extends Component {
  constructor(props: never) {
    super(props);
    this.setUsers = this.setUsers.bind(this);
  }
  state = {
    users: [],
  };
  setUsers = (user: UserType) => {
    this.setState({ users: [...this.state.users, user] });
  };
  render() {
    return (
      <div className={styles.formPage}>
        <h2 className="title">React Form</h2>
        <Form setUsers={this.setUsers} />
        <CardsUsers users={this.state.users} />
      </div>
    );
  }
}
