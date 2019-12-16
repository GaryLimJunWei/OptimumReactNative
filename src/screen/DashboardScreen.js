import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const DashboardScreen = () => {

    const [people,setPeople] = useState([
        {name: 'asd', key: '1'},
        {name: 'asd', key: '2'},
        {name: 'asd', key: '3'},
        {name: 'asd', key: '4'},
        {name: 'asd', key: '5'},
        {name: 'asd', key: '6'},
        {name: 'asd', key: '7'},
        {name: 'asd', key: '8'},
        {name: 'asd', key: '9'},
        {name: 'asd', key: '10'},
    ])
 
    return (
        <View>
            <FlatList 
            data={people}
            renderItem={({item}) => {
                <Text>{item.name}</Text>
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default DashboardScreen;