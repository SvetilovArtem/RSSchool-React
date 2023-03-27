import CardsUsers from "components/CardsUsers/CardsUsers";
import React, { Component } from "react";
import { Form } from "react-router-dom";
import { UserType } from "types/UserType";

export default class FormPage extends Component {
  state = {
    users: [],
    avatar: "",
  };
  setUsers(user: UserType) {
    this.setState({ users: [...this.state.users, user] });
  }
  setAvatar(avatar: string) {
    this.setState({ avatar: avatar });
  }
  render() {
    return (
      <div className="app">
        <h2 className="title">React Form</h2>
        <Form
          setAvatar={this.setAvatar}
          avatar={this.state.avatar}
          setUsers={this.setUsers}
        />
        <CardsUsers users={this.state.users} avatar={this.state.avatar} />
      </div>
    );
  }
}
