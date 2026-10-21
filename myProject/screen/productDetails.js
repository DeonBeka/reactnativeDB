import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import data from '../data/shoes.json';
import adidas1 from '../images/adidas1.png';
import converse1 from '../images/converse1.png';
import jordan from '../images/jordan.png';
import martens from '../images/martens.png';
import newbalanc from '../images/newbalanc.png';
import nike1 from '../images/nike1.png';
import oldschool1 from '../images/oldschool1.png';
import puma1 from '../images/puma1.png';
import timberland from '../images/timberland.png';

const shoeImages = {
  'adidas1': adidas1,
  'converse1': converse1,
  'jordan': jordan,
  'martens': martens,
  'newbalanc': newbalanc,
  'nike1': nike1,
  'oldschool1': oldschool1,
  'puma1': puma1,
  'timberland':timberland,
};

class ShoesScreen extends React.Component{
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

render(){
    return(
        <ScrollView>
            <Text style={styles.main}>Shoe Store</Text>
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
                <Text>Price: {item.price}</Text>
                <Text>In Stock: {item.stock}</Text>
                <Text>Description: {item.description}</Text>
            </View>
  )}
/>
<Button style={styles.button} 
                  title="Go Back" 
                  onPress={() => setScreen('Shoes')}
                />
        </ScrollView>
    )
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


export default ShoesScreen;