import React,{useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import DashboardScreen from './DashboardScreen';
import EmployeeDBScreen from './EmployeeDBScreen';
import ManageTestScreen from './ManageTest';

/**
 * Check the name and compare to 
 * change the navigation to see which page to navigate to.
 */

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.checkName = this.checkName.bind(this);
    }

    checkName() {
        if(this.props.name === 'dashboard') {
            return <DashboardScreen />
        }else if(this.props.name === 'employeeDatabase') {
            return <EmployeeDBScreen />
        } else if(this.props.name === 'manageTest') {
            return <ManageTestScreen />
        }
    }

    render() { 
        
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }} >
                    <TouchableOpacity
                        style={{
                            alignItems:"flex-start",
                            margin: 16
                        }}
                        onPress={this.props.navigation.openDrawer} >
                        <FontAwesome5 name="bars" size={24}
                            color="#161924" />
                    </TouchableOpacity>
                    <View style={{ 
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {this.checkName()}
            
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",

    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500",
    }
});
