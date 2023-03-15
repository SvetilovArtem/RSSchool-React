// import React from 'react'
// import { CardType } from '../../types/CardType'
// import Card from '../Card/Card'

// import styles from './Cards.module.scss'

// interface CardsProps {
//     cards: CardType[]
// }

// const Cards = ({ cards }:CardsProps) => {
//   return (
//     <ul className={styles.cards}>
//         {cards.map(card => <Card card={card} />)}
//     </ul>
//   )
// }

// export default Cards

import React, { Component } from 'react'
import { CardType } from '../../types/CardType'
import Card from '../Card/Card'
import styles from './Cards.module.scss'

interface CardsProps {
    cards: CardType[]
}

export default class Cards extends Component<{cards: CardType[]}> {
  constructor(props:CardsProps) {
    super(props)
  }
  render() {
    return (
          <ul className={styles.cards}>
        {this.props.cards.map(card => <Card card={card} />)}
    </ul>
    )
  }
}
