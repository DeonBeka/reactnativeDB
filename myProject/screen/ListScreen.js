import react from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const students = [
    {name: 'Deon', surname:'Beka', age:'15'},
    {name: 'Gerti', surname:'Calaj', age:'13'},
    {name: 'Amant', surname:'Zabeli', age:'14'}
];

const ListScreen = ()=>{
    return(
        <View>
            <Text>List Screen:</Text>
            <FlatList
            horizontal={true}
            data={students}
            renderItem={({item}) =>{
                return <Text>{item.name}{item.surname}{item.age}</Text>
                }
            }
            />
        </View>
    )
}