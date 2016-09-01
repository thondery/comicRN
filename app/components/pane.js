'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import styles from './pane.styles'
//import HomePane from '../pane/home'
//import BookShelf from '../pane/bookshelf'
import Panes from '../pane'

const paneItems = [
  (
    <Panes.Home />
  ),
  (
    <Panes.BookShelf />
  ),
  (
    <Panes.PlayGround />
  ),
  (
    <Panes.User />
  )
]

class Pane extends Component {
  static propTypes = {
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    tabIndex: 0
  }

  render () {
    let { tabIndex } = this.props
    return paneItems[tabIndex] 
  }
}

export default Pane