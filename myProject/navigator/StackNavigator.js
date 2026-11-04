import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import Home from "../screen/Home";
import About from "../screen/About";
import Challange from '../screen/ChallangeDrawer';

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerStyle:{
        backgroundColor: "orange",
    },
}

const MainStackNavigator = ({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}
const AboutStackNavigator = ({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    );
}
const ChallangeStackNavigator = ({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Challange" component={Challange}/>
        </Stack.Navigator>
    );
}




export {MainStackNavigator , AboutStackNavigator, ChallangeStackNavigator};