import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ForgetPasswordScreen = ({ navigation }) => {

    const submitBtnPress = () => {
        Alert.alert('Password Reset!', 'An auto-generated password has been sent to YOUR EMAIL',
            [{ text: 'Return to Login', style: 'destructive', onPress: () => navigation.navigate('Home') }]);
    }

    return (

        <View style={styles.container}>
            <Image
                style={{ height: '10%', width: '98%', alignItems: 'center', alignSelf: 'center', bottom: '7%' }}
                source={require('../assets/optimum_logo.png')} />


            <View style={{ bottom: '15%', padding: 30 }}>
                <Text style={styles.header}>Forget Password</Text>
            </View>

            <View style={{ bottom: '27%', padding: 30 }}>
                <Text style={{ alignSelf: 'center', paddingTop: 10 }}>Enter your email address below to reset your password</Text>
            </View>


            <View style={{ flexDirection: 'row', bottom: '40%' }}>
                <MaterialCommunityIcons name="email" style={{ fontSize: 25, left: 15, top: 30 }} />
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.holder}
                    placeholder="Enter Email" />
            </View>

            <View style={styles.buttons}>

                <TouchableOpacity
                    onPress={submitBtnPress}
                    style={styles.submit}>
                    <Text style={{ fontSize: 30 }}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.cancel}>
                    <Text style={{ fontSize: 30 }}>Cancel</Text>
                </TouchableOpacity>


            </View>

            <Image
                style={{ height: '5%', width: '98%', bottom: '-5%', margin: 5 }}
                source={require('../assets/optimum_copyright.png')} />

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        height: '90%',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'space-evenly',
    },
    header: {
        borderColor: '#d67601',
        borderRadius: 10,
        borderWidth: 10,
        backgroundColor: '#d67601',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    email: {
        alignItems: 'center'
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
    buttons: {
        flexDirection: 'row',
        alignSelf: 'center',
        bottom: '40%'

    },
    submit: {
        alignSelf: 'center',
        borderColor: '#d67601',
        marginRight: 20,
        borderRadius: 4,
        borderWidth: 4,
        backgroundColor: '#d67601'
    },
    cancel: {
        alignSelf: 'center',
        borderColor: '#707070',
        marginRight: 20,
        borderRadius: 4,
        borderWidth: 4,
        backgroundColor: '#707070'
    }
});

export default ForgetPasswordScreen;
