import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./Search.module.scss";

interface SearchProps {
  onChangeHandler: (e: string) => void;
  searchValue: string;
}

export default class Search extends Component<{
  onChangeHandler: (e: string) => void;
  searchValue: string;
}> {
  constructor(props: SearchProps) {
    super(props);
  }
  state = {
    isOpen: false,
  };
  setIsOpen(value: boolean) {
    this.setState({ isOpen: value });
  }

  componentDidMount(): void {
    const inputValue = localStorage.getItem("searchValue");
    if (inputValue) {
      this.props.onChangeHandler(inputValue);
    }
  }
  componentWillUnmount(): void {
    localStorage.setItem("searchValue", this.props.searchValue);
  }
  render() {
    return (
      <div
        className={
          this.state.isOpen
            ? styles.search
            : styles.search + " " + styles.hidden
        }
      >
        <input
          type="text"
          placeholder="SEARCH FOR INSPIRATION"
          className={
            this.state.isOpen
              ? styles.searchInput
              : styles.searchInput + " " + styles.hiddenInput
          }
          onBlur={() => this.setIsOpen(false)}
          onFocus={() => this.setIsOpen(true)}
          onChange={(e) => {
            this.props.onChangeHandler(e.currentTarget.value);
            localStorage.setItem("searchValue", this.props.searchValue);
          }}
          value={this.props.searchValue}
        />
        <BsSearch color="#ffffff" className={styles.searchIcon} />
      </div>
    );
  }
}
