// https://www.youtube.com/watch?v=Inj0XKS6-KY

import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {
  DashboardScreen,EmployeeDBScreen,ManageTestScreen
} from './index'

import SideBar from '../components/SideBar';

const DrawerNavigator = createDrawerNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      title: "Dashboard",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor}
       />
      
    }
  }, EmployeeDBScreen: {
    screen: EmployeeDBScreen,
    navigationOptions: {
      title: "Employee's Database",
      drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
    }
  }, ManageTestScreen: {
    screen: ManageTestScreen,
    navigationOptions: {
      title: "Manage Test",
      drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
    }
  },
}, {
  contentComponent: props => <SideBar {...props} />,
  drawerWidth: Dimensions.get("window").width * 0.85,
  hideStatusBar: true,
  contentOptions: {
    activeBackgroundColor: "rgba(212,118,217,0.2",
    activeTintColor: "#531158",
    itemsContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
  }
});

export default createAppContainer(DrawerNavigator);