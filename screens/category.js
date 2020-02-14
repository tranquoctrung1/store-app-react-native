import React, { Component } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


class Category extends Component {

  render() 
  {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Category</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScrollView: {
    width: '100%',
  }
});

export default Category;
