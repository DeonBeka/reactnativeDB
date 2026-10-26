// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// // import PostScreen from './screen/TodoScreen';
// // import TodoScreen from './screen/TodoScreen';
// // import DatasetLocal from './screen/DatasetLocal';
// // import ShoesScreen from './screen/Shoes';
// import StackNavigator from './navigator/StackNavigator';




// export default function App() {
//   return (
//     // <View style={styles.container}>
//       // {/*<PersonalInfo_Screen/>*/}
//       // {/* <Challange/> */}
//       // {/* <StudentScreen/> */}
//       // {/* <PostScreen/> */}
//       // {/* <TodoScreen/> */}
//       // {/* <DatasetLocal/> */}
//       // {/* <ShoesScreen/> */}
//       <NavigationContainer>
//         <StackNavigator/>
//       </NavigationContainer>

    

//     // </View>
//   );
// }

// const styles = StyleSheet.create({
  
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigator/StackNavigator'; // Adjust path if needed

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
