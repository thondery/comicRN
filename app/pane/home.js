'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'

import styles from './home.styles'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollableTabBar from '../components/scrollable-tabbar'

const ToolsButton = [
  {
    name: '搜索',
    icon: 'search',
    click: () => {
      alert('search')
    }
  },
]

class HomePane extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render () {
    let { currentPage } = this.props
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={{marginTop: 0, }}
          initialPage={currentPage}
          onChangeTab={this._onChangeTab.bind(this)}
          renderTabBar={() => <ScrollableTabBar toolsButton={ToolsButton} />}
          >
          <ScrollView tabLabel="分类" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="推荐" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="VIP" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    )
  }

  _onChangeTab (info) {
    /*i: currentPage,
      ref: this._children()[currentPage],
      from: prevPage,*/
    //AsyncStorage.setItem('home::page', JSON.stringify(info))
    this.props.refreshState(info.i)
  }
}

export default HomePane