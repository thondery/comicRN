'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './playground.styles'

class PlayGroundPane extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>PlayGroundPane</Text>
      </View>
    )
  }
}

export default PlayGroundPane