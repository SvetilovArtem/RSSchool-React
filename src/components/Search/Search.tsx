import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.scss";

interface SearchProps {
  onChangeHandler: (e: string) => void;
  searchValue: string;
}

const Search = ({ onChangeHandler, searchValue }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? styles.search : styles.search + " " + styles.hidden}
    >
      <input
        type="text"
        placeholder="SEARCH FOR INSPIRATION"
        className={
          isOpen
            ? styles.searchInput
            : styles.searchInput + " " + styles.hiddenInput
        }
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          onChangeHandler(e.currentTarget.value);
          localStorage.setItem("searchValue", searchValue);
        }}
        value={searchValue}
      />
      <BsSearch color="#ffffff" className={styles.searchIcon} />
    </div>
  );
};

export default Search;
