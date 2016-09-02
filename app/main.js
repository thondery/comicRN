'use strict'

import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import styles from './main.styles'
import TabBar from './components/tabbar'
import config from './config'
import Pane from './components/pane'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      tabIndex: 0,
      currentPage: {
        home: 0,
        bookshelf: 0
      },
      paneIndex: {
        home: 0,
        bookshelf: 0
      },
      currentPageHome: 0,
      currentPageBook: 0
    }
  }

  render() {
    let { tabIndex, currentPage, paneIndex } = this.state
    return (
      <View style={styles.container}>
        <Pane tabIndex={tabIndex}
              paneIndex={paneIndex}
              refreshState={this._refreshState.bind(this, 'currentPage')} />
        <TabBar Items={config.TabBar}
                refreshState={this._refreshState.bind(this, 'tabIndex')} />
      </View>
    )
  }

  _refreshState (key, val) {
    let temp = {}
    temp[key] = val
    if (key === 'tabIndex' && this.state.tabIndex !== temp.tabIndex) {
      temp.paneIndex = {
        home: this.state.currentPageHome,
        bookshelf: this.state.currentPageBook
      }
    }
    if (key === 'currentPage' && val.home) {
      this.setState({
        currentPageHome: val.home
      })
    }
    else if (key === 'currentPage' && val.bookshelf) {
      this.setState({
        currentPageBook: val.bookshelf
      })
    }
    else {
      this.setState(temp)
    }
    
  }
}

export default App