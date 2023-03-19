import React, { Component } from 'react'
import { BsSearch } from 'react-icons/bs'

import styles from './Search.module.scss'

interface SearchProps {
  onChangeHandler: (e:any) => void,
  searchValue: string
}

export default class Search extends Component<{onChangeHandler: (e:any) => void, searchValue: string}> {
  constructor(props:SearchProps) {
    super(props)
  }
  state = {
    isOpen: false,
  }
  setIsOpen(value:boolean) {
    this.setState({isOpen: value})
  }
  render() {
    return (
    <div className={this.state.isOpen ? styles.search : styles.search + ' ' + styles.hidden} >
        <input 
          type="text" 
          placeholder='SEARCH FOR INSPIRATION' 
          className={this.state.isOpen ? styles.searchInput : styles.searchInput + ' ' + styles.hiddenInput} 
          onBlur={() => this.setIsOpen(false)}
          onFocus={() => this.setIsOpen(true)}
          onChange={e => this.props.onChangeHandler(e.currentTarget.value)}
          value={this.props.searchValue}
        />
        <BsSearch color='#ffffff' className={styles.searchIcon} />
    </div>
    )
  }
}
