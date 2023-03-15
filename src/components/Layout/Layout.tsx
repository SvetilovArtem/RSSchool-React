// import React from 'react'
// import Header from '../Header/Header'

// import styles from './Layout.module.scss'

// interface LayoutProps {
//     children: React.ReactNode
// }

// const Layout = ({ children }:LayoutProps) => {
//   return (
//     <div className={styles.layout}>
//         <Header />
//         {children}
//     </div>
//   )
// }

// export default Layout

import React, { Component } from 'react'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

interface LayoutProps {
    children: React.ReactNode
}

export default class Layout extends Component<{children: React.ReactNode}> {
  constructor(props:LayoutProps) {
    super(props)
  }
  render() {
    return (
      <div className={styles.layout}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}


