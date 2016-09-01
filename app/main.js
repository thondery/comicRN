'use strict'

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import styles from './main.styles'
import TabBar from './components/tabbar'
import config from './config'
import HomePane from './pane/home'
//import BookShelfPane from './pane/bookshelf'
import Pane from './components/pane'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      tabIndex: 0
    }
  }

  render() {
    let { tabIndex } = this.state
    return (
      <View style={styles.container}>
        <Pane tabIndex={tabIndex} />
        <TabBar Items={config.TabBar}
                refreshState={this._refreshState.bind(this, 'tabIndex')} />
      </View>
    )
  }

  _refreshState (key, val) {
    let temp = {}
    temp[key] = val
    this.setState(temp)
  }
}

export default App