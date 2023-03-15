// import React, { useState } from "react";
// import { AiFillLike } from "react-icons/ai";
// import { FaComment, FaShareAlt } from "react-icons/fa";
// import { CardType } from "../../types/CardType";
// import Dropdown from "../Dropdown/Dropdown";

// import styles from "./Card.module.scss";

// interface CardProps {
//   card: CardType;
// }

// const Card = ({ card }: CardProps) => {
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [likesCount, setLikesCount] = useState(card.likes);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const onClickLikeHandler = () => {
//     setIsFavorite(!isFavorite);
//     if (isFavorite) {
//       setLikesCount(likesCount - 1);
//     } else {
//       setLikesCount(likesCount + 1);
//     }
//   };

//   return (
//     <li className={styles.card}>
//       <img src={card.img} alt="" />
//       <div className={styles.content}>
//         <h3 className={styles.title}>{card.title}</h3>
//         <p className={styles.desc}>{card.desc}</p>
//       </div>
//       <div className={styles.functions}>
//         <div onClick={onClickLikeHandler}>
//           <AiFillLike color={isFavorite ? "rgba(255, 70, 70)" : "#ffffff"} />{" "}
//           {likesCount}
//         </div>
//         <div>
//           <FaComment color="white" /> {card.comments}
//         </div>
//         <div className={styles.socials}>
//           <FaShareAlt
//             color={isDropdownOpen ? "rgba(255, 70, 70)" : "#ffffff"}
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           />
//           <Dropdown isDropdownOpen={isDropdownOpen} />
//         </div>
//       </div>
//     </li>
//   );
// };

// export default Card;

import React, { Component } from 'react'
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShareAlt } from "react-icons/fa";
import { CardType } from "../../types/CardType";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Card.module.scss";

interface CardProps {
  card: CardType;
}

export default class Card extends Component<{card: CardType}> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props:CardProps) {
    super(props)
  }
  state = {
    isFavorite: false,
    likesCount: this.props.card.likes,
    isDropdownOpen: false
  }

  onClickLikeHandler() {
    this.setState({isFavorite: !this.state.isFavorite})

    if (this.state.isFavorite) {
      this.setState({likesCount: this.state.likesCount - 1})
      console.log('-like')
    } else {
      this.setState({likesCount: this.state.likesCount + 1})
      console.log('+like')
    }
  };
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
          <AiFillLike color={this.state.isFavorite ? "rgba(255, 70, 70)" : "#ffffff"} />{" "}
          {this.state.likesCount}
        </div>
        <div>
          <FaComment color="white" /> {this.props.card.comments}
        </div>
        <div className={styles.socials}>
          <FaShareAlt
            color={this.state.isDropdownOpen ? "rgba(255, 70, 70)" : "#ffffff"}
            onClick={() => this.setState({isDropdownOpen: !this.state.isDropdownOpen})}
          />
          <Dropdown isDropdownOpen={this.state.isDropdownOpen} />
        </div>
      </div>
    </li>
    )
  }
}

