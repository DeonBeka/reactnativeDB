import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to About screen</Text>
            <Button
                title='Go to Main Screen'
                onPress={() => navigation.goBack()}
                color="#333"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    }
});

export default About;
