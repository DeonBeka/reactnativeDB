import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const information = [
    {id:'1', name: 'Deon', surname:'Beka', age:'15'},
    {id:'2', name: 'Gerti', surname:'Calaj', age:'13'},
    {id:'3', name: 'Amant', surname:'Zabeli', age:'14'}
];

const Challange = () => {
    return (
        <View style ={styles.container}>
            <Text style = {styles.infoText}>Student Profile: </Text>
            <FlatList
            horizontal={true}
            data={information}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.infoText}>Name: {item.name} {item.surname}</Text>
                  <Text style={styles.infoText}>Age: {item.age}</Text>
                </View>
              );
            }}
        />
        </View>
    );
};

            
                     
               



const styles = StyleSheet.create({
    // container: {
    //     borderWidth: 5,
    //     borderColor: "grey",
    //     borderRadius: 30,
    //     padding: 25,
    //     flexDirection:"column"
    // },
    infoText: {
        fontSize: 50,
        fontWeight: "bold",
    },
    flatlist: {
        flexDirection: "row",
    },
    card: {
        borderWidth: 3,
        borderColor: "darkgrey",
        borderRadius: 15,
        padding: 15,
        marginRight: 15,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
    },
});

export default Challange;