import Cards from "components/Cards/Cards";
import Search from "components/Search/Search";
import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { fetchData } from "api/api";
import { ICharacter } from "models/models";

const Main = () => {
  const [cards, setCards] = useState<ICharacter[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(cards);

  const searchEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchValue.length > 1 && e.code === "Enter") {
      setShowCards(true);
      setIsLoading(true);
      setTimeout(() => {
        fetchData(searchValue).then((data) => {
          setCards(data.results);
          setIsLoading(false);
        });
      }, 2000);
    } else {
      setShowCards(false);
    }
  };
  // useEffect(() => {
  //   if (searchValue.length > 1) {
  //     setShowCards(true);
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       fetchData(searchValue).then((data) => {
  //         setCards(data.results);
  //         setIsLoading(false);
  //       });
  //     }, 2000);
  //   } else {
  //     setShowCards(false);
  //   }
  // }, [searchValue]);

  return (
    <div className={styles.main}>
      <Search
        onChangeHandler={setSearchValue}
        searchValue={searchValue}
        searchHandler={searchEnterHandler}
      />
      {isLoading && (
        <p style={{ color: "white", textAlign: "center" }}>Loading ...</p>
      )}
      {showCards && <Cards cards={cards} />}
    </div>
  );
};

export default Main;
// //           cards={cards.filter((card) =>
// card.name.toUpperCase().includes(searchValue.toUpperCase())
// )}
