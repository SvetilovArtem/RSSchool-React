import React, { Component } from "react";
import Cards from "../../components/Cards/Cards";
import Search from "../../components/Search/Search";

import styles from "./Main.module.scss";

export default class Main extends Component {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.setSearchValue = this.setSearchValue.bind(this);
  }
  state = {
    searchValue: "",
    cards: [
      {
        id: 1,
        img: "https://traveller-eu.ru/sites/default/files/moscow-3550477_1280_0.jpg",
        title: "Moscow",
        desc: "Description 1",
        likes: 40,
        comments: 24,
      },
      {
        id: 2,
        img: "https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428_2x1.jpg",
        title: "New York",
        desc: "Description 2",
        likes: 43,
        comments: 88,
      },
      {
        id: 3,
        img: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Germany/Berlin/berlin-guide-lead-2018.jpg",
        title: "Berlin",
        desc: "Description 3",
        likes: 33,
        comments: 35,
      },
      {
        id: 4,
        img: "https://blog.turkishairlines.com/wp-content/uploads/2022/06/la-sagrada-familia-barselona.webp",
        title: "Barselona",
        desc: "Description 4",
        likes: 46,
        comments: 42,
      },
      {
        id: 5,
        img: "https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg",
        title: "Cairo",
        desc: "Description 5",
        likes: 30,
        comments: 15,
      },
      {
        id: 6,
        img: "https://image.geo.de/30148152/t/eY/v3/w1440/r1.5/-/tokio-f-292656749-jpg--84404-.jpg",
        title: "Tokio",
        desc: "Description 6",
        likes: 31,
        comments: 27,
      },
      {
        id: 7,
        img: "https://media.timeout.com/images/105211701/image.jpg",
        title: "Rome",
        desc: "Description 7",
        likes: 50,
        comments: 25,
      },
      {
        id: 8,
        img: "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-Fotolia.jpg",
        title: "Paris",
        desc: "Description 8",
        likes: 44,
        comments: 31,
      },
    ],
  };
  setSearchValue(text: string) {
    this.setState({ searchValue: text });
  }

  render() {
    return (
      <div className={styles.main}>
        <Search
          onChangeHandler={this.setSearchValue}
          searchValue={this.state.searchValue}
        />
        <Cards
          cards={this.state.cards.filter((card) =>
            card.title
              .toUpperCase()
              .includes(this.state.searchValue.toUpperCase())
          )}
        />
      </div>
    );
  }
}
