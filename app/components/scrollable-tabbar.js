'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native'
import Button from 'react-native-scrollable-tab-view/Button'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './scrollable-tabbar.styles'

class ScrollableTabBar extends Component {
  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    underlineColor: PropTypes.string,
    underlineHeight: PropTypes.number,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    renderTabName: PropTypes.func,
    toolsButton: PropTypes.array
  }

  static defaultProps = {
    activeTextColor: '#f60',
    inactiveTextColor: '#666',
    underlineColor: '#f60',
    backgroundColor: null,
    underlineHeight: 4,
    toolsButton: []
    //renderTabName: this.renderTabName,
  }

  constructor(props){
    super(props)
    this.tabIcons = []
    //this.renderTabName = this.renderTabName.bind(this)
  }

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;

    return <Button
      style={[styles.btn, {flex: 1, width: 50}]}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => this.props.goToPage(page)}
    >
      {this.renderTabName(name, page, isTabActive)}
    </Button>;
  }

  renderTabName(name, page, isTabActive) {
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <View >
      <Text style={[{color: textColor, fontWeight, }, textStyle, ]}>
        {name}
      </Text>
    </View>;
  }

  render () {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: 20, //containerWidth / numberOfTabs,
      height: this.props.underlineHeight,
      backgroundColor: this.props.underlineColor,
      bottom: 0,
      //left: 10
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [16,  66, ],
    });
    let { toolsButton } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.navs,  {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
          <Animated.View style={[tabUnderlineStyle, { left, }, ]} />
        </View>
        <View style={styles.tools}>
        {
          toolsButton.map( (btn, i) => {
            return (
              <TouchableOpacity key={i} 
                                style={[styles.btn, {width: 30}]}
                                onPress={btn.click}>
                <Icon name={btn.icon} size={20} color="#f96" />
              </TouchableOpacity>
            )
          })
        }
        </View>
      </View>
    )
  }
}

export default ScrollableTabBar