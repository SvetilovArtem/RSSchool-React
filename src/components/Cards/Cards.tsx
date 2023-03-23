import React from 'react'
import { UserType } from '../../types/UserType'
import Card from '../Card/Card'

import styles from './Cards.module.scss'

interface CardsProps {
    users: UserType[],
    avatar: string
}

const Cards = ({ users, avatar }:CardsProps) => {
  return (
    <ul className={styles.cards}>
        {users.map((user,i) => <Card user={user} avatar={avatar} key={i} />)}
    </ul>
  )
}

export default Cards