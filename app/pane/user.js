'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './user.styles'

class UserPane extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>UserPane</Text>
      </View>
    )
  }
}

export default UserPane