import React from "react";
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import data from '../assets/data.json';

class UserScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }


componentDidMount(){
    this.setState({
        users: data
    })
}

render(){
    return(
        <ScrollView>
            <Text style={styles.main}>Random Users</Text>
            <FlatList 
            
            data={this.state.users}
            keyExtractor = {users => users.id}
            renderItem={({item})=>{
                return(
                    <View style={styles.container}>
                    <Text style={styles.text}>Name: {item.username}</Text>
                    <Text>Email: {item.email}</Text>
                    <Text>Age: {item.age}</Text>
                    </View>
                )
                
            }}

            />
        </ScrollView>
    )
}}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#6e6965',
        borderRadius: 8,
    },
    main: {
        color: '#050505',
        fontWeight: 'bold',
        fontSize: 20,
    },
    text: {
        color: '#050505',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default UserScreen;