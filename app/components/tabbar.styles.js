'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#F7F7F7",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    //display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 2
  },
  item: {
    //flex: 1,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection: 'column',
  },
  itemText: {
    fontSize: 12,
    color: "#666",
    paddingTop: 3
  }
})
