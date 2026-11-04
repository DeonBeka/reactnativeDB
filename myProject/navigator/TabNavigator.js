import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MainStackNavigator, AboutStackNavigator, ChallangeStackNavigator} from './StackNavigator';
 
const Tab = createBottomTabNavigator();

const BottomTabNavigator =() =>{
    return(
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: "lightgray",
        inactiveTintColor: "white",
        
        style:{
            backgroundColor: "blue",
        },
        lablesStyle:{
            fontSize: 12,
        }

    }}
    >
        <Tab.Screen
        name='Home'
        component={MainStackNavigator}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color})=>(
                <MaterialCommunityIcons name='home' size={26} color={color}/>
            ),
        }}
        />
        <Tab.Screen
        name='About'
        component={AboutStackNavigator}
        options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color})=>(
                <MaterialCommunityIcons name='video-stabilization' size={26} color={color}/>
            ),
        }}
        />

        <Tab.Screen
        name='Challange'
        component={ChallangeStackNavigator}
        options={{
            tabBarLabel: 'Challenge',
            tabBarIcon: ({color})=>(
                <MaterialCommunityIcons name='crown' size={26} color={color}/>
            ),
        }}
        />
        
    </Tab.Navigator>
    );
}




export default BottomTabNavigator;