'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#DDD',
  },
  navs: {
    //width: 300,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //backgroundColor: '#670'
  },
  tools: {
    //width: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 5,
    //backgroundColor: '#492'
  },
  btn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#670'
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    //justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
})
