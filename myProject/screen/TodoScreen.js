import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    );
    const jsonData = await data.json();
    this.setState({ posts: jsonData });
  }

  render() {
    const { posts } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.mainTxt}>Comments</Text>
        <FlatList
        numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text style={styles.itemId}>{item.id}</Text>
              <Text style={styles.name1}>Name:</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email1}>Gmail:</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.body1}>Comment:</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   
  mainTxt: {
    color: '#050505',
    fontWeight: 'bold',
    fontSize: 20,
  },
  comment: {
  flex: 1,
  margin: 5,
  padding: 10,
  backgroundColor: '#e2df12',
  borderRadius: 8,
},
container: {
  flex: 1,
  padding: 10,
},
  itemId: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  name1: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email1: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  body1: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TodoScreen;