import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';
import CategoryListItem from "../components/categoryListItem";


class Category extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      categories: [
        {id: 1, name: "Kem Đánh"},
        {id: 2, name: "Tăm Xỉa"},
        {id: 3, name: "Bàn Đánh"},
        {id: 4, name: "Chỉ Xỉa"},
        {id: 5, name: "Nước Xúc"},
      ]
    }
  }
  

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
    const {categories} = this.state;
    return (
      <View style={styles.container}>
        <Text>Item name: {JSON.stringify(name)}</Text>
        <FlatList data={categories} numColumns={2} renderItem={({ item }) => 
          <View style={styles.content}>
            <CategoryListItem  category={item} /> 
          </View>} 
          keyExtractor={(item) => `${item.id}`}  
          style={styles.containerScrollView}/>

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
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8
  }
});

export default Category;
