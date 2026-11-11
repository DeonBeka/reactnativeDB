import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import iphone16 from '../images/iphone16.jpg';
import huawei from '../images/huawei.jpg';
import yalla from '../images/yallahabibi.jpg';

const shoeImages = {
  'iphon16': iphone16,
  'huawei': huawei,
  'yalla': yalla,

};

class ProductDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }


componentDidMount(){
    this.setState({
        users: data
    })
}

render = (props) => {
    return(
        <View>
                      <Text style={styles.main}>Most Products</Text>
                       <FlatList
                           data={this.state.users}
                           keyExtractor={(item) => item.id.toString()}
                           renderItem={({ item }) => (
                       <View style={styles.container}>
                           <Image
                               source={shoeImages[item.image]}
                               style={styles.image}
                               resizeMode="contain"
                           />
           
                           <Text style={styles.text}>Name: {item.name}</Text>
                           <Text>Category: {item.category}</Text>
           
                       </View>
             )}
             
           />
           <Button style={styles.btn} 
                             title="View Details" 
                             onPress={() => navigation.navigate('../screen/productDetails.js')}
                           />
        </View>
    );
}}

const styles = StyleSheet.create({
   
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  main: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
    marginVertical: 20,
  },

  container: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  btn:{
    backgroundColor: '#067418',
    borderRadius: 15,
  
  },

  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
  },

  details: {
    fontSize: 15,
    color: '#555',
    marginTop: 5,
  },
});


export default ProductDetails