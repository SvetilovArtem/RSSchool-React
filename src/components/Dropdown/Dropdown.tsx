import React, { Component } from 'react'
import { FaDiscord, FaGithub, FaTelegramPlane, FaViber } from 'react-icons/fa'
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  isDropdownOpen: boolean
}

export default class Dropdown extends Component<DropdownProps> {

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
