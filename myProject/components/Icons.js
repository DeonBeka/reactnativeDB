
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icons = (props) => {
    return (
        <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                    name={props.name}
                    size={27}
                    color="#22D4FF"
                />
            </View>

            <Text style={styles.iconText}>
                {props.iconText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#384053',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },

    iconContainer: {
        alignItems: 'center',
        width: 70,
    },

    iconText: {
        height: 25,
        fontWeight: '600',
        color: '#222',
        marginTop: 5,
    },
});

export default Icons;
