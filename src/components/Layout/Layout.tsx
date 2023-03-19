import React, { Component } from 'react'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

interface LayoutProps {
    children: React.ReactNode
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className={styles.layout}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}


