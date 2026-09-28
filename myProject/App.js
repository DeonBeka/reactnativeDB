import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PersonalInfo_Screen from "./screen/PersonalInfo_Screen"
import Challange from "./screen/challange"
import ButtonScreen from './screen/ButtonScreen';
import StudentScreen from './screen/StudentScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<PersonalInfo_Screen/>*/}
      {/* <Challange/> */}
      <StudentScreen/>

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
