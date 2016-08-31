'use strict'

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import styles from './main.styles'
import TabBar from './components/tabbar'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>
            Welcome to React Native!
          </Text>
        </View>
        <TabBar />
      </View>
    )
  }
}

export default App