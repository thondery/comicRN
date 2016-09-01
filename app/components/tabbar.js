'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './tabbar.styles'

class TabBar extends Component {
  static propTypes = {
    Items: PropTypes.array.isRequired,
    refreshState: PropTypes.func
  }

  static defaultProps = {
    Items: [],
    refreshState: () => null
  }

  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  render () {
    let { Items } = this.props
    let { activeIndex } = this.state
    return (
      <View style={styles.container}>
      {
        Items.map( (item, i) => {
          let active = i === activeIndex
          return (
            <TouchableOpacity style={styles.item} key={i} 
                              onPress={this._handleClick.bind(this, i)} >
              <TabBarItem title={item.name} 
                          iconName={item.icon}
                          color={active ? '#f60' : '#666' }
                          active={active} />
            </TouchableOpacity>
          )
        })
      }
      </View>
    )
  }

  _handleClick (index) {
    let { activeIndex } = this.state
    let { refreshState } = this.props
    if (activeIndex !== index) {
      this.setState({
        activeIndex: index
      })
      refreshState(index)
    }
  }
}

class TabBarItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    color: PropTypes.string,
    active: PropTypes.bool
  }

  static defaultProps = {
    title: '首页',
    iconName: 'home',
    color: '#666',
    active: false
  }

  render () {
    let { title, iconName, color, active } = this.props
    return (
      <View style={styles.item}>
        <Icon name={iconName} size={20} color={color} />
        <Text style={[styles.itemText, active ? styles.selectItemText : null]}>{title}</Text>
      </View>
    )
  }
}

export default TabBar