'use strict'

import React, { Component } from 'react'
import {
  Text,
  View,
  TabBarIOS
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './tabbar.styles'

const Items = [
  {
    name: '首页',
    icon: 'home'
  },
  {
    name: '书架',
    icon: 'leanpub'
  },
  {
    name: '操场',
    icon: 'commenting-o'
  },
  {
    name: '我的',
    icon: 'user'
  },
]

class TabBar extends Component {

  render () {
    return (
      <View style={styles.container}>
      {
        Items.map( (item, i) => {
          return (
            <TabBarItem key={i} title={item.name} iconName={item.icon} />
          )
        })
      }
      </View>
    )
  }
}

class TabBarItem extends Component {

  render () {
    let { title, iconName } = this.props
    return (
      <View style={styles.item}>
        <Icon name={iconName} size={20} color="#666" />
        <Text style={styles.itemText}>{title}</Text>
      </View>
    )
  }
}

export default TabBar