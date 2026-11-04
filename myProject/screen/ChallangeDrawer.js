import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const Challange = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../images/astonvilla.png')} 
                style={styles.ImagesStyle} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    ImagesStyle: {
       width: 500,
       height: 500,
       borderRadius: 400,
       
  },
});

export default Challange;
