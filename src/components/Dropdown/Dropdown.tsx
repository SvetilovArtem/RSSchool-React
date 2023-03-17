// import React, { useState } from "react";
// import { FaTelegramPlane, FaViber, FaDiscord, FaGithub } from "react-icons/fa";

// import styles from "./Dropdown.module.scss";

// interface DropdownProps {
//   isDropdownOpen: boolean
// }

// const Dropdown = ({ isDropdownOpen }:DropdownProps) => {
//   const [isActiveDiscord, setIsActiveDiscord] = useState(false);
//   const [isActiveGithub, setIsActiveGithub] = useState(false);
//   const [isActiveViber, setIsActiveViber] = useState(false);
//   const [isActiveTelegram, setIsActiveTelegram] = useState(false);
//   return (
//     <div className={!isDropdownOpen ? styles.dropdown + ' ' + styles.dropdownHidden : styles.dropdown }>
//       <FaDiscord
//         color={isActiveDiscord ? "rgba(255, 70, 70)" : "#ffffff"}
//         onMouseEnter={() => setIsActiveDiscord(true)}
//         onMouseLeave={() => setIsActiveDiscord(false)}
//       />
//       <FaGithub
//         color={isActiveGithub ? "rgba(255, 70, 70)" : "#ffffff"}
//         onMouseEnter={() => setIsActiveGithub(true)}
//         onMouseLeave={() => setIsActiveGithub(false)}
//       />
//       <FaViber
//         color={isActiveViber ? "rgba(255, 70, 70)" : "#ffffff"}
//         onMouseEnter={() => setIsActiveViber(true)}
//         onMouseLeave={() => setIsActiveViber(false)}
//       />
//       <FaTelegramPlane
//         color={isActiveTelegram ? "rgba(255, 70, 70)" : "#ffffff"}
//         onMouseEnter={() => setIsActiveTelegram(true)}
//         onMouseLeave={() => setIsActiveTelegram(false)}
//       />
//     </div>
//   );
// };

// export default Dropdown;


import React, { Component } from 'react'
import { FaDiscord, FaGithub, FaTelegramPlane, FaViber } from 'react-icons/fa'
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  isDropdownOpen: boolean
}

export default class Dropdown extends Component<{isDropdownOpen: boolean}> {
  constructor(props:DropdownProps) {
    super(props)
  }
  state = {
    isActiveDiscord: false,
    isActiveGithub: false,
    isActiveViber: false,
    isActiveTelegram: false
  } 
  render() {
    return (
      <ul className={!this.props.isDropdownOpen ? styles.dropdown + ' ' + styles.dropdownHidden : styles.dropdown }>
        <FaDiscord
          color={this.state.isActiveDiscord ? "rgba(255, 70, 70)" : "#ffffff"}
          onMouseEnter={() => this.setState({isActiveDiscord: true})}
          onMouseLeave={() => this.setState({isActiveDiscord: false})}
        />
        <FaGithub
          color={this.state.isActiveGithub ? "rgba(255, 70, 70)" : "#ffffff"}
          onMouseEnter={() => this.setState({isActiveGithub: true})}
          onMouseLeave={() => this.setState({isActiveGithub: false})}
        />
        <FaViber
          color={this.state.isActiveViber ? "rgba(255, 70, 70)" : "#ffffff"}
          onMouseEnter={() => this.setState({isActiveViber: true})}
          onMouseLeave={() => this.setState({isActiveViber: false})}
        />
        <FaTelegramPlane
          color={this.state.isActiveTelegram ? "rgba(255, 70, 70)" : "#ffffff"}
          onMouseEnter={() => this.setState({isActiveTelegram: true})}
          onMouseLeave={() => this.setState({isActiveTelegram: false})}
        />
      </ul>
    )
  }
}
