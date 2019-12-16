import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './src/screen/LoginScreen';
import ForgetPasswordScreen from './src/screen/ForgetPasswordScreen';
import DrawerNavigator from './src/screen/Drawer';
import DashboardScreen from './src/screen/DashboardScreen';

const navigator = createStackNavigator(
  {
    Home:LoginScreen,
    ForgetPassword: ForgetPasswordScreen,
    Drawer: DrawerNavigator,
    Dashboard: DashboardScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: ''
    }
  }
);


export default createAppContainer(navigator);
