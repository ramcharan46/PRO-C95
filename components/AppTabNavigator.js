import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteRecepieScreen from '../screens/WriteRecepieScreen';
import ReadRecepieScreen from '../screens/ReadRecepieScreen';


export const AppTabNavigator = createBottomTabNavigator({
  ReadRecepie : {
    screen: ReadRecepieScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "read recepie",
    }
  },
 WriteRecepie: {
    screen: WriteRecepieScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "write recepie",
    }
  }
});