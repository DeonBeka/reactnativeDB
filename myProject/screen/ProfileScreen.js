import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Project from './Projects';
import StudentInfo from './StudentInfo';

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <StudentInfo
        fullname="Deon Beka"
        jobdescription="Photographer"
        desc="I love photographing with a canon eos 600D with 18-55mm f3.8/5.6."
        image={require('../assets/avatar.png')}
      />

      <View style={styles.heading}>
        <Text style={styles.text}>Projects</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View All</Text>
        </TouchableOpacity>
      </View>

      <Project
        first={require('../assets/project1.png')}
        second={require('../assets/project2.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    alignItems: "center",
    marginTop: 15
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
  },

  screen: {
    backgroundColor: "white",
  },

  btnText: {
    fontWeight: "bold",

  },
  btn:{
    backgroundColor:"#FFF700",
    borderRadius: 50,
    paddingHorizontal:10,
    paddingVertical: 5
  }
});

export default ProfileScreen;
