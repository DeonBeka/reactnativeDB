import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const StudentInfo = (props) => {
  return (
    <View>
      <Image source={props.image} style={styles.img} />
      <View style={styles.InfoWrapper}>
        <Text style={styles.fullname}>{props.fullname}</Text>
        <Text>{props.jobdescription}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Hire him</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  InfoWrapper: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    marginLeft: 40,
    marginTop: -40,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  fullname: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  desc:{
    textAlign: "center",
  },
  btn:{
    backgroundColor:"#FFD700",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical:10,
    marginTop:10,

  },
  btnText:{
    fontWeight: "bold",
    color:"white",
    textTransform: "uppercase",
  }

})

export default StudentInfo;