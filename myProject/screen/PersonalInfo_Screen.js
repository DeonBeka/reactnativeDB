import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const information = [
    { name: "Deon", surname: "Beka", age: "15", birthday: "02/12/2010", hobby: "Photography", school: "British Gymnasium of Technology" },
];

const PersonalInfo_Screen = () => {
    return (
        <View style ={styles.container}>
            <Text style = {styles.maintext}>Personal Profile: </Text>
            <FlatList style = {styles.flatlist}
                horizontal={true}
                data={information}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text style = {styles.info}>Name and Surname: {item.name} {item.surname}</Text>;
                }}
            />

            <FlatList style = {styles.flatlist}
                horizontal={true}
                data={information}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text style = {styles.info}>Age: {item.age}</Text>;
                }}
            />

            <FlatList style = {styles.flatlist}
                horizontal={true}
                data={information}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text style = {styles.info}>Birthday: {item.birthday}</Text>;
                }}
            />

            <FlatList style = {styles.flatlist}
                horizontal={true}
                data={information}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text style = {styles.info}>Hobby: {item.hobby}</Text>;
                }}
            />
            <FlatList style = {styles.flatlist}
                horizontal={true}
                data={information}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <Text style = {styles.info}>School: {item.school}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: "grey",
        borderRadius: 30,
        padding: 25
    },
    maintext: {
        fontSize: 50,
        fontWeight: "bold",
    },
    flatlist: {
        flexDirection: "row",
    },
    info: {
        fontSize: 30,
        fontWeight: "300",
        borderWidth: 3,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: "darkgrey"
        
    }
});

export default PersonalInfo_Screen;
