import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to home screen</Text>
            <Button
                title='Go to About Screen'
                onPress={() => navigation.navigate('About')}
                color="orange"
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

export default Home;
