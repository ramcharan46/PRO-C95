import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from '../components/AppTabNavigator';
import CustomSideBarMenu  from '../components/CustomSideBarMenu.js';
import ReadRecepieScreen from '../screens/ReadRecepieScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';



import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  Settings : {
    screen : SettingsScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="font-awesome" />,
      drawerLabel : "Settings"
    }
  },
 
 
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })