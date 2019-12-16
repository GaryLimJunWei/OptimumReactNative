import React from 'react'
import Screen from './Screen';

export const DashboardScreen = ({navigation}) => <Screen navigation={navigation} name="dashboard" />
export const EmployeeDBScreen = ({navigation}) => <Screen navigation={navigation} name="employeeDatabase" />
export const ManageTestScreen = ({navigation}) => <Screen navigation={navigation} name="manageTest" />

// This is where it is navigating to . 
// Should change it navigating to Screen back 
// Then using if else to compare the name to select which component to navigate to 