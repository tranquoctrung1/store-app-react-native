import React, { Component } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


class Category extends Component {


  onClick()
  {
    this.props.navigation.goBack();
  }

  onUpdate()
  {
    this.props.navigation.setOptions({ title: 'Updated!' })
  }

  render() 
  {
    const { route } = this.props;
    const { name } = route.params;
    return (
      <View style={styles.container}>
        <Text>Item name: {JSON.stringify(name)}</Text>
        <Button title="Go back" onPress={this.onClick.bind(this)} />
        {/* button for update tittle  */}
        <Button title="Update" onPress={this.onUpdate.bind(this)} />
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
