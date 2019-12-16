import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ForgetPasswordScreen from './ForgetPasswordScreen';


const LoginScreen = ({ navigation }) => {

  const [secureText, SetSecureText] = useState(true);

  onIconPress = () => {
    { secureText === true ? SetSecureText(false) : SetSecureText(true) }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{ height: '10%', width: '98%', alignItems: 'center', alignSelf: 'center' }}
          source={require('../assets/optimum_logo.png')} />

        <View style={styles.employeeID}>
          <Text>Employee ID</Text>

          <View style={{ flexDirection: 'row', right: 30 }}>
            <MaterialCommunityIcons name="email" style={styles.email} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.holder}
              placeholder="Employee ID" />
          </View>
        </View>

        <View style={styles.password}>
          <Text>Password</Text>
          <View style={{ flexDirection: 'row', right: 30 }}>
            <MaterialCommunityIcons name="key" style={styles.key} />
            <TextInput
              secureTextEntry={secureText}
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.holder}
              placeholder="Password" />
          </View>

          <TouchableOpacity onPress={onIconPress}>
            <MaterialCommunityIcons name="eye" style={styles.iconStyle} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}
            style={{ left: 230 }}>
            <Text>Forget Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Drawer')}
            style={styles.login}>

            <Text
              style={{ fontSize: 40 }}
            >Log in</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.switchuser}>

            <Text
              style={{ fontSize: 15 }}
            >Switch User</Text>
          </TouchableOpacity>

        </View>

        <Image
          style={{ height: '5%', width: '98%', bottom: '20%' }}
          source={require('../assets/optimum_copyright.png')} />


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 10,
    height: '90%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 40
  },
  holder: {
    height: 50,
    width: 300,
    borderRadius: 25,
    borderWidth: 3,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 15,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 15,
    left: '70%',
    bottom: '185%',
  },
  email: {
    left: '30%',
    fontSize: 25,
    top: '7%',
    marginHorizontal: 15
  },
  key: {
    left: '30%',
    fontSize: 25,
    top: '7%',
    marginHorizontal: 15
  },
  password: {
    bottom: 190,
    marginTop: 190,
    margin: 10
  },
  employeeID: {
    margin: 10,
    marginTop: 60
  },
  login: {
    alignSelf: 'center',
    margin: 10,
    marginTop: '10%',
    borderColor: 'orange',
    borderRadius: 4,
    borderWidth: 4,
    backgroundColor: 'orange'
  },
  switchuser: {
    alignSelf: 'center',
    marginTop: 20
  }

});

export default LoginScreen;