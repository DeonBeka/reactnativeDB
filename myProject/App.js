import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import PostScreen from './screen/TodoScreen';
// import TodoScreen from './screen/TodoScreen';
import DatasetLocal from './screen/DatasetLocal';


export default function App() {
  return (
    <View style={styles.container}>
      {/*<PersonalInfo_Screen/>*/}
      {/* <Challange/> */}
      {/* <StudentScreen/> */}
      {/* <PostScreen/> */}
      {/* <TodoScreen/> */}
      <DatasetLocal/>
    

    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
