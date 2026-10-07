import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const BoxScreen=() => {
    return(
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
        }}>
            <View style={{width:50, height:50, backgroundColor: 'lightblue'}}/>
            <View style={{ height:50, backgroundColor: 'skyblue'}}/>
            <View style={{ height:100, backgroundColor: 'steelblue'}}/>


        </View>
    );
};

const styles = StyleSheet.create({});

export default BoxScreen;