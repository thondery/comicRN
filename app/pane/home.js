'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './home.styles'

class HomePane extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>HomePane</Text>
      </View>
    )
  }
}

export default HomePane