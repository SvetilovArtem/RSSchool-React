// import React from 'react'
// import styles from './About.module.scss'

// const About = () => {
//   return (
//     <div className={styles.about}>Hello! I am Artem! I developed this app with React and Typescript.</div>
//   )
// }

// export default About

import React, { Component } from 'react'
import styles from './About.module.scss'

export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>Hello! I am Artem! I developed this app with React and Typescript.</div>
    )
  }
}
