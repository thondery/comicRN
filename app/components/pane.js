'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

import styles from './pane.styles'
//import HomePane from '../pane/home'
//import BookShelf from '../pane/bookshelf'
import Panes from '../pane'
//import storage from '../libs/storage'
//const storage = new Storage()
//const HomeCurrentPage = JSON.parse(AsyncStorage.getItem('home::page'))



class Pane extends Component {
  static propTypes = {
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    tabIndex: 0
  }
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render () {
    let { tabIndex, paneIndex } = this.props
    let paneItems = [
      (
        <Panes.Home currentPage={paneIndex.home} 
                    refreshState={this._refreshState.bind(this, 'home')} />
      ),
      (
        <Panes.BookShelf currentPage={paneIndex.bookshelf} 
                         refreshState={this._refreshState.bind(this, 'bookshelf')} />
      ),
      (
        <Panes.PlayGround />
      ),
      (
        <Panes.User />
      )
    ]
    return paneItems[tabIndex] 
  }

  _refreshState (key, val) {
    let temp = {}
    temp[key] = val
    this.props.refreshState(temp)
  }
}

export default Pane