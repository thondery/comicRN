'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './bookshelf.styles'

class BookShelfPane extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>BookShelfPane</Text>
      </View>
    )
  }
}

export default BookShelfPane