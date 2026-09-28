import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import StudentDetails from './screen/StudentDetails';

const StudentScreen =() =>{
    return(
       <View>
        <Text styles={styles.text}>Student BOSS</Text>
        <StudentDetails name='Gerti' image={require('./images/gerti.jpg')} description='Labalaballaba'/>
        <StudentDetails name='Deon' image={require('./images/deon.jpg')} description='Labalaballaba'/>
        <StudentDetails name='Amant' image={require('./images/amant.jpg')} description='Labalaballaba'/>
        </View> 
    );
    
};

const styles = StyleSheet.create({
   text:{
        textAlign: 'center',
        color: 'blue',
        fontSize: '20'
    },
});

export default StudentScreen;

